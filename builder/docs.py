from ast import Sub
import os
import sys
from git import Repo
from pathlib import Path
from shutil import rmtree
from datetime import datetime
import subprocess

from .database import ProjectVersionDatabase
from .build_prep import build_wrap
from .paths import cloned_repos_dir, docs_dir


def build_docs(project: str, config: dict, db: ProjectVersionDatabase):
    messages = []
    cloned_repos_dir.mkdir(exist_ok=True)

    try:
        rmtree(cloned_repos_dir / project)
    except:
        pass

    repo = Repo.clone_from(config['repository'], cloned_repos_dir / project)

    for tag in repo.tags:
        if tag.name not in db.tags and tag.name not in db.ignored_tags:
            action = db.add_tag(tag.name)

            if action.version_to_delete is not None:
                try:
                    rmtree(docs_dir / project / str(action.version_to_delete))
                except:
                    pass

            if action.version_to_build is not None:
                messages.append(f"Building for {project} {action.version_to_build}.")
                repo.git.clean('-xdf')
                repo.git.reset('--hard')
                repo.git.checkout(tag.commit.hexsha)
                _run_build(project, config['name'], str(action.version_to_build), cloned_repos_dir / project, docs_dir / project / str(action.version_to_build), config)


    if db.master_commit != str(repo.heads.master.commit.hexsha):
        messages.append(f"Building for {project} master, changed from commit {db.master_commit} to {repo.heads.master.commit.hexsha}.")

        db.master_commit = str(repo.heads.master.commit.hexsha)
        repo.git.clean('-xdf')
        repo.git.reset('--hard')
        repo.heads.master.checkout(True)
        _run_build(project, config['name'], "latest", cloned_repos_dir / project, docs_dir / project / "latest", config)

    return messages


def _run_build(project: str, project_name: str, version: str, repo_path: Path, out_path: Path, config: dict):
    confpy = list((repo_path / "docs").rglob("**/conf.py"))
    if not confpy:
        print(f"No conf.py, not building {project_name}, {version}")
        return False
    print(f"Building {project_name}, {version}")

    try:
        rmtree(out_path)
    except:
        pass

    out_path.mkdir(parents=True, exist_ok=True)
    with build_wrap(project, repo_path, confpy[0], version):
        env = os.environ.copy()
        env["PYTHONPATH"] = os.sep.join(sys.path)

        p = subprocess.Popen([
            sys.executable,
            "-m",
            "sphinx",
            "-v",
            str(confpy[0].parent),
            str(out_path)
        ], env=env, cwd=repo_path)
        p.communicate()

    if not (out_path / "index.html").exists():
        rmtree(out_path)
        return False

    return True


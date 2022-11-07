import os
import sys
import argparse
from pathlib import Path

from . import config
from .database import VersionDatabase
from .docs import build_docs, build_docs_current_as_latest
from .web import build_site
from .myself import has_been_updated, make_commit
from .paths import was_updated_path


def make_parser():
    parser = argparse.ArgumentParser()
    parser.add_argument("--commit-if-updated", action="store_true", default=False, help="Create a commit on the website repository if any updates were mades")
    parser.add_argument("--skip-docs-update", action="store_true", default=False, help="Do not (re)build any docs, just website contents.")
    parser.add_argument("--repos", type=str, help="Path to directory with cloned repositories", default="repos")
    parser.add_argument("--treat-current-as-latest", action="store_true", default=False, help="Treat the currently checked out sources as 'latest'. Will not iterate tags in this case")
    return parser


def run_builder(args):
    namespace = make_parser().parse_args(args)
    repos = Path(namespace.repos).resolve()

    if not namespace.skip_docs_update:
        if not repos.exists():
            raise Exception("Repository directory does not exist.")

        for project, data in config["projects"].items():
            if not (repos / project).exists():
                raise Exception(f"Repository {project} was not cloned into repository directory!")

    updates = []

    db = VersionDatabase.load()

    if not namespace.skip_docs_update:
        for project, data in config["projects"].items():
            if namespace.treat_current_as_latest:
                build_docs_current_as_latest(repos/ project, project, data)
            else:
                pdb = db.get(project)
                updates += build_docs(repos / project, project, data, pdb)

    build_site(db, config)
    db.save()

    if has_been_updated() and namespace.commit_if_updated:
        make_commit("Website update\n" + " ".join(updates))
        was_updated_path.touch()


def cli():
    run_builder(sys.argv[1:])

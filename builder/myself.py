from git import Repo, Actor

from .paths import top_dir


def get_my_master_git_hash():
    return Repo(top_dir).heads['master'].commit.hexsha


def has_been_updated():
    r = Repo(top_dir)
    if r.is_dirty("pages") or any(u.startswith("pages/") for u in r.untracked_files) or r.is_dirty("database.json"):
        return True
    return False


def make_commit(message):
    repo = Repo(top_dir)
    repo.index.add([str(s) for s in (top_dir / "pages").rglob("*")])
    repo.index.add(str(top_dir / "database.json"))
    author = Actor("Python cyclonedds.io Builder", "ci@cyclonedds.io")
    repo.index.commit(message, author=author, committer=author)


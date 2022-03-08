import sys
import argparse

from . import config
from .database import VersionDatabase
from .docs import build_docs
from .web import build_site
from .myself import has_been_updated, make_commit
from .paths import was_updated_path


def make_parser():
    parser = argparse.ArgumentParser()
    parser.add_argument("--commit-if-updated", action="store_true", default=False)
    return parser


def run_builder(args):
    namespace = make_parser().parse_args(args)
    updates = []

    db = VersionDatabase.load()
    for project, data in config["projects"].items():
        pdb = db.get(project)
        updates += build_docs(project, data, pdb)

    build_site(db, config)
    db.save()

    if has_been_updated() and namespace.commit_if_updated:
        make_commit("Website update\n" + " ".join(updates))
        was_updated_path.touch()


if __name__ == "__main__":
    run_builder(sys.argv[1:])

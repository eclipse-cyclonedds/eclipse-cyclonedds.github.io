import os
import sys
import argparse
from pathlib import Path

from . import config
from .database import VersionDatabase
from .docs import build_docs, _run_build
from .web import build_site
from .myself import has_been_updated, make_commit
from .paths import was_updated_path


def make_parser():
    parser = argparse.ArgumentParser()
    parser.add_argument("--commit-if-updated", action="store_true", default=False)
    parser.add_argument("--skip-docs-update", action="store_true", default=False)
    parser.add_argument("--single-run", nargs=3, type=str)
    return parser


def run_builder(args):
    namespace = make_parser().parse_args(args)

    if namespace.single_run:
        p = Path(namespace.single_run[1]).resolve()
        o = Path(namespace.single_run[2]).resolve()
        print(p, o)
        data = config["projects"][namespace.single_run[0]]
        _run_build(namespace.single_run[0], data['name'], "custom", p, o, data)
        return

    updates = []

    db = VersionDatabase.load()

    if not namespace.skip_docs_update:
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

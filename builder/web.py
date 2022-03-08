import re
from typing import Dict, List
from pathlib import Path
from staticjinja import Site
from collections import defaultdict
from dataclasses import dataclass

from .database import VersionDatabase
from .paths import web_template_dir, pages_dir


def tag_sort_and_select(tags, prefix):
    filtered = [tag for tag in tags if tag.startswith(prefix)]
    digits = list(set(int((re.match('\\.(\\d+)', tag[len(prefix):]) or re.match('(.+)', '999')).group(1)) for tag in filtered))

    return {
        f"{prefix}.{d}": list(sorted(tag for tag in filtered if tag.startswith(f"{prefix}.{d}")))
        for d in sorted(digits, reverse=True)
    }



def multisort(xs, specs):
    for item, reverse in reversed(specs):
        xs.sort(key=lambda x: x[item], reverse=reverse)
    return xs


last_sort='zzzzzzzzzzz'
def tag_split(tag):
    m = re.match(r"^(\d+)\.(\d+)\.(\d+)(.*)$", tag)
    if not m:
        return None
    v = m.groups()
    if v[3] == "":
        return (v[0], v[1], v[2], last_sort)
    return v


def releases(db: VersionDatabase, config: dict):
    all_tags = list(set(sum((list(project.tags) for project in db.projects.values()), [])))
    all_tags = [tag_split(tag) for tag in all_tags if tag_split(tag) is not None]
    multisort(all_tags, [(0, True), (1, True), (2, True), (3, True)])
    joined_tags = [(f"{v[0]}.{v[1]}", v[2], v[3] if v[3] != last_sort else "", v[3] != last_sort) for v in all_tags]
    joined = defaultdict(list)
    for tag in joined_tags:
        joined[tag[0]].append((f"{tag[0]}.{tag[1]}{tag[2]}", tag[3]))
    return dict(joined)


def build_site(db: VersionDatabase, config: dict):
    site = Site.make_site(
        searchpath=str(web_template_dir),
        outpath=str(pages_dir),
        env_globals={
            'releases': releases(db, config),
            'projects': db.projects,
            'config': config
        },
        filters={
            'tag_sort_and_select': tag_sort_and_select
        }
    )
    site.render()

from dataclasses import dataclass
from typing import Dict, Set
from pathlib import Path
import json


db_path = Path(__file__).resolve().parent.parent / "database.json"


@dataclass
class ProjectVersionDatabase:
    master_commit: str
    tags: Set[str]
    ignored_tags: Set[str]


@dataclass
class VersionDatabase:
    projects: Dict[str, ProjectVersionDatabase]

    def get(self, project: str):
        if project not in self.projects:
            self.projects[project] = ProjectVersionDatabase("", set(), set())
        return self.projects[project]

    @classmethod
    def load(self) -> 'VersionDatabase':
        if not db_path.exists():
            return VersionDatabase({})

        with open(db_path) as f:
            data = json.load(f)

        return VersionDatabase({
            name: ProjectVersionDatabase(
                master_commit=value["master_commit"],
                tags=set(value["tags"]),
                ignored_tags=set(value["ignored_tags"])
            )
            for name, value in data.items()
        })

    def save(self):
        with open(db_path, "w") as f:
            json.dump({
                name: {
                    "master_commit": project.master_commit,
                    "tags": list(sorted(project.tags)),
                    "ignored_tags": list(sorted(project.ignored_tags))
                }
                for name, project in self.projects.items()
            }, f, indent=4)


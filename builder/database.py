from collections import defaultdict
from dataclasses import dataclass
from typing import Dict, List, Set, Optional, Tuple
from pathlib import Path
import json
import re


db_path = Path(__file__).resolve().parent.parent / "database.json"


@dataclass
class ProjectVersionRelease:
    _tag_regex = re.compile(r"^(?P<major>\d+)\.(?P<minor>\d+)\.(?P<patch>\d+)(?P<pre>(?:[a-z]+\d+)?)$")

    major: int
    minor: int
    patch: int
    prerelease: Optional[str]

    @classmethod
    def from_string(cls, tag: str) -> Optional['ProjectVersionRelease']:
        m = cls._tag_regex.match(tag)

        if not m:
            # This tag does not match the 0.0.0 or 0.0.0rc1 format, ignore
            return None

        return ProjectVersionRelease(
            major=int(m.group('major')),
            minor=int(m.group('minor')),
            patch=int(m.group('patch')),
            prerelease=m.group('pre') if m.group('pre') != '' else None
        )

    @property
    def is_prerelease(self):
        return self.prerelease is not None

    def __str__(self) -> str:
        if self.prerelease is None:
            return f"{self.major}.{self.minor}.{self.patch}"
        return f"{self.major}.{self.minor}.{self.patch}{self.prerelease}"

    def __hash__(self) -> int:
        return hash(str(self))

    def key(self) -> str:
        return f"{self.major}.{self.minor}"

    def is_overruled_by(self, other: 'ProjectVersionRelease') -> bool:
        if not self.is_same_release_branch(other):
            # if these versions are not from the same release stream they cannot override
            return False

        if self.prerelease is not None and other.prerelease is None:
            # if this is a prerelease and the other is not then it overrules
            return True

        if self.patch == other.patch:
            if self.prerelease is not None and other.prerelease is not None:
                # Both are prereleases of the same patch level

                if self.prerelease.startswith('a') and (
                    other.prerelease.startswith('b') or
                    other.prerelease.startswith('rc')
                ):
                    # b and rc overrule an a release
                    return True

                if self.prerelease.startswith('b') and other.prerelease.startswith('rc'):
                    # rc overrule an b release
                    return True

                # if no a/b/rc overrides, just check alphabetical ordering
                return self.prerelease < other.prerelease
            elif self.prerelease is None and other.prerelease is not None:
                # This is some kind of post-release and not a prerelease
                # Maybe you want to implement some kind of mechanism for it
                # Choice: ignore post-releases
                return False

            # Eh? Not sure how we could get here
            return False

        if self.prerelease is None and other.prerelease is not None and other.patch > self.patch:
            # This is not a prerelease and the other is a prerelease of a new patch release
            # Choice: ignore, we will rebuild docs for when the non-prerelease patch comes out
            return False

        if other.prerelease is None and other.patch > self.patch:
            # A non-patch release that is bigger than us overrides
            return True

        # all other cases are not overrides
        return False

    def is_same_release_branch(self, other: 'ProjectVersionRelease') -> bool:
        # If major or minor does not match they are separate release branches
        return other.major == self.major and other.minor == self.minor

    def __lt__(self, other: 'ProjectVersionRelease') -> bool:
        if other.major > self.major:
            return True
        elif other.major == self.major:
            if other.minor > self.minor:
                return True
            elif other.minor == self.minor:
                if other.patch > self.patch:
                    return True
                elif other.patch == self.patch:
                    if not other.is_prerelease and self.is_prerelease:
                        return True
                    elif other.is_prerelease and self.is_prerelease:
                        return other.prerelease > self.prerelease

        return False

@dataclass
class ProjectVersionAction:
    version_to_delete: Optional[ProjectVersionRelease] = None
    version_to_build: Optional[ProjectVersionRelease] = None


@dataclass
class ProjectVersionDatabase:

    master_commit: str
    tags: Set[str]
    ignored_tags: Set[str]

    @property
    def versions(self) -> List[ProjectVersionRelease]:
        return list(filter(
            lambda x: x is not None,
            (ProjectVersionRelease.from_string(tag) for tag in self.tags)
        ))

    @property
    def release_streams(self) -> Set[str]:
        return set(v.key() for v in self.versions)

    def add_tag(self, tag: str) -> ProjectVersionAction:
        version = ProjectVersionRelease.from_string(tag)

        if version is None:
            # This tag does not match the 0.0.0 or 0.0.0rc1 format, ignore
            self.ignored_tags.add(tag)
            return ProjectVersionAction()

        existing_versions = self.versions

        if version in existing_versions:
            # We already know about this version
            return ProjectVersionAction()

        for existing_version in existing_versions:
            if existing_version.is_overruled_by(version):

                self.tags.remove(str(existing_version))
                self.ignored_tags.add(str(existing_version))
                self.tags.add(str(version))

                return ProjectVersionAction(
                    version_to_delete=existing_version,
                    version_to_build=version
                )

        if not any(existing_version.is_same_release_branch(version) for existing_version in existing_versions):
            # If this new tag is not in the same release stream of any of the other known version it is a totally
            # new release
            self.tags.add(str(version))
            return ProjectVersionAction(
                version_to_build=version
            )

        # Not a novel release and does not override anything
        return ProjectVersionAction()


@dataclass
class VersionDatabase:
    projects: Dict[str, ProjectVersionDatabase]

    def get(self, project: str):
        if project not in self.projects:
            self.projects[project] = ProjectVersionDatabase("", set(), set())
        return self.projects[project]

    def joined_release_streams(self) -> List[Tuple[str, Dict[str, ProjectVersionRelease]]]:
        all_streams = defaultdict(dict)

        for name, project in self.projects.items():
            for version in project.versions:
                all_streams[version.key()][name] = version

        return list(sorted(((k,v) for k,v in all_streams.items()), reverse=True, key=lambda x: next(iter(x[1].values()))))

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


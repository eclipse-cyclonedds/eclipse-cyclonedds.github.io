import re
from staticjinja import Site
from collections import defaultdict

from .database import VersionDatabase
from .paths import web_template_dir, pages_dir, content_dir
from .content import ContentProvider



def build_site(db: VersionDatabase, config: dict):
    linked_content_dir = web_template_dir / "content"
    try:
        linked_content_dir.symlink_to(content_dir)
    except FileExistsError:
        pass

    provider = ContentProvider()
    site = Site.make_site(
        searchpath=str(web_template_dir),
        outpath=str(pages_dir),
        env_globals={
            'releases': db.joined_release_streams(),
            'projects': db.projects,
            'config': config,
            'provider': provider
        },
        contexts=[(r".*\.md", provider.context)],
        rules=[(r".*\.md", provider.render)],
    )
    site.render()
    linked_content_dir.unlink()

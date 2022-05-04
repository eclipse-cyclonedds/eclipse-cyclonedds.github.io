from pathlib import Path


builder_dir = Path(__file__).resolve().parent
top_dir = builder_dir.parent

config_path = top_dir / "config.json"
database_path = top_dir / "database.json"
was_updated_path = top_dir / "was-updated"
cloned_repos_dir = top_dir / "repos"
template_dir = top_dir / "templates"
code_template_dir = template_dir / "code"
web_template_dir = template_dir / "web"
pages_dir = top_dir / "pages"
content_dir = top_dir / "content"
docs_dir = pages_dir / "docs"
static_dir = builder_dir / "static"

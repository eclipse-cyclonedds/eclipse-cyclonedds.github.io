import jinja2
import markdown
import staticjinja
from pathlib import Path
from typing import List, Dict
from dataclasses import dataclass
from markdown.extensions.toc import TocExtension

from .paths import content_dir


@dataclass
class PieceOfContent:
    md: str
    html: str
    path: str
    meta: Dict[str, List[str]]
    title: str

    @property
    def category(self):
        return self.path.split('/')[0].split('.')[0]


class ContentProvider:
    def __init__(self) -> None:
        self.content: Dict[Path, PieceOfContent] = {}

        markdowner = markdown.Markdown(
            output_format="html5",
            extensions=[
                TocExtension(baselevel=2, anchorlink_class="link-primary"),
                'extra',
                'meta',
                'codehilite'
            ]
        )

        for file in content_dir.rglob("*.md"):
            md = file.read_text()
            html = markdowner.convert(md)
            meta = markdowner.Meta if hasattr(markdowner, 'Meta') else {}

            self.content[file.resolve()] = PieceOfContent(
                md=md,
                html=html,
                meta=meta,
                path='/content/' + file.relative_to(content_dir).with_suffix('.html').as_posix(),
                title=meta.get('title', ['Untitled'])[0]
            )

    def context(self, template: jinja2.Template) -> Dict[str, PieceOfContent]:
        path = Path(template.filename).resolve()
        if path not in self.content:
            raise FileNotFoundError()
        return {'content': self.content[path]}

    def render(self, site: staticjinja.Site, template: jinja2.Template, content: PieceOfContent, **kwargs):
        out_path: Path = site.outpath / Path(template.name).with_suffix(".html")
        out_path.parent.mkdir(parents=True, exist_ok=True)
        template = "_{}.html".format(content.meta.get("template", ["plain_markdown"])[0])
        site.get_template(template).stream(content=content, **kwargs).dump(str(out_path), encoding="utf-8")

    def get_all(self, category: str) -> List[PieceOfContent]:
        directory = content_dir / category
        return [content for path, content in self.content.items() if path.is_relative_to(directory)]

    def get_all_sort_by_date(self, category: str) -> List[PieceOfContent]:
        directory = content_dir / category
        pieces = [content for path, content in self.content.items() if path.is_relative_to(directory)]
        pieces.sort(
            key=lambda x: x.meta.get('date', ['1970-01-01'])[0],
            reverse=True
        )
        return pieces

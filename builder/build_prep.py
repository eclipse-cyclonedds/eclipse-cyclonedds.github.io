from contextlib import contextmanager
from pathlib import Path
from pip import main
from datetime import datetime
from tempfile import TemporaryDirectory
from jinja2 import Environment, FileSystemLoader
import sys
import os

from .doxygen import run_doxygen, cxx_preprocess_headers
from .paths import code_template_dir, static_dir


template_env = Environment(loader=FileSystemLoader(code_template_dir))


@contextmanager
def build_wrap(project: str, repository: Path, confpy: Path, version: str):
    if project == "cyclonedds-python":
        data = confpy.read_text()
        confpy_templ = template_env.get_template("py.conf.py")
        confpy.write_text(
            confpy_templ.render(
                old_conf=confpy.read_text()
            )
        )
        clayer = repository / "cyclonedds" / "_clayer.py"
        clayer_templ = template_env.get_template(
            "py._clayer.py"
        )
        clayer.write_text(clayer_templ.render())

        os.environ['CYCLONEDDS_PYTHON_NO_IMPORT_LIBS'] = "1"
        sys.path.insert(0, str(repository))
        yield []
        sys.path.pop(0)
        del os.environ['CYCLONEDDS_PYTHON_NO_IMPORT_LIBS']
    elif project == "cyclonedds":
        with TemporaryDirectory() as doxygen_output:
            doxygen_output = Path(doxygen_output)

            confpy_templ = template_env.get_template(
                "c.conf.withexhale.py" if "exhale" in confpy.read_text() else "c.conf.py"
            )
            confpy_data = confpy_templ.render(
                year=datetime.now().year,
                version=version,
                doxygen_path=doxygen_output / "xml",
                path=confpy.parent
            )

            doxygen_conf_templ = template_env.get_template("c.doxygen.conf")
            doxygen_conf = doxygen_conf_templ.render(
                version=version,
                output=doxygen_output
            )
            doxygen_conf_path = doxygen_output / "doxygen.conf"
            doxygen_conf_path.write_text(doxygen_conf)

            run_doxygen(repository / "src", doxygen_conf_path)
            confpy.write_text(confpy_data)

            yield
    elif project == "cyclonedds-cxx":
        with TemporaryDirectory() as doxygen_output:
            doxygen_output = Path(doxygen_output)
            cxx_preprocess_headers(repository / "src" / "ddscxx" / "include")

            confpy_templ = template_env.get_template(
                "cpp.conf.withexhale.py" if "exhale" in confpy.read_text() else "cpp.conf.py"
            )
            confpy_data = confpy_templ.render(
                year=datetime.now().year,
                version=version,
                doxygen_path=doxygen_output / "xml",
                path=confpy.parent
            )

            doxygen_conf_templ = template_env.get_template("cpp.doxygen.conf")
            doxygen_conf = doxygen_conf_templ.render(
                version=version,
                output=doxygen_output
            )
            doxygen_conf_path = doxygen_output / "doxygen.conf"
            doxygen_conf_path.write_text(doxygen_conf)

            run_doxygen(repository / "src", doxygen_conf_path)
            confpy.write_text(confpy_data)

            yield
    else:
        print(project)
        sys.exit(1)
        yield []

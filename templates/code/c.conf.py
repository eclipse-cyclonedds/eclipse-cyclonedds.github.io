# -- Project information -----------------------------------------------------

project = "Eclipse Cyclone DDS"
copyright = "{{ year }}, Eclipse Cyclone DDS committers"
author = "Eclipse Cyclone DDS committers"

version = "{{ version }}"
release = "{{ version }}"

# -- General configuration ---------------------------------------------------

extensions = [
    "breathe",
    "sphinx.ext.intersphinx",
    "sphinx.ext.viewcode",
    "sphinx.ext.autosummary",
    "sphinx_tabs.tabs"
]

templates_path = ["_templates"]
language = "en"
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

# -- Options for HTML output -------------------------------------------------

html_theme = "piccolo_theme"
html_static_path = ["_static"]
html_css_files = ['/css/docu.css']
html_js_files = ['/js/docu.js']
autosummary_generate=True

# Tell sphinx what the primary language being documented is.
primary_domain = "c"

# Tell sphinx what the pygments highlight language should be.
highlight_language = "c"

# Breathe docs
breathe_domain_by_extension = { "h" : "c" , "c" : "c"}
breathe_projects = { "ddsc_api_docs": "{{ doxygen_path }}" }
breathe_default_project = "ddsc_api_docs"

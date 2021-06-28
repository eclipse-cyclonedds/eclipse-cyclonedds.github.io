#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# https://siongui.github.io/2016/02/19/pelican-generate-index-html-by-rst-or-md/

import os
import re


ABOUT = 'High performant and robust open source OMG DDS implementation'
AUTHOR = 'Eclipse Cyclone DDS committers'
SITENAME = 'Eclipse Cyclone DDS'
SITEURL = 'https://cyclonedds.io'

THEME = 'theme'
PATH = 'content'
STATIC_PATHS = [ 'images' ]

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('GitHub', 'https://github.com/eclipse-cyclonedds/cyclonedds', 'fab fa-github'),
         ('Twitter', 'https://twitter.com/EclipseCyclone', 'fab fa-twitter'),
         ('Gitter', 'https://gitter.im/atolab/cyclone-dds', 'fab fa-gitter'))

# Social widget
SOCIAL = (('GitHub', 'https://github.com/eclipse-cyclonedds/cyclonedds', 'fab fa-github'),
          ('Twitter', 'https://twitter.com/EclipseCyclone', 'fab fa-twitter'),
          ('Gitter', 'https://gitter.im/atolab/cyclone-dds', 'fab fa-gitter'),
          ('About', 'docs/overview', 'fa fa-info-circle'),)

INFORMATION = (('Legal', 'https://www.eclipse.org/legal'),
               ('Privacy policy', 'https://www.eclipse.org/legal/privacy.php'),
               ('Terms of use', 'https://www.eclipse.org/legal/termsofuse.php'),
               ('Copyright', 'https://www.eclipse.org/legal/copyright.php'),
               ('Report a security issue', 'https://www.eclipse.org/security/'),
               ('Eclipse Public License 2.0', 'https://www.eclipse.org/legal/epl-2.0/'),
               ('Eclipse Districution License 1.0', 'https://www.eclipse.org/org/documents/edl-v10.php'),
               ('Eclipse Foundation', 'https://www.eclipse.org/'),)

# Sponsors
SPONSORS = (('Eclipse Foundation', 'https://www.eclipse.org', '/images/eclipse-foundation.svg'),
            ('ADLINK Technology', 'https://www.adlinktech.com', '/images/company_logo.svg'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# custom Jinja2 filter
def page_with_slug(pages, slug):
    for page in pages:
        if page.slug == slug:
            return page

JINJA_FILTERS = {
    'page_with_slug': page_with_slug
}

# Documentation is made available in docs by an Azure Pipelines step.
#   docs/cyclonedds/(version): Eclipe Cyclone DDS
#   docs/cyclonedds-cxx/(version): C++ binding for Eclipse Cyclone DDS
#   docs/cyclonedds-python/(version): Python binding for Eclipse Cyclone DDS
PROJECTS = {
    'cyclonedds': {
        'name': 'Eclipse Cyclone DDS',
        'repository': 'https://github.com/eclipse-cyclonedds/cyclonedds',
        'releases': [ ] },
    'cyclonedds-cxx': {
        'name': 'C++ binding for Eclipse Cyclone DDS',
        'repository': 'https://github.com/eclipse-cyclonedds/cyclonedds-cxx',
        'releases': [ ] } ,
    'cyclonedds-python': {
        'name': 'Python binding for Eclipse Cyclone DDS',
        'repository': 'https://github.com/eclipse-cyclonedds/cyclonedds-python',
        'releases': [ ] } }

# Retrieve documentation for all releases of all projects
for project in PROJECTS:
    path = os.path.join("output", "docs", project)
    if not os.path.isdir(path):
        continue
    entries = os.listdir(path)
    for entry in entries:
        # version must either be "latest" or "x.x.x"
        if re.match('^((?i:latest)|\d+\.\d+\.\d+)$', entry):
            PROJECTS[project]['releases'].append(entry)

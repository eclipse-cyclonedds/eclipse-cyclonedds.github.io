#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import os
import sys
import json
from base64 import b64encode
from hashlib import sha512
from urllib.request import urlretrieve


# Third-party stylesheets, scripts and webfonts used in the website.
with open("resources.json") as f:
    RESOURCES = json.load(f)


def hash_file(path):
    with open(path, "rb") as f:
        return b64encode(sha512(f.read()).digest()).decode()


if __name__ == "__main__":
    for static_dir in ["js", "css", "webfonts"]:
        if not os.path.isdir(f"theme/static/{static_dir}"):
            os.mkdir(f"theme/static/{static_dir}")

    for file, data in RESOURCES.items():
        path = f"theme/static/{data['dir']}/{file}"

        if os.path.isfile(path):
            digest = hash_file(path)

            if digest == data["sha512"]:
                print(f"Resource {file} is already available.")
                continue

        print(f"Downloading {file}")
        urlretrieve(data["src"], path)
        digest = hash_file(path)

        if digest != data["sha512"]:
            print(f"Invalid checksum for resource {file}")
            os.unlink(path)
            sys.exit(1)

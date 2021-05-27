#!/usr/bin/env python
# -*- coding: utf-8 -*- #
import os
import re
import hashlib
import urllib.request
import base64

# Third-party stylesheets and scripts used in the website.
RESOURCES = {
    'bootstrap-reboot.min.css': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap-reboot.min.css',
        'sha512': 'ZJ+KmS7LSGuRKphz9V5eX99TPMci9Ngt5lCk0XFdYJmBg+ZDr/4r/HSsMEiUKmR7bxe1eAv768c2YuSl/OGiFw==' },
    'bootstrap.min.css': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css',
        'sha512': 'Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==' },
    'font-awesome.min.css': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css',
        'sha512': 'OdEXQYCOldjqUEsuMKsZRj93Ht23QRlhIb8E/X0sbwZhme8eUw6g8q7AdxGJKakcBbv7+/PX0Gc2btf7Ru8cZA==' },
    'docsearch.min.css': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/docsearch.js/2.6.3/docsearch.min.css',
        'sha512': 'HPYPKXDDcZZ6ia5a6d4el3ergqhI5uS4Uc0XolyaO3R92iE1PBEBzc2WzoMDFrWMeWtuYaAfO3SrLajtqia6qg==' },
    'jquery.min.js': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        'sha512': '894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==' },
    'tether.min.js': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.7/js/tether.min.js',
        'sha512': 'X7kCKQJMwapt5FCOl2+ilyuHJp+6ISxFTVrx+nkrhgplZozodT9taV2GuGHxBgKKpOJZ4je77OuPooJg9FJLvw==' },
    'bootstrap.min.js': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/js/bootstrap.min.js',
        'sha512': 'EKWWs1ZcA2ZY9lbLISPz8aGR2+L7JVYqBAYTq5AXgBkSjRSuQEGqWx8R1zAX16KdXPaCjOCaKE8MCpU0wcHlHA==' },
    'highlight.min.js': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js',
        'sha512': 's+tOYYcC3Jybgr9mVsdAxsRYlGNq4mlAurOrfNuGMQ/SCofNPu92tjE7YRZCsdEtWL1yGkqk15fU/ark206YTg==' },
    'docsearch.min.js': {
        'src': 'https://cdnjs.cloudflare.com/ajax/libs/docsearch.js/2.6.3/docsearch.min.js',
        'sha512': 'PjI+WVy3+EZgAxjHNRx7NbRVD91/H4YfeSkXG38zCVFtWv+lj/wjnqohcwHr/qwajVVeRw+/MeojPsXGEK0BOg==' }
    }

if __name__ == "__main__":
  if not os.path.isdir('theme/static/js'):
    os.mkdir('theme/static/js')
  if not os.path.isdir('theme/static/css'):
    os.mkdir('theme/static/css')
  for resource in RESOURCES:
    if RESOURCES[resource]['src'].endswith('.js'):
      path = 'theme/static/js/' + resource
    else:
      path = 'theme/static/css/' + resource
    if os.path.isfile(path):
      file = open(path, 'rb')
      digest = base64.b64encode(hashlib.sha512(file.read()).digest()).decode('utf-8')
      file.close()
      if digest == RESOURCES[resource]['sha512']:
        print("resource %s already available" % (resource))
        continue
    urllib.request.urlretrieve(RESOURCES[resource]['src'], path)
    file = open(path, 'rb')
    digest = base64.b64encode(hashlib.sha512(file.read()).digest()).decode('utf-8')
    file.close()
    if digest != RESOURCES[resource]['sha512']:
      raise RuntimeError("invalid checksum for resource %s" % (resource))

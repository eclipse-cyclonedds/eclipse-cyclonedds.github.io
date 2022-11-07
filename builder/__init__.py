import json
from pathlib import Path


config_path = Path(__file__).resolve().parent.parent / "config.json"

with open(config_path) as f:
    config = json.load(f)

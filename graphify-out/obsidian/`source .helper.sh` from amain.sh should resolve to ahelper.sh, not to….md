---
source_file: "temp-graphify/tests/test_symbol_resolution.py"
type: "rationale"
community: "resolve_bash_source_edges"
location: "L804"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/resolve_bash_source_edges
---

# `source ./helper.sh` from a/main.sh should resolve to a/helper.sh, not to…

## Connections
- [[test_resolve_bash_source_edges_relative_path_resolves_against_source_dir()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/resolve_bash_source_edges
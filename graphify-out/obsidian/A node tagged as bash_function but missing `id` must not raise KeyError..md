---
source_file: "temp-graphify/tests/test_symbol_resolution.py"
type: "rationale"
community: "resolve_bash_source_edges"
location: "L727"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/resolve_bash_source_edges
---

# A node tagged as bash_function but missing `id` must not raise KeyError.

## Connections
- [[test_resolve_bash_source_edges_skips_bash_function_node_missing_id()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/resolve_bash_source_edges
---
source_file: "temp-graphify/tests/test_symbol_resolution.py"
type: "rationale"
community: "resolve_bash_source_edges"
location: "L500"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/resolve_bash_source_edges
---

# When a callee function is defined in multiple sourced files, skip it.

## Connections
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/resolve_bash_source_edges
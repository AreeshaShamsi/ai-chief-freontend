---
source_file: "temp-graphify/tests/test_import_extension_resolution.py"
type: "code"
community: "extract_js"
location: "L140"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_js
---

# test_resolve_real_svelte_file_wins_over_svelte_ts_sibling()

## Connections
- [[If `foo.svelte` IS a real markup file, importing `.foo.svelte` must resolve to…]] - `rationale_for` [EXTRACTED]
- [[_resolve_js_module_path()]] - `calls` [INFERRED]
- [[_write()_7]] - `calls` [EXTRACTED]
- [[test_import_extension_resolution.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_js
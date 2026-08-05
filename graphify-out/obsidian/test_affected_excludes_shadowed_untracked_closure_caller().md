---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "code"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L127"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# test_affected_excludes_shadowed_untracked_closure_caller()

## Connections
- [[Blast-radius traversal must not include a caller that only reached the target…]] - `rationale_for` [EXTRACTED]
- [[_extract_js_dir()]] - `calls` [EXTRACTED]
- [[affected_nodes()]] - `calls` [EXTRACTED]
- [[test_indirect_call_nested_closure_shadow.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
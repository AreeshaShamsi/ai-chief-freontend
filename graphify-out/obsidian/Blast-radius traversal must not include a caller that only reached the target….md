---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "rationale"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L128"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# Blast-radius traversal must not include a caller that only reached the target…

## Connections
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
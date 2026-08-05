---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "rationale"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L116"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# A const-assigned arrow IS separately tracked (its own caller_nid, own…

## Connections
- [[test_tracked_const_arrow_param_shadow_still_emits_no_indirect_call()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "rationale"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L152"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# The fix must hold on a warm-cache re-extraction, not just a cold run — the…

## Connections
- [[test_untracked_arrow_param_shadow_stable_on_warm_cache()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "code"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# _extract_js_dir()

## Connections
- [[extract()]] - `calls` [EXTRACTED]
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - `calls` [EXTRACTED]
- [[test_double_nested_untracked_closures_shadow_compounds()]] - `calls` [EXTRACTED]
- [[test_indirect_call_nested_closure_shadow.py]] - `contains` [EXTRACTED]
- [[test_tracked_const_arrow_param_shadow_still_emits_no_indirect_call()]] - `calls` [EXTRACTED]
- [[test_untracked_arrow_genuine_reference_still_emits_indirect_call()]] - `calls` [EXTRACTED]
- [[test_untracked_arrow_param_shadow_emits_no_indirect_call()]] - `calls` [EXTRACTED]
- [[test_untracked_arrow_param_shadow_stable_on_warm_cache()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
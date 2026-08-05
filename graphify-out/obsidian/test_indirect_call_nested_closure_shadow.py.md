---
source_file: "temp-graphify/tests/test_indirect_call_nested_closure_shadow.py"
type: "code"
community: "test_indirect_call_nested_closure_shadow.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_indirect_call_nested_closure_shadowpy
---

# test_indirect_call_nested_closure_shadow.py

## Connections
- [[Indirect-call argument shadowing across untracked JSTS closures (2241). An…]] - `rationale_for` [EXTRACTED]
- [[_extract_js_dir()]] - `contains` [EXTRACTED]
- [[_rels()]] - `contains` [EXTRACTED]
- [[affected.py]] - `imports_from` [EXTRACTED]
- [[affected_nodes()]] - `imports` [EXTRACTED]
- [[extract()]] - `imports` [EXTRACTED]
- [[extract.py]] - `imports_from` [EXTRACTED]
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - `contains` [EXTRACTED]
- [[test_double_nested_untracked_closures_shadow_compounds()]] - `contains` [EXTRACTED]
- [[test_tracked_const_arrow_param_shadow_still_emits_no_indirect_call()]] - `contains` [EXTRACTED]
- [[test_untracked_arrow_genuine_reference_still_emits_indirect_call()]] - `contains` [EXTRACTED]
- [[test_untracked_arrow_param_shadow_emits_no_indirect_call()]] - `contains` [EXTRACTED]
- [[test_untracked_arrow_param_shadow_stable_on_warm_cache()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_indirect_call_nested_closure_shadowpy
---
type: community
cohesion: 0.22
members: 16
---

# test_indirect_call_nested_closure_shadow.py

**Cohesion:** 0.22 - loosely connected
**Members:** 16 nodes

## Members
- [[A const-assigned arrow IS separately tracked (its own caller_nid, own…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[Blast-radius traversal must not include a caller that only reached the target…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[Indirect-call argument shadowing across untracked JSTS closures (2241). An…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[Reported shape (2241) a one-letter test helper `r` must not become a…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[Shadowing must compound through two levels of untracked inline closures an…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[The fix must hold on a warm-cache re-extraction, not just a cold run — the…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[The same nested-arrow shape must still capture a REAL by-name reference that is…]] - rationale - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[_extract_js_dir()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[_rels()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_double_nested_untracked_closures_shadow_compounds()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_indirect_call_nested_closure_shadow.py]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_tracked_const_arrow_param_shadow_still_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_untracked_arrow_genuine_reference_still_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_untracked_arrow_param_shadow_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py
- [[test_untracked_arrow_param_shadow_stable_on_warm_cache()]] - code - temp-graphify/tests/test_indirect_call_nested_closure_shadow.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_indirect_call_nested_closure_shadowpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_affected_nodes]]
- 3 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_indirect_call_nested_closure_shadow.py]] - degree 13, connects to 3 communities
- [[_extract_js_dir()]] - degree 8, connects to 1 community
- [[test_untracked_arrow_param_shadow_stable_on_warm_cache()]] - degree 5, connects to 1 community
- [[test_affected_excludes_shadowed_untracked_closure_caller()]] - degree 4, connects to 1 community
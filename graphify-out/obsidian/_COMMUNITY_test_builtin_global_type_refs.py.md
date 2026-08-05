---
type: community
cohesion: 0.53
members: 6
---

# test_builtin_global_type_refs.py

**Cohesion:** 0.53 - moderately connected
**Members:** 6 nodes

## Members
- [[Builtin-global receiver types must not resolve to same-named user symbols.…]] - rationale - temp-graphify/tests/test_builtin_global_type_refs.py
- [[_labels_by_id()]] - code - temp-graphify/tests/test_builtin_global_type_refs.py
- [[test_builtin_date_type_ref_does_not_bind_to_user_DATE()]] - code - temp-graphify/tests/test_builtin_global_type_refs.py
- [[test_builtin_global_type_refs.py]] - code - temp-graphify/tests/test_builtin_global_type_refs.py
- [[test_builtin_static_call_does_not_bind_to_user_symbol()]] - code - temp-graphify/tests/test_builtin_global_type_refs.py
- [[test_nonbuiltin_receiver_type_still_resolves()]] - code - temp-graphify/tests/test_builtin_global_type_refs.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_builtin_global_type_refspy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_builtin_global_type_refs.py]] - degree 7, connects to 2 communities
- [[test_builtin_date_type_ref_does_not_bind_to_user_DATE()]] - degree 3, connects to 1 community
- [[test_builtin_static_call_does_not_bind_to_user_symbol()]] - degree 3, connects to 1 community
- [[test_nonbuiltin_receiver_type_still_resolves()]] - degree 3, connects to 1 community
---
type: community
cohesion: 0.32
members: 14
---

# test_swift_cross_file_calls.py

**Cohesion:** 0.32 - loosely connected
**Members:** 14 nodes

## Members
- [[1604 `let x = Type.shared` cached into a local var, then `x.method()` on a…]] - rationale - temp-graphify/tests/test_swift_cross_file_calls.py
- [[Path_103]] - code
- [[Return {(source_label, relation, target_label)} for the given relations.]] - rationale - temp-graphify/tests/test_swift_cross_file_calls.py
- [[The three cross-file patterns from 1356, plus a constructor-in-initializer.]] - rationale - temp-graphify/tests/test_swift_cross_file_calls.py
- [[_edge_labels()_2]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[_issue_fixture()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[_label()_2]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[_write()_23]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_deferred_singleton_local_var_resolves()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_swift_ambiguous_type_does_not_over_connect()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_swift_cross_file_calls.py]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_swift_cross_file_member_calls_have_correct_confidence_and_resolve()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_swift_cross_file_member_calls_resolve()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py
- [[test_swift_unknown_receiver_emits_no_edge()]] - code - temp-graphify/tests/test_swift_cross_file_calls.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_swift_cross_file_callspy
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_swift_cross_file_calls.py]] - degree 13, connects to 4 communities
- [[test_swift_cross_file_member_calls_have_correct_confidence_and_resolve()]] - degree 6, connects to 2 communities
- [[test_deferred_singleton_local_var_resolves()]] - degree 5, connects to 1 community
- [[test_swift_cross_file_member_calls_resolve()]] - degree 5, connects to 1 community
- [[test_swift_unknown_receiver_emits_no_edge()]] - degree 5, connects to 1 community
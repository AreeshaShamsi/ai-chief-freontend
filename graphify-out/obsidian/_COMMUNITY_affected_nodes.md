---
type: community
cohesion: 0.18
members: 19
---

# affected_nodes

**Cohesion:** 0.18 - loosely connected
**Members:** 19 nodes

## Members
- [[1669 — affected Class must reach callers that bind to the class's method…]] - rationale - temp-graphify/tests/test_affected_member_seed.py
- [[AffectedHit]] - code - temp-graphify/graphify/affected.py
- [[Lowercased label with the callable decoration (trailing ()) removed.]] - rationale - temp-graphify/graphify/affected.py
- [[Path_1]] - code
- [[Return the file-level node when a source_file query matches many nodes.]] - rationale - temp-graphify/graphify/affected.py
- [[_bare_name()]] - code - temp-graphify/graphify/affected.py
- [[_format_location()]] - code - temp-graphify/graphify/affected.py
- [[_g()]] - code - temp-graphify/tests/test_affected_member_seed.py
- [[_node_label()]] - code - temp-graphify/graphify/affected.py
- [[_normalize_label()]] - code - temp-graphify/graphify/affected.py
- [[_prefer_file_node()]] - code - temp-graphify/graphify/affected.py
- [[affected.py]] - code - temp-graphify/graphify/affected.py
- [[affected_nodes()]] - code - temp-graphify/graphify/affected.py
- [[format_affected()]] - code - temp-graphify/graphify/affected.py
- [[test_affected_member_seed.py]] - code - temp-graphify/tests/test_affected_member_seed.py
- [[test_class_affected_reaches_method_bound_caller()]] - code - temp-graphify/tests/test_affected_member_seed.py
- [[test_class_level_caller_still_works()]] - code - temp-graphify/tests/test_affected_member_seed.py
- [[test_member_method_node_not_reported_as_hit()]] - code - temp-graphify/tests/test_affected_member_seed.py
- [[test_method_contains_still_excluded_from_general_walk()]] - code - temp-graphify/tests/test_affected_member_seed.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/affected_nodes
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_affected_cli.py]]
- 4 edges to [[_COMMUNITY_test_indirect_dispatch.py]]
- 3 edges to [[_COMMUNITY_test_corrupt_graph_json.py]]
- 3 edges to [[_COMMUNITY_test_indirect_call_nested_closure_shadow.py]]
- 3 edges to [[_COMMUNITY_test_indirect_dispatch_assign_return.py]]
- 3 edges to [[_COMMUNITY_test_indirect_dispatch_getattr.py]]
- 3 edges to [[_COMMUNITY_test_scala_self_type.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[affected.py]] - degree 17, connects to 7 communities
- [[affected_nodes()]] - degree 19, connects to 5 communities
- [[format_affected()]] - degree 7, connects to 3 communities
- [[_prefer_file_node()]] - degree 5, connects to 1 community
- [[_bare_name()]] - degree 4, connects to 1 community
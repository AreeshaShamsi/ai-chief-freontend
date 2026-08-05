---
type: community
cohesion: 0.19
members: 20
---

# test_go_builtin_call_targets.py

**Cohesion:** 0.19 - loosely connected
**Members:** 20 nodes

## Members
- [[A builtin `append` call must not create an edge to the user's method.]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[A method named `append` in one file, builtin `append` calls in another.]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[Cross-language guard `new` must stay resolvable in Rust. Rust normalizes…]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[Filtering call targets must not delete the same-named user symbol.]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[Go predeclared functions must not bind to same-named user symbols.…]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[Same-file binding needs the guard too, not just the cross-file pass.…]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[The guard is a no-op for genuine user symbols. Uses a plain package-level call…]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[_edges_between()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[_extract_go()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[_label()_1]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[_nodes_by_file()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[`h.append(v)` is a real method call — the filter must not reach it. The callee…]] - rationale - temp-graphify/tests/test_go_builtin_call_targets.py
- [[builtin_shadow_repo()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_builtin_append_does_not_bind_in_file()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_builtin_append_does_not_bind_to_user_method()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_go_builtin_call_targets.py]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_go_selector_call_to_shadowing_method_survives()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_non_builtin_cross_file_call_still_resolves()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_rust_in_file_type_new_edge_survives()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py
- [[test_user_method_node_survives_the_filter()]] - code - temp-graphify/tests/test_go_builtin_call_targets.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_go_builtin_call_targetspy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__fixture]]

## Top bridge nodes
- [[test_go_builtin_call_targets.py]] - degree 14, connects to 2 communities
- [[_extract_go()]] - degree 7, connects to 1 community
- [[test_rust_in_file_type_new_edge_survives()]] - degree 6, connects to 1 community
- [[builtin_shadow_repo()]] - degree 3, connects to 1 community
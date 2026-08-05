---
type: community
cohesion: 0.29
members: 7
---

# _edges_with_relation

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[_edges_with_relation()_1]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_call_edges_have_call_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_import_edges_have_import_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_call_edges_have_call_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_import_edges_have_import_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_call_edges_have_call_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_import_edges_have_import_context()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_edges_with_relation
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_multilang.py]]
- 2 edges to [[_COMMUNITY_extract_js]]
- 2 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY_extract_rust]]

## Top bridge nodes
- [[test_go_call_edges_have_call_context()]] - degree 3, connects to 2 communities
- [[test_go_import_edges_have_import_context()]] - degree 3, connects to 2 communities
- [[test_rust_call_edges_have_call_context()]] - degree 3, connects to 2 communities
- [[test_rust_import_edges_have_import_context()]] - degree 3, connects to 2 communities
- [[test_ts_call_edges_have_call_context()]] - degree 3, connects to 2 communities
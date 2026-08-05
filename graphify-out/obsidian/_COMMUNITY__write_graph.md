---
type: community
cohesion: 0.33
members: 6
---

# _write_graph

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[Write a minimal graph.json with the given node IDs.]] - rationale - temp-graphify/tests/test_serve.py
- [[_write_graph()_7]] - code - temp-graphify/tests/test_serve.py
- [[mtime_ns + size uniquely identifies a graph version (874).]] - rationale - temp-graphify/tests/test_serve.py
- [[serve() picks up a new graph.json written after startup (874).]] - rationale - temp-graphify/tests/test_serve.py
- [[test_load_graph_cache_key_changes_with_content()]] - code - temp-graphify/tests/test_serve.py
- [[test_maybe_reload_detects_graph_change()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_write_graph
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY__score_nodes]]

## Top bridge nodes
- [[_write_graph()_7]] - degree 5, connects to 2 communities
- [[test_maybe_reload_detects_graph_change()]] - degree 4, connects to 1 community
- [[test_load_graph_cache_key_changes_with_content()]] - degree 3, connects to 1 community
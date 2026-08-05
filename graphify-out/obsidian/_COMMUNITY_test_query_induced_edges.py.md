---
type: community
cohesion: 0.15
members: 31
---

# test_query_induced_edges.py

**Cohesion:** 0.15 - loosely connected
**Members:** 31 nodes

## Members
- [[A hub is visited but never expanded, so hub-to-hub edges vanished.]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[A recursive function carries a self-loop; the traversal never rendered one.…]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[Append edges between visited nodes that the traversal never recorded (2323).…]] - rationale - temp-graphify/graphify/serve.py
- [[DFS's only induced-edge gap neither endpoint expands, so neither records it.…]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[Mirrors the MCP path, which loads every graph with directed=True.]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[The completion pass must scan the filtered graph, never the raw one. Scanning…]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[The reporter's repro both endpoints are seeds, so neither discovers the other.]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[The reporter's shape one `calls` edge whose endpoints are both seeds.]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[_add()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[_bfs()]] - code - temp-graphify/graphify/serve.py
- [[_complete_induced_edges()]] - code - temp-graphify/graphify/serve.py
- [[_dfs()]] - code - temp-graphify/graphify/serve.py
- [[_induced()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[_link()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[_pairs()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[_write_two_seed_graph()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[`graphify query` must render every edge between visited nodes (2323).…]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[n2-n3 closes the triangle but discovers nothing, so it was dropped.]] - rationale - temp-graphify/tests/test_query_induced_edges.py
- [[test_bfs_records_cross_edge_in_a_triangle()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_bfs_records_edge_between_two_seeds()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_bfs_records_edge_between_two_visited_hubs()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_completion_respects_the_context_filter()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_dfs_records_edge_between_two_visited_hubs()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_directed_graph_keeps_both_directions_of_a_mutual_edge()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_directed_graph_renders_the_seed_to_seed_edge()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_no_duplicate_edges_are_returned()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_query_cli_renders_the_edge_between_two_seeds()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_query_induced_edges.py]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_self_loops_are_not_introduced()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[test_traversal_edges_keep_discovery_order_and_come_first()]] - code - temp-graphify/tests/test_query_induced_edges.py
- [[u-v and v-u are distinct on a DiGraph (mutual recursion, circular imports).…]] - rationale - temp-graphify/tests/test_query_induced_edges.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_query_induced_edgespy
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_serve.py]]
- 6 edges to [[_COMMUNITY_serve.py]]
- 6 edges to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_detect.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY__key]]

## Top bridge nodes
- [[test_query_induced_edges.py]] - degree 23, connects to 3 communities
- [[_bfs()]] - degree 18, connects to 3 communities
- [[_add()]] - degree 15, connects to 3 communities
- [[_dfs()]] - degree 9, connects to 3 communities
- [[_complete_induced_edges()]] - degree 5, connects to 2 communities
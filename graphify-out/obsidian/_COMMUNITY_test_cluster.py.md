---
type: community
cohesion: 0.18
members: 19
---

# test_cluster.py

**Cohesion:** 0.18 - loosely connected
**Members:** 19 nodes

## Members
- [[Clustering should not emit ANSI escape codes or other output. graspologic's…]] - rationale - temp-graphify/tests/test_cluster.py
- [[Ratio of actual intra-community edges to maximum possible.]] - rationale - temp-graphify/graphify/cluster.py
- [[Remap community IDs to maximize overlap with a previous assignment. Uses greedy…]] - rationale - temp-graphify/graphify/cluster.py
- [[Same as above but for stderr — ANSI codes can go to either stream.]] - rationale - temp-graphify/tests/test_cluster.py
- [[cohesion_score()]] - code - temp-graphify/graphify/cluster.py
- [[make_graph()_1]] - code - temp-graphify/tests/test_cluster.py
- [[remap_communities_to_previous()]] - code - temp-graphify/graphify/cluster.py
- [[test_cluster.py]] - code - temp-graphify/tests/test_cluster.py
- [[test_cluster_covers_all_nodes()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cluster_does_not_write_to_stderr()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cluster_does_not_write_to_stdout()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cluster_returns_dict()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cohesion_score_complete_graph()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cohesion_score_disconnected()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cohesion_score_range()]] - code - temp-graphify/tests/test_cluster.py
- [[test_cohesion_score_single_node()]] - code - temp-graphify/tests/test_cluster.py
- [[test_remap_communities_to_previous_assigns_deterministic_new_ids()]] - code - temp-graphify/tests/test_cluster.py
- [[test_remap_communities_to_previous_reuses_old_ids()]] - code - temp-graphify/tests/test_cluster.py
- [[test_score_all_keys_match_communities()]] - code - temp-graphify/tests/test_cluster.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_clusterpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_generate]]
- 8 edges to [[_COMMUNITY_test_export.py]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]

## Top bridge nodes
- [[test_cluster.py]] - degree 19, connects to 4 communities
- [[remap_communities_to_previous()]] - degree 9, connects to 4 communities
- [[cohesion_score()]] - degree 11, connects to 2 communities
- [[test_score_all_keys_match_communities()]] - degree 4, connects to 2 communities
- [[make_graph()_1]] - degree 8, connects to 1 community
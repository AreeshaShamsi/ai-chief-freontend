---
type: community
cohesion: 0.10
members: 29
---

# test_path_cli.py

**Cohesion:** 0.10 - loosely connected
**Members:** 29 nodes

## Members
- [[2074 an edge with no stored relation prints an honest 'related', not an empty…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[2074 the printed relation must be the edge's ACTUAL stored relation, never a…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[2074 the same graph must yield the same route regardless of PYTHONHASHSEED.…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[2309 control a to_json-shaped graph whose markers AGREE with the persisted…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[2309 a hop over a link stored in flipped order must render the TRUE direction…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[2309 explain's inout classification must honor _src markers — an edge…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[3-node chain where the middle link is PERSISTED in flipped endpoint order…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[A token-subset query resolves to the full-match node, not the IDF head.]] - rationale - temp-graphify/tests/test_path_cli.py
- [[Graph where IDF scoring ranks a partial-token decoy above the full match. Query…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[No full-token candidate - behavior identical to the old scored0 pick.]] - rationale - temp-graphify/tests/test_path_cli.py
- [[Regression tests for `graphify path` arrow direction (849) and determinism +…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[Two equal-length routes A-P-B and A-Q-B — a tie the traversal must resolve…]] - rationale - temp-graphify/tests/test_path_cli.py
- [[_arrow_line()]] - code - temp-graphify/tests/test_path_cli.py
- [[_diamond_graph()]] - code - temp-graphify/tests/test_path_cli.py
- [[_flipped_marker_graph()]] - code - temp-graphify/tests/test_path_cli.py
- [[_run()_9]] - code - temp-graphify/tests/test_path_cli.py
- [[_write_graph()_5]] - code - temp-graphify/tests/test_path_cli.py
- [[_write_misranking_graph()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_endpoint_falls_back_to_score_head()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_endpoint_prefers_full_token_match()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_explain_direction_recovered_from_src_tgt_markers()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_forward_arrow()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_canonical_marker_graph_still_forward()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_cli.py]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_deterministic_across_hash_seeds()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_direction_recovered_from_src_tgt_markers()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_relation_fallback_related_when_missing()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_path_relation_matches_stored_edge_not_fabricated()]] - code - temp-graphify/tests/test_path_cli.py
- [[test_reverse_arrow()]] - code - temp-graphify/tests/test_path_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_path_clipy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]

## Top bridge nodes
- [[test_path_cli.py]] - degree 18, connects to 1 community
- [[_run()_9]] - degree 9, connects to 1 community
- [[test_endpoint_falls_back_to_score_head()]] - degree 4, connects to 1 community
- [[test_explain_direction_recovered_from_src_tgt_markers()]] - degree 3, connects to 1 community
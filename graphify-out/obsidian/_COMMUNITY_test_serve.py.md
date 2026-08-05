---
type: community
cohesion: 0.05
members: 72
---

# test_serve.py

**Cohesion:** 0.05 - loosely connected
**Members:** 72 nodes

## Members
- [[2080 review a straydangling _src_tgt on an edge (hand-edited or adversarial…]] - rationale - temp-graphify/tests/test_serve.py
- [[2080 a valid _src_tgt (the stored direction) is honored even when the…]] - rationale - temp-graphify/tests/test_serve.py
- [[A high-degree hub plus a low-degree answer node, to force the answer past a…]] - rationale - temp-graphify/tests/test_serve.py
- [[A non-decode ValueError (e.g. a non-.json path) must still print the generic…]] - rationale - temp-graphify/tests/test_serve.py
- [[A term matching only 1 of N nodes should get IDF  1.]] - rationale - temp-graphify/tests/test_serve.py
- [[An annotated node gets a `learning=status` suffix inside its NODE bracket; an…]] - rationale - temp-graphify/tests/test_serve.py
- [[BUG2 a low-degree answer node passed as a seed is rendered first and survives…]] - rationale - temp-graphify/tests/test_serve.py
- [[Coverage scaling must not touch full-coverage queries (coverage == 1). A…]] - rationale - temp-graphify/tests/test_serve.py
- [[Equal-degree nodes render in a stable order regardless of set iteration.]] - rationale - temp-graphify/tests/test_serve.py
- [[IDF results are stored in G.graph so repeated queries don't recompute.]] - rationale - temp-graphify/tests/test_serve.py
- [[Japanese kana and Hangul are kept as terms but not segmented as Chinese.]] - rationale - temp-graphify/tests/test_serve.py
- [[Render subgraph as text, cutting at token_budget (approx 3 charstoken). seeds…]] - rationale - temp-graphify/graphify/serve.py
- [[Tests for serve.py - MCP graph query helpers (no mcp package required).]] - rationale - temp-graphify/tests/test_serve.py
- [[The learning= suffix is part of the NODE line BEFORE the budget cut, so it is…]] - rationale - temp-graphify/tests/test_serve.py
- [[Truncation message must tell Claude what to do, not just say truncated.]] - rationale - temp-graphify/tests/test_serve.py
- [[Two separate graph instances must not share an IDF cache.]] - rationale - temp-graphify/tests/test_serve.py
- [[When jieba is not installed, fallback to character bigrams.]] - rationale - temp-graphify/tests/test_serve.py
- [[With no overlay on the graph, NODE lines carry no learning= suffix.]] - rationale - temp-graphify/tests/test_serve.py
- [[_community_header()]] - code - temp-graphify/graphify/serve.py
- [[_load_graph()]] - code - temp-graphify/graphify/serve.py
- [[_make_graph()_4]] - code - temp-graphify/tests/test_serve.py
- [[_star_graph()]] - code - temp-graphify/tests/test_serve.py
- [[_subgraph_to_text()]] - code - temp-graphify/graphify/serve.py
- [[json.JSONDecodeError is a ValueError subclass, so its except clause must be…]] - rationale - temp-graphify/tests/test_serve.py
- [[test_bfs_depth_1()]] - code - temp-graphify/tests/test_serve.py
- [[test_bfs_depth_2()]] - code - temp-graphify/tests/test_serve.py
- [[test_bfs_disconnected()]] - code - temp-graphify/tests/test_serve.py
- [[test_bfs_returns_edges()]] - code - temp-graphify/tests/test_serve.py
- [[test_communities_from_graph_basic()]] - code - temp-graphify/tests/test_serve.py
- [[test_communities_from_graph_isolated()]] - code - temp-graphify/tests/test_serve.py
- [[test_community_header_falls_back_when_no_name()]] - code - temp-graphify/tests/test_serve.py
- [[test_community_header_sanitizes_name()]] - code - temp-graphify/tests/test_serve.py
- [[test_community_header_shows_real_name()]] - code - temp-graphify/tests/test_serve.py
- [[test_community_header_skips_placeholder_name()]] - code - temp-graphify/tests/test_serve.py
- [[test_dfs_depth_1()]] - code - temp-graphify/tests/test_serve.py
- [[test_dfs_full_chain()]] - code - temp-graphify/tests/test_serve.py
- [[test_filter_graph_by_context_limits_traversal()]] - code - temp-graphify/tests/test_serve.py
- [[test_find_node_ignores_trailing_punctuation()]] - code - temp-graphify/tests/test_serve.py
- [[test_idf_cached_on_graph()]] - code - temp-graphify/tests/test_serve.py
- [[test_idf_new_graph_starts_fresh()]] - code - temp-graphify/tests/test_serve.py
- [[test_idf_rare_term_gets_high_weight()]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_accepts_under_cap()]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_corrupted_json_prints_recovery_message()]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_generic_value_error_message_unchanged()]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_missing_file()]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_rejects_oversized_file()_1]] - code - temp-graphify/tests/test_serve.py
- [[test_load_graph_roundtrip()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_explicit_context_filter_changes_traversal()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_heuristic_context_filter_changes_traversal()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_chinese_no_jieba_fallback()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_non_chinese_scripts_are_not_segmented()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_coverage_full_coverage_query_is_unchanged()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_exact_label_match()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_ignores_trailing_punctuation()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_no_match()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_source_file_partial()]] - code - temp-graphify/tests/test_serve.py
- [[test_serve.py]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_annotates_node_with_learning_status()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_contains_labels()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_edge_included()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_honors_valid_src_tgt_direction()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_ignores_dangling_src_tgt()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_includes_edge_context()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_learning_suffix_counts_against_budget()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_marks_stale_status()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_notice_when_under_budget()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_no_overlay_is_unchanged()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_order_is_deterministic()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_seed_survives_truncation()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncates()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncation_hint_is_actionable()]] - code - temp-graphify/tests/test_serve.py
- [[test_subgraph_to_text_truncation_notice_at_top()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_servepy
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY__score_nodes]]
- 21 edges to [[_COMMUNITY__find_node]]
- 21 edges to [[_COMMUNITY_Graph]]
- 18 edges to [[_COMMUNITY_serve.py]]
- 9 edges to [[_COMMUNITY__query_terms]]
- 9 edges to [[_COMMUNITY_test_query_induced_edges.py]]
- 5 edges to [[_COMMUNITY__communities_from_graph]]
- 4 edges to [[_COMMUNITY__write_graph]]
- 2 edges to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_test_security.py]]

## Top bridge nodes
- [[test_serve.py]] - degree 138, connects to 8 communities
- [[_load_graph()]] - degree 14, connects to 7 communities
- [[_subgraph_to_text()]] - degree 20, connects to 3 communities
- [[_community_header()]] - degree 7, connects to 2 communities
- [[test_score_nodes_coverage_full_coverage_query_is_unchanged()]] - degree 5, connects to 2 communities
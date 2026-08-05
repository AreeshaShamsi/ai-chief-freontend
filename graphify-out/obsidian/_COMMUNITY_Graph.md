---
type: community
cohesion: 0.08
members: 39
---

# Graph

**Cohesion:** 0.08 - loosely connected
**Members:** 39 nodes

## Members
- [[dot-add_edge()]] - code - temp-graphify/tests/fixtures/sample.rs
- [[dot-add_node()]] - code - temp-graphify/tests/fixtures/sample.rs
- [[dot-build()_3]] - code - temp-graphify/tests/fixtures/sample.rs
- [[dot-new()]] - code - temp-graphify/tests/fixtures/sample.rs
- [[20 error-handler nodes + 1 rare identifier FooBarService.]] - rationale - temp-graphify/tests/test_serve.py
- [[A lone generic-word exact match must not bury a multi-term match. Reproduces…]] - rationale - temp-graphify/tests/test_serve.py
- [[A multi-word query equal to a whole label must resolve uniquely. Regression for…]] - rationale - temp-graphify/tests/test_serve.py
- [[A term matching most nodes should get IDF  1.]] - rationale - temp-graphify/tests/test_serve.py
- [[BUG2 regression guard the query path must pass seeds to the renderer (a branch…]] - rationale - temp-graphify/tests/test_serve.py
- [[DataProcessor_6]] - code - temp-graphify/tests/fixtures/sample.rs
- [[FooBarService error handling' should expand from FooBarService, not from error-…]] - rationale - temp-graphify/tests/test_serve.py
- [[Full pipeline '页面路由' should find nodes with '路由' in label.]] - rationale - temp-graphify/tests/test_serve.py
- [[Graph]] - code - temp-graphify/tests/fixtures/sample.rs
- [[GraphEvent]] - code - temp-graphify/tests/fixtures/sample.rs
- [[GraphPair]] - code - temp-graphify/tests/fixtures/sample.rs
- [[HashMap]] - code
- [[Logger_3]] - code - temp-graphify/tests/fixtures/sample.rs
- [[Processor_3]] - code - temp-graphify/tests/fixtures/sample.rs
- [[Result_5]] - code - temp-graphify/tests/fixtures/sample.rs
- [[Searching for '路由' should match a node with label containing '路由'.]] - rationale - temp-graphify/tests/test_serve.py
- [[Self]] - code
- [[String_3]] - code
- [[T_2]] - code
- [[Vec]] - code
- [[_make_noisy_graph()]] - code - temp-graphify/tests/test_serve.py
- [[_query_graph_text()]] - code - temp-graphify/graphify/serve.py
- [[build_graph()]] - code - temp-graphify/tests/fixtures/sample.rs
- [[error' matches 20 nodes, 'foobarservice' matches 1 — IDF should make…]] - rationale - temp-graphify/tests/test_serve.py
- [[sample.rs]] - code - temp-graphify/tests/fixtures/sample.rs
- [[test_idf_common_term_gets_low_weight()]] - code - temp-graphify/tests/test_serve.py
- [[test_idf_downweights_common_terms()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_keeps_short_non_english_terms()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_parameter_type_context_filter_changes_traversal()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_graph_text_passes_seeds_so_answer_survives()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_seeds_from_identifier_not_noise()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_text_chinese_finds_routing_nodes()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_chinese_substring_match()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_coverage_lone_generic_exact_hit_loses_to_multi_term_match()]] - code - temp-graphify/tests/test_serve.py
- [[test_score_nodes_multiword_exact_label_outranks_superset()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Graph
SORT file.name ASC
```

## Connections to other communities
- 21 edges to [[_COMMUNITY_test_serve.py]]
- 7 edges to [[_COMMUNITY__score_nodes]]
- 6 edges to [[_COMMUNITY_test_query_induced_edges.py]]
- 4 edges to [[_COMMUNITY_serve.py]]
- 4 edges to [[_COMMUNITY__find_node]]
- 3 edges to [[_COMMUNITY_test_benchmark.py]]
- 3 edges to [[_COMMUNITY_compute_pr_impact]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_test_export.py]]
- 1 edge to [[_COMMUNITY__query_terms]]
- 1 edge to [[_COMMUNITY__communities_from_graph]]
- 1 edge to [[_COMMUNITY_build_from_json_1]]
- 1 edge to [[_COMMUNITY_rawanalyze.py]]

## Top bridge nodes
- [[Graph]] - degree 40, connects to 11 communities
- [[_query_graph_text()]] - degree 22, connects to 7 communities
- [[test_score_nodes_coverage_lone_generic_exact_hit_loses_to_multi_term_match()]] - degree 5, connects to 3 communities
- [[test_score_nodes_multiword_exact_label_outranks_superset()]] - degree 5, connects to 3 communities
- [[test_idf_common_term_gets_low_weight()]] - degree 4, connects to 2 communities
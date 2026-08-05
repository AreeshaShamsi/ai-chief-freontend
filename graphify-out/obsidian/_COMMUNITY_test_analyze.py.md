---
type: community
cohesion: 0.04
members: 91
---

# test_analyze.py

**Cohesion:** 0.04 - loosely connected
**Members:** 91 nodes

## Members
- [[AMBIGUOUS edge should score higher than an otherwise identical EXTRACTED edge.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Build a minimal graph.json + analysislabels in tmp_pathgraphify-out. Mirrors…]] - rationale - temp-graphify/tests/test_reflect.py
- [[Code→doc INFERRED calls edge should score lower than same-language EXTRACTED.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Code↔paper INFERRED calls should still surface — it is a meaningful link.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Code↔paper edge should score higher than code↔code edge.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Compare two graph snapshots and return what changed. Returns { new_nodes…]] - rationale - temp-graphify/graphify/analyze.py
- [[Concept nodes (empty source_file) must not appear in surprises.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Create a graph node resembling real graphify schema.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Cross-language INFERRED calls edge should score lower than same-language…]] - rationale - temp-graphify/tests/test_analyze.py
- [[Cross-language INFERRED uses edge (the exact rsl-siege-manager false positive)…]] - rationale - temp-graphify/tests/test_analyze.py
- [[Detect circular import dependencies at the file level. Collapses symbol-level…]] - rationale - temp-graphify/graphify/analyze.py
- [[DiGraph_1]] - code
- [[EXTRACTED code↔doc edges are real facts — must not be penalised.]] - rationale - temp-graphify/tests/test_analyze.py
- [[EXTRACTED cross-language edges are real structural facts — must not be…]] - rationale - temp-graphify/tests/test_analyze.py
- [[Find connections that are genuinely surprising - not obvious from file…]] - rationale - temp-graphify/graphify/analyze.py
- [[Helper Python node in backend, TypeScript node in frontend, different…]] - rationale - temp-graphify/tests/test_analyze.py
- [[Helper build a small nx.Graph from nodeedge specs.]] - rationale - temp-graphify/tests/test_analyze.py
- [[INFERRED calls within the same language family must not be affected.]] - rationale - temp-graphify/tests/test_analyze.py
- [[JSON-key filter must match regardless of label casing.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Multi-file graph should find cross-file edges between real entities.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Return True if two source files belong to different language families.]] - rationale - temp-graphify/graphify/analyze.py
- [[Return the first path component - used to detect cross-repo edges.]] - rationale - temp-graphify/graphify/analyze.py
- [[Return the top_n most-connected real entities - the core abstractions. File-…]] - rationale - temp-graphify/graphify/analyze.py
- [[Score how surprising a cross-file edge is. Returns (score, reasons).]] - rationale - temp-graphify/graphify/analyze.py
- [[Single-file graph should return cross-community edges, not empty list.]] - rationale - temp-graphify/tests/test_analyze.py
- [[Tests for analyze.py.]] - rationale - temp-graphify/tests/test_analyze.py
- [[_cross_language()]] - code - temp-graphify/graphify/analyze.py
- [[_file_category falls back to 'doc' for unknown extensions, so INFERRED…]] - rationale - temp-graphify/tests/test_analyze.py
- [[_file_category()]] - code - temp-graphify/graphify/analyze.py
- [[_is_json_key_node()]] - code - temp-graphify/graphify/analyze.py
- [[_make_code_doc_graph()]] - code - temp-graphify/tests/test_analyze.py
- [[_make_cross_lang_graph()]] - code - temp-graphify/tests/test_analyze.py
- [[_make_cycle_graph_directed()]] - code - temp-graphify/tests/test_analyze.py
- [[_make_file_node()]] - code - temp-graphify/tests/test_analyze.py
- [[_make_graph()_3]] - code - temp-graphify/tests/test_reflect.py
- [[_make_simple_graph()]] - code - temp-graphify/tests/test_analyze.py
- [[_surprise_score()]] - code - temp-graphify/graphify/analyze.py
- [[_top_level_dir()]] - code - temp-graphify/graphify/analyze.py
- [[`semantically_similar_to` across code↔doc is explicit LLM insight — must not be…]] - rationale - temp-graphify/tests/test_analyze.py
- [[`semantically_similar_to` across languages is a genuine insight — must not be…]] - rationale - temp-graphify/tests/test_analyze.py
- [[find_import_cycles()]] - code - temp-graphify/graphify/analyze.py
- [[god_nodes must not return generic JSON key nodes like 'name' or 'id'.]] - rationale - temp-graphify/tests/test_analyze.py
- [[god_nodes()]] - code - temp-graphify/graphify/analyze.py
- [[graph_diff()]] - code - temp-graphify/graphify/analyze.py
- [[make_graph()]] - code - temp-graphify/tests/test_analyze.py
- [[npm package.json dep-block keys must be filtered from god_nodes output.…]] - rationale - temp-graphify/tests/test_analyze.py
- [[parametrize_1]] - code
- [[surprising_connections()]] - code - temp-graphify/graphify/analyze.py
- [[test_analyze.py]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_doc_extracted_calls_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_doc_inferred_calls_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_doc_inferred_semantically_similar_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_doc_inferred_uses_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_paper_inferred_calls_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_code_unknown_extension_inferred_calls_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_cross_language_extracted_calls_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_cross_language_inferred_calls_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_cross_language_inferred_uses_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_cross_language_semantically_similar_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_file_category()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_detects_2_and_3_cycles()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_empty_graph()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_handles_undirected_graph_input()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_ignores_non_import_relations()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_includes_self_loop_cycle()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_no_cycles()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_respects_max_cycle_length()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_returns_structured_records()]] - code - temp-graphify/tests/test_analyze.py
- [[test_find_import_cycles_skips_nodes_without_source_file()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_excludes_json_noise()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_excludes_npm_dep_block_keys()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_filter_is_case_insensitive()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_have_required_keys()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_returns_list()]] - code - temp-graphify/tests/test_analyze.py
- [[test_god_nodes_sorted_by_degree()]] - code - temp-graphify/tests/test_analyze.py
- [[test_graph_diff_empty_diff()]] - code - temp-graphify/tests/test_analyze.py
- [[test_graph_diff_new_edges()]] - code - temp-graphify/tests/test_analyze.py
- [[test_graph_diff_new_nodes()]] - code - temp-graphify/tests/test_analyze.py
- [[test_graph_diff_removed_nodes()]] - code - temp-graphify/tests/test_analyze.py
- [[test_is_json_key_node_noise_label()]] - code - temp-graphify/tests/test_analyze.py
- [[test_is_json_key_node_non_json_file()]] - code - temp-graphify/tests/test_analyze.py
- [[test_is_json_key_node_real_label()]] - code - temp-graphify/tests/test_analyze.py
- [[test_same_language_inferred_calls_not_suppressed()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprise_score_accepts_precomputed_degrees()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_ambiguous_scores_higher_than_extracted()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_cross_source_multi_file()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_cross_type_scores_higher()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_excludes_concept_nodes()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_have_required_keys()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_have_why_field()]] - code - temp-graphify/tests/test_analyze.py
- [[test_surprising_connections_single_file_uses_community_bridges()]] - code - temp-graphify/tests/test_analyze.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_analyzepy
SORT file.name ASC
```

## Connections to other communities
- 39 edges to [[_COMMUNITY_generate]]
- 7 edges to [[_COMMUNITY_test_reflect.py]]
- 7 edges to [[_COMMUNITY_test_export.py]]
- 4 edges to [[_COMMUNITY__rebuild_code]]
- 4 edges to [[_COMMUNITY_test_cli_export.py]]
- 4 edges to [[_COMMUNITY_test_semantic_similarity.py]]
- 3 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_serve.py]]
- 2 edges to [[_COMMUNITY_test_prs.py]]
- 2 edges to [[_COMMUNITY_test_swift_builtin_noise.py]]
- 2 edges to [[_COMMUNITY_test_cross_extension_reexport_self_cycle.py]]
- 2 edges to [[_COMMUNITY_test_js_import_resolution.py]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]

## Top bridge nodes
- [[god_nodes()]] - degree 32, connects to 9 communities
- [[surprising_connections()]] - degree 28, connects to 9 communities
- [[_make_graph()_3]] - degree 13, connects to 6 communities
- [[test_analyze.py]] - degree 67, connects to 5 communities
- [[find_import_cycles()]] - degree 18, connects to 3 communities
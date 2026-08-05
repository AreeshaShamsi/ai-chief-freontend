---
type: community
cohesion: 0.03
members: 88
---

# test_build.py

**Cohesion:** 0.03 - loosely connected
**Members:** 88 nodes

## Members
- [[1145 ghost-merge a semantic ghost collapses into the single AST node sharing…]] - rationale - temp-graphify/tests/test_build.py
- [[1279 a semanticLLM edge lacking source_file must inherit it from its source…]] - rationale - temp-graphify/tests/test_build.py
- [[1749 an `imports``references` edge must not bind across a language family. A…]] - rationale - temp-graphify/tests/test_build.py
- [[1753 two NON-AST (semantic) nodes sharing (basename, label) but from…]] - rationale - temp-graphify/tests/test_build.py
- [[1960 an explicit ``weight null`` (JSON null - None) used to survive…]] - rationale - temp-graphify/tests/test_build.py
- [[2068 two unrelated non-AST nodes with the same basename+label in DIFFERENT…]] - rationale - temp-graphify/tests/test_build.py
- [[2194 an alias-only semantic node (namepath) must participate in the ASTLLM…]] - rationale - temp-graphify/tests/test_build.py
- [[2194 edges carrying `type``confidence_score` instead of…]] - rationale - temp-graphify/tests/test_build.py
- [[2197 (separator variant) the same absolute-derived-id fragment with backslash…]] - rationale - temp-graphify/tests/test_build.py
- [[2333 raw-path mirror merge_raw_extraction (extract --no-cluster incremental)…]] - rationale - temp-graphify/tests/test_build.py
- [[23332336 (COEXIST) a semantic-only re-extract of a file replaces only that…]] - rationale - temp-graphify/tests/test_build.py
- [[23332336 inverse an AST-only re-extract of a file replaces only that file's…]] - rationale - temp-graphify/tests/test_build.py
- [[2334 _origin wins when present; unstamped legacy items fall back to the…]] - rationale - temp-graphify/tests/test_build.py
- [[F4 build_merge must refuse to read an existing graph.json that exceeds the…]] - rationale - temp-graphify/tests/test_build.py
- [[A genuine duplicate — two non-AST nodes with the SAME source_file and label —…]] - rationale - temp-graphify/tests/test_build.py
- [[A graph where docsreadme.md carries BOTH tiers (2333 COEXIST) an AST layer…]] - rationale - temp-graphify/tests/test_build.py
- [[A node_link JSON with multigraph true must load as MultiGraph and the helpers…]] - rationale - temp-graphify/tests/test_build.py
- [[A same-directory .h.cpp pair collides on their shared pre-extension id and…]] - rationale - temp-graphify/tests/test_build.py
- [[Already-relative source_file paths must not be modified.]] - rationale - temp-graphify/tests/test_build.py
- [[Collapse exact parallel edges by ``(source, target, relation)``, keeping the…]] - rationale - temp-graphify/graphify/build.py
- [[Companion to the ambiguous case above when exactly one real file claims an…]] - rationale - temp-graphify/tests/test_build.py
- [[Known invalid file_type values map to their canonical equivalents.]] - rationale - temp-graphify/tests/test_build.py
- [[Legacy 'from''to' keys on edges are accepted alongside 'source''target'.]] - rationale - temp-graphify/tests/test_build.py
- [[Legacy 'source' key on nodes is renamed to 'source_file' before graph build.]] - rationale - temp-graphify/tests/test_build.py
- [[Legacy nodes with file_type=None (e.g. preserved from older graph.json by…]] - rationale - temp-graphify/tests/test_build.py
- [[No existing graph.json + no directed= kwarg - falls back to the current…]] - rationale - temp-graphify/tests/test_build.py
- [[Nodes missing file_type entirely should also be canonicalized to 'concept'.]] - rationale - temp-graphify/tests/test_build.py
- [[Non-numeric  NaN  inf  negative weights fall back to 1.0 (the backends…]] - rationale - temp-graphify/tests/test_build.py
- [[Regression for 1061. When an extraction emits two `calls` edges between the…]] - rationale - temp-graphify/tests/test_build.py
- [[Return every edge attribute dict for (u, v); always a list.]] - rationale - temp-graphify/graphify/build.py
- [[Return one edge attribute dict for (u, v), tolerating MultiGraph. For…]] - rationale - temp-graphify/graphify/build.py
- [[The 1749 guard only drops when BOTH endpoints are known code languages, so a…]] - rationale - temp-graphify/tests/test_build.py
- [[The read-only-consumer nudge (queryserve) flags a pre-1504 graph and leaves a…]] - rationale - temp-graphify/tests/test_build.py
- [[Unknown file_type values are coerced through the synonym mapper, falling back…]] - rationale - temp-graphify/tests/test_build.py
- [[Windows backslash paths and POSIX paths for the same file must produce one node.]] - rationale - temp-graphify/tests/test_build.py
- [[_write_two_tier_graph()]] - code - temp-graphify/tests/test_build.py
- [[dedupe_edges()]] - code - temp-graphify/graphify/build.py
- [[edge_data()]] - code - temp-graphify/graphify/build.py
- [[edge_datas()]] - code - temp-graphify/graphify/build.py
- [[load_extraction()]] - code - temp-graphify/tests/test_build.py
- [[test_absolute_derived_semantic_ids_rekeyed_backslash()]] - code - temp-graphify/tests/test_build.py
- [[test_alias_node_ghost_merges_into_ast_twin()]] - code - temp-graphify/tests/test_build.py
- [[test_ambiguous_edge_preserved()]] - code - temp-graphify/tests/test_build.py
- [[test_build.py]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_ambiguous_alias_detected_despite_header_impl_salting()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_edge_count()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_node_count()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_preserves_first_direction_on_bidirectional_pair()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_relative_source_file_unchanged()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_skips_edge_with_non_hashable_endpoint()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_skips_non_hashable_node_id()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_unambiguous_old_stem_alias_still_resolves()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_ast_reextract_preserves_semantic_layer()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_fresh_graph_defaults_undirected()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_rejects_oversized_existing_graph()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_semantic_reextract_preserves_ast_layer()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merges_multiple_extractions()]] - code - temp-graphify/tests/test_build.py
- [[test_cross_family_reference_to_unknown_ext_is_kept()]] - code - temp-graphify/tests/test_build.py
- [[test_cross_language_imports_references_are_dropped()]] - code - temp-graphify/tests/test_build.py
- [[test_dedupe_edges_collapses_exact_parallels()]] - code - temp-graphify/tests/test_build.py
- [[test_dedupe_edges_is_idempotent()]] - code - temp-graphify/tests/test_build.py
- [[test_dedupe_nodes_collapses_by_id_last_wins()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_data_multidigraph()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_data_multigraph_with_parallel_edges()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_data_node_link_multigraph_roundtrip()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_data_simple_graph()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_datas_multigraph_returns_all_parallel_edges()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_datas_simple_graph_returns_singleton_list()]] - code - temp-graphify/tests/test_build.py
- [[test_edge_missing_source_file_backfilled_from_node()]] - code - temp-graphify/tests/test_build.py
- [[test_edges_have_confidence()]] - code - temp-graphify/tests/test_build.py
- [[test_file_type_synonym_mapping()]] - code - temp-graphify/tests/test_build.py
- [[test_ghost_merge_non_ast_different_files_both_survive()]] - code - temp-graphify/tests/test_build.py
- [[test_ghost_merge_non_ast_same_file_still_merges()]] - code - temp-graphify/tests/test_build.py
- [[test_ghost_merge_not_across_directories_same_basename()]] - code - temp-graphify/tests/test_build.py
- [[test_ghost_merge_unique_located_node_still_merges()]] - code - temp-graphify/tests/test_build.py
- [[test_graph_has_legacy_ids_detects_old_scheme()]] - code - temp-graphify/tests/test_build.py
- [[test_is_ast_tier_legacy_fallback()]] - code - temp-graphify/tests/test_build.py
- [[test_legacy_edge_from_to_canonicalized()]] - code - temp-graphify/tests/test_build.py
- [[test_legacy_edge_type_confidence_score_aliases_folded()]] - code - temp-graphify/tests/test_build.py
- [[test_legacy_node_source_canonicalized()]] - code - temp-graphify/tests/test_build.py
- [[test_malformed_weights_normalize()]] - code - temp-graphify/tests/test_build.py
- [[test_merge_raw_extraction_tier_scoped()]] - code - temp-graphify/tests/test_build.py
- [[test_missing_file_type_defaults_to_concept()]] - code - temp-graphify/tests/test_build.py
- [[test_nodes_have_label()]] - code - temp-graphify/tests/test_build.py
- [[test_none_file_type_defaults_to_concept()]] - code - temp-graphify/tests/test_build.py
- [[test_null_weight_edge_builds_and_clusters()]] - code - temp-graphify/tests/test_build.py
- [[test_real_invalid_file_type_coerced_to_concept()]] - code - temp-graphify/tests/test_build.py
- [[test_source_file_backslash_normalized()]] - code - temp-graphify/tests/test_build.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_buildpy
SORT file.name ASC
```

## Connections to other communities
- 42 edges to [[_COMMUNITY_build_from_json]]
- 15 edges to [[_COMMUNITY_graphifybuild.py]]
- 11 edges to [[_COMMUNITY_build]]
- 4 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_cli.py]]
- 3 edges to [[_COMMUNITY_dispatch_command]]
- 3 edges to [[_COMMUNITY_to_json]]
- 3 edges to [[_COMMUNITY_to_wiki]]
- 2 edges to [[_COMMUNITY_generate]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_serve.py]]
- 2 edges to [[_COMMUNITY_test_prs.py]]
- 2 edges to [[_COMMUNITY__semantic_id_remap]]
- 2 edges to [[_COMMUNITY_test_export.py]]
- 2 edges to [[_COMMUNITY_make_id]]
- 2 edges to [[_COMMUNITY_validate_extraction]]
- 1 edge to [[_COMMUNITY_to_obsidian]]
- 1 edge to [[_COMMUNITY_extract_js]]

## Top bridge nodes
- [[edge_data()]] - degree 24, connects to 11 communities
- [[test_build.py]] - degree 87, connects to 10 communities
- [[edge_datas()]] - degree 11, connects to 5 communities
- [[dedupe_edges()]] - degree 9, connects to 4 communities
- [[test_build_from_json_preserves_first_direction_on_bidirectional_pair()]] - degree 5, connects to 2 communities
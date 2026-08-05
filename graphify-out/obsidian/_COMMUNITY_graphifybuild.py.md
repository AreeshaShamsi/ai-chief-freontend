---
type: community
cohesion: 0.08
members: 48
---

# graphify/build.py

**Cohesion:** 0.08 - loosely connected
**Members:** 48 nodes

## Members
- [[1796 guard must not break real deletions a file in prune_sources but NOT in…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[1796 protection must hold in absolute-identity space too a file present in…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[1796 a file present in BOTH new_chunks (re-extracted) and prune_sources must…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[2012 a node whose source_file survived in ABSOLUTE form must still be pruned…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[A symlinked scan root (macOS var - privatevar, symlinked homeworktree)…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[AST vs semantic tier. _origin wins when present; unstamped legacy items…]] - rationale - temp-graphify/graphify/build.py
- [[Best-effort scan root for relativizing paths in build_merge when the caller…]] - rationale - temp-graphify/graphify/build.py
- [[Canonical dedup key — Unicode-aware, preserves CJKword characters.]] - rationale - temp-graphify/graphify/build.py
- [[Incremental --update hyperedge preservation (1574) and root-less prune…]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[Load (nodes, edges, hyperedges, directed) from an existing graph.json for an…]] - rationale - temp-graphify/graphify/build.py
- [[Load existing graph.json, merge new chunks into it, and save back. Re-extracted…]] - rationale - temp-graphify/graphify/build.py
- [[Merge nodes that share a normalised label, rewriting edge references. Prefers…]] - rationale - temp-graphify/graphify/build.py
- [[Merge the existing raw graph.json forward into a fresh raw extraction (the…]] - rationale - temp-graphify/graphify/build.py
- [[Normalize path separators and relativize absolute paths. Converts backslashes…]] - rationale - temp-graphify/graphify/build.py
- [[Path_2]] - code
- [[Path_61]] - code
- [[Pre-migration stem forms a semantic fragment may have used for ``rel``. Ordered…]] - rationale - temp-graphify/graphify/build.py
- [[Return a form-insensitive absolute identity for a source_file. prunereplace…]] - rationale - temp-graphify/graphify/build.py
- [[The runbook omits root; the fallback root must not break preservation.]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[Whether a loaded graph still uses pre-1504 node IDs (parent-dir  filename…]] - rationale - temp-graphify/graphify/build.py
- [[Write a graph.json in the shape to_json emits (top-level hyperedges).]] - rationale - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[_abs_identity()]] - code - temp-graphify/graphify/build.py
- [[_he_ids()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[_infer_merge_root()]] - code - temp-graphify/graphify/build.py
- [[_is_ast_tier()]] - code - temp-graphify/graphify/build.py
- [[_load_existing_graph()]] - code - temp-graphify/graphify/build.py
- [[_norm_label()]] - code - temp-graphify/graphify/build.py
- [[_norm_source_file()]] - code - temp-graphify/graphify/build.py
- [[_old_file_stems()]] - code - temp-graphify/graphify/build.py
- [[_seed_two_file_graph()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[_write_graph()_2]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[build_merge()]] - code - temp-graphify/graphify/build.py
- [[deduplicate_by_label()]] - code - temp-graphify/graphify/build.py
- [[graph_has_legacy_ids()]] - code - temp-graphify/graphify/build.py
- [[graphifybuild.py]] - code - temp-graphify/graphify/build.py
- [[merge_raw_extraction()]] - code - temp-graphify/graphify/build.py
- [[skipif]] - code
- [[test_build_merge_hyperedges_and_prune.py]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_deleted_file_hyperedges_are_pruned()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_genuine_deletion_still_prunes()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_prune_matches_across_symlinked_root()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_prune_matches_node_stored_absolute_against_relative_delete()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_prune_reextracted_absolute_node_not_deleted()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_prune_without_root_removes_ghost_nodes_via_grandparent_fallback()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_prune_without_root_uses_graphify_root_marker()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_reextracted_file_in_prune_sources_is_not_deleted()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_update_preserves_hyperedges_of_unchanged_files()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py
- [[test_update_without_root_still_preserves_hyperedges()]] - code - temp-graphify/tests/test_build_merge_hyperedges_and_prune.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/graphify/buildpy
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_build]]
- 15 edges to [[_COMMUNITY_test_build.py]]
- 9 edges to [[_COMMUNITY_build_from_json]]
- 8 edges to [[_COMMUNITY__rebuild_code]]
- 7 edges to [[_COMMUNITY_make_id]]
- 6 edges to [[_COMMUNITY__semantic_id_remap]]
- 5 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 5 edges to [[_COMMUNITY_dispatch_command]]
- 4 edges to [[_COMMUNITY_generate]]
- 4 edges to [[_COMMUNITY_cli.py]]
- 4 edges to [[_COMMUNITY_test_corrupt_graph_json.py]]
- 2 edges to [[_COMMUNITY_semantic_cleanup.py]]
- 2 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY_default_graph_json]]
- 2 edges to [[_COMMUNITY_test_security.py]]
- 2 edges to [[_COMMUNITY_validate_extraction]]
- 2 edges to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_benchmark.py]]
- 1 edge to [[_COMMUNITY_test_merge_graphs_cli.py]]
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY_to_wiki]]
- 1 edge to [[_COMMUNITY_test_analyze.py]]
- 1 edge to [[_COMMUNITY_test_cluster.py]]
- 1 edge to [[_COMMUNITY_test_cpp_objc_cross_file_calls.py]]
- 1 edge to [[_COMMUNITY_test_cross_extension_reexport_self_cycle.py]]
- 1 edge to [[_COMMUNITY_test_export.py]]
- 1 edge to [[_COMMUNITY_test_extract.py]]
- 1 edge to [[_COMMUNITY_test_import_self_loops.py]]
- 1 edge to [[_COMMUNITY_test_java_type_resolution.py]]
- 1 edge to [[_COMMUNITY_test_manifest_ingest.py]]
- 1 edge to [[_COMMUNITY_test_phantom_external_import.py]]
- 1 edge to [[_COMMUNITY_extract_python]]
- 1 edge to [[_COMMUNITY_test_semantic_similarity.py]]
- 1 edge to [[_COMMUNITY_test_src_layout_import_resolution.py]]
- 1 edge to [[_COMMUNITY_test_swift_cross_file_calls.py]]
- 1 edge to [[_COMMUNITY_test_swift_import_resolution.py]]
- 1 edge to [[_COMMUNITY_extract_terraform]]
- 1 edge to [[_COMMUNITY__check_shrink]]
- 1 edge to [[_COMMUNITY_test_serve.py]]

## Top bridge nodes
- [[graphifybuild.py]] - degree 76, connects to 39 communities
- [[build_merge()]] - degree 40, connects to 7 communities
- [[graph_has_legacy_ids()]] - degree 14, connects to 7 communities
- [[_norm_source_file()]] - degree 11, connects to 4 communities
- [[merge_raw_extraction()]] - degree 12, connects to 3 communities
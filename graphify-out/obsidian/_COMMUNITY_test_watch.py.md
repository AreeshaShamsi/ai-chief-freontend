---
type: community
cohesion: 0.04
members: 58
---

# test_watch.py

**Cohesion:** 0.04 - loosely connected
**Members:** 58 nodes

## Members
- [[09b33b7 guard a doc with NO semantic layer still gets the AST quick-scan so…]] - rationale - temp-graphify/tests/test_watch.py
- [[1007 graphify update (_rebuild_code with no changed_paths) must remove nodes…]] - rationale - temp-graphify/tests/test_watch.py
- [[1116 guard tier-scoping the full-rebuild ownership rule (2333) must not stop…]] - rationale - temp-graphify/tests/test_watch.py
- [[1116 graphify update (_rebuild_code with no changed_paths) must prune a…]] - rationale - temp-graphify/tests/test_watch.py
- [[1118 backward-compat a graph.json built before 1116 has no `_origin`…]] - rationale - temp-graphify/tests/test_watch.py
- [[1808 `graphify update`  _rebuild_code must forward community_labels to…]] - rationale - temp-graphify/tests/test_watch.py
- [[1837 after an initial build, a plain `graphify update` (full re-scan, no…]] - rationale - temp-graphify/tests/test_watch.py
- [[1880 `graphify update` must not emit 0 nodes (and then refuse to overwrite)…]] - rationale - temp-graphify/tests/test_watch.py
- [[2014 a doc represented ONLY by code-typed semantic nodes (symbols surfaced…]] - rationale - temp-graphify/tests/test_watch.py
- [[2051 a full `graphify update` must evict semantic nodes whose non-AST source…]] - rationale - temp-graphify/tests/test_watch.py
- [[2333 (COEXIST) a doc that carries BOTH an AST heading layer and a semantic…]] - rationale - temp-graphify/tests/test_watch.py
- [[2334 a legacy heading node without the _origin stamp (pre-0.9.16 graph) must…]] - rationale - temp-graphify/tests/test_watch.py
- [[2342, --no-cluster path candidate_graph_data was built straight from the raw…]] - rationale - temp-graphify/tests/test_watch.py
- [[2342 the clustered `graphify update` rebuild path built the graph via…]] - rationale - temp-graphify/tests/test_watch.py
- [[An existing undirected graph (no directed key, the on-disk default) must not be…]] - rationale - temp-graphify/tests/test_watch.py
- [[Crossing the viz node limit must not leave the project with no graph.html.…]] - rationale - temp-graphify/tests/test_watch.py
- [[Like ``_seed_semantic_doc_graph``, but guide.md's semantic layer is ONLY code-…]] - rationale - temp-graphify/tests/test_watch.py
- [[No existing graph at all (first build via _rebuild_code) must still default to…]] - rationale - temp-graphify/tests/test_watch.py
- [[Tests for watch.py - file watcher helpers (no watchdog required).]] - rationale - temp-graphify/tests/test_watch.py
- [[When the caller supplies an absolute path, ``.graphify_root`` stores that…]] - rationale - temp-graphify/tests/test_watch.py
- [[Write a flag file and print a notification (fallback for non-code-only corpora).]] - rationale - temp-graphify/graphify/watch.py
- [[_notify_only()]] - code - temp-graphify/graphify/watch.py
- [[_seed_semantic_doc_graph_code_only()]] - code - temp-graphify/tests/test_watch.py
- [[_watchdog_available()]] - code - temp-graphify/tests/test_watch.py
- [[check_update never removes the needs_update flag (clearing is LLM's job).]] - rationale - temp-graphify/tests/test_watch.py
- [[check_update returns True and is silent when needs_update flag is absent.]] - rationale - temp-graphify/tests/test_watch.py
- [[check_update returns True and prints notification when flag exists.]] - rationale - temp-graphify/tests/test_watch.py
- [[test_check_update_does_not_clear_flag()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_update_no_flag_returns_true()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_update_with_flag_returns_true_and_prints()]] - code - temp-graphify/tests/test_watch.py
- [[test_full_rebuild_drops_stale_ast_for_reextracted_code()]] - code - temp-graphify/tests/test_watch.py
- [[test_full_rebuild_preserves_semantic_backed_doc_ast_layer()]] - code - temp-graphify/tests/test_watch.py
- [[test_full_rebuild_regenerates_docs_with_legacy_unstamped_nodes()]] - code - temp-graphify/tests/test_watch.py
- [[test_graphify_root_preserves_absolute_when_user_supplied()]] - code - temp-graphify/tests/test_watch.py
- [[test_notify_only_creates_flag()]] - code - temp-graphify/tests/test_watch.py
- [[test_notify_only_creates_flag_dir()]] - code - temp-graphify/tests/test_watch.py
- [[test_notify_only_idempotent()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_code_only_semantic_doc_not_double_represented_on_full_rebuild()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_evicts_nodes_from_deleted_files()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_evicts_removed_symbol_from_surviving_file()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_evicts_semantic_nodes_from_deleted_non_ast_source()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_fresh_build_defaults_undirected()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_inherits_directed_flag_clustered()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_inherits_directed_flag_no_cluster()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_is_idempotent_when_cluster_ids_flap()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_keeps_a_visualization_when_over_the_viz_cap()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_keeps_undirected_graph_undirected()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_preupgrade_marker_less_node_one_cycle_lag()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_quick_scans_doc_without_semantic_nodes()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_skips_cluster_when_topology_unchanged()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_writes_community_name()]] - code - temp-graphify/tests/test_watch.py
- [[test_update_discovers_newly_added_files_and_dirs()]] - code - temp-graphify/tests/test_watch.py
- [[test_update_rebuilds_with_nested_star_gitignore()]] - code - temp-graphify/tests/test_watch.py
- [[test_watch.py]] - code - temp-graphify/tests/test_watch.py
- [[test_watched_extensions_excludes_noise()]] - code - temp-graphify/tests/test_watch.py
- [[test_watched_extensions_includes_code()]] - code - temp-graphify/tests/test_watch.py
- [[test_watched_extensions_includes_docs()]] - code - temp-graphify/tests/test_watch.py
- [[test_watched_extensions_includes_images()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_watchpy
SORT file.name ASC
```

## Connections to other communities
- 32 edges to [[_COMMUNITY__rebuild_code]]
- 17 edges to [[_COMMUNITY_Path_1]]
- 11 edges to [[_COMMUNITY_skipif]]
- 11 edges to [[_COMMUNITY__check_shrink]]
- 10 edges to [[_COMMUNITY_parametrize]]
- 6 edges to [[_COMMUNITY__queue_pending]]
- 4 edges to [[_COMMUNITY_cli.py]]
- 3 edges to [[_COMMUNITY__write_build_config]]
- 3 edges to [[_COMMUNITY__seed_semantic_doc_graph]]
- 2 edges to [[_COMMUNITY_label_communities_by_hub]]
- 1 edge to [[_COMMUNITY_generate]]
- 1 edge to [[_COMMUNITY_detect.py]]

## Top bridge nodes
- [[test_watch.py]] - degree 108, connects to 12 communities
- [[_notify_only()]] - degree 8, connects to 1 community
- [[_seed_semantic_doc_graph_code_only()]] - degree 4, connects to 1 community
- [[test_rebuild_code_code_only_semantic_doc_not_double_represented_on_full_rebuild()]] - degree 4, connects to 1 community
- [[test_check_update_does_not_clear_flag()]] - degree 3, connects to 1 community
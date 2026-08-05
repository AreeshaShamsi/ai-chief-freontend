---
type: community
cohesion: 0.09
members: 51
---

# dispatch_command

**Cohesion:** 0.09 - loosely connected
**Members:** 51 nodes

## Members
- [[F4 global_add must refuse to read a source graph.json that exceeds the size…]] - rationale - temp-graphify/tests/test_global_graph.py
- [[dot-__init__()_3]] - code - temp-graphify/graphify/cli.py
- [[dot-mark()]] - code - temp-graphify/graphify/cli.py
- [[dot-total()]] - code - temp-graphify/graphify/cli.py
- [[Add or update a project graph in the global graph. Returns a summary dict with…]] - rationale - temp-graphify/graphify/global_graph.py
- [[Build a simple nx.Graph from node dicts.]] - rationale - temp-graphify/tests/test_global_graph.py
- [[Edges incident to an external node that gets deduplicated against an already-…]] - rationale - temp-graphify/tests/test_global_graph.py
- [[Path_38]] - code
- [[Print per-stage wall-clock timings to stderr when --timing is set (1490).…]] - rationale - temp-graphify/graphify/cli.py
- [[Remove all nodes for repo_tag from the global graph. Returns count removed.]] - rationale - temp-graphify/graphify/global_graph.py
- [[Remove all nodes tagged with repo_tag from G in-place. Returns count removed.]] - rationale - temp-graphify/graphify/build.py
- [[Return a copy of G with all node IDs prefixed with repo_tag. Labels are…]] - rationale - temp-graphify/graphify/build.py
- [[Return the manifest repos dict.]] - rationale - temp-graphify/graphify/global_graph.py
- [[Tests for the global graph infrastructure (graphifyglobal_graph.py),…]] - rationale - temp-graphify/tests/test_global_graph.py
- [[_StageTimer]] - code - temp-graphify/graphify/cli.py
- [[_file_hash()]] - code - temp-graphify/graphify/global_graph.py
- [[_graph_to_json()]] - code - temp-graphify/tests/test_global_graph.py
- [[_load_global_graph()]] - code - temp-graphify/graphify/global_graph.py
- [[_load_manifest()]] - code - temp-graphify/graphify/global_graph.py
- [[_make_graph()_2]] - code - temp-graphify/tests/test_global_graph.py
- [[_save_global_graph()]] - code - temp-graphify/graphify/global_graph.py
- [[_save_manifest()]] - code - temp-graphify/graphify/global_graph.py
- [[dispatch_command()]] - code - temp-graphify/graphify/cli.py
- [[global_add()]] - code - temp-graphify/graphify/global_graph.py
- [[global_graph.py]] - code - temp-graphify/graphify/global_graph.py
- [[global_list()]] - code - temp-graphify/graphify/global_graph.py
- [[global_path()]] - code - temp-graphify/graphify/global_graph.py
- [[global_remove()]] - code - temp-graphify/graphify/global_graph.py
- [[merge-graphs should prefix node IDs with repo name to avoid silent collision.]] - rationale - temp-graphify/tests/test_global_graph.py
- [[prefix_graph_for_global must update directional edge attributes (_src_tgt) so…]] - rationale - temp-graphify/tests/test_global_graph.py
- [[prefix_graph_for_global()]] - code - temp-graphify/graphify/build.py
- [[prune_repo_from_graph()]] - code - temp-graphify/graphify/build.py
- [[test_dedup_ok_with_no_repo_attr()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_dedup_ok_with_single_repo()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_dedup_raises_on_cross_repo_nodes()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_collision_warning()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_creates_global_graph()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_rejects_oversized_source_graph()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_rewires_edges_to_deduplicated_externals()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_skip_on_unchanged_hash()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_add_two_repos_no_collision()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_graph.py]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_remove()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_global_remove_unknown_tag_raises()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_merge_graphs_prefixes_ids()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prefix_graph_preserves_label()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prefix_graph_rewrites_edge_directional_attributes()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prefix_graph_rewrites_edges()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prefix_graph_sets_repo_and_local_id()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prune_repo_removes_correct_nodes()]] - code - temp-graphify/tests/test_global_graph.py
- [[test_prune_repo_returns_zero_if_not_present()]] - code - temp-graphify/tests/test_global_graph.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/dispatch_command
SORT file.name ASC
```

## Connections to other communities
- 22 edges to [[_COMMUNITY_cli.py]]
- 5 edges to [[_COMMUNITY_graphifybuild.py]]
- 5 edges to [[_COMMUNITY__rebuild_code]]
- 5 edges to [[_COMMUNITY_paths.py]]
- 4 edges to [[_COMMUNITY_test_export.py]]
- 4 edges to [[_COMMUNITY_to_json]]
- 4 edges to [[_COMMUNITY_test_security.py]]
- 4 edges to [[_COMMUNITY_deduplicate_entities]]
- 3 edges to [[_COMMUNITY_graphify__main__.py]]
- 3 edges to [[_COMMUNITY_generate]]
- 3 edges to [[_COMMUNITY_test_build.py]]
- 3 edges to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 3 edges to [[_COMMUNITY_extract_files_direct]]
- 2 edges to [[_COMMUNITY_test_analyze.py]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_save_semantic_cache]]
- 2 edges to [[_COMMUNITY_label_communities_by_hub]]
- 2 edges to [[_COMMUNITY_detect.py]]
- 2 edges to [[_COMMUNITY_to_obsidian]]
- 2 edges to [[_COMMUNITY_hooks.py]]
- 2 edges to [[_COMMUNITY__load_custom_providers]]
- 2 edges to [[_COMMUNITY_test_reflect.py]]
- 2 edges to [[_COMMUNITY_reflect.py]]
- 2 edges to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY_affected_nodes]]
- 1 edge to [[_COMMUNITY_test_corrupt_graph_json.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_build]]
- 1 edge to [[_COMMUNITY_test_merge_graphs_cli.py]]
- 1 edge to [[_COMMUNITY_file_hash]]
- 1 edge to [[_COMMUNITY_cache.py]]
- 1 edge to [[_COMMUNITY_test_cache.py]]
- 1 edge to [[_COMMUNITY_write_callflow_html]]
- 1 edge to [[_COMMUNITY_introspect_cargo]]
- 1 edge to [[_COMMUNITY__stale_graph_sources]]
- 1 edge to [[_COMMUNITY_test_cluster.py]]
- 1 edge to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY_backup_if_protected]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_install]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_save_query_result]]
- 1 edge to [[_COMMUNITY__call_claude_cli]]
- 1 edge to [[_COMMUNITY_test_chunking.py]]
- 1 edge to [[_COMMUNITY_test_labeling.py]]
- 1 edge to [[_COMMUNITY_validate_extraction]]
- 1 edge to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY_test_querylog.py]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_load_validated_semantic_fragment]]
- 1 edge to [[_COMMUNITY__find_node]]
- 1 edge to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY__score_nodes]]
- 1 edge to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 1 edge to [[_COMMUNITY__write_build_config]]
- 1 edge to [[_COMMUNITY_to_wiki]]

## Top bridge nodes
- [[dispatch_command()]] - degree 114, connects to 57 communities
- [[global_add()]] - degree 21, connects to 2 communities
- [[global_graph.py]] - degree 13, connects to 2 communities
- [[prefix_graph_for_global()]] - degree 12, connects to 2 communities
- [[_load_global_graph()]] - degree 8, connects to 2 communities
---
source_file: "temp-graphify/graphify/build.py"
type: "code"
community: "graphify/build.py"
location: "L1375"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/graphify/buildpy
---

# build_merge()

## Connections
- [[Load existing graph.json, merge new chunks into it, and save back. Re-extracted…]] - `rationale_for` [EXTRACTED]
- [[Path_2]] - `references` [EXTRACTED]
- [[_abs_identity()]] - `calls` [EXTRACTED]
- [[_infer_merge_root()]] - `calls` [EXTRACTED]
- [[_is_ast_tier()]] - `calls` [EXTRACTED]
- [[_load_existing_graph()]] - `calls` [EXTRACTED]
- [[_norm_source_file()]] - `calls` [EXTRACTED]
- [[attach_hyperedges()]] - `calls` [EXTRACTED]
- [[build()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[default_graph_json()]] - `calls` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[graphifybuild.py]] - `contains` [EXTRACTED]
- [[test_build.py]] - `imports` [EXTRACTED]
- [[test_build_merge_ast_reextract_preserves_semantic_layer()]] - `calls` [EXTRACTED]
- [[test_build_merge_corrupt_graph_raises_runtimeerror()]] - `calls` [EXTRACTED]
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - `calls` [EXTRACTED]
- [[test_build_merge_explicit_directed_overrides_disk_flag()]] - `calls` [EXTRACTED]
- [[test_build_merge_fresh_graph_defaults_undirected()]] - `calls` [EXTRACTED]
- [[test_build_merge_hyperedges_and_prune.py]] - `imports` [EXTRACTED]
- [[test_build_merge_inherits_directed_flag_from_disk()]] - `calls` [EXTRACTED]
- [[test_build_merge_preserves_call_edge_direction()]] - `calls` [EXTRACTED]
- [[test_build_merge_prune_absolute_paths_match_relative_nodes()]] - `calls` [EXTRACTED]
- [[test_build_merge_prune_windows_backslash_paths()]] - `calls` [EXTRACTED]
- [[test_build_merge_rejects_oversized_existing_graph()]] - `calls` [EXTRACTED]
- [[test_build_merge_replaces_changed_file_stale_edges()]] - `calls` [EXTRACTED]
- [[test_build_merge_root_collapses_convention_drift()]] - `calls` [EXTRACTED]
- [[test_build_merge_semantic_reextract_preserves_ast_layer()]] - `calls` [EXTRACTED]
- [[test_corrupt_graph_json.py]] - `imports` [EXTRACTED]
- [[test_deleted_file_hyperedges_are_pruned()]] - `calls` [EXTRACTED]
- [[test_genuine_deletion_still_prunes()]] - `calls` [EXTRACTED]
- [[test_prune_matches_across_symlinked_root()]] - `calls` [EXTRACTED]
- [[test_prune_matches_node_stored_absolute_against_relative_delete()]] - `calls` [EXTRACTED]
- [[test_prune_reextracted_absolute_node_not_deleted()]] - `calls` [EXTRACTED]
- [[test_prune_without_root_removes_ghost_nodes_via_grandparent_fallback()]] - `calls` [EXTRACTED]
- [[test_prune_without_root_uses_graphify_root_marker()]] - `calls` [EXTRACTED]
- [[test_reextracted_file_in_prune_sources_is_not_deleted()]] - `calls` [EXTRACTED]
- [[test_update_preserves_hyperedges_of_unchanged_files()]] - `calls` [EXTRACTED]
- [[test_update_without_root_still_preserves_hyperedges()]] - `calls` [EXTRACTED]
- [[test_valid_graph_still_loads()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/graphify/buildpy
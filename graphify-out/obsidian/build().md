---
source_file: "temp-graphify/graphify/build.py"
type: "code"
community: "build"
location: "L1103"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/build
---

# build()

## Connections
- [[Merge multiple extraction results into one graph. directed=True produces a…]] - `rationale_for` [EXTRACTED]
- [[Path_2]] - `references` [EXTRACTED]
- [[_coerce_non_string_ids()]] - `calls` [EXTRACTED]
- [[_fold_node_aliases()]] - `calls` [EXTRACTED]
- [[build_from_json()]] - `calls` [EXTRACTED]
- [[build_merge()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[graphifybuild.py]] - `contains` [EXTRACTED]
- [[test_build.py]] - `imports` [EXTRACTED]
- [[test_build_accepts_a_single_int_id_node_with_no_duplicate()]] - `calls` [EXTRACTED]
- [[test_build_calls_dedup()]] - `calls` [EXTRACTED]
- [[test_build_dedup_preserves_semantic_attributes()]] - `calls` [EXTRACTED]
- [[test_build_drops_persisted_target_file_from_a_pre_fix_graph()]] - `calls` [EXTRACTED]
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - `calls` [EXTRACTED]
- [[test_build_merge_explicit_directed_overrides_disk_flag()]] - `calls` [EXTRACTED]
- [[test_build_merge_inherits_directed_flag_from_disk()]] - `calls` [EXTRACTED]
- [[test_build_merge_preserves_call_edge_direction()]] - `calls` [EXTRACTED]
- [[test_build_merge_prune_absolute_paths_match_relative_nodes()]] - `calls` [EXTRACTED]
- [[test_build_merge_prune_windows_backslash_paths()]] - `calls` [EXTRACTED]
- [[test_build_merge_replaces_changed_file_stale_edges()]] - `calls` [EXTRACTED]
- [[test_build_merge_root_collapses_convention_drift()]] - `calls` [EXTRACTED]
- [[test_build_merges_multiple_extractions()]] - `calls` [EXTRACTED]
- [[test_build_relativizes_absolute_source_file()]] - `calls` [EXTRACTED]
- [[test_cross_extension_reexport_self_cycle.py]] - `imports` [EXTRACTED]
- [[test_dedup.py]] - `imports` [EXTRACTED]
- [[test_float_id_is_coerced_too()]] - `calls` [EXTRACTED]
- [[test_graph_json_has_no_target_file_and_no_absolute_path()]] - `calls` [EXTRACTED]
- [[test_graph_json_is_checkout_location_independent()]] - `calls` [EXTRACTED]
- [[test_hyperedge_members_are_coerced_with_their_nodes()]] - `calls` [EXTRACTED]
- [[test_int_id_endpoints_stay_connected_after_coercion()]] - `calls` [EXTRACTED]
- [[test_int_id_survives_a_fuzzy_dedup_group()]] - `calls` [EXTRACTED]
- [[test_legacy_from_to_endpoints_are_coerced()]] - `calls` [EXTRACTED]
- [[test_non_string_node_ids.py]] - `imports` [EXTRACTED]
- [[test_pick_winner_survives_int_id_in_duplicate_group()]] - `calls` [EXTRACTED]
- [[test_string_ids_are_untouched()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/build
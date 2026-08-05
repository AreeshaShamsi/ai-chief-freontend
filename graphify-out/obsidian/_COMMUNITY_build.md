---
type: community
cohesion: 0.05
members: 55
---

# build

**Cohesion:** 0.05 - loosely connected
**Members:** 55 nodes

## Members
- [[1007 manifest stores absolute paths, graph nodes store relative paths.…]] - rationale - temp-graphify/tests/test_build.py
- [[1007 prune_sources with Windows-style backslash absolute paths must still…]] - rationale - temp-graphify/tests/test_build.py
- [[A numeric endpoint with no node of its own must behave like a string one. Both…]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[An explicit directed=TrueFalse from the caller must still win over whatever is…]] - rationale - temp-graphify/tests/test_build.py
- [[Coerce numeric node ids and edgehyperedge references to str, in place (2326).…]] - rationale - temp-graphify/graphify/build.py
- [[Coercing node ids without coercing endpoints would orphan the edge.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[Fold legacy node field aliases onto canonical keys, in place (2194). ``name``…]] - rationale - temp-graphify/graphify/build.py
- [[Merge multiple extraction results into one graph. directed=True produces a…]] - rationale - temp-graphify/graphify/build.py
- [[Non-string node ids from LLM backends must not crash the build (2326). A…]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[Only numeric scalars are coerced; str(None) == 'None' would be a lie.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[Re-extracting a CHANGED file must REPLACE its prior nodesedges, not accumulate…]] - rationale - temp-graphify/tests/test_build.py
- [[Regression for 2342. build_merge with no explicit `directed=` must honor the…]] - rationale - temp-graphify/tests/test_build.py
- [[Regression for 2342 once build_merge correctly inherits the on-disk…]] - rationale - temp-graphify/tests/test_build.py
- [[Regression for 760. When the callee is defined before the caller in source,…]] - rationale - temp-graphify/tests/test_build.py
- [[Regression guard the normal path must be byte-identical.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[Reloading a persisted graph does not go through build()dedup.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[Return a str for a numeric id, else the value unchanged. ``bool`` is excluded…]] - rationale - temp-graphify/graphify/build.py
- [[Skill contract the extraction subagent must emit source_file as the verbatim…]] - rationale - temp-graphify/tests/test_build.py
- [[The default build path must not discard semantic enrichment (2091).]] - rationale - temp-graphify/tests/test_dedup.py
- [[_coerce_id()]] - code - temp-graphify/graphify/build.py
- [[_coerce_non_string_ids()]] - code - temp-graphify/graphify/build.py
- [[_edge()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[_fold_node_aliases()]] - code - temp-graphify/graphify/build.py
- [[_node()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[build()]] - code - temp-graphify/graphify/build.py
- [[build() passes root through to build_from_json (932).]] - rationale - temp-graphify/tests/test_build.py
- [[build() should deduplicate near-identical nodes across extractions.]] - rationale - temp-graphify/tests/test_dedup.py
- [[build_from_json's sorted(node_set) crashed even with nothing to dedup.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[dedup reads the legacy fromto aliases (803), so they need it as well.]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[dedup._pick_winner regex-searched the raw id (the issue's traceback). Driven…]] - rationale - temp-graphify/tests/test_non_string_node_ids.py
- [[parametrize_18]] - code
- [[test_bool_id_is_not_coerced()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_build_accepts_a_single_int_id_node_with_no_duplicate()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_build_calls_dedup()]] - code - temp-graphify/tests/test_dedup.py
- [[test_build_dedup_preserves_semantic_attributes()]] - code - temp-graphify/tests/test_dedup.py
- [[test_build_from_json_coerces_on_the_direct_entry()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_explicit_directed_overrides_disk_flag()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_inherits_directed_flag_from_disk()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_preserves_call_edge_direction()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_prune_absolute_paths_match_relative_nodes()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_prune_windows_backslash_paths()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_replaces_changed_file_stale_edges()]] - code - temp-graphify/tests/test_build.py
- [[test_build_merge_root_collapses_convention_drift()]] - code - temp-graphify/tests/test_build.py
- [[test_build_relativizes_absolute_source_file()]] - code - temp-graphify/tests/test_build.py
- [[test_float_id_is_coerced_too()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_hyperedge_members_are_coerced_with_their_nodes()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_int_id_endpoints_stay_connected_after_coercion()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_int_id_survives_a_fuzzy_dedup_group()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_legacy_from_to_endpoints_are_coerced()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_non_scalar_ids_are_left_for_validation()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_non_string_node_ids.py]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_numeric_endpoint_with_no_matching_node_matches_the_string_case()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_pick_winner_survives_int_id_in_duplicate_group()]] - code - temp-graphify/tests/test_non_string_node_ids.py
- [[test_string_ids_are_untouched()]] - code - temp-graphify/tests/test_non_string_node_ids.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build
SORT file.name ASC
```

## Connections to other communities
- 15 edges to [[_COMMUNITY_graphifybuild.py]]
- 11 edges to [[_COMMUNITY_test_build.py]]
- 6 edges to [[_COMMUNITY_build_from_json]]
- 4 edges to [[_COMMUNITY_test_cross_extension_reexport_self_cycle.py]]
- 4 edges to [[_COMMUNITY_to_json]]
- 3 edges to [[_COMMUNITY_test_dedup.py]]
- 2 edges to [[_COMMUNITY_extract_js]]
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_detect.py]]

## Top bridge nodes
- [[build()]] - degree 37, connects to 8 communities
- [[test_build_merge_directed_edge_direction_survives_round_trip()]] - degree 6, connects to 4 communities
- [[test_build_merge_preserves_call_edge_direction()]] - degree 6, connects to 4 communities
- [[test_build_merge_explicit_directed_overrides_disk_flag()]] - degree 5, connects to 3 communities
- [[test_build_merge_inherits_directed_flag_from_disk()]] - degree 5, connects to 3 communities
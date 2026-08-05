---
type: community
cohesion: 0.05
members: 56
---

# build_from_json

**Cohesion:** 0.05 - loosely connected
**Members:** 56 nodes

## Members
- [[1799 guard a code symbol `foo` and an unrelated `foo_doc` (not…]] - rationale - temp-graphify/tests/test_build.py
- [[1799 the markdown quick-scan's bare `slug` doc node and the semantic…]] - rationale - temp-graphify/tests/test_build.py
- [[1916 build_from_json used to copy hyperedges into G.graphhyperedges…]] - rationale - temp-graphify/tests/test_build.py
- [[2068 the ghost-merge key is the full source_file, not the bare basename. A…]] - rationale - temp-graphify/tests/test_build.py
- [[2194 a mixed batch of schema errors must report per-cause counts, not just…]] - rationale - temp-graphify/tests/test_build.py
- [[2194 a recovered alias node must serialize with a non-empty norm_label so…]] - rationale - temp-graphify/tests/test_build.py
- [[2194 when both the canonical field and its alias are present, the canonical…]] - rationale - temp-graphify/tests/test_build.py
- [[2197 a semantic fragment whose ids were derived from an ABSOLUTE source_file…]] - rationale - temp-graphify/tests/test_build.py
- [[Alias normalization must run BEFORE the semantic id-remap loop so a…]] - rationale - temp-graphify/tests/test_hypergraph.py
- [[Build a NetworkX graph from an extraction dict. directed=True produces a…]] - rationale - temp-graphify/graphify/build.py
- [[Fold legacy edge field aliases onto canonical keys, in place (2194). ``type``…]] - rationale - temp-graphify/graphify/build.py
- [[Map a markdown quick-scan's bare doc node ``slug`` to the semantic…]] - rationale - temp-graphify/graphify/build.py
- [[Semantic subagents emit absolute source_file paths; build_from_json must…]] - rationale - temp-graphify/tests/test_build.py
- [[Store hyperedges in the graph's metadata dict.]] - rationale - temp-graphify/graphify/export.py
- [[Tests for hyperedge support in graphify.]] - rationale - temp-graphify/tests/test_hypergraph.py
- [[The 1504 old-stem alias (e.g. ping.h - bare ping) is meant to let a…]] - rationale - temp-graphify/tests/test_build.py
- [[Three hyperedges, one per member-key spelling nodes  members  node_ids.]] - rationale - temp-graphify/tests/test_hypergraph.py
- [[Write graph.json then reload it - hyperedges must survive.]] - rationale - temp-graphify/tests/test_hypergraph.py
- [[_alias_extraction()]] - code - temp-graphify/tests/test_hypergraph.py
- [[_doc_twin_remap()]] - code - temp-graphify/graphify/build.py
- [[_fold_edge_aliases()]] - code - temp-graphify/graphify/build.py
- [[_make_report()]] - code - temp-graphify/tests/test_hypergraph.py
- [[attach_hyperedges()]] - code - temp-graphify/graphify/export.py
- [[build_from_json()]] - code - temp-graphify/graphify/build.py
- [[build_from_json(root=...) must relativize hyperedge source_file like it already…]] - rationale - temp-graphify/tests/test_hypergraph.py
- [[test_absolute_derived_semantic_ids_rekeyed()]] - code - temp-graphify/tests/test_build.py
- [[test_alias_node_gets_nonempty_norm_label()]] - code - temp-graphify/tests/test_build.py
- [[test_attach_hyperedges_adds_new()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_attach_hyperedges_deduplicates()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_attach_hyperedges_multiple_different_ids()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_attach_hyperedges_skips_entry_without_id()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_canonical_nodes_wins_over_alias()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_dedups_alias_members_preserving_order()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_from_json_ambiguous_old_stem_alias_stays_dangling()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_missing_hyperedges_key()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_from_json_no_hyperedges()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_from_json_prunes_dangling_hyperedge_members()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_relativizes_absolute_source_file()]] - code - temp-graphify/tests/test_build.py
- [[test_build_from_json_relativizes_hyperedge_source_file()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_from_json_stores_hyperedges()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_normalizes_member_aliases_to_nodes()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_rekeys_alias_keyed_hyperedge_members()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_build_warns_once_per_aliased_hyperedge()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_doc_twin_merge_does_not_touch_code_symbols()]] - code - temp-graphify/tests/test_build.py
- [[test_extraction_warning_breakdown_by_cause()]] - code - temp-graphify/tests/test_build.py
- [[test_ghost_merge_uses_source_file_not_basename()]] - code - temp-graphify/tests/test_build.py
- [[test_hyperedges_roundtrip_via_json_file()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_hypergraph.py]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_markdown_doc_twin_merges_into_semantic_doc_node()]] - code - temp-graphify/tests/test_build.py
- [[test_node_alias_canonical_field_wins()]] - code - temp-graphify/tests/test_build.py
- [[test_report_includes_hyperedge_node_list()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_report_includes_hyperedges_section()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_report_skips_hyperedges_section_when_empty()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_report_skips_hyperedges_section_when_key_missing()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_to_json_hyperedges_empty_when_none()]] - code - temp-graphify/tests/test_hypergraph.py
- [[test_to_json_includes_hyperedges()]] - code - temp-graphify/tests/test_hypergraph.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_from_json
SORT file.name ASC
```

## Connections to other communities
- 42 edges to [[_COMMUNITY_test_build.py]]
- 15 edges to [[_COMMUNITY_generate]]
- 9 edges to [[_COMMUNITY_graphifybuild.py]]
- 8 edges to [[_COMMUNITY_to_json]]
- 6 edges to [[_COMMUNITY_build]]
- 5 edges to [[_COMMUNITY_test_export.py]]
- 4 edges to [[_COMMUNITY_validate_extraction]]
- 4 edges to [[_COMMUNITY_test_src_layout_import_resolution.py]]
- 3 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 3 edges to [[_COMMUNITY__semantic_id_remap]]
- 3 edges to [[_COMMUNITY_make_id]]
- 3 edges to [[_COMMUNITY_test_analyze.py]]
- 3 edges to [[_COMMUNITY_test_cpp_objc_cross_file_calls.py]]
- 3 edges to [[_COMMUNITY_test_falkordb_integration.py]]
- 3 edges to [[_COMMUNITY_test_import_self_loops.py]]
- 3 edges to [[_COMMUNITY_test_java_type_resolution.py]]
- 3 edges to [[_COMMUNITY_test_manifest_ingest.py]]
- 3 edges to [[_COMMUNITY_test_phantom_external_import.py]]
- 2 edges to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 2 edges to [[_COMMUNITY_test_cli_export.py]]
- 2 edges to [[_COMMUNITY_test_cluster.py]]
- 2 edges to [[_COMMUNITY_to_obsidian]]
- 2 edges to [[_COMMUNITY_extract_python]]
- 2 edges to [[_COMMUNITY_test_semantic_similarity.py]]
- 2 edges to [[_COMMUNITY_test_swift_cross_file_calls.py]]
- 2 edges to [[_COMMUNITY_test_swift_import_resolution.py]]
- 2 edges to [[_COMMUNITY_extract_terraform]]
- 1 edge to [[_COMMUNITY_semantic_cleanup.py]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_test_extract.py]]
- 1 edge to [[_COMMUNITY_extract_json]]
- 1 edge to [[_COMMUNITY_test_languages.py]]
- 1 edge to [[_COMMUNITY__labels]]
- 1 edge to [[_COMMUNITY_test_reflect.py]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_ingest_scip_json]]

## Top bridge nodes
- [[build_from_json()]] - degree 159, connects to 40 communities
- [[test_hypergraph.py]] - degree 30, connects to 3 communities
- [[attach_hyperedges()]] - degree 9, connects to 2 communities
- [[test_absolute_derived_semantic_ids_rekeyed()]] - degree 4, connects to 2 communities
- [[test_alias_node_gets_nonempty_norm_label()]] - degree 4, connects to 2 communities
---
type: community
cohesion: 0.05
members: 40
---

# ingest_scip_json

**Cohesion:** 0.05 - loosely connected
**Members:** 40 nodes

## Members
- [[A symbol entry with `symbol int` is silently skipped.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[A symbol with `kind` as a non-string falls back to 'unknown'.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[A symbol with `relationships None` ingests without error and emits no edges.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Convert a SCIP-style JSON document into Graphify nodes and edges. Parameter…]] - rationale - temp-graphify/graphify/scip_ingest.py
- [[Cross-symbol relationship within ONE document resolves via the symbol index.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Ingestion handles a large number of symbols gracefully.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Only the first occurrence is used; if it is not a dict, sourceline stays 0.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Result passes Graphify's validate_extraction and build_from_json keeps the…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[SCIP relationship payloads embedded in edge metadata must be sanitized.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Same symbol in different files produces different node ids.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Top-level non-dict shapes still return the empty result.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When a target symbol is defined in 2+ documents AND the source is in a third…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When no relative_path is given on document, source_file defaults to ''.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When range is not a list, sourceline stays 0 (empty source_location).]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When symbol has no , the label is the full symbol id.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When symbols is not a list, that document is skipped.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[`display_name` as a non-string falls back to the symbol suffix.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[`documentation` first entry that isn't a string yields empty description (not…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[documents key not present → no processing → empty result.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[ingest_scip_json()]] - code - temp-graphify/graphify/scip_ingest.py
- [[range0 = True (which is technically an int subclass) must not produce 'LTrue'.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_ambiguous_duplicate_target_across_docs_creates_stub()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_documentation_with_non_string_entries_is_ignored()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_default_source_file_is_empty_string()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_dict_without_documents_key()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_document_with_symbols_not_a_list()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_many_symbols()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_node_id_differs_by_source_file()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_relationship_metadata_sanitized()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_with_non_dict_occurrence_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_with_non_list_range_falls_back_to_zero()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_hash_uses_full_symbol_as_label()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_non_string_display_name_falls_back()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_non_string_kind_falls_back_to_unknown()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_non_string_symbol_id_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_occurrence_bool_line_falls_back_to_zero()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_edges_survive_validate_extraction_and_build()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_target_in_same_document_resolves_via_index()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_relationships_none_is_treated_as_empty()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_unrecognized_top_level_structure_returns_empty()]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ingest_scip_json
SORT file.name ASC
```

## Connections to other communities
- 37 edges to [[_COMMUNITY_test_scip_ingest.py]]
- 13 edges to [[_COMMUNITY__make_symbol_doc]]
- 5 edges to [[_COMMUNITY_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY__make_scip_node_id]]
- 1 edge to [[_COMMUNITY_test_documents_field_non_list_returns_empty]]
- 1 edge to [[_COMMUNITY_test_ingest_document_item_not_a_dict_is_skipped]]
- 1 edge to [[_COMMUNITY_test_ingest_document_relative_path_overrides_source_file_param]]
- 1 edge to [[_COMMUNITY_test_ingest_document_without_symbols_key]]
- 1 edge to [[_COMMUNITY_test_ingest_documents_empty_list]]
- 1 edge to [[_COMMUNITY_test_ingest_duplicate_symbols_in_same_file_are_deduplicated]]
- 1 edge to [[_COMMUNITY_test_ingest_edge_source_location_from_first_occurrence]]
- 1 edge to [[_COMMUNITY_test_ingest_edge_with_zero_sourceline_has_empty_location]]
- 1 edge to [[_COMMUNITY_test_ingest_multiple_documents]]
- 1 edge to [[_COMMUNITY_test_ingest_multiple_symbols_in_one_document]]
- 1 edge to [[_COMMUNITY_test_ingest_non_dict_input_returns_empty]]
- 1 edge to [[_COMMUNITY_test_ingest_single_symbol_no_relationships]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_trailing_hash_no_display_name_has_non_empty_label]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_with_documentation_becomes_description]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_with_empty_documentation_skips_description]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_with_short_range_uses_first_element_as_line]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_without_kind_defaults_to_unknown]]
- 1 edge to [[_COMMUNITY_test_ingest_symbol_without_symbol_id_is_skipped]]
- 1 edge to [[_COMMUNITY_test_non_string_language_falls_back]]
- 1 edge to [[_COMMUNITY_test_non_string_relative_path_falls_back_to_default]]
- 1 edge to [[_COMMUNITY_test_occurrence_negative_line_falls_back_to_zero]]
- 1 edge to [[_COMMUNITY_test_relationship_boolean_true_routes_correctly]]
- 1 edge to [[_COMMUNITY_test_relationship_int_flag_is_ignored]]
- 1 edge to [[_COMMUNITY_test_relationship_target_unknown_emits_stub_node]]
- 1 edge to [[_COMMUNITY_test_relationship_truthy_string_flag_is_ignored]]
- 1 edge to [[_COMMUNITY_test_unique_cross_document_symbol_still_resolves]]
- 1 edge to [[_COMMUNITY_validate_extraction]]

## Top bridge nodes
- [[ingest_scip_json()]] - degree 83, connects to 30 communities
- [[test_relationship_edges_survive_validate_extraction_and_build()]] - degree 5, connects to 3 communities
- [[test_ambiguous_duplicate_target_across_docs_creates_stub()]] - degree 3, connects to 1 community
- [[test_documentation_with_non_string_entries_is_ignored()]] - degree 3, connects to 1 community
- [[test_ingest_default_source_file_is_empty_string()]] - degree 3, connects to 1 community
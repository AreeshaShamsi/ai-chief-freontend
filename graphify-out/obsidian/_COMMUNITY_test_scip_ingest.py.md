---
type: community
cohesion: 0.06
members: 36
---

# test_scip_ingest.py

**Cohesion:** 0.06 - loosely connected
**Members:** 36 nodes

## Members
- [[A non-dict entry in `documents` is silently skipped.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[A relationship entry whose `symbol` is a non-string is silently skipped.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Comprehensive tests for graphify.scip_ingest.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Control characters in SCIP description must not survive into the graph.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Cross-document relationship resolves to the target document's node id.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Duplicate symbol records within the SAME document collapse to one node id in…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Empty dict input produces empty nodes and edges.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Missing relationships key — symbol still becomes a node.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[Non-dict entries in the symbols list are silently skipped.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[SCIP-supplied description must be HTML-escaped before reaching node metadata; a…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[The source_file param provides a fallback when doc has no relative_path.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When display_name is missing, label falls back to the portion after .]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When doc has no language field, uses the language function parameter.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When documentation key is missing, scip_description is not in metadata.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When documents is not a list, ingestion stops and returns empty.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When occurrences key is missing entirely, falls back to empty source_location.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When occurrences list is empty, source_location is empty string.]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[When two docs both have `F`, a relationship from b.py's F to F must resolve…]] - rationale - temp-graphify/tests/test_scip_ingest.py
- [[test_document_entry_non_dict_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_duplicate_local_symbol_resolves_to_same_document()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_duplicate_same_document_definition_does_not_create_false_ambiguity()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_document_without_language_defaults_to_function_param()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_documents_not_a_list_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_empty_doc_returns_empty_lists()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_node_metadata_control_chars_stripped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_node_metadata_html_escaped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_source_file_falls_back_to_function_param()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_item_not_a_dict_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_display_name_uses_suffix()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_documentation_omits_description()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_occurrences_has_empty_source_location()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_occurrences_key()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_ingest_symbol_without_relationships_key_still_creates_node()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_symbol_non_string_is_skipped()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_relationship_target_across_documents_resolves_via_index()]] - code - temp-graphify/tests/test_scip_ingest.py
- [[test_scip_ingest.py]] - code - temp-graphify/tests/test_scip_ingest.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_scip_ingestpy
SORT file.name ASC
```

## Connections to other communities
- 37 edges to [[_COMMUNITY_ingest_scip_json]]
- 14 edges to [[_COMMUNITY__make_symbol_doc]]
- 8 edges to [[_COMMUNITY__make_scip_node_id]]
- 6 edges to [[_COMMUNITY_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_validate_extraction]]
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

## Top bridge nodes
- [[test_scip_ingest.py]] - degree 94, connects to 32 communities
- [[test_document_entry_non_dict_is_skipped()]] - degree 3, connects to 1 community
- [[test_duplicate_local_symbol_resolves_to_same_document()]] - degree 3, connects to 1 community
- [[test_duplicate_same_document_definition_does_not_create_false_ambiguity()]] - degree 3, connects to 1 community
- [[test_ingest_document_without_language_defaults_to_function_param()]] - degree 3, connects to 1 community
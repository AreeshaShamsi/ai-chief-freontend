---
source_file: "temp-graphify/tests/test_symbol_resolution.py"
type: "code"
community: "test_symbol_resolution.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_symbol_resolutionpy
---

# test_symbol_resolution.py

## Connections
- [[Tests for graphify.symbol_resolution.]] - `rationale_for` [EXTRACTED]
- [[_bash_make_id()]] - `imports` [EXTRACTED]
- [[build_label_index()]] - `imports` [EXTRACTED]
- [[build_python_symbol_index()]] - `imports` [EXTRACTED]
- [[find_unique_python_symbol()]] - `imports` [EXTRACTED]
- [[iter_raw_calls()]] - `imports` [EXTRACTED]
- [[node_is_resolvable_symbol()]] - `imports` [EXTRACTED]
- [[normalise_callable_label()]] - `imports` [EXTRACTED]
- [[parse_python_import_aliases()]] - `imports` [EXTRACTED]
- [[resolve_bash_source_edges()]] - `imports` [EXTRACTED]
- [[resolve_cross_file_raw_calls()]] - `imports` [EXTRACTED]
- [[resolve_python_import_guided_calls()]] - `imports` [EXTRACTED]
- [[symbol_resolution.py]] - `imports_from` [EXTRACTED]
- [[test_bash_call_resolver_emits_call_edges_from_sourced_files()]] - `contains` [EXTRACTED]
- [[test_bash_call_resolver_emits_source_edges()]] - `contains` [EXTRACTED]
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - `contains` [EXTRACTED]
- [[test_bash_call_resolver_skips_existing_pair()]] - `contains` [EXTRACTED]
- [[test_bash_call_resolver_skips_non_bash_raw_calls()]] - `contains` [EXTRACTED]
- [[test_bash_make_id_identical_to_make_id()]] - `contains` [EXTRACTED]
- [[test_bash_make_id_unicode_matches_make_id()]] - `contains` [EXTRACTED]
- [[test_build_label_index_collects_unique_symbols()]] - `contains` [EXTRACTED]
- [[test_build_label_index_excludes_non_code_nodes()]] - `contains` [EXTRACTED]
- [[test_build_python_symbol_index_uses_module_stem_and_label()]] - `contains` [EXTRACTED]
- [[test_find_unique_python_symbol_returns_none_when_ambiguous()]] - `contains` [EXTRACTED]
- [[test_iter_raw_calls_drops_non_dict_items_in_list()]] - `contains` [EXTRACTED]
- [[test_iter_raw_calls_skips_non_dict_per_file_entries()]] - `contains` [EXTRACTED]
- [[test_iter_raw_calls_skips_non_list_raw_calls()]] - `contains` [EXTRACTED]
- [[test_node_is_resolvable_symbol_requires_code_file_type()]] - `contains` [EXTRACTED]
- [[test_node_is_resolvable_symbol_skips_rationale_and_doc_tags()]] - `contains` [EXTRACTED]
- [[test_normalise_callable_label_strips_function_punctuation()]] - `contains` [EXTRACTED]
- [[test_parse_python_import_aliases_accepts_top_level_import()]] - `contains` [EXTRACTED]
- [[test_parse_python_import_aliases_skips_function_local_imports()]] - `contains` [EXTRACTED]
- [[test_parse_python_import_aliases_supports_from_import_alias()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_accepts_none_per_file_entries()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_relative_path_resolves_against_source_dir()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_skips_bash_function_node_missing_id()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_skips_malformed_source()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_skips_non_dict_lists()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_skips_raw_call_missing_caller_nid()]] - `contains` [EXTRACTED]
- [[test_resolve_bash_source_edges_skips_unhashable_callee()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_call_site_is_test_prefers_test_local()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_emits_unique_unqualified_call()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_n_mock_scale()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_real_edge_survives_test_mock()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_skips_ambiguous_duplicate_labels()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_skips_existing_pair()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_skips_member_calls()]] - `contains` [EXTRACTED]
- [[test_resolve_cross_file_raw_calls_survives_malformed_raw_calls()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_emits_extracted_edge()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_metadata_is_sanitized()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_metadata_sanitizes_hostile_alias()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_non_dict_per_file_slot()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_per_file_none_slot()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_per_file_shorter_than_paths()]] - `contains` [EXTRACTED]
- [[test_resolve_python_import_guided_calls_survives_malformed_raw_calls()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_symbol_resolutionpy
---
type: community
cohesion: 0.11
members: 59
---

# extract

**Cohesion:** 0.11 - loosely connected
**Members:** 59 nodes

## Members
- [[1666 — an extractable source file that yields zero nodes must not be cached,…]] - rationale - temp-graphify/tests/test_zero_node_no_cache.py
- [[Collapse C `partial class Foo` halves split across files into ONE node…]] - rationale - temp-graphify/graphify/extract.py
- [[Collapse cross-file Swift `extension Foo` nodes into the canonical `Foo`. tree-…]] - rationale - temp-graphify/graphify/extract.py
- [[Collapse duplicate C namespace node entries to one canonical node per label.]] - rationale - temp-graphify/graphify/extract.py
- [[Extract AST nodes and edges from a list of code files. Two-pass process 1.…]] - rationale - temp-graphify/graphify/extract.py
- [[Path_69]] - code
- [[Raise a clear error if tree-sitter is too old for the new Language API.]] - rationale - temp-graphify/graphify/extract.py
- [[_canonicalize_csharp_namespace_nodes()]] - code - temp-graphify/graphify/extract.py
- [[_check_tree_sitter_version()]] - code - temp-graphify/graphify/extract.py
- [[_defs()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[_merge_csharp_partial_class_nodes()]] - code - temp-graphify/graphify/extract.py
- [[_merge_swift_extensions()]] - code - temp-graphify/graphify/extract.py
- [[_node_by_id()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[_targets()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[_write()_5]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[extract()]] - code - temp-graphify/graphify/extract.py
- [[test_csharp_alias_matching_file_stem_resolves_via_token()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_alias_using_scoped_to_its_block()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_ambiguous_using_does_not_resolve()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_collision_disambiguated_by_using()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_cross_file_inherits_resolves_to_real_def()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_cross_namespace_enum_reference_resolves_to_real_def()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_cross_namespace_ref_not_misbound()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_cross_namespace_struct_and_record_references_resolve()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_declaration_nodes_carry_enclosing_namespace()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_file_level_using_applies_across_blocks()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_generic_alias_resolves_to_base_type()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_global_scope_id_unchanged()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_global_using_and_global_namespace()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_import_edges_carry_using_kind()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_import_edges_resolve_internal_namespace_and_alias()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_inherits_does_not_bind_namespace_node()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_namespace_nodes_canonical_and_discriminated()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_namespace_scoped_using_isolated_to_sibling_block()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_namespaced_id_carries_namespace_segment()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_nested_type_carries_metadata()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_nested_type_not_importable_via_using()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_one_file_same_name_binds_own_namespace()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_one_file_same_name_no_collision_flag()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_alias_namespace_resolves()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_base_ref_is_flagged()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_generic_resolves_to_real_def()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_in_scope_alias_shadows_namespace()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_out_of_scope_alias_falls_through_to_namespace()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_ref_known_namespace_resolves()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_qualified_ref_unknown_qualifier_dangles()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_same_file_cross_namespace_ref_not_misbound()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_same_name_diff_namespace_have_distinct_ids()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_two_namespaces_each_resolve_own_type()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_type_parameter_emits_no_reference()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_type_ref_edges_carry_ref_token()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_type_ref_never_targets_a_file_label()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_type_resolution.py]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_using_alias_resolves_to_aliased_type()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_csharp_using_flows_into_nested_block()]] - code - temp-graphify/tests/test_csharp_type_resolution.py
- [[test_no_warning_when_all_files_produce_nodes()]] - code - temp-graphify/tests/test_zero_node_no_cache.py
- [[test_normal_file_still_cached()]] - code - temp-graphify/tests/test_zero_node_no_cache.py
- [[test_zero_node_no_cache.py]] - code - temp-graphify/tests/test_zero_node_no_cache.py
- [[test_zero_node_result_not_cached_then_self_heals()]] - code - temp-graphify/tests/test_zero_node_no_cache.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract
SORT file.name ASC
```

## Connections to other communities
- 56 edges to [[_COMMUNITY_test_extract.py]]
- 27 edges to [[_COMMUNITY_test_js_import_resolution.py]]
- 19 edges to [[_COMMUNITY_test_ruby_resolution.py]]
- 13 edges to [[_COMMUNITY_extract.py]]
- 13 edges to [[_COMMUNITY_test_cpp_objc_cross_file_calls.py]]
- 13 edges to [[_COMMUNITY_test_python_decorators.py]]
- 12 edges to [[_COMMUNITY_test_jsconfig_baseurl.py]]
- 11 edges to [[_COMMUNITY_test_java_type_resolution.py]]
- 10 edges to [[_COMMUNITY_test_cross_extension_reexport_self_cycle.py]]
- 10 edges to [[_COMMUNITY_test_ts_decorators.py]]
- 8 edges to [[_COMMUNITY_Path]]
- 8 edges to [[_COMMUNITY_test_ts_inheritance.py]]
- 7 edges to [[_COMMUNITY__make_id]]
- 7 edges to [[_COMMUNITY_test_file_node_id_spec.py]]
- 7 edges to [[_COMMUNITY_test_ts_namespace.py]]
- 6 edges to [[_COMMUNITY_test_languages.py]]
- 6 edges to [[_COMMUNITY_test_php_type_resolution.py]]
- 6 edges to [[_COMMUNITY_test_swift_cross_file_calls.py]]
- 6 edges to [[_COMMUNITY_test_ts_generators.py]]
- 5 edges to [[_COMMUNITY_test_extract_cache_location.py]]
- 5 edges to [[_COMMUNITY_test_node_id_canonical.py]]
- 4 edges to [[_COMMUNITY_run_language_resolvers]]
- 4 edges to [[_COMMUNITY_test_builtin_global_type_refs.py]]
- 4 edges to [[_COMMUNITY_test_dotnet.py]]
- 4 edges to [[_COMMUNITY_test_indirect_dispatch.py]]
- 4 edges to [[_COMMUNITY_test_multilang.py]]
- 4 edges to [[_COMMUNITY_test_src_layout_import_resolution.py]]
- 4 edges to [[_COMMUNITY_test_swift_import_resolution.py]]
- 3 edges to [[_COMMUNITY_save_semantic_cache]]
- 3 edges to [[_COMMUNITY_test_go_builtin_call_targets.py]]
- 3 edges to [[_COMMUNITY_test_import_self_loops.py]]
- 3 edges to [[_COMMUNITY_test_incremental.py]]
- 3 edges to [[_COMMUNITY_test_indirect_call_nested_closure_shadow.py]]
- 3 edges to [[_COMMUNITY_test_manifest_ingest.py]]
- 3 edges to [[_COMMUNITY_test_phantom_external_import.py]]
- 3 edges to [[_COMMUNITY_test_python_import_resolution.py]]
- 3 edges to [[_COMMUNITY_test_swift_builtin_noise.py]]
- 2 edges to [[_COMMUNITY_CsharpNameResolver]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 2 edges to [[_COMMUNITY_clear_cache]]
- 2 edges to [[_COMMUNITY_test_case_sensitive_resolution.py]]
- 2 edges to [[_COMMUNITY_test_cross_language_call_resolution.py]]
- 2 edges to [[_COMMUNITY_test_csharp_member_calls.py]]
- 2 edges to [[_COMMUNITY_test_csharp_partial_classes.py]]
- 2 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 2 edges to [[_COMMUNITY_test_java_member_calls.py]]
- 2 edges to [[_COMMUNITY_test_js_exported_scalar_bindings.py]]
- 2 edges to [[_COMMUNITY_test_kotlin_object_literal.py]]
- 2 edges to [[_COMMUNITY_test_phantom_cross_package_call.py]]
- 2 edges to [[_COMMUNITY_generate]]
- 2 edges to [[_COMMUNITY_test_ts_receiver_member_calls.py]]
- 2 edges to [[_COMMUNITY_test_vue_extraction.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY__get_extractor]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_resolve_bash_source_edges]]
- 1 edge to [[_COMMUNITY_collect_files]]
- 1 edge to [[_COMMUNITY_extract_json]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY__corpus]]
- 1 edge to [[_COMMUNITY_extract_markdown]]
- 1 edge to [[_COMMUNITY__edge_labels]]
- 1 edge to [[_COMMUNITY_test_rust_no_cross_crate_spurious_edges]]
- 1 edge to [[_COMMUNITY_test_sql_cross_file_fk_resolves_and_never_leaks_scan_path]]

## Top bridge nodes
- [[extract()]] - degree 388, connects to 65 communities
- [[test_csharp_type_resolution.py]] - degree 46, connects to 2 communities
- [[test_zero_node_no_cache.py]] - degree 6, connects to 2 communities
- [[test_csharp_global_scope_id_unchanged()]] - degree 6, connects to 1 community
- [[_canonicalize_csharp_namespace_nodes()]] - degree 3, connects to 1 community
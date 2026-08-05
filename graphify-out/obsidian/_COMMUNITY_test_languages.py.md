---
type: community
cohesion: 0.03
members: 128
---

# test_languages.py

**Cohesion:** 0.03 - loosely connected
**Members:** 128 nodes

## Members
- [[2040 for C the nested type now gets a real `contains` edge from its…]] - rationale - temp-graphify/tests/test_languages.py
- [[Extract C type declarations, methods, namespaces, and usings from a .cs file.]] - rationale - temp-graphify/graphify/extract.py
- [[Extract classes, methods, constructors, and imports from a .groovy.gradle…]] - rationale - temp-graphify/graphify/extract.py
- [[Extract functions and includes from a .c.h file.]] - rationale - temp-graphify/graphify/extract.py
- [[Extract modules, functions, imports, and calls from a .ex.exs file.]] - rationale - temp-graphify/graphify/extractors/elixir.py
- [[Extract modules, structs, functions, imports, and calls from a .jl file.]] - rationale - temp-graphify/graphify/extractors/julia.py
- [[Extract programs, modules, subroutines, functions, use statements, and calls…]] - rationale - temp-graphify/graphify/extractors/fortran.py
- [[If the injected field's type name is ambiguous (two classes named Database),…]] - rationale - temp-graphify/tests/test_languages.py
- [[Methods on the same receiver type must share one canonical type node.]] - rationale - temp-graphify/tests/test_languages.py
- [[Path_18]] - code
- [[Path_20]] - code
- [[Path_23]] - code
- [[Qualified (`using Base.Threads`) and relative (`using ..Mod`) imports must emit…]] - rationale - temp-graphify/tests/test_languages.py
- [[Quoted `import X.h` edges must target the real (disambiguated) file node id,…]] - rationale - temp-graphify/tests/test_languages.py
- [[Run cpp -w -P on a capital-F Fortran file and return preprocessed bytes. Falls…]] - rationale - temp-graphify/graphify/extractors/fortran.py
- [[Tests for language extractors Java, C, C++, Ruby, C, Kotlin, Scala, PHP,…]] - rationale - temp-graphify/tests/test_languages.py
- [[The decisive 1316 guardrail two classes each define `query`, but the injected…]] - rationale - temp-graphify/tests/test_languages.py
- [[Type node id should be scoped to directory, not file stem.]] - rationale - temp-graphify/tests/test_languages.py
- [[_cpp_preprocess()]] - code - temp-graphify/graphify/extractors/fortran.py
- [[_edges_with_relation()]] - code - temp-graphify/tests/test_languages.py
- [[_references()]] - code - temp-graphify/tests/test_languages.py
- [[_ts_label_calls()]] - code - temp-graphify/tests/test_languages.py
- [[`alias Foo.{Bar, Baz}` must emit one imports edge per expanded module. The…]] - rationale - temp-graphify/tests/test_languages.py
- [[`class Sub  Base` must emit an inherits edge. Ruby exposes the base class in…]] - rationale - temp-graphify/tests/test_languages.py
- [[`class X extends Base` must emit an inherits edge. tree-sitter-groovy exposes…]] - rationale - temp-graphify/tests/test_languages.py
- [[`class X implements Iface` must emit an implements edge.]] - rationale - temp-graphify/tests/test_languages.py
- [[`extension Foo` in a separate file from `class Foo` must resolve to a single…]] - rationale - temp-graphify/tests/test_languages.py
- [[`y = f(x)` function invocations must emit a calls edge. Function calls are…]] - rationale - temp-graphify/tests/test_languages.py
- [[extract_c()]] - code - temp-graphify/graphify/extract.py
- [[extract_csharp()]] - code - temp-graphify/graphify/extract.py
- [[extract_elixir()]] - code - temp-graphify/graphify/extractors/elixir.py
- [[extract_fortran()]] - code - temp-graphify/graphify/extractors/fortran.py
- [[extract_groovy()]] - code - temp-graphify/graphify/extract.py
- [[extract_julia()]] - code - temp-graphify/graphify/extractors/julia.py
- [[test_c_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_calls_are_extracted()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_emits_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_finds_functions()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_finds_includes()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_c_parameter_and_return_type_contexts()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_field_type_references_have_field_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_finds_class()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_finds_interface()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_finds_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_finds_usings()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_implements_iprocessor()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_inherits_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_nested_type_gets_containment_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_parameter_return_and_generic_contexts()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_property_type_references_have_field_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_csharp_splits_inherits_and_implements_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_dmf_elem_under_window()]] - code - temp-graphify/tests/test_languages.py
- [[test_dmf_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_dmf_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_dmi_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_dmi_state_contained_by_file()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_finds_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_finds_functions()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_finds_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_finds_module()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_method_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_elixir_multi_alias_expands()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_capital_F_parses_preprocessed()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_case_insensitive_names()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_derived_type()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_function()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_function_call()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_module()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_program()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_subroutines()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_finds_use_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_parameter_and_return_type_contexts()]] - code - temp-graphify/tests/test_languages.py
- [[test_fortran_use_edges_have_use_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_go_receiver_methods_share_type_node()]] - code - temp-graphify/tests/test_languages.py
- [[test_go_receiver_uses_pkg_scope()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_extends_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_finds_class()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_finds_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_finds_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_implements_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_spock_finds_class()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_spock_finds_feature_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_spock_finds_method_with_apostrophe()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_spock_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_groovy_spock_preserves_import_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_java_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_abstract_concrete_hierarchy_inherits()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_abstract_type()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_functions()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_inherits()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_module()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_short_function()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_finds_structs()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_qualified_and_relative_imports()]] - code - temp-graphify/tests/test_languages.py
- [[test_julia_struct_field_type_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_languages.py]] - code - temp-graphify/tests/test_languages.py
- [[test_metal_is_code_extension()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_quoted_import_edges_resolve_to_real_nodes()]] - code - temp-graphify/tests/test_languages.py
- [[test_php_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_php_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_ruby_inherits_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_scala_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_swift_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_swift_extension_across_files_merges_into_canonical_type()]] - code - temp-graphify/tests/test_languages.py
- [[test_swift_import_edges_have_import_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_constructor_injection_calls_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_injected_field_ambiguous_type_emits_no_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_ts_injected_field_resolves_to_typed_class_not_same_named_collision()]] - code - temp-graphify/tests/test_languages.py
- [[this.repo.findById() in a class with constructor(private repo IUserRepository)…]] - rationale - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_languagespy
SORT file.name ASC
```

## Connections to other communities
- 61 edges to [[_COMMUNITY__edge_labels]]
- 58 edges to [[_COMMUNITY__labels]]
- 33 edges to [[_COMMUNITY__relations]]
- 27 edges to [[_COMMUNITY__make_id]]
- 25 edges to [[_COMMUNITY_extract_objc]]
- 20 edges to [[_COMMUNITY_extract_dm]]
- 17 edges to [[_COMMUNITY_extract_cpp]]
- 13 edges to [[_COMMUNITY_test_dotnet.py]]
- 13 edges to [[_COMMUNITY__corpus]]
- 13 edges to [[_COMMUNITY_extract_powershell]]
- 11 edges to [[_COMMUNITY_extract_markdown]]
- 9 edges to [[_COMMUNITY_extract_js]]
- 8 edges to [[_COMMUNITY_extract.py]]
- 8 edges to [[_COMMUNITY_extract_powershell_manifest]]
- 7 edges to [[_COMMUNITY_Path]]
- 6 edges to [[_COMMUNITY__read_text]]
- 6 edges to [[_COMMUNITY__get_extractor]]
- 6 edges to [[_COMMUNITY_extract]]
- 3 edges to [[_COMMUNITY_test_ruby_resolution.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY__load_graphifyignore]]

## Top bridge nodes
- [[test_languages.py]] - degree 364, connects to 19 communities
- [[extract_csharp()]] - degree 21, connects to 4 communities
- [[extract_groovy()]] - degree 20, connects to 4 communities
- [[extract_julia()]] - degree 24, connects to 3 communities
- [[extract_fortran()]] - degree 23, connects to 3 communities
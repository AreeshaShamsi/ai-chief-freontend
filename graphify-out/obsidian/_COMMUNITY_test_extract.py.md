---
type: community
cohesion: 0.01
members: 151
---

# test_extract.py

**Cohesion:** 0.01 - loosely connected
**Members:** 151 nodes

## Members
- [[1402 (Go) the sourceless-stub fix landed in six extractors but the Go copy of…]] - rationale - temp-graphify/tests/test_extract.py
- [[1402 a class defined once but referenced via type annotations in N other…]] - rationale - temp-graphify/tests/test_extract.py
- [[1462 (dedicated extractors) the imported-type-stub disambiguation (the…]] - rationale - temp-graphify/tests/test_extract.py
- [[1462 imported stdlibtype stubs with the same label are distinct uses when…]] - rationale - temp-graphify/tests/test_extract.py
- [[1522 two distinct paths whose only difference is a separator-vs-punctuation…]] - rationale - temp-graphify/tests/test_extract.py
- [[1781 safety a Python reference stub must not bind to a unique Go function of…]] - rationale - temp-graphify/tests/test_extract.py
- [[1781 safety a stub used as a base type must never resolve to a same-named,…]] - rationale - temp-graphify/tests/test_extract.py
- [[1781 safety two same-named functions leave the reference on the stub.]] - rationale - temp-graphify/tests/test_extract.py
- [[1781 a cross-module reference to a function must land on the real definition,…]] - rationale - temp-graphify/tests/test_extract.py
- [[1899 variant B a symbol whose name normalizes to nothing (a minified `$`…]] - rationale - temp-graphify/tests/test_extract.py
- [[1941 `--out far-away-dir` must not basename every in-root node. The CLI…]] - rationale - temp-graphify/tests/test_extract.py
- [[2082 must not over-resolve an aliased import of an EXTERNALuncorpus module…]] - rationale - temp-graphify/tests/test_extract.py
- [[2082 the aliased `calls` edge must survive a warm (cache-hit) re-extract. The…]] - rationale - temp-graphify/tests/test_extract.py
- [[2141 repro a call to a function defined in a sourced file must produce a real…]] - rationale - temp-graphify/tests/test_extract.py
- [[2171 `source lib.sh` with no . prefix must bind to the sibling file. Only…]] - rationale - temp-graphify/tests/test_extract.py
- [[2171 a sourced lib with a bash shebang but no extension must resolve.…]] - rationale - temp-graphify/tests/test_extract.py
- [[2173 a resolved worker count of 1 must not spawn a ProcessPoolExecutor. The…]] - rationale - temp-graphify/tests/test_extract.py
- [[2243 (residual of 1899, in edges not nodes) a `include ..libfoo.h`…]] - rationale - temp-graphify/tests/test_extract.py
- [[2243 is not C-specific it is a gap in the shared target_file remap path every…]] - rationale - temp-graphify/tests/test_extract.py
- [[2243 the SAME corpus, scanned from two differently-named, differently nested…]] - rationale - temp-graphify/tests/test_extract.py
- [[A JSTS call with no local definition and no import must NOT bind to a same-…]] - rationale - temp-graphify/tests/test_extract.py
- [[A `module.func()` call must resolve only against a module the caller's own file…]] - rationale - temp-graphify/tests/test_extract.py
- [[A call to a command that is not a function in any sourced file (an external…]] - rationale - temp-graphify/tests/test_extract.py
- [[A class field initialised with an arrow function (`x = () = {}`) must be…]] - rationale - temp-graphify/tests/test_extract.py
- [[A cross-file `calls` edge must be EXTRACTED when the caller's file has an…]] - rationale - temp-graphify/tests/test_extract.py
- [[A lowercase-receiver member call (`obj.run()`, `self.run()`) must NOT be…]] - rationale - temp-graphify/tests/test_extract.py
- [[A real cross-file call must NOT be erased by a same-named test mock.…]] - rationale - temp-graphify/tests/test_extract.py
- [[A shebang-only bash CLI must contribute nodes with the same ID scheme as a .sh…]] - rationale - temp-graphify/tests/test_extract.py
- [[After merging multiple files, no internal edges should be dangling.]] - rationale - temp-graphify/tests/test_extract.py
- [[All re_exports edges should have confidence=EXTRACTED.]] - rationale - temp-graphify/tests/test_extract.py
- [[Calls inside JSX expressions like `{fmtDate(now)}` must yield call edges.…]] - rationale - temp-graphify/tests/test_extract.py
- [[Destructured CJS requires must emit symbol-level `imports` edges per binder.]] - rationale - temp-graphify/tests/test_extract.py
- [[End-to-end integration of 2079 + 2141 (21572139) a library sourced via…]] - rationale - temp-graphify/tests/test_extract.py
- [[Guard against the phantom-god-node class (1077) an arbitrary `obj.x = fn`…]] - rationale - temp-graphify/tests/test_extract.py
- [[Guard the 2173 skip 1 worker must still take the pool path.]] - rationale - temp-graphify/tests/test_extract.py
- [[Negative companion to the two tests above when the included header IS inside…]] - rationale - temp-graphify/tests/test_extract.py
- [[One src def + many same-named test stubs + caller = exactly one src edge.]] - rationale - temp-graphify/tests/test_extract.py
- [[Regression arrow functions in lexical_declaration must still produce nodes.]] - rationale - temp-graphify/tests/test_extract.py
- [[Same input always produces same output.]] - rationale - temp-graphify/tests/test_extract.py
- [[The issue's own motivating shape (2082) `from pkg import mod as alias`…]] - rationale - temp-graphify/tests/test_extract.py
- [[The real 1446 shape a viewset action `approve()` delegates to a SERVICE…]] - rationale - temp-graphify/tests/test_extract.py
- [[Two different files' same-named, otherwise-undefined base class must not…]] - rationale - temp-graphify/tests/test_extract.py
- [[Two genuine NON-test defs of the same name + one caller = ZERO edges. Proves…]] - rationale - temp-graphify/tests/test_extract.py
- [[Unqualified cross-file calls must not guess between duplicate helper names.]] - rationale - temp-graphify/tests/test_extract.py
- [[When the class name is defined in 2+ files, the qualified call must not resolve…]] - rationale - temp-graphify/tests/test_extract.py
- [[Wiring check the .tsx config must use tree-sitter's `language_tsx`.]] - rationale - temp-graphify/tests/test_extract.py
- [[Wiring the source-backed call resolver must not re-emit the ``imports_from``…]] - rationale - temp-graphify/tests/test_extract.py
- [[_extract_parallel must catch BrokenProcessPool internally and return False.]] - rationale - temp-graphify/tests/test_extract.py
- [[`ClassName.method()` across files resolves to the class-qualified method node…]] - rationale - temp-graphify/tests/test_extract.py
- [[`Foo.prototype.bar = fn` must be captured as a method owned by Foo.]] - rationale - temp-graphify/tests/test_extract.py
- [[`const { foo } = require('.mod')` must emit imports_from to the resolved…]] - rationale - temp-graphify/tests/test_extract.py
- [[`exports.X = fn` and `module.exports.X = fn` must produce function nodes.]] - rationale - temp-graphify/tests/test_extract.py
- [[`from . import mod as alias` -- a relative sibling-module import with an alias…]] - rationale - temp-graphify/tests/test_extract.py
- [[`from pkg import mod as alias` must resolve `alias.func()` the same way the…]] - rationale - temp-graphify/tests/test_extract.py
- [[`import mod as alias` must resolve `alias.func()` the same way `import mod` …]] - rationale - temp-graphify/tests/test_extract.py
- [[`import pkg.mod as alias` -- the dotted absolute-import form the issue flagged…]] - rationale - temp-graphify/tests/test_extract.py
- [[`module.func()` where `module` is imported resolves to the callable that module…]] - rationale - temp-graphify/tests/test_extract.py
- [[`this.X = () = {}`  `this.X = function(){}` in a constructor-style function…]] - rationale - temp-graphify/tests/test_extract.py
- [[by_label_by_id()]] - code - temp-graphify/tests/test_extract.py
- [[export { X } from '.mod' must emit re_exports edges for each named specifier.]] - rationale - temp-graphify/tests/test_extract.py
- [[export { localVar } without 'from' should NOT create re_exports edges.]] - rationale - temp-graphify/tests/test_extract.py
- [[extract() must run sequential when _extract_parallel signals failure (returns…]] - rationale - temp-graphify/tests/test_extract.py
- [[origin_file is an internal disambiguation hint (1462) consumed only by the…]] - rationale - temp-graphify/tests/test_extract.py
- [[re_exports edges should have context='re-export'.]] - rationale - temp-graphify/tests/test_extract.py
- [[test_barrel_reexport_confidence_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_barrel_reexport_context_tagged()]] - code - temp-graphify/tests/test_extract.py
- [[test_barrel_reexport_emits_re_exports_edges()]] - code - temp-graphify/tests/test_extract.py
- [[test_bash_var_sourced_function_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_c_include_in_root_same_batch_still_resolves_to_real_node()]] - code - temp-graphify/tests/test_extract.py
- [[test_c_include_out_of_root_target_id_is_deterministic_across_checkout_paths()]] - code - temp-graphify/tests/test_extract.py
- [[test_c_include_out_of_root_target_id_is_portable()]] - code - temp-graphify/tests/test_extract.py
- [[test_calls_no_self_loops()]] - code - temp-graphify/tests/test_extract.py
- [[test_cpp_unresolved_base_class_stubs_stay_disambiguated_by_file()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_call_god_node_guard_two_real_defs()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_call_promoted_to_extracted_with_import_evidence()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_call_survives_many_test_mocks()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_call_survives_same_named_test_mock()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_calls_skip_ambiguous_duplicate_labels()]] - code - temp-graphify/tests/test_extract.py
- [[test_cross_file_type_annotation_refs_resolve_to_single_node()]] - code - temp-graphify/tests/test_extract.py
- [[test_degenerate_symbol_name_does_not_leak_absolute_id()]] - code - temp-graphify/tests/test_extract.py
- [[test_dispatch_includes_sh_and_json()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract.py]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_bare_source_name_resolves_to_sibling()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_call_into_extensionless_sourced_lib_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_call_to_external_command_stays_unlinked()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_call_to_sourced_function_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_relative_script_invocation_targets_existing_entrypoint()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_sourced_call_does_not_duplicate_source_edge()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_disambiguates_duplicate_symbol_ids_by_source_path()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_does_not_rewire_constructor_method_to_same_named_class()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_does_not_rewire_inheritance_stub_to_same_named_function()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_extensionless_bash_cli_end_to_end()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_falls_back_to_sequential_when_parallel_returns_false()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_arbitrary_member_assignment_not_captured()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_arrow_function_still_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_commonjs_exports_assignment()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_destructured_require_imports_from()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_destructured_require_named_symbols()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_prototype_method_assignment()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_js_this_assigned_methods()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_keeps_stub_when_multiple_real_definitions_match()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_merges_multiple_files()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_no_missing_dep_warning_when_sql_installed()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_no_warning_when_all_code_has_extractors()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_parallel_returns_false_on_broken_pool()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_parallel_skips_pool_when_max_workers_is_one()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_parallel_still_spawns_pool_for_multiple_workers()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_progress_final_line_uses_consistent_denominator()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_python_finds_class()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_python_finds_methods()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_rewires_unique_inheritance_stub_to_real_definition()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_ts_class_arrow_field()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_tsx_jsx_expression_calls_resolve()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_tsx_uses_tsx_grammar()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_updates_raw_call_callers_after_duplicate_id_disambiguation()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_warns_on_code_files_with_no_ast_extractor()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_warns_when_sql_extra_missing()]] - code - temp-graphify/tests/test_extract.py
- [[test_go_cross_file_type_refs_resolve_to_single_node()]] - code - temp-graphify/tests/test_extract.py
- [[test_go_imported_type_stubs_do_not_collide_across_source_files()]] - code - temp-graphify/tests/test_extract.py
- [[test_imported_type_stubs_do_not_collide_across_source_files()]] - code - temp-graphify/tests/test_extract.py
- [[test_js_cross_file_call_without_import_emits_no_edge()]] - code - temp-graphify/tests/test_extract.py
- [[test_make_id_consistent()]] - code - temp-graphify/tests/test_extract.py
- [[test_make_id_no_leading_trailing_underscores()]] - code - temp-graphify/tests/test_extract.py
- [[test_make_id_strips_dots_and_underscores()]] - code - temp-graphify/tests/test_extract.py
- [[test_matlab_m_not_extracted_as_garbage()]] - code - temp-graphify/tests/test_extract.py
- [[test_no_dangling_edges_on_extract()]] - code - temp-graphify/tests/test_extract.py
- [[test_origin_file_is_not_serialized_into_extract_output()]] - code - temp-graphify/tests/test_extract.py
- [[test_out_of_tree_cache_root_keeps_source_file_relative_to_scan_root()]] - code - temp-graphify/tests/test_extract.py
- [[test_pure_export_no_from_not_treated_as_reexport()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_aliased_call_survives_warm_cache()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_call_edges_have_call_context()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_dotted_import_alias_module_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_external_aliased_import_fabricates_no_call_edge()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_from_import_alias_module_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_import_as_alias_module_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_instance_member_call_not_overconnected()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_module_qualified_call_requires_the_import()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_module_qualified_call_resolves_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_qualified_call_ambiguous_class_bails()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_qualified_call_resolves_when_method_name_collides_with_caller()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_qualified_class_method_call_resolves_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_relative_from_import_alias_module_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_relative_import_out_of_root_target_id_is_portable()]] - code - temp-graphify/tests/test_extract.py
- [[test_python_try_except_from_import_alias_module_call_resolves()]] - code - temp-graphify/tests/test_extract.py
- [[test_rewire_binds_cross_module_function_reference_to_definition()]] - code - temp-graphify/tests/test_extract.py
- [[test_rewire_does_not_bind_ambiguous_function_reference()]] - code - temp-graphify/tests/test_extract.py
- [[test_rewire_does_not_bind_function_reference_across_language()]] - code - temp-graphify/tests/test_extract.py
- [[test_rewire_does_not_bind_supertype_stub_to_function()]] - code - temp-graphify/tests/test_extract.py
- [[test_run_analysis_calls_normalize()]] - code - temp-graphify/tests/test_extract.py
- [[test_semantic_reference_edges_carry_context_and_source()]] - code - temp-graphify/tests/test_extract.py
- [[test_separator_collision_paths_get_distinct_ids()]] - code - temp-graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_extractpy
SORT file.name ASC
```

## Connections to other communities
- 56 edges to [[_COMMUNITY_extract]]
- 32 edges to [[_COMMUNITY_extract_bash]]
- 15 edges to [[_COMMUNITY_extract_js]]
- 13 edges to [[_COMMUNITY_extract_python]]
- 12 edges to [[_COMMUNITY_collect_files]]
- 12 edges to [[_COMMUNITY_extract_json]]
- 8 edges to [[_COMMUNITY_Path]]
- 6 edges to [[_COMMUNITY__get_extractor]]
- 3 edges to [[_COMMUNITY__load_graphifyignore]]
- 3 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY__read_text]]
- 2 edges to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_test_barrel_local_exports_still_extracted]]
- 1 edge to [[_COMMUNITY_test_barrel_reexport_emits_imports_from]]
- 1 edge to [[_COMMUNITY_test_extract_js_member_require_emits_property_symbol]]
- 1 edge to [[_COMMUNITY_test_extract_tsx_finds_helpers_and_component]]

## Top bridge nodes
- [[test_extract.py]] - degree 176, connects to 19 communities
- [[test_extract_js_destructured_require_named_symbols()]] - degree 4, connects to 2 communities
- [[test_extract_js_this_assigned_methods()]] - degree 4, connects to 1 community
- [[test_barrel_reexport_confidence_extracted()]] - degree 3, connects to 1 community
- [[test_barrel_reexport_context_tagged()]] - degree 3, connects to 1 community
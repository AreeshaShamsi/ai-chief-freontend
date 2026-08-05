---
source_file: "temp-graphify/graphify/extractors/objc.py"
type: "code"
community: "extract_objc"
location: "L43"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/extract_objc
---

# extract_objc()

## Connections
- [[Extract interfaces, implementations, protocols, methods, and imports from…]] - `rationale_for` [EXTRACTED]
- [[Path_25]] - `references` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_get_extractor()]] - `indirect_call` [INFERRED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[_objc_local_var_types()]] - `calls` [EXTRACTED]
- [[_resolve_c_include_path()]] - `calls` [EXTRACTED]
- [[_semantic_reference_edge()]] - `calls` [EXTRACTED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[objc.py]] - `contains` [EXTRACTED]
- [[test_objc_alloc_init_unknown_class_no_resolved_edge()]] - `calls` [INFERRED]
- [[test_objc_class_method_labeled_with_plus()]] - `calls` [INFERRED]
- [[test_objc_compound_selector_call_resolves()]] - `calls` [INFERRED]
- [[test_objc_dot_syntax_no_fanout_two_same_named_properties()]] - `calls` [INFERRED]
- [[test_objc_dot_syntax_property_accesses_edge()]] - `calls` [INFERRED]
- [[test_objc_dot_syntax_substring_sibling_exact_match()]] - `calls` [INFERRED]
- [[test_objc_dot_syntax_unresolvable_property_zero_edges()]] - `calls` [INFERRED]
- [[test_objc_finds_imports()]] - `calls` [INFERRED]
- [[test_objc_finds_interface()]] - `calls` [INFERRED]
- [[test_objc_finds_methods()]] - `calls` [INFERRED]
- [[test_objc_finds_subclass()]] - `calls` [INFERRED]
- [[test_objc_generic_property_type_extracted()]] - `calls` [INFERRED]
- [[test_objc_import_edges_have_import_context()]] - `calls` [INFERRED]
- [[test_objc_inherits_edge()]] - `calls` [INFERRED]
- [[test_objc_macro_free_header_unchanged()]] - `calls` [INFERRED]
- [[test_objc_module_import_edge()]] - `calls` [INFERRED]
- [[test_objc_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_objc_ns_assume_nonnull_macro_does_not_break_parsing()]] - `calls` [INFERRED]
- [[test_objc_property_type_context()]] - `calls` [INFERRED]
- [[test_objc_protocol_adopts_protocol()]] - `calls` [INFERRED]
- [[test_objc_resolves_self_method_calls()]] - `calls` [INFERRED]
- [[test_objc_selector_expression_calls_edge()]] - `calls` [INFERRED]
- [[test_objc_selector_no_fanout_two_same_named_methods()]] - `calls` [INFERRED]
- [[test_objc_selector_substring_method_exact_match()]] - `calls` [INFERRED]
- [[test_objc_splits_inherits_and_implements()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/extract_objc
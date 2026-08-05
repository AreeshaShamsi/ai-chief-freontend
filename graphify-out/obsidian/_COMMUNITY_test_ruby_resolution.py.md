---
type: community
cohesion: 0.09
members: 57
---

# test_ruby_resolution.py

**Cohesion:** 0.09 - loosely connected
**Members:** 57 nodes

## Members
- [[1634 + 1640 `TaxCalculator.rate_for` resolves across files to a…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1634 `Model.where` (no `where` def, e.g. ActiveRecord) still links to the…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1634 `Processor.call` (def self.call) resolves to the singleton method.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1640 shape 1, nested — the inner module is labelled fully qualified (2302),…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1640 shape 1 `module Foo` must get a node and own its methods.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1640 shape 2 `Foo = Struct.new(...) do ... end`.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1640 shape 3 `Foo = Class.new(Super)` — node + inherits edge.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[1784 `.rake` files are plain Ruby and must route to the Ruby extractor and…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[2302 over-suppression guard a qualified reference whose full path IS defined…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[2302 regression guard qualifying labels must not break bare constant…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[2302 `extend ActiveSupportConcern` must NOT resolve to an unrelated local…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[2302 `module BillingTotalsConcern` (compact) and a top-level module both…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[A member call on a receiver with no known type must NOT be resolved.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[Extract classes, methods, singleton methods, and calls from a .rb file.]] - rationale - temp-graphify/graphify/extract.py
- [[Path_96]] - code
- [[Return the `calls` edge whose sourcetarget labels contain the given…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[TDD specs for type-aware Ruby call-graph resolution. These drive the improved…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[The differentiator adding an unrelated Workerrun must NOT break the edge.…]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[Two classes named `Processor` = ambiguous receiver = bail (no wrong edge).]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[_find_raw_call()_1]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_has_call_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_labels()_8]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_method_edges()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_mixes_in()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_node_labels()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_raw_calls()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[_write()_21]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[`p = Processor.new` should link the caller to the Processor class.]] - rationale - temp-graphify/tests/test_ruby_resolution.py
- [[extract_ruby()]] - code - temp-graphify/graphify/extract.py
- [[test_ambiguous_binding_yields_no_type()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_ambiguous_constant_receiver_emits_no_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_class_new_constant_creates_class_and_inherits()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_class_new_creates_instantiation_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_compact_and_nested_module_includes_resolve()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_module_function_call_resolves()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_singleton_call_resolves()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_constant_receiver_unknown_class_method_falls_back_to_class()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_data_define_constant_creates_class()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_extend_and_prepend_emit_mixes_in()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_extend_self_and_nonconstant_args_emit_no_mixin()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_in_corpus_qualified_mixin_resolves()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_include_emits_mixes_in_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_include_of_undefined_or_ambiguous_module_emits_no_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_local_binding_gives_receiver_a_type()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_member_call_captures_receiver()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_mixin_is_not_emitted_as_calls_edge()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_nested_declared_class_still_resolves_as_receiver()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_nested_modules_each_get_a_node()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_no_false_positive_when_type_unknown()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_plain_module_gets_a_node_with_methods()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_qualified_external_mixin_does_not_bind_to_local()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_rake_files_extract_and_resolve_like_rb()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_resolution_is_type_based_not_name_luck()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_resolves_member_call_by_type()]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_ruby_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_ruby_resolution.py]] - code - temp-graphify/tests/test_ruby_resolution.py
- [[test_struct_new_constant_creates_class_with_methods()]] - code - temp-graphify/tests/test_ruby_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_ruby_resolutionpy
SORT file.name ASC
```

## Connections to other communities
- 19 edges to [[_COMMUNITY_extract]]
- 3 edges to [[_COMMUNITY_test_languages.py]]
- 3 edges to [[_COMMUNITY__labels]]
- 2 edges to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY__read_text]]

## Top bridge nodes
- [[extract_ruby()]] - degree 19, connects to 5 communities
- [[test_ruby_resolution.py]] - degree 38, connects to 2 communities
- [[test_resolution_is_type_based_not_name_luck()]] - degree 7, connects to 1 community
- [[test_ambiguous_constant_receiver_emits_no_edge()]] - degree 6, connects to 1 community
- [[test_class_new_creates_instantiation_edge()]] - degree 6, connects to 1 community
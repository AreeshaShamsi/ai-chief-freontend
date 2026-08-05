---
type: community
cohesion: 0.08
members: 50
---

# test_csharp_member_calls.py

**Cohesion:** 0.08 - loosely connected
**Members:** 50 nodes

## Members
- [[1770 a method invoked directly on a `new X(...)` object-creation expression…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[2299 corpus `var item = itemsi` (untypable) in RunIndexed must not poison…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[A caller in namespace A resolves `Svc` to A.Svc even though B.Svc also exists —…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[A local `Other x` shadowing a field `Server x` makes the name's type…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[A method not declared on the receiver's type but inherited from a resolvable…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[C receiver-typed member-call resolution (1609). `recv.Method()` where `recv`…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[Keep-the-bar a SAME-method conflict (param `Server x` + local `Other x`) still…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[No using directive and `Svc` in two foreign namespaces genuinely ambiguous —…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[Same local name bound to DIFFERENT types in different methods each method…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[The C 10 file-scoped namespace form (`namespace Demo;`) types receivers the…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[The receiver's type inherits from an out-of-corpus base a method missing on…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[The same name pattern-bound to two DIFFERENT types in one method raw calls…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[_calls()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[_find()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[`Svc` exists in namespaces A and B; a caller file `using A;` must bind an…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[`b.TryGet(out Sect s)` binds s Sect — `s.Go()` resolves to Sect.Go.]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[`out var v` carries no type name — `v.Go()` must emit NO edge (poison, not a…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[`this._s.Save()` types the field exactly like a bare `_s.Save()`.]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[`var x = Compute();` (untypable) redeclaring a typed field poisons the name…]] - rationale - temp-graphify/tests/test_csharp_member_calls.py
- [[test_base_receiver_resolves_to_base_class_method()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_case_pattern_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_cross_file_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_cross_method_name_reuse_does_not_poison()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_csharp_member_calls.py]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_field_receiver_resolves_to_declared_type_not_bare_match()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_file_scoped_namespace_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_inherited_method_resolves_through_base_chain()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_is_not_pattern_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_is_pattern_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_local_shadowing_field_of_different_type_poisons_name()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_local_var_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_method_absent_on_type_emits_no_edge()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_method_chained_off_new_expression_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_namespace_ambiguous_without_using_bails()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_namespace_using_directive_disambiguates_receiver_type()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_namespace_using_directive_resolves_to_other_namespace()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_out_declared_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_out_var_receiver_stays_unbound()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_parameter_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_per_method_locals_resolve_independently()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_same_method_shadow_still_poisons()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_same_namespace_receiver_resolves_without_using()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_sibling_pattern_rebind_conflict_poisons()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_switch_arm_pattern_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_this_and_static_receivers()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_this_field_receiver_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_unqualified_call_still_resolves()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_unresolved_base_poisons_inherited_member_lookup()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_untyped_receiver_emits_no_edge()]] - code - temp-graphify/tests/test_csharp_member_calls.py
- [[test_untyped_redeclaration_poisons_typed_field()]] - code - temp-graphify/tests/test_csharp_member_calls.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_csharp_member_callspy
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_csharp_member_calls.py]] - degree 35, connects to 2 communities
- [[_calls()]] - degree 32, connects to 1 community
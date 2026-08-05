---
type: community
cohesion: 0.40
members: 16
---

# test_java_member_calls.py

**Cohesion:** 0.40 - moderately connected
**Members:** 16 nodes

## Members
- [[Java receiver-typed member-call resolution. Java ``method_invocation`` nodes…]] - rationale - temp-graphify/tests/test_java_member_calls.py
- [[Path_78]] - code
- [[_calls()_1]] - code - temp-graphify/tests/test_java_member_calls.py
- [[_find()_2]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_ambiguous_receiver_type_emits_no_edge()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_explicit_type_receiver_resolves_to_owned_method()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_field_receiver_resolves_to_declared_type()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_inherited_field_and_chained_receiver_are_deferred()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_java_member_calls.py]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_lambda_shadowing_does_not_reuse_enclosing_receiver_type()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_nested_receiver_bindings_do_not_escape_their_scope()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_overloaded_callers_keep_body_scoped_receiver_types()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_parameter_and_local_receivers_resolve_per_method()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_this_field_receiver_resolves_to_declared_type()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_this_field_uses_field_type_when_parameter_shadows_name()]] - code - temp-graphify/tests/test_java_member_calls.py
- [[test_unqualified_call_still_resolves()_1]] - code - temp-graphify/tests/test_java_member_calls.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_java_member_callspy
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_java_member_calls.py]] - degree 16, connects to 2 communities
- [[_calls()_1]] - degree 14, connects to 1 community
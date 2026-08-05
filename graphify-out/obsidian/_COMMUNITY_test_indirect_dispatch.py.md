---
type: community
cohesion: 0.10
members: 45
---

# test_indirect_dispatch.py

**Cohesion:** 0.10 - loosely connected
**Members:** 45 nodes

## Members
- [[A class referenced BY NAME as a value is a descriptor, not an invocation, so it…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[A data value in the table (a number, a string) is not a callable and must never…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[An inline arrow  function expression is a direct definition, not a by-name…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[Express routes  event wiring  timers live at module scope in JS.]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[If the name is rebound to data at module scope, the table value is that data,…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[Indirect dispatch edges. A function passed BY NAME as a call argument…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[No recall regression a real module fn passed by name still emits an edge.]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[Only VALUES are references; a function used as a dict KEY is not invoked…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[Regression when the scan root relativizes node ids (cache_root == project…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[Soundness carries across files an imported name shadowed by a parameter is the…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[The cross-file resolver guard in extract.py must suppress indirect_call edges…]] - rationale - temp-graphify/tests/test_indirect_dispatch.py
- [[_build()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[_extract()_3]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[_extract_dir()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[_extract_js_dir()_1]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[_rels()_1]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_affected_includes_indirect_callers()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_class_ref_is_not_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_affected_includes_importing_dispatcher()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_class_ref_is_not_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_dict_registry_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_imported_callback_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_indirect_survives_id_relativization()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_cross_file_param_shadow_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_data_var_matching_function_name_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_dict_keys_are_not_dispatch_targets()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_emits_indirect_call_edges_and_keeps_calls_precise()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_function_scoped_dispatch_table_attributes_to_function()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_genuine_module_function_still_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_indirect_dispatch.py]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_cross_file_imported_callback_in_object()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_function_scoped_call_argument()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_inline_arrow_argument_is_not_a_reference()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_module_level_callback_registration()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_module_object_and_array_registry()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_object_keys_and_data_values_excluded()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_parameter_shadow_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_js_shorthand_property_reference()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_local_assignment_shadow_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_module_level_dict_registry_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_module_level_list_registry_emits_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_module_level_reassigned_name_shadows_dispatch_value()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_non_callable_collection_value_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_param_shadow_emits_no_indirect_call()]] - code - temp-graphify/tests/test_indirect_dispatch.py
- [[test_typescript_typed_params_and_arrow_consts()]] - code - temp-graphify/tests/test_indirect_dispatch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_indirect_dispatchpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_affected_nodes]]
- 4 edges to [[_COMMUNITY_extract_python]]
- 4 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_indirect_dispatch.py]] - degree 39, connects to 4 communities
- [[_extract()_3]] - degree 12, connects to 1 community
- [[_extract_js_dir()_1]] - degree 11, connects to 1 community
- [[_extract_dir()]] - degree 7, connects to 1 community
- [[_build()]] - degree 4, connects to 1 community
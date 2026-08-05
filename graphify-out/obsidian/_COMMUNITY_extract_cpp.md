---
type: community
cohesion: 0.10
members: 20
---

# extract_cpp

**Cohesion:** 0.10 - loosely connected
**Members:** 20 nodes

## Members
- [[Extract functions, classes, and includes from a .cpp.cc.cxx.hpp file.]] - rationale - temp-graphify/graphify/extract.py
- [[Regression for 915 `class Derived  public Base {}` should emit an inherits…]] - rationale - temp-graphify/tests/test_languages.py
- [[Structs use the same ` Base` syntax as classes and must also emit inherits.]] - rationale - temp-graphify/tests/test_languages.py
- [[`class PooledClient  public ConnectionHttpClient` must emit the inherits…]] - rationale - temp-graphify/tests/test_languages.py
- [[extract_cpp()]] - code - temp-graphify/graphify/extract.py
- [[test_cpp_class_inherits_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_field_and_template_argument_contexts()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_finds_class()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_finds_includes()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_finds_methods()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_generic_parents_include_type_argument_references()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_method_parameter_and_return_type_contexts()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_struct_inherits_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_cuda_finds_includes()]] - code - temp-graphify/tests/test_languages.py
- [[test_cuda_finds_kernel_and_device_functions()]] - code - temp-graphify/tests/test_languages.py
- [[test_cuda_finds_struct()]] - code - temp-graphify/tests/test_languages.py
- [[test_cuda_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_metal_finds_kernel_function_and_struct()]] - code - temp-graphify/tests/test_languages.py
- [[test_metal_no_error()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_cpp
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_test_languages.py]]
- 5 edges to [[_COMMUNITY__labels]]
- 3 edges to [[_COMMUNITY__edge_labels]]
- 2 edges to [[_COMMUNITY__relations]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY__get_extractor]]
- 1 edge to [[_COMMUNITY_extract_dm]]

## Top bridge nodes
- [[extract_cpp()]] - degree 23, connects to 6 communities
- [[test_cpp_generic_parents_include_type_argument_references()]] - degree 4, connects to 2 communities
- [[test_cpp_field_and_template_argument_contexts()]] - degree 3, connects to 2 communities
- [[test_cpp_finds_class()]] - degree 3, connects to 2 communities
- [[test_cpp_finds_includes()]] - degree 3, connects to 2 communities
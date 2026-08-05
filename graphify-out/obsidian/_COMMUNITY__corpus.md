---
type: community
cohesion: 0.13
members: 22
---

# _corpus

**Cohesion:** 0.13 - loosely connected
**Members:** 22 nodes

## Members
- [[A bridging header of only `import Widget.h` must produce an imports edge to…]] - rationale - temp-graphify/tests/test_languages.py
- [[Foo.cpp and Main.cpp `include Foo.h` must resolve to the real Foo.h file…]] - rationale - temp-graphify/tests/test_languages.py
- [[Foo.h (class) + Foo.cpp (Foobar def) + Main.cpp must yield exactly ONE Foo…]] - rationale - temp-graphify/tests/test_languages.py
- [[Run the full extract() pipeline on fixture files (absolute, resolved paths so…]] - rationale - temp-graphify/tests/test_languages.py
- [[Two same-named `class Dup` in the SAME dir but different base stems (Alpha.h,…]] - rationale - temp-graphify/tests/test_languages.py
- [[Two unrelated `class Logger` in DIFFERENT directories (each its own .h.cpp)…]] - rationale - temp-graphify/tests/test_languages.py
- [[Widget.h (@interface) + Widget.m (@implementation) - ONE Widget class node…]] - rationale - temp-graphify/tests/test_languages.py
- [[_assert_no_dangling()]] - code - temp-graphify/tests/test_languages.py
- [[_corpus()]] - code - temp-graphify/tests/test_languages.py
- [[_nodes_with_label()]] - code - temp-graphify/tests/test_languages.py
- [[`extension Widget` in Swift over an ObjC `Widget` must fold onto the single…]] - rationale - temp-graphify/tests/test_languages.py
- [[`void bar();` in Foo.h and `void Foobar() {}` in Foo.cpp must collapse to ONE…]] - rationale - temp-graphify/tests/test_languages.py
- [[test_cpp_paired_includes_resolve_to_real_header()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_paired_method_decl_and_def_are_one_node()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_paired_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_cpp_paired_single_class_node()]] - code - temp-graphify/tests/test_languages.py
- [[test_decldef_merge_does_not_merge_across_directories()]] - code - temp-graphify/tests/test_languages.py
- [[test_decldef_merge_does_not_merge_same_name_same_dir_distinct_files()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_bridging_header_not_isolated()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_paired_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_paired_single_class_methods_not_duplicated()]] - code - temp-graphify/tests/test_languages.py
- [[test_swift_extension_folds_onto_objc_class()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_corpus
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_languages.py]]
- 1 edge to [[_COMMUNITY_extract]]

## Top bridge nodes
- [[_corpus()]] - degree 13, connects to 2 communities
- [[_nodes_with_label()]] - degree 9, connects to 1 community
- [[test_swift_extension_folds_onto_objc_class()]] - degree 5, connects to 1 community
- [[_assert_no_dangling()]] - degree 4, connects to 1 community
- [[test_cpp_paired_includes_resolve_to_real_header()]] - degree 4, connects to 1 community
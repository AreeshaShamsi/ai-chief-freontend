---
type: community
cohesion: 0.13
members: 20
---

# extract_rust

**Cohesion:** 0.13 - loosely connected
**Members:** 20 nodes

## Members
- [[Enum variant payload types must emit `references` edges. Tuple variants…]] - rationale - temp-graphify/tests/test_multilang.py
- [[Extract functions, structs, enums, traits, impl methods, and use declarations…]] - rationale - temp-graphify/graphify/extractors/rust.py
- [[Path_31]] - code
- [[Tuple struct fields (`struct Wrapper(A, B);`) nest their positional types under…]] - rationale - temp-graphify/tests/test_multilang.py
- [[_edge_labels()_1]] - code - temp-graphify/tests/test_multilang.py
- [[_normalize_symbol_label()_1]] - code - temp-graphify/tests/test_multilang.py
- [[extract_rust()]] - code - temp-graphify/graphify/extractors/rust.py
- [[test_go_embeds_struct_field()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_interface_embedding_emits_embeds()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_method_parameter_return_contexts()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_struct_named_field_emits_field_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_calls_are_extracted()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_enum_variant_references()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_finds_struct()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_method_parameter_return_and_generic_contexts()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_no_dangling_edges()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_struct_field_emits_field_context()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_supertrait_emits_inherits()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_trait_impl_emits_implements()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_tuple_struct_field_references()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_rust
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_test_multilang.py]]
- 9 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY__edges_with_relation]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY__call_pairs]]

## Top bridge nodes
- [[extract_rust()]] - degree 23, connects to 6 communities
- [[test_go_embeds_struct_field()]] - degree 3, connects to 2 communities
- [[test_go_interface_embedding_emits_embeds()]] - degree 3, connects to 2 communities
- [[test_go_method_parameter_return_contexts()]] - degree 3, connects to 2 communities
- [[test_go_struct_named_field_emits_field_context()]] - degree 3, connects to 2 communities
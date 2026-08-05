---
type: community
cohesion: 0.12
members: 21
---

# build_label_index

**Cohesion:** 0.12 - loosely connected
**Members:** 21 nodes

## Members
- [[Any_11]] - code
- [[Build ``(module_stem, normalized_symbol_name) - node_ids``. This index is…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Build label - node id list for conservative cross-file resolution.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Documentpaperimageconcept nodes MUST NOT be indexed as call targets, even…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Normalize a node label into the key used for call resolution.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Return True when a node is suitable for deterministic symbol lookup. Requires…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Return all existing sourcetargetrelation edge triples. Includes relation so…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Return the stem of a node's source file.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[_node_source_stem()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[build_label_index()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[build_python_symbol_index()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[existing_edge_pairs()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[label index must not include documentpaperimage nodes even when label and id…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[node_is_resolvable_symbol()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[normalise_callable_label()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[test_build_label_index_collects_unique_symbols()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_build_label_index_excludes_non_code_nodes()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_build_python_symbol_index_uses_module_stem_and_label()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_node_is_resolvable_symbol_requires_code_file_type()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_node_is_resolvable_symbol_skips_rationale_and_doc_tags()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_normalise_callable_label_strips_function_punctuation()]] - code - temp-graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/build_label_index
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_symbol_resolution.py]]
- 7 edges to [[_COMMUNITY_symbol_resolution.py]]
- 3 edges to [[_COMMUNITY_resolve_python_import_guided_calls]]
- 1 edge to [[_COMMUNITY_iter_raw_calls]]
- 1 edge to [[_COMMUNITY_resolve_bash_source_edges]]

## Top bridge nodes
- [[existing_edge_pairs()]] - degree 6, connects to 4 communities
- [[build_python_symbol_index()]] - degree 9, connects to 3 communities
- [[Any_11]] - degree 8, connects to 3 communities
- [[build_label_index()]] - degree 9, connects to 2 communities
- [[node_is_resolvable_symbol()]] - degree 9, connects to 2 communities
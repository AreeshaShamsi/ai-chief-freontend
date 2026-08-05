---
type: community
cohesion: 0.13
members: 15
---

# test_file_node_id_spec.py

**Cohesion:** 0.13 - loosely connected
**Members:** 15 nodes

## Members
- [[A SYMBOL in a root-level file must use the bare-stem prefix…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[A file directly at the project root collapses to just its stem.]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[Changing the file-id format must not orphan import edges the import target…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[Regression guard nested files (immediate parent identical in absrel form)…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[Regression tests for issue 1033 AST file-level node IDs must match the…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[Symbol ids already use {parent}_{stem}_{name}; the file node must share that…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[_file_nodes()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[matchscriptpipeline_step.py - file node id 'match_script_pipeline_step'…]] - rationale - temp-graphify/tests/test_file_node_id_spec.py
- [[test_cross_file_import_edges_stay_connected()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_file_node_id_spec.py]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_file_node_id_uses_parent_dir_and_stem_no_extension()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_nested_file_symbol_ids_unchanged()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_symbol_and_file_ids_share_the_same_stem()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_top_level_file_SYMBOL_ids_use_bare_stem()]] - code - temp-graphify/tests/test_file_node_id_spec.py
- [[test_top_level_file_node_id_is_bare_stem()]] - code - temp-graphify/tests/test_file_node_id_spec.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_file_node_id_specpy
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_file_node_id_spec.py]] - degree 10, connects to 2 communities
- [[test_cross_file_import_edges_stay_connected()]] - degree 3, connects to 1 community
- [[test_file_node_id_uses_parent_dir_and_stem_no_extension()]] - degree 3, connects to 1 community
- [[test_nested_file_symbol_ids_unchanged()]] - degree 3, connects to 1 community
- [[test_symbol_and_file_ids_share_the_same_stem()]] - degree 3, connects to 1 community
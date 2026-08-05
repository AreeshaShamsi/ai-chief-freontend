---
type: community
cohesion: 0.21
members: 13
---

# test_src_layout_import_resolution.py

**Cohesion:** 0.21 - loosely connected
**Members:** 13 nodes

## Members
- [[2072 review the alias map is Python-only, but a non-Python import edge whose…]] - rationale - temp-graphify/tests/test_src_layout_import_resolution.py
- [[2072 Python import resolution must not depend on the scan root. A src-layout…]] - rationale - temp-graphify/tests/test_src_layout_import_resolution.py
- [[(relation, source, target) for import edges, present-endpoints only.]] - rationale - temp-graphify/tests/test_src_layout_import_resolution.py
- [[A dotted-module id claimed by two different files (two src roots with the same…]] - rationale - temp-graphify/tests/test_src_layout_import_resolution.py
- [[Headline (2072) the same project yields the same import edges whether scanned…]] - rationale - temp-graphify/tests/test_src_layout_import_resolution.py
- [[Path_101]] - code
- [[_import_edges()]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[_write()_22]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[test_ambiguous_package_alias_is_not_repointed()]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[test_import_edges_identical_from_root_or_src()]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[test_non_python_import_edge_is_not_repointed()]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[test_resolve_python_module_path_walks_up_to_src_package_root()]] - code - temp-graphify/tests/test_src_layout_import_resolution.py
- [[test_src_layout_import_resolution.py]] - code - temp-graphify/tests/test_src_layout_import_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_src_layout_import_resolutionpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_build_from_json]]
- 4 edges to [[_COMMUNITY_extract.py]]
- 4 edges to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]

## Top bridge nodes
- [[test_src_layout_import_resolution.py]] - degree 13, connects to 4 communities
- [[test_import_edges_identical_from_root_or_src()]] - degree 6, connects to 2 communities
- [[test_ambiguous_package_alias_is_not_repointed()]] - degree 5, connects to 2 communities
- [[test_non_python_import_edge_is_not_repointed()]] - degree 5, connects to 2 communities
- [[test_resolve_python_module_path_walks_up_to_src_package_root()]] - degree 2, connects to 1 community
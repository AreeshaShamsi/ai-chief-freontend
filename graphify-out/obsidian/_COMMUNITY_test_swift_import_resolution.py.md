---
type: community
cohesion: 0.61
members: 8
---

# test_swift_import_resolution.py

**Cohesion:** 0.61 - moderately connected
**Members:** 8 nodes

## Members
- [[Path_104]] - code
- [[_import_edges()_1]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[_module_nodes()]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[_write()_24]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[test_swift_import_edges_survive_build()]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[test_swift_import_resolution.py]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[test_swift_import_resolves_to_module_node()]] - code - temp-graphify/tests/test_swift_import_resolution.py
- [[test_swift_same_module_imported_twice_collapses_to_one_node()]] - code - temp-graphify/tests/test_swift_import_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_swift_import_resolutionpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_swift_import_resolution.py]] - degree 10, connects to 4 communities
- [[test_swift_import_edges_survive_build()]] - degree 5, connects to 2 communities
- [[test_swift_import_resolves_to_module_node()]] - degree 6, connects to 1 community
- [[test_swift_same_module_imported_twice_collapses_to_one_node()]] - degree 6, connects to 1 community
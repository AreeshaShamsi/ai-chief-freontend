---
type: community
cohesion: 0.18
members: 11
---

# validate_graph_path

**Cohesion:** 0.18 - loosely connected
**Members:** 11 nodes

## Members
- [[Path_51]] - code
- [[Resolve path and verify it stays inside base. base defaults to the…]] - rationale - temp-graphify/graphify/security.py
- [[The base=None discovery must honour GRAPHIFY_OUT, not the hardcoded 'graphify-…]] - rationale - temp-graphify/tests/test_security.py
- [[With base omitted, the output dir is discovered by walking the path's parents…]] - rationale - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_allows_inside_base()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_blocks_traversal()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_default_base_discovers_output_dir()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_default_base_honours_graphify_out_override()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_raises_if_file_missing()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_graph_path_requires_base_exists()]] - code - temp-graphify/tests/test_security.py
- [[validate_graph_path()]] - code - temp-graphify/graphify/security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/validate_graph_path
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_security.py]]
- 1 edge to [[_COMMUNITY_security.py]]

## Top bridge nodes
- [[validate_graph_path()]] - degree 10, connects to 2 communities
- [[test_validate_graph_path_default_base_discovers_output_dir()]] - degree 3, connects to 1 community
- [[test_validate_graph_path_default_base_honours_graphify_out_override()]] - degree 3, connects to 1 community
- [[Path_51]] - degree 2, connects to 1 community
- [[test_validate_graph_path_allows_inside_base()]] - degree 2, connects to 1 community
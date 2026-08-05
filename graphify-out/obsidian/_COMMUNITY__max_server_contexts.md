---
type: community
cohesion: 0.50
members: 4
---

# _max_server_contexts

**Cohesion:** 0.50 - moderately connected
**Members:** 4 nodes

## Members
- [[Return the project-context LRU capacity (default 8, minimum 1).…]] - rationale - temp-graphify/graphify/serve.py
- [[_max_server_contexts()]] - code - temp-graphify/graphify/serve.py
- [[parametrize_26]] - code
- [[test_max_server_contexts_parsing()]] - code - temp-graphify/tests/test_serve_http.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_max_server_contexts
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY_test_serve_http.py]]

## Top bridge nodes
- [[_max_server_contexts()]] - degree 4, connects to 2 communities
- [[test_max_server_contexts_parsing()]] - degree 3, connects to 1 community
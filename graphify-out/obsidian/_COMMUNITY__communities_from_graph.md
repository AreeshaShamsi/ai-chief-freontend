---
type: community
cohesion: 0.22
members: 10
---

# _communities_from_graph

**Cohesion:** 0.22 - loosely connected
**Members:** 10 nodes

## Members
- [[dot-__init__()_6]] - code - temp-graphify/graphify/serve.py
- [[dot-_load_entry()]] - code - temp-graphify/graphify/serve.py
- [[dot-load()]] - code - temp-graphify/graphify/serve.py
- [[Build one entry for an already-resolved path and known file key.…]] - rationale - temp-graphify/graphify/serve.py
- [[Reconstruct community dict from community property stored on nodes.]] - rationale - temp-graphify/graphify/serve.py
- [[Return a fresh context, retaining project contexts by LRU order.…]] - rationale - temp-graphify/graphify/serve.py
- [[Thread-safe graph contexts one pinned default plus an LRU of projects.]] - rationale - temp-graphify/graphify/serve.py
- [[_GraphContextCache]] - code - temp-graphify/graphify/serve.py
- [[_communities_from_graph()]] - code - temp-graphify/graphify/serve.py
- [[test_communities_from_graph_no_community_attr()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_communities_from_graph
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_serve.py]]
- 2 edges to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY__find_node]]
- 1 edge to [[_COMMUNITY_Graph]]

## Top bridge nodes
- [[_communities_from_graph()]] - degree 7, connects to 2 communities
- [[_GraphContextCache]] - degree 6, connects to 2 communities
- [[dot-_load_entry()]] - degree 6, connects to 2 communities
- [[test_communities_from_graph_no_community_attr()]] - degree 3, connects to 2 communities
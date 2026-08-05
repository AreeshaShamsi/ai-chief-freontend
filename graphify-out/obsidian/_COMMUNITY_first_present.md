---
type: community
cohesion: 0.29
members: 8
---

# first_present

**Cohesion:** 0.29 - loosely connected
**Members:** 8 nodes

## Members
- [[Normalize a graphify node across common graph.json schema variants.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Normalize edge endpoints that may be strings or node-like objects.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Normalize graphify edges while preserving original fields.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Return the first non-empty value for any candidate key.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[endpoint_id()]] - code - temp-graphify/graphify/callflow_html.py
- [[first_present()]] - code - temp-graphify/graphify/callflow_html.py
- [[normalize_edge()]] - code - temp-graphify/graphify/callflow_html.py
- [[normalize_node()]] - code - temp-graphify/graphify/callflow_html.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/first_present
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_callflow_html.py]]
- 2 edges to [[_COMMUNITY_write_callflow_html]]
- 2 edges to [[_COMMUNITY_load_graph]]
- 1 edge to [[_COMMUNITY_Counter]]

## Top bridge nodes
- [[normalize_edge()]] - degree 6, connects to 3 communities
- [[normalize_node()]] - degree 5, connects to 3 communities
- [[first_present()]] - degree 6, connects to 2 communities
- [[endpoint_id()]] - degree 4, connects to 1 community
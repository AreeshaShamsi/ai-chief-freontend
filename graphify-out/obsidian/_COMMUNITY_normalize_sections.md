---
type: community
cohesion: 0.33
members: 6
---

# normalize_sections

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[Ensure sections have safe unique IDs and an overview section first.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate a stable, unique HTML anchor ID.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Normalize section community lists from JSON or simple strings.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[html_anchor_id()]] - code - temp-graphify/graphify/callflow_html.py
- [[normalize_communities()]] - code - temp-graphify/graphify/callflow_html.py
- [[normalize_sections()]] - code - temp-graphify/graphify/callflow_html.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/normalize_sections
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_callflow_html.py]]
- 1 edge to [[_COMMUNITY_pick_text]]
- 1 edge to [[_COMMUNITY_write_callflow_html]]

## Top bridge nodes
- [[normalize_sections()]] - degree 6, connects to 3 communities
- [[html_anchor_id()]] - degree 3, connects to 1 community
- [[normalize_communities()]] - degree 3, connects to 1 community
---
type: community
cohesion: 0.12
members: 21
---

# Counter

**Cohesion:** 0.12 - loosely connected
**Members:** 21 nodes

## Members
- [[Aggregate inter-section edge counts and relation names.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Convert graph numeric fields that may be serialized as strings.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Counter]] - code
- [[Decide whether to auto-include an edge in Mermaid output.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Derive a readable section flow from inter-section edges.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Filter to edges that make a readable call-flow diagram.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate generic overview cards.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Rank edges by confidence and usefulness for diagrams.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Score nodes by useful edge participation.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Select a compact, connected subset of nodes for readable diagrams.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Use graphify centrality fields when available.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[derive_flow_chain()]] - code - temp-graphify/graphify/callflow_html.py
- [[edge_score()]] - code - temp-graphify/graphify/callflow_html.py
- [[generate_overview_cards()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_degree_scores()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_importance()]] - code - temp-graphify/graphify/callflow_html.py
- [[preferred_edges()]] - code - temp-graphify/graphify/callflow_html.py
- [[section_edge_summary()]] - code - temp-graphify/graphify/callflow_html.py
- [[select_diagram_nodes()]] - code - temp-graphify/graphify/callflow_html.py
- [[should_include_edge()]] - code - temp-graphify/graphify/callflow_html.py
- [[to_float()]] - code - temp-graphify/graphify/callflow_html.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Counter
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_callflow_html.py]]
- 4 edges to [[_COMMUNITY_pick_text]]
- 4 edges to [[_COMMUNITY_generate_section_flowchart]]
- 1 edge to [[_COMMUNITY_first_present]]
- 1 edge to [[_COMMUNITY_write_callflow_html]]

## Top bridge nodes
- [[generate_overview_cards()]] - degree 5, connects to 3 communities
- [[Counter]] - degree 7, connects to 2 communities
- [[select_diagram_nodes()]] - degree 7, connects to 2 communities
- [[edge_score()]] - degree 6, connects to 2 communities
- [[section_edge_summary()]] - degree 6, connects to 2 communities
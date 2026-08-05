---
type: community
cohesion: 0.11
members: 24
---

# generate_section_flowchart

**Cohesion:** 0.11 - loosely connected
**Members:** 24 nodes

## Members
- [[Build a Mermaid-safe ASCII identifier with a hash suffix to avoid collisions.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Build a readable Mermaid node label.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Classify a graph node for Mermaid styling and table tags.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Convert a section ID (like 'cli-entry') to a safe Mermaid ID (like 'CLI_ENTRY').]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate a compact, human-readable call-flow chart for a section.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate a readable section-level architecture overview.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate a safe Mermaid node ID from a graph node. Mermaid IDs must match…]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Group selected nodes by source file for Mermaid subgraphs.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Map graph edge relation names to short diagram labels.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Return a Mermaid init directive that scales diagrams using Mermaid config.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Sanitize text for use inside a Mermaid node label. Replaces characters that…]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Shared Mermaid-native styles for readable diagrams.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[generate_overview_graph()]] - code - temp-graphify/graphify/callflow_html.py
- [[generate_section_flowchart()]] - code - temp-graphify/graphify/callflow_html.py
- [[group_nodes_by_file()]] - code - temp-graphify/graphify/callflow_html.py
- [[mermaid_class_defs()]] - code - temp-graphify/graphify/callflow_html.py
- [[mermaid_init()]] - code - temp-graphify/graphify/callflow_html.py
- [[mermaid_section_id()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_kind()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_label()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_mermaid_id()]] - code - temp-graphify/graphify/callflow_html.py
- [[relation_label()]] - code - temp-graphify/graphify/callflow_html.py
- [[safe_mermaid_text()]] - code - temp-graphify/graphify/callflow_html.py
- [[stable_ascii_id()]] - code - temp-graphify/graphify/callflow_html.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/generate_section_flowchart
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_callflow_html.py]]
- 6 edges to [[_COMMUNITY_pick_text]]
- 4 edges to [[_COMMUNITY_Counter]]
- 3 edges to [[_COMMUNITY_write_callflow_html]]
- 1 edge to [[_COMMUNITY_humanize_label]]

## Top bridge nodes
- [[generate_section_flowchart()]] - degree 15, connects to 4 communities
- [[node_label()]] - degree 7, connects to 4 communities
- [[generate_overview_graph()]] - degree 9, connects to 3 communities
- [[relation_label()]] - degree 7, connects to 2 communities
- [[group_nodes_by_file()]] - degree 4, connects to 2 communities
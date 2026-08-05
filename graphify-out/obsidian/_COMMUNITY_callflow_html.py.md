---
type: community
cohesion: 0.15
members: 19
---

# callflow_html.py

**Cohesion:** 0.15 - loosely connected
**Members:** 19 nodes

## Members
- [[Check if a node belongs to a section.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Choose a readable section name for a community.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Derive architecture-oriented sections when no sections JSON is supplied.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate the HTML header, title, subtitle, and nav.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Generate the sticky navigation bar.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Map community_id (str) - list of nodes.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Pick representative words from labels and file names.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[Return selected grouped sections and overflow communities.]] - rationale - temp-graphify/graphify/callflow_html.py
- [[_community_text()]] - code - temp-graphify/graphify/callflow_html.py
- [[_keyword_score()]] - code - temp-graphify/graphify/callflow_html.py
- [[_rank_grouped_sections()]] - code - temp-graphify/graphify/callflow_html.py
- [[build_community_index()]] - code - temp-graphify/graphify/callflow_html.py
- [[callflow_html.py]] - code - temp-graphify/graphify/callflow_html.py
- [[derive_sections_from_communities()]] - code - temp-graphify/graphify/callflow_html.py
- [[generate_header()]] - code - temp-graphify/graphify/callflow_html.py
- [[generate_nav()]] - code - temp-graphify/graphify/callflow_html.py
- [[label_for_community()]] - code - temp-graphify/graphify/callflow_html.py
- [[node_in_section()]] - code - temp-graphify/graphify/callflow_html.py
- [[section_keywords()]] - code - temp-graphify/graphify/callflow_html.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/callflow_htmlpy
SORT file.name ASC
```

## Connections to other communities
- 17 edges to [[_COMMUNITY_write_callflow_html]]
- 13 edges to [[_COMMUNITY_pick_text]]
- 12 edges to [[_COMMUNITY_generate_section_flowchart]]
- 11 edges to [[_COMMUNITY_Counter]]
- 6 edges to [[_COMMUNITY_load_graph]]
- 4 edges to [[_COMMUNITY_first_present]]
- 3 edges to [[_COMMUNITY_normalize_sections]]
- 3 edges to [[_COMMUNITY_humanize_label]]
- 2 edges to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_to_json]]
- 1 edge to [[_COMMUNITY_test_security.py]]

## Top bridge nodes
- [[callflow_html.py]] - degree 74, connects to 11 communities
- [[derive_sections_from_communities()]] - degree 11, connects to 3 communities
- [[section_keywords()]] - degree 5, connects to 2 communities
- [[label_for_community()]] - degree 5, connects to 1 community
- [[build_community_index()]] - degree 4, connects to 1 community
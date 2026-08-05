---
type: community
cohesion: 0.29
members: 7
---

# sanitize_label

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[Strip control characters and cap length. Safe for embedding in JSON data…]] - rationale - temp-graphify/graphify/security.py
- [[sanitize_label()]] - code - temp-graphify/graphify/security.py
- [[test_sanitize_label_caps_at_256()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_label_none_returns_empty()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_label_passthrough_html_chars()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_label_safe_passthrough()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_label_strips_control_chars()]] - code - temp-graphify/tests/test_security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/sanitize_label
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_test_security.py]]
- 2 edges to [[_COMMUNITY_to_json]]
- 2 edges to [[_COMMUNITY_make_id]]
- 2 edges to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_test_export.py]]
- 1 edge to [[_COMMUNITY_security.py]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]

## Top bridge nodes
- [[sanitize_label()]] - degree 19, connects to 10 communities
- [[test_sanitize_label_caps_at_256()]] - degree 2, connects to 1 community
- [[test_sanitize_label_none_returns_empty()]] - degree 2, connects to 1 community
- [[test_sanitize_label_passthrough_html_chars()]] - degree 2, connects to 1 community
- [[test_sanitize_label_safe_passthrough()]] - degree 2, connects to 1 community
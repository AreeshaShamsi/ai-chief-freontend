---
source_file: "temp-graphify/graphify/security.py"
type: "code"
community: "sanitize_label"
location: "L394"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/sanitize_label
---

# sanitize_label()

## Connections
- [[Strip control characters and cap length. Safe for embedding in JSON data…]] - `rationale_for` [EXTRACTED]
- [[_add_node()]] - `calls` [EXTRACTED]
- [[_build_server()]] - `calls` [EXTRACTED]
- [[_community_header()]] - `calls` [EXTRACTED]
- [[_subgraph_to_text()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[export.py]] - `imports` [EXTRACTED]
- [[html.py]] - `imports` [EXTRACTED]
- [[mcp_ingest.py]] - `imports` [EXTRACTED]
- [[security.py]] - `contains` [EXTRACTED]
- [[serve.py]] - `imports` [EXTRACTED]
- [[test_sanitize_label_caps_at_256()]] - `calls` [EXTRACTED]
- [[test_sanitize_label_none_returns_empty()]] - `calls` [EXTRACTED]
- [[test_sanitize_label_passthrough_html_chars()]] - `calls` [EXTRACTED]
- [[test_sanitize_label_safe_passthrough()]] - `calls` [EXTRACTED]
- [[test_sanitize_label_strips_control_chars()]] - `calls` [EXTRACTED]
- [[test_security.py]] - `imports` [EXTRACTED]
- [[to_html()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/sanitize_label
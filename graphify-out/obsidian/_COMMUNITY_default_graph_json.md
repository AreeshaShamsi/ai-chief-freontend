---
type: community
cohesion: 0.20
members: 12
---

# default_graph_json

**Cohesion:** 0.20 - loosely connected
**Members:** 12 nodes

## Members
- [[Default ``graph.json`` path under the configured output dir. The package-wide…]] - rationale - temp-graphify/graphify/paths.py
- [[Filter blank lines from stdin before MCP reads it. Some MCP clients (Claude…]] - rationale - temp-graphify/graphify/serve.py
- [[Start the MCP server over Streamable HTTP (MCP spec 2025-03-26). Serves the…]] - rationale - temp-graphify/graphify/serve.py
- [[Start the MCP server over stdio (the default, per-developer transport).]] - rationale - temp-graphify/graphify/serve.py
- [[_filter_blank_stdin()]] - code - temp-graphify/graphify/serve.py
- [[_main()]] - code - temp-graphify/graphify/serve.py
- [[default_graph_json()]] - code - temp-graphify/graphify/paths.py
- [[serve()]] - code - temp-graphify/graphify/serve.py
- [[serve_http()]] - code - temp-graphify/graphify/serve.py
- [[test_cli_api_key_from_env()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_cli_defaults_to_stdio()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_cli_http_passes_flags()]] - code - temp-graphify/tests/test_serve_http.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/default_graph_json
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_serve.py]]
- 4 edges to [[_COMMUNITY_test_serve_http.py]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 2 edges to [[_COMMUNITY_graphifybuild.py]]
- 2 edges to [[_COMMUNITY_prs.py]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]

## Top bridge nodes
- [[default_graph_json()]] - degree 13, connects to 6 communities
- [[serve()]] - degree 6, connects to 2 communities
- [[serve_http()]] - degree 5, connects to 2 communities
- [[_main()]] - degree 7, connects to 1 community
- [[_filter_blank_stdin()]] - degree 3, connects to 1 community
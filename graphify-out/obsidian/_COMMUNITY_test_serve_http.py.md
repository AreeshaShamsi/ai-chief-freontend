---
type: community
cohesion: 0.16
members: 36
---

# test_serve_http.py

**Cohesion:** 0.16 - loosely connected
**Members:** 36 nodes

## Members
- [[A CLI-style SystemExit from a client graph cannot stop the MCP server.]] - rationale - temp-graphify/tests/test_serve_http.py
- [[A full initialize - toolslist round trip works over the HTTP transport.]] - rationale - temp-graphify/tests/test_serve_http.py
- [[A missing project graph is a tool error, not a process exit — the server keeps…]] - rationale - temp-graphify/tests/test_serve_http.py
- [[Build the Starlette ASGI app for the Streamable HTTP transport. Split out from…]] - rationale - temp-graphify/graphify/serve.py
- [[Create ``projgraphify-outgraph.json`` and return the project dir.]] - rationale - temp-graphify/tests/test_serve_http.py
- [[Multi-project support is additive every tool gains an optional project_path,…]] - rationale - temp-graphify/tests/test_serve_http.py
- [[One running server answers against the default graph when project_path is…]] - rationale - temp-graphify/tests/test_serve_http.py
- [[Path_98]] - code
- [[Project contexts hit, promote, and evict without evicting the default.]] - rationale - temp-graphify/tests/test_serve_http.py
- [[TestClient]] - code
- [[Tests for the Streamable HTTP transport on the MCP server (issue 1143). These…]] - rationale - temp-graphify/tests/test_serve_http.py
- [[_build_http_app()]] - code - temp-graphify/graphify/serve.py
- [[_call_tool()]] - code - temp-graphify/tests/test_serve_http.py
- [[_client()]] - code - temp-graphify/tests/test_serve_http.py
- [[_graph_file()]] - code - temp-graphify/tests/test_serve_http.py
- [[_init_session()]] - code - temp-graphify/tests/test_serve_http.py
- [[_project_with_graph()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_api_key_bearer_ok()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_api_key_bearer_scheme_case_insensitive()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_api_key_missing_is_401()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_api_key_wrong_is_401()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_api_key_x_api_key_header_ok()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_app_builds_and_initialize_succeeds()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_bad_project_path_errors_without_killing_server()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_blank_api_key_means_no_auth()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_corrupt_project_graph_is_a_tool_error_without_killing_server()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_custom_mount_path()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_project_context_cache_is_lru_and_pins_default_graph()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_project_path_is_optional_on_every_tool()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_project_path_routes_to_that_projects_graph()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_serve_http.py]] - code - temp-graphify/tests/test_serve_http.py
- [[test_session_timeout_zero_disables()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_stateless_mode_initialize()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_stateless_with_timeout_does_not_raise()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_tools_list_over_http()]] - code - temp-graphify/tests/test_serve_http.py
- [[test_unknown_path_is_404()]] - code - temp-graphify/tests/test_serve_http.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_serve_httppy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_default_graph_json]]
- 2 edges to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_test_prs.py]]
- 1 edge to [[_COMMUNITY__MCPASGIApp]]
- 1 edge to [[_COMMUNITY__max_server_contexts]]

## Top bridge nodes
- [[test_serve_http.py]] - degree 30, connects to 4 communities
- [[_build_http_app()]] - degree 23, connects to 4 communities
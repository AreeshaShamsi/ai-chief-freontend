---
source_file: "temp-graphify/graphify/mcp_ingest.py"
type: "code"
community: "test_mcp_ingest.py"
location: "L86"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_mcp_ingestpy
---

# extract_mcp_config()

## Connections
- [[Any_6]] - `references` [EXTRACTED]
- [[Parse an MCP config file into Graphify nodes and edges. Behaviour matches other…]] - `rationale_for` [EXTRACTED]
- [[Path_45]] - `references` [EXTRACTED]
- [[_add_node()]] - `calls` [EXTRACTED]
- [[_emit_server()]] - `calls` [EXTRACTED]
- [[_file_stem()]] - `calls` [EXTRACTED]
- [[_get_extractor()]] - `indirect_call` [INFERRED]
- [[_make_id()_1]] - `calls` [EXTRACTED]
- [[extract.py]] - `imports` [EXTRACTED]
- [[mcp_ingest.py]] - `contains` [EXTRACTED]
- [[test_env_var_values_never_appear_anywhere()]] - `calls` [EXTRACTED]
- [[test_every_edge_has_confidence_score()]] - `calls` [EXTRACTED]
- [[test_filesystem_path_not_persisted_as_node()]] - `calls` [EXTRACTED]
- [[test_fixture_emits_commands_as_global_nodes()]] - `calls` [EXTRACTED]
- [[test_fixture_emits_env_var_names()]] - `calls` [EXTRACTED]
- [[test_fixture_emits_every_server()]] - `calls` [EXTRACTED]
- [[test_fixture_emits_npm_packages()]] - `calls` [EXTRACTED]
- [[test_fixture_emits_python_packages()]] - `calls` [EXTRACTED]
- [[test_fixture_parses_without_error()]] - `calls` [EXTRACTED]
- [[test_fixture_relations_include_contains_references_requires_env()]] - `calls` [EXTRACTED]
- [[test_fixture_strips_version_from_npm_package()]] - `calls` [EXTRACTED]
- [[test_malformed_json_returns_error()]] - `calls` [EXTRACTED]
- [[test_mcp_ingest.py]] - `imports` [EXTRACTED]
- [[test_missing_mcp_servers_key()]] - `calls` [EXTRACTED]
- [[test_nested_mcp_servers_shape()]] - `calls` [EXTRACTED]
- [[test_no_dangling_edges()]] - `calls` [EXTRACTED]
- [[test_no_package_detected_for_unknown_arg_shape()]] - `calls` [EXTRACTED]
- [[test_non_dict_server_entry_skipped()]] - `calls` [EXTRACTED]
- [[test_oversize_file_skipped()]] - `calls` [EXTRACTED]
- [[test_package_detection_skips_flags()]] - `calls` [EXTRACTED]
- [[test_root_not_an_object()]] - `calls` [EXTRACTED]
- [[test_same_command_collapses_to_one_node_across_configs()]] - `calls` [EXTRACTED]
- [[test_same_env_var_collapses_to_one_node_across_configs()]] - `calls` [EXTRACTED]
- [[test_same_server_name_in_different_dirs_does_not_collide()]] - `calls` [EXTRACTED]
- [[test_server_without_command_still_emits_server_node()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_mcp_ingestpy
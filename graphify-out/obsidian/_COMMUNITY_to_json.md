---
type: community
cohesion: 0.06
members: 47
---

# to_json

**Cohesion:** 0.06 - loosely connected
**Members:** 47 nodes

## Members
- [[479 refuse to silently overwrite an existing graph with fewer nodes.]] - rationale - temp-graphify/tests/test_export.py
- [[A non-empty but unparseable existing graph.json (corrupt or mid-write) must NOT…]] - rationale - temp-graphify/tests/test_export.py
- [[An emptywhitespace existing file has no nodes to lose, so it is not a shrink…]] - rationale - temp-graphify/tests/test_export.py
- [[Cap a filename stem to ``limit`` UTF-8 bytes so it stays under the 255-byte…]] - rationale - temp-graphify/graphify/export.py
- [[Edges lacking confidence_score get sensible defaults in to_json.]] - rationale - temp-graphify/tests/test_confidence.py
- [[Escape a string for safe embedding in a Cypher single-quoted literal. Handles…]] - rationale - temp-graphify/graphify/export.py
- [[Escape a value for safe embedding in a YAML double-quoted scalar (F-009). See…]] - rationale - temp-graphify/graphify/export.py
- [[Export graph as an SVG file using matplotlib + spring layout. Lightweight and…]] - rationale - temp-graphify/graphify/export.py
- [[Invert communities dict node_id - community_id.]] - rationale - temp-graphify/graphify/analyze.py
- [[Node count of an existing graph.json. Returns - an ``int`` node count when the…]] - rationale - temp-graphify/graphify/export.py
- [[Path_9]] - code
- [[Push graph directly to a running FalkorDB instance via the Python SDK.…]] - rationale - temp-graphify/graphify/exporters/graphdb.py
- [[Push graph directly to a running Neo4j instance via the Python driver.…]] - rationale - temp-graphify/graphify/exporters/graphdb.py
- [[Remove edges whose source or target node is not in the node set. Returns the…]] - rationale - temp-graphify/graphify/export.py
- [[Return the current git HEAD commit hash, or None if not in a git repo.]] - rationale - temp-graphify/graphify/export.py
- [[Sanitise a value used in identifier position (node label  rel type). Cypher…]] - rationale - temp-graphify/graphify/export.py
- [[Sanitize a community name for use as an Obsidian tag. Obsidian tags only allow…]] - rationale - temp-graphify/graphify/export.py
- [[Shared constantshelpers for the graphify exporters package. Symbols used by…]] - rationale - temp-graphify/graphify/exporters/base.py
- [[_cap_filename()]] - code - temp-graphify/graphify/export.py
- [[_cypher_escape()]] - code - temp-graphify/graphify/export.py
- [[_cypher_label()]] - code - temp-graphify/graphify/export.py
- [[_git_head()]] - code - temp-graphify/graphify/export.py
- [[_html_script()]] - code - temp-graphify/graphify/exporters/html.py
- [[_html_styles()]] - code - temp-graphify/graphify/exporters/html.py
- [[_hyperedge_script()]] - code - temp-graphify/graphify/exporters/html.py
- [[_mkG()]] - code - temp-graphify/tests/test_export.py
- [[_node_community_map()]] - code - temp-graphify/graphify/analyze.py
- [[_obsidian_tag()]] - code - temp-graphify/graphify/export.py
- [[_strip_diacritics()]] - code - temp-graphify/graphify/export.py
- [[_yaml_str()]] - code - temp-graphify/graphify/export.py
- [[existing_graph_node_count()]] - code - temp-graphify/graphify/export.py
- [[export.py]] - code - temp-graphify/graphify/export.py
- [[exportersbase.py]] - code - temp-graphify/graphify/exporters/base.py
- [[graphdb — moved verbatim from graphifyexport.py.]] - rationale - temp-graphify/graphify/exporters/graphdb.py
- [[graphdb.py]] - code - temp-graphify/graphify/exporters/graphdb.py
- [[html — moved verbatim from graphifyexport.py.]] - rationale - temp-graphify/graphify/exporters/html.py
- [[html.py]] - code - temp-graphify/graphify/exporters/html.py
- [[prune_dangling_edges()]] - code - temp-graphify/graphify/export.py
- [[push_to_falkordb()]] - code - temp-graphify/graphify/exporters/graphdb.py
- [[push_to_neo4j()]] - code - temp-graphify/graphify/exporters/graphdb.py
- [[test_existing_graph_node_count()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_defaults_missing_confidence_score()]] - code - temp-graphify/tests/test_confidence.py
- [[test_to_json_fails_safe_on_corrupt_existing()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_proceeds_on_empty_existing()]] - code - temp-graphify/tests/test_export.py
- [[test_to_json_refuses_shrink()]] - code - temp-graphify/tests/test_export.py
- [[to_json()]] - code - temp-graphify/graphify/export.py
- [[to_svg()]] - code - temp-graphify/graphify/export.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/to_json
SORT file.name ASC
```

## Connections to other communities
- 24 edges to [[_COMMUNITY_test_export.py]]
- 14 edges to [[_COMMUNITY_generate]]
- 12 edges to [[_COMMUNITY_to_obsidian]]
- 8 edges to [[_COMMUNITY_build_from_json]]
- 4 edges to [[_COMMUNITY_cli.py]]
- 4 edges to [[_COMMUNITY_dispatch_command]]
- 4 edges to [[_COMMUNITY_paths.py]]
- 4 edges to [[_COMMUNITY_test_cross_extension_reexport_self_cycle.py]]
- 4 edges to [[_COMMUNITY_build]]
- 3 edges to [[_COMMUNITY_test_build.py]]
- 3 edges to [[_COMMUNITY_test_security.py]]
- 3 edges to [[_COMMUNITY__rebuild_code]]
- 2 edges to [[_COMMUNITY_backup_if_protected]]
- 2 edges to [[_COMMUNITY_security.py]]
- 2 edges to [[_COMMUNITY_sanitize_label]]
- 2 edges to [[_COMMUNITY_test_cli_export.py]]
- 2 edges to [[_COMMUNITY_test_falkordb_integration.py]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]
- 1 edge to [[_COMMUNITY_callflow_html.py]]
- 1 edge to [[_COMMUNITY_test_reflect.py]]
- 1 edge to [[_COMMUNITY_test_analyze.py]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_CsharpNameResolver]]
- 1 edge to [[_COMMUNITY_test_file_label_disambiguation.py]]

## Top bridge nodes
- [[to_json()]] - degree 43, connects to 14 communities
- [[export.py]] - degree 40, connects to 12 communities
- [[html.py]] - degree 16, connects to 9 communities
- [[existing_graph_node_count()]] - degree 8, connects to 4 communities
- [[_node_community_map()]] - degree 15, connects to 3 communities
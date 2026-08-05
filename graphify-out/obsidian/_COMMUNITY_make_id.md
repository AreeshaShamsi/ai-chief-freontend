---
type: community
cohesion: 0.08
members: 44
---

# make_id

**Cohesion:** 0.08 - loosely connected
**Members:** 44 nodes

## Members
- [[811 non-ASCII identifiers must yield distinct, non-empty IDs rather than…]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[Any_6]] - code
- [[Append a node if not already present. ``kind`` is metadata, not file_type.]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Append an edge if (source, target, relation) is not already present.]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Bash symbol node ID via the single shared recipe (1378). Previously an inline…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Build a canonical node ID from one or more name parts. Parts are joined with…]] - rationale - temp-graphify/graphify/ids.py
- [[Build a stable node ID via the single shared recipe (1378).]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Drift guard for the node-ID normalization contract. Three independent producers…]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[Drop the ``@version`` suffix from an npm package id, preserving the scope.…]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Emit nodesedges for one entry under ``mcpServers``.]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Guard against re-forking the two public callers must resolve to the same…]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[Multi-part make_id == normalize_id of the joined parts (the builder only ever…]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[Output is lowercase and contains no pathpunctuation separators.]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[Regex-based fallback for Spock spec files where tree-sitter-groovy cannot parse…]] - rationale - temp-graphify/graphify/extract.py
- [[Return the first arg that looks like an npm or pypi package id, else None.…]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[Single source of truth for node-ID normalization. Three independent producers…]] - rationale - temp-graphify/graphify/ids.py
- [[The AST id-maker and the builder's reconciler must agree, char for char.]] - rationale - temp-graphify/tests/test_id_normalization_contract.py
- [[The collision hash must touch only actual colliders — a path with no collision…]] - rationale - temp-graphify/tests/test_extract.py
- [[_add_edge()]] - code - temp-graphify/graphify/mcp_ingest.py
- [[_add_node()]] - code - temp-graphify/graphify/mcp_ingest.py
- [[_bash_make_id()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[_detect_package_from_args()]] - code - temp-graphify/graphify/mcp_ingest.py
- [[_emit_server()]] - code - temp-graphify/graphify/mcp_ingest.py
- [[_extract_spock_fallback()]] - code - temp-graphify/graphify/extract.py
- [[_make_id()_1]] - code - temp-graphify/graphify/mcp_ingest.py
- [[_strip_version()]] - code - temp-graphify/graphify/mcp_ingest.py
- [[given]] - code
- [[ids.py]] - code - temp-graphify/graphify/ids.py
- [[make_id()]] - code - temp-graphify/graphify/ids.py
- [[mcp_ingest.py]] - code - temp-graphify/graphify/mcp_ingest.py
- [[mcp_ingest.py — Extract MCP (Model Context Protocol) server configuration…]] - rationale - temp-graphify/graphify/mcp_ingest.py
- [[normalize_id()]] - code - temp-graphify/graphify/ids.py
- [[parametrize_10]] - code
- [[rNormalize a single ID string to its canonical form. Idempotent…]] - rationale - temp-graphify/graphify/ids.py
- [[test_both_callers_share_one_implementation()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_id_normalization_contract.py]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_make_id_joins_then_normalizes()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_make_id_matches_normalize_id()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_non_colliding_path_id_is_not_salted()]] - code - temp-graphify/tests/test_extract.py
- [[test_normalize_id_is_idempotent()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_normalized_ids_are_safe_node_ids()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_property_make_id_equals_normalize_id()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_property_normalize_id_idempotent()]] - code - temp-graphify/tests/test_id_normalization_contract.py
- [[test_unicode_identifiers_do_not_collapse_to_empty()]] - code - temp-graphify/tests/test_id_normalization_contract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/make_id
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY__make_id]]
- 7 edges to [[_COMMUNITY_graphifybuild.py]]
- 7 edges to [[_COMMUNITY_test_mcp_ingest.py]]
- 4 edges to [[_COMMUNITY__read_text]]
- 4 edges to [[_COMMUNITY_symbol_resolution.py]]
- 3 edges to [[_COMMUNITY_build_from_json]]
- 3 edges to [[_COMMUNITY_cache.py]]
- 3 edges to [[_COMMUNITY_extract.py]]
- 3 edges to [[_COMMUNITY_test_manifest_ingest.py]]
- 3 edges to [[_COMMUNITY_test_symbol_resolution.py]]
- 2 edges to [[_COMMUNITY__semantic_id_remap]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY_test_extract.py]]
- 2 edges to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_test_languages.py]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_extract_json]]
- 1 edge to [[_COMMUNITY_extract_terraform]]
- 1 edge to [[_COMMUNITY_test_multilang.py]]
- 1 edge to [[_COMMUNITY_test_sql_cross_file_fk_resolves_and_never_leaks_scan_path]]
- 1 edge to [[_COMMUNITY_security.py]]
- 1 edge to [[_COMMUNITY_run_language_resolvers]]

## Top bridge nodes
- [[make_id()]] - degree 26, connects to 10 communities
- [[normalize_id()]] - degree 21, connects to 7 communities
- [[mcp_ingest.py]] - degree 17, connects to 5 communities
- [[ids.py]] - degree 11, connects to 5 communities
- [[_add_node()]] - degree 10, connects to 4 communities
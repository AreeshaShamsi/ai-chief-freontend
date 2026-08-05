---
type: community
cohesion: 0.08
members: 45
---

# test_security.py

**Cohesion:** 0.08 - loosely connected
**Members:** 45 nodes

## Members
- [[Any_10]] - code
- [[Reject path if its size exceeds the configured graph-file cap. Protects…]] - rationale - temp-graphify/graphify/security.py
- [[Return a control-character-free, HTML-escaped, bounded string.]] - rationale - temp-graphify/graphify/security.py
- [[Return the graph.json size cap in bytes. Honors the…]] - rationale - temp-graphify/graphify/security.py
- [[Sanitize a metadata value while preserving simple JSON-compatible types.]] - rationale - temp-graphify/graphify/security.py
- [[Sanitize metadata keys and values before graph export. Metadata is less…]] - rationale - temp-graphify/graphify/security.py
- [[Tests for graphifysecurity.py - URL validation, safe fetch, path guards, label…]] - rationale - temp-graphify/tests/test_security.py
- [[_max_graph_file_bytes()]] - code - temp-graphify/graphify/security.py
- [[_sanitize_metadata_string()]] - code - temp-graphify/graphify/security.py
- [[_sanitize_metadata_value()]] - code - temp-graphify/graphify/security.py
- [[check_graph_file_size_cap()]] - code - temp-graphify/graphify/security.py
- [[parametrize_24]] - code
- [[sanitize_metadata()]] - code - temp-graphify/graphify/security.py
- [[test_graph_size_cap_at_boundary_passes()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_default_is_512_mib()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_error_message_includes_size_and_cap()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_missing_file_silently_returns()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_over_limit_raises()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_under_limit_returns_none()]] - code - temp-graphify/tests/test_security.py
- [[test_graph_size_cap_unreadable_directory_silently_returns()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_default_when_blank()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_default_when_unset()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_gb_suffix_is_binary()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_mb_suffix_is_binary()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_nonpositive_falls_back()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_plain_integer()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_suffix_is_case_insensitive()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_tolerates_space_before_suffix()]] - code - temp-graphify/tests/test_security.py
- [[test_max_graph_bytes_unparseable_falls_back()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_bool_not_coerced_to_int()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_drops_empty_key()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_none_returns_empty_dict()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_recursive_nested()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_sanitizes_keys()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_string_caps_length()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_string_coerces_non_string()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_string_escapes_html()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_string_escapes_quotes()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_string_strips_control_chars()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_value_caps_list_length()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_value_converts_tuple_to_list()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_value_preserves_simple_types()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_value_recurses_into_dict()]] - code - temp-graphify/tests/test_security.py
- [[test_sanitize_metadata_value_recurses_into_list()]] - code - temp-graphify/tests/test_security.py
- [[test_security.py]] - code - temp-graphify/tests/test_security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_securitypy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_security.py]]
- 9 edges to [[_COMMUNITY_safe_fetch]]
- 8 edges to [[_COMMUNITY_validate_graph_path]]
- 6 edges to [[_COMMUNITY_sanitize_label]]
- 4 edges to [[_COMMUNITY_dispatch_command]]
- 3 edges to [[_COMMUNITY_to_json]]
- 3 edges to [[_COMMUNITY__read_text]]
- 3 edges to [[_COMMUNITY_scip_ingest.py]]
- 2 edges to [[_COMMUNITY_graphifybuild.py]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_paths.py]]
- 2 edges to [[_COMMUNITY_prs.py]]
- 2 edges to [[_COMMUNITY_test_file_label_disambiguation.py]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_callflow_html.py]]
- 1 edge to [[_COMMUNITY_load_graph]]
- 1 edge to [[_COMMUNITY_test_multigraph_diagnostics.py]]
- 1 edge to [[_COMMUNITY_test_corrupt_graph_json.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_extract_bash]]
- 1 edge to [[_COMMUNITY_ingest.py]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_test_serve.py]]
- 1 edge to [[_COMMUNITY_symbol_resolution.py]]
- 1 edge to [[_COMMUNITY_resolve_python_import_guided_calls]]

## Top bridge nodes
- [[check_graph_file_size_cap()]] - degree 36, connects to 16 communities
- [[sanitize_metadata()]] - degree 22, connects to 8 communities
- [[test_security.py]] - degree 68, connects to 5 communities
- [[_max_graph_file_bytes()]] - degree 13, connects to 1 community
- [[_sanitize_metadata_string()]] - degree 10, connects to 1 community
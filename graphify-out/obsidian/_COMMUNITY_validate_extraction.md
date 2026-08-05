---
type: community
cohesion: 0.08
members: 49
---

# validate_extraction

**Cohesion:** 0.08 - loosely connected
**Members:** 49 nodes

## Members
- [[1746 information_schema.referential_constraints only shows constraints where…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[1854 FK edges must survive routines whose reconstructed DDL the SQL grammar…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[2194 nodes carrying `name``path` instead of `label``source_file` must be…]] - rationale - temp-graphify/tests/test_build.py
- [[A 2-column composite FK must produce exactly ONE references edge, not two. The…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[A psycopg.OperationalError must be re-raised as ConnectionError with a…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Assert that the virtual path in postgresql introspection output uses forward…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Baseline tables, views, routines, and a single-column FK all survive.]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Connect to PostgreSQL, reconstruct DDL, and extract via extract_sql().]] - rationale - temp-graphify/graphify/pg_introspect.py
- [[Double-quote a PostgreSQL identifier, escaping embedded double-quotes.]] - rationale - temp-graphify/graphify/pg_introspect.py
- [[If psycopg is missing, introspect_postgres raises ImportError.]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Raise ValueError with all errors if extraction is invalid.]] - rationale - temp-graphify/graphify/validate.py
- [[Reserved-word and special-character table names must survive DDL round-trip.…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Return a mock psycopg module wired to the provided catalog data. ``routines``…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Return the label form that tree-sitter produces for a quoted identifier.…]] - rationale - temp-graphify/tests/test_pg_introspect.py
- [[Validate an extraction JSON dict against the graphify schema. Returns a list of…]] - rationale - temp-graphify/graphify/validate.py
- [[_make_mock_psycopg()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[_q()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[_quote_ident()]] - code - temp-graphify/graphify/pg_introspect.py
- [[assert_valid()]] - code - temp-graphify/graphify/validate.py
- [[introspect_postgres()]] - code - temp-graphify/graphify/pg_introspect.py
- [[pg_introspect.py]] - code - temp-graphify/graphify/pg_introspect.py
- [[test_assert_valid_passes_silently()]] - code - temp-graphify/tests/test_validate.py
- [[test_assert_valid_raises_on_errors()]] - code - temp-graphify/tests/test_validate.py
- [[test_dangling_edge_source()]] - code - temp-graphify/tests/test_validate.py
- [[test_dangling_edge_target()]] - code - temp-graphify/tests/test_validate.py
- [[test_invalid_confidence()]] - code - temp-graphify/tests/test_validate.py
- [[test_invalid_file_type()]] - code - temp-graphify/tests/test_validate.py
- [[test_legacy_aliases_valid_after_build_canonicalization()]] - code - temp-graphify/tests/test_validate.py
- [[test_legacy_node_name_path_aliases_folded()]] - code - temp-graphify/tests/test_build.py
- [[test_missing_edges_key()]] - code - temp-graphify/tests/test_validate.py
- [[test_missing_node_field()]] - code - temp-graphify/tests/test_validate.py
- [[test_missing_nodes_key()]] - code - temp-graphify/tests/test_validate.py
- [[test_non_hashable_edge_endpoint_reported_not_raised()]] - code - temp-graphify/tests/test_validate.py
- [[test_non_hashable_node_id_does_not_mask_valid_ids()]] - code - temp-graphify/tests/test_validate.py
- [[test_non_hashable_node_id_reported_not_raised()]] - code - temp-graphify/tests/test_validate.py
- [[test_not_a_dict()]] - code - temp-graphify/tests/test_validate.py
- [[test_pg_introspect.py]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_composite_fk()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_connection_error()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_fk_edges_survive_unparseable_function_stubs()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_fk_query_avoids_privilege_filtered_view()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_import_error()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_quoted_identifiers()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_success()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_pg_introspect_uri_forward_slashes()]] - code - temp-graphify/tests/test_pg_introspect.py
- [[test_valid_passes()]] - code - temp-graphify/tests/test_validate.py
- [[test_validate.py]] - code - temp-graphify/tests/test_validate.py
- [[validate.py]] - code - temp-graphify/graphify/validate.py
- [[validate_extraction()]] - code - temp-graphify/graphify/validate.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/validate_extraction
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_graphifybuild.py]]
- 2 edges to [[_COMMUNITY_test_build.py]]
- 2 edges to [[_COMMUNITY_test_evidence_binding.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_test_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_ingest_scip_json]]
- 1 edge to [[_COMMUNITY_build_from_json_1]]

## Top bridge nodes
- [[validate_extraction()]] - degree 31, connects to 7 communities
- [[introspect_postgres()]] - degree 15, connects to 3 communities
- [[test_legacy_node_name_path_aliases_folded()]] - degree 4, connects to 2 communities
- [[test_validate.py]] - degree 19, connects to 1 community
- [[validate.py]] - degree 5, connects to 1 community
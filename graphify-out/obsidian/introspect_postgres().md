---
source_file: "temp-graphify/graphify/pg_introspect.py"
type: "code"
community: "validate_extraction"
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/validate_extraction
---

# introspect_postgres()

## Connections
- [[Connect to PostgreSQL, reconstruct DDL, and extract via extract_sql().]] - `rationale_for` [EXTRACTED]
- [[_quote_ident()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[extract_sql()]] - `calls` [INFERRED]
- [[pg_introspect.py]] - `contains` [EXTRACTED]
- [[test_pg_introspect.py]] - `imports` [EXTRACTED]
- [[test_pg_introspect_composite_fk()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_connection_error()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_fk_edges_survive_unparseable_function_stubs()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_fk_query_avoids_privilege_filtered_view()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_import_error()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_quoted_identifiers()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_success()]] - `calls` [EXTRACTED]
- [[test_pg_introspect_uri_forward_slashes()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/validate_extraction
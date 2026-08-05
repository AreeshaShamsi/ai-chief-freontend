---
type: community
cohesion: 0.10
members: 21
---

# _extract_sql_or_skip

**Cohesion:** 0.10 - loosely connected
**Members:** 21 nodes

## Members
- [[2180 quoted identifiers must not defeat the ERROR-node name recovery.…]] - rationale - temp-graphify/tests/test_multilang.py
- [[A cleanly-parsed LANGUAGE sql function in the same file is emitted once.]] - rationale - temp-graphify/tests/test_multilang.py
- [[ALTER TABLE ... FOREIGN KEY ... REFERENCES produces a references edge.]] - rationale - temp-graphify/tests/test_multilang.py
- [[ALTER TABLE with schema-qualified names produces correct edges.]] - rationale - temp-graphify/tests/test_multilang.py
- [[PLpgSQL bodies make tree-sitter-sql emit ERROR nodes; the functions must still…]] - rationale - temp-graphify/tests/test_multilang.py
- [[Schema-qualified table names (Schema.Table) are preserved.]] - rationale - temp-graphify/tests/test_multilang.py
- [[The 2180 recovery must not add junk, duplicates, or drop the tables.]] - rationale - temp-graphify/tests/test_multilang.py
- [[_extract_sql_or_skip()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_alter_table_fk_edge()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_emits_foreign_key_edge()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_emits_reads_from_edge()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_finds_function()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_finds_tables()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_finds_view()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_no_dangling_edges()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_plpgsql_clean_function_not_double_emitted()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_plpgsql_functions_survive_parse_errors()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_quoted_plpgsql_file_stays_clean()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_quoted_plpgsql_routines_are_recovered()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_schema_qualified_alter_fk()]] - code - temp-graphify/tests/test_multilang.py
- [[test_sql_schema_qualified_names()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_extract_sql_or_skip
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_test_multilang.py]]
- 1 edge to [[_COMMUNITY__make_id]]

## Top bridge nodes
- [[_extract_sql_or_skip()]] - degree 15, connects to 2 communities
- [[test_sql_alter_table_fk_edge()]] - degree 3, connects to 1 community
- [[test_sql_plpgsql_clean_function_not_double_emitted()]] - degree 3, connects to 1 community
- [[test_sql_plpgsql_functions_survive_parse_errors()]] - degree 3, connects to 1 community
- [[test_sql_quoted_plpgsql_file_stays_clean()]] - degree 3, connects to 1 community
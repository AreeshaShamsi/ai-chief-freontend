---
type: community
cohesion: 0.16
members: 19
---

# test_multilang.py

**Cohesion:** 0.16 - loosely connected
**Members:** 19 nodes

## Members
- [[Tests for multi-language AST extraction JSTS, Go, Rust, SQL.]] - rationale - temp-graphify/tests/test_multilang.py
- [[_confidences()]] - code - temp-graphify/tests/test_multilang.py
- [[_labels()_5]] - code - temp-graphify/tests/test_multilang.py
- [[test_cache_hit_returns_same_result()]] - code - temp-graphify/tests/test_multilang.py
- [[test_cache_miss_after_file_change()]] - code - temp-graphify/tests/test_multilang.py
- [[test_extract_dispatches_all_languages()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_finds_constructor()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_finds_methods()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_finds_struct()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_has_extracted_calls()]] - code - temp-graphify/tests/test_multilang.py
- [[test_go_no_dangling_edges()]] - code - temp-graphify/tests/test_multilang.py
- [[test_multilang.py]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_finds_function()]] - code - temp-graphify/tests/test_multilang.py
- [[test_rust_finds_impl_methods()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_calls_are_extracted()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_finds_class()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_finds_function()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_finds_methods()]] - code - temp-graphify/tests/test_multilang.py
- [[test_ts_no_dangling_edges()]] - code - temp-graphify/tests/test_multilang.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_multilangpy
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_extract_rust]]
- 14 edges to [[_COMMUNITY__extract_sql_or_skip]]
- 7 edges to [[_COMMUNITY__edges_with_relation]]
- 6 edges to [[_COMMUNITY_extract_js]]
- 5 edges to [[_COMMUNITY__make_id]]
- 4 edges to [[_COMMUNITY_extract]]
- 4 edges to [[_COMMUNITY__call_pairs]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY_test_go_method_declaration_emits_refs_only_when_name_present]]
- 1 edge to [[_COMMUNITY_test_rust_no_cross_crate_spurious_edges]]
- 1 edge to [[_COMMUNITY_test_sql_cross_file_fk_resolves_and_never_leaks_scan_path]]

## Top bridge nodes
- [[test_multilang.py]] - degree 65, connects to 11 communities
- [[_labels()_5]] - degree 10, connects to 1 community
- [[test_go_finds_constructor()]] - degree 3, connects to 1 community
- [[test_go_finds_methods()]] - degree 3, connects to 1 community
- [[test_go_finds_struct()]] - degree 3, connects to 1 community
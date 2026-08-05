---
type: community
cohesion: 0.14
members: 20
---

# test_symbol_resolution.py

**Cohesion:** 0.14 - loosely connected
**Members:** 20 nodes

## Members
- [[A real cross-file call must resolve to the SRC definition even when a same-…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A test file calling save() with both a src def and a test-local def present…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[One src def plus many same-named test stubs exactly one edge to src.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Resolve unqualified raw calls conservatively after all files are known. This…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Tests for graphify.symbol_resolution.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[The python cross-file resolver returns  (not crash) on bad raw_calls.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Two genuine NON-test defs of the same name the god-node guard must still hold…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[_bash_make_id must produce identical output to _make_id for Unicode inputs. The…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[resolve_cross_file_raw_calls()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[test_bash_make_id_identical_to_make_id()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_bash_make_id_unicode_matches_make_id()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_call_site_is_test_prefers_test_local()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_emits_unique_unqualified_call()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_n_mock_scale()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_real_edge_survives_test_mock()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_ambiguous_duplicate_labels()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_existing_pair()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_skips_member_calls()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_cross_file_raw_calls_survives_malformed_raw_calls()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_symbol_resolution.py]] - code - temp-graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_symbol_resolutionpy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_build_label_index]]
- 13 edges to [[_COMMUNITY_resolve_bash_source_edges]]
- 8 edges to [[_COMMUNITY_symbol_resolution.py]]
- 8 edges to [[_COMMUNITY_resolve_python_import_guided_calls]]
- 5 edges to [[_COMMUNITY_iter_raw_calls]]
- 3 edges to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY_paths.py]]

## Top bridge nodes
- [[test_symbol_resolution.py]] - degree 55, connects to 6 communities
- [[resolve_cross_file_raw_calls()]] - degree 16, connects to 4 communities
- [[test_bash_make_id_unicode_matches_make_id()]] - degree 3, connects to 1 community
- [[test_bash_make_id_identical_to_make_id()]] - degree 2, connects to 1 community
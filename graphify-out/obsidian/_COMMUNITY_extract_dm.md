---
type: community
cohesion: 0.16
members: 21
---

# extract_dm

**Cohesion:** 0.16 - loosely connected
**Members:** 21 nodes

## Members
- [[Extract types, procs, includes, and calls from a .dm.dme file.]] - rationale - temp-graphify/graphify/extractors/dm.py
- [[Regression test for the call-walker `simple_identifier`  `identifier` rename —…]] - rationale - temp-graphify/tests/test_languages.py
- [[_calls()_2]] - code - temp-graphify/tests/test_languages.py
- [[_needs_dm]] - code
- [[extract_dm()]] - code - temp-graphify/graphify/extractors/dm.py
- [[test_cuda_host_call_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_ambiguous_member_call_left_unresolved()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_call_edges_have_call_context()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_emits_include_edge()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_emits_new_as_instantiates()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_finds_global_proc()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_finds_path_form_proc_definition()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_finds_type_definition()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_no_dangling_edges()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_no_error()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_qualifies_proc_with_type_path()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_resolves_in_file_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_super_call_not_emitted()]] - code - temp-graphify/tests/test_languages.py
- [[test_dm_unresolved_include_flagged_external()]] - code - temp-graphify/tests/test_languages.py
- [[test_kotlin_emits_in_file_calls()]] - code - temp-graphify/tests/test_languages.py
- [[test_swift_emits_calls()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_dm
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_test_languages.py]]
- 6 edges to [[_COMMUNITY__make_id]]
- 5 edges to [[_COMMUNITY__labels]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_extract_cpp]]
- 1 edge to [[_COMMUNITY__edge_labels]]
- 1 edge to [[_COMMUNITY__read_text]]

## Top bridge nodes
- [[extract_dm()]] - degree 22, connects to 3 communities
- [[test_dm_finds_global_proc()]] - degree 4, connects to 2 communities
- [[test_dm_finds_path_form_proc_definition()]] - degree 4, connects to 2 communities
- [[test_dm_finds_type_definition()]] - degree 4, connects to 2 communities
- [[test_dm_qualifies_proc_with_type_path()]] - degree 4, connects to 2 communities
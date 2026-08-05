---
type: community
cohesion: 0.10
members: 24
---

# resolve_bash_source_edges

**Cohesion:** 0.10 - loosely connected
**Members:** 24 nodes

## Members
- [[A None entry in per_file (e.g. failed extraction) must be silently skipped.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A `bash_sources` entry missing `target_path` must not raise KeyError.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A bash raw_call with `callee list` (unhashable for dict membership) must not…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A node tagged as bash_function but missing `id` must not raise KeyError.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A raw_call entry missing `caller_nid` must not raise KeyError.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Non-bash raw_calls inside sourced-file per_file entries are ignored.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Non-dict entries in bash_sourcesraw_callsnodes must be silently skipped.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Path_105]] - code
- [[Resolve Bash sourceimport edges and source-backed function calls. Defensive…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[When a callee function is defined in multiple sourced files, skip it.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[`source .helper.sh` from amain.sh should resolve to ahelper.sh, not to…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[resolve_bash_source_edges()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[test_bash_call_resolver_emits_call_edges_from_sourced_files()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_emits_source_edges()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_existing_pair()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_bash_call_resolver_skips_non_bash_raw_calls()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_accepts_none_per_file_entries()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_relative_path_resolves_against_source_dir()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_bash_function_node_missing_id()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_malformed_source()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_non_dict_lists()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_raw_call_missing_caller_nid()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_resolve_bash_source_edges_skips_unhashable_callee()]] - code - temp-graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/resolve_bash_source_edges
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_symbol_resolution.py]]
- 5 edges to [[_COMMUNITY_symbol_resolution.py]]
- 3 edges to [[_COMMUNITY_resolve_python_import_guided_calls]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_build_label_index]]

## Top bridge nodes
- [[resolve_bash_source_edges()]] - degree 20, connects to 5 communities
- [[Path_105]] - degree 10, connects to 2 communities
- [[test_bash_call_resolver_skips_ambiguous_multiple_candidates()]] - degree 4, connects to 1 community
- [[test_bash_call_resolver_skips_non_bash_raw_calls()]] - degree 4, connects to 1 community
- [[test_bash_call_resolver_emits_call_edges_from_sourced_files()]] - degree 3, connects to 1 community
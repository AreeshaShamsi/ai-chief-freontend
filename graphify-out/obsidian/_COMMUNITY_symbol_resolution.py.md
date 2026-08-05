---
type: community
cohesion: 0.14
members: 18
---

# symbol_resolution.py

**Cohesion:** 0.14 - loosely connected
**Members:** 18 nodes

## Members
- [[A Python imported name that can be used as deterministic resolution evidence.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[A `from helper import transform` inside a function MUST NOT become file-wide…]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[A module-level `from helper import transform` IS file-wide evidence.]] - rationale - temp-graphify/tests/test_symbol_resolution.py
- [[Deterministic symbol indexing and conservative cross-file resolution helpers.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[ImportedSymbol]] - code - temp-graphify/graphify/symbol_resolution.py
- [[Parse deterministic Python import aliases from one source file. Supported…]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Path_53]] - code
- [[Resolve one imported symbol to exactly one Graphify node id.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[Return the final module component used to match Graphify source stems.]] - rationale - temp-graphify/graphify/symbol_resolution.py
- [[_file_node_id_for_path()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[_module_stem()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[find_unique_python_symbol()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[parse_python_import_aliases()]] - code - temp-graphify/graphify/symbol_resolution.py
- [[symbol_resolution.py]] - code - temp-graphify/graphify/symbol_resolution.py
- [[test_find_unique_python_symbol_returns_none_when_ambiguous()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_accepts_top_level_import()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_skips_function_local_imports()]] - code - temp-graphify/tests/test_symbol_resolution.py
- [[test_parse_python_import_aliases_supports_from_import_alias()]] - code - temp-graphify/tests/test_symbol_resolution.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/symbol_resolutionpy
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_symbol_resolution.py]]
- 7 edges to [[_COMMUNITY_build_label_index]]
- 5 edges to [[_COMMUNITY_resolve_bash_source_edges]]
- 4 edges to [[_COMMUNITY_make_id]]
- 4 edges to [[_COMMUNITY_resolve_python_import_guided_calls]]
- 3 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_security.py]]
- 1 edge to [[_COMMUNITY_test_security.py]]
- 1 edge to [[_COMMUNITY_iter_raw_calls]]

## Top bridge nodes
- [[symbol_resolution.py]] - degree 27, connects to 11 communities
- [[_file_node_id_for_path()]] - degree 5, connects to 3 communities
- [[Path_53]] - degree 5, connects to 3 communities
- [[parse_python_import_aliases()]] - degree 11, connects to 2 communities
- [[find_unique_python_symbol()]] - degree 6, connects to 2 communities
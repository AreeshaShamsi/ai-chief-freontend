---
type: community
cohesion: 0.10
members: 21
---

# extract_json

**Cohesion:** 0.10 - loosely connected
**Members:** 21 nodes

## Members
- [[A JSON file whose root is an array is data, never a configmanifest.]] - rationale - temp-graphify/tests/test_extract.py
- [[A data-shaped .json (eval fixture  dataset) must NOT emit per-key nodes.]] - rationale - temp-graphify/tests/test_extract.py
- [[An arbitrarily-named JSON with config keys (dependencies) is still extracted.]] - rationale - temp-graphify/tests/test_extract.py
- [[Extract structure and dependency edges from a configmanifest .json file.…]] - rationale - temp-graphify/graphify/extractors/json_config.py
- [[Path_22]] - code
- [[True if a .json file is a recognized configmanifest worth AST-extracting.…]] - rationale - temp-graphify/graphify/extractors/json_config.py
- [[_is_config_json()]] - code - temp-graphify/graphify/extractors/json_config.py
- [[extract_json()]] - code - temp-graphify/graphify/extractors/json_config.py
- [[test_extract_json_config_by_filename_still_extracted()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_config_by_key_probe()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_data_file_skipped()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_dependencies_become_imports()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_extends_resolved()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_handles_invalid_json()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_import_and_extends_targets_are_real_nodes()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_large_file_skipped()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_nested_contains()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_no_self_loops()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_top_level_array_skipped()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_top_level_keys()]] - code - temp-graphify/tests/test_extract.py
- [[tsconfig.json must still be AST-extracted even without telltale keys.]] - rationale - temp-graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/extract_json
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_test_extract.py]]
- 6 edges to [[_COMMUNITY__make_id]]
- 2 edges to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY_build_from_json]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_make_id]]

## Top bridge nodes
- [[extract_json()]] - degree 23, connects to 4 communities
- [[test_extract_json_import_and_extends_targets_are_real_nodes()]] - degree 4, connects to 3 communities
- [[_is_config_json()]] - degree 5, connects to 2 communities
- [[test_extract_json_config_by_filename_still_extracted()]] - degree 3, connects to 1 community
- [[test_extract_json_config_by_key_probe()]] - degree 3, connects to 1 community
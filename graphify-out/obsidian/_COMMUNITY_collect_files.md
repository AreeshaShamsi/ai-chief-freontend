---
type: community
cohesion: 0.13
members: 16
---

# collect_files

**Cohesion:** 0.13 - loosely connected
**Members:** 16 nodes

## Members
- [[2339 as reported collect_files returned  for a real coverage package, both…]] - rationale - temp-graphify/tests/test_detect.py
- [[The pre-1261 rglob-per-extension implementation, kept as a parity oracle.]] - rationale - temp-graphify/tests/test_extract.py
- [[_legacy_collect_files()]] - code - temp-graphify/tests/test_extract.py
- [[collect_files must scan every directory at most once and never descend into…]] - rationale - temp-graphify/tests/test_extract.py
- [[collect_files()]] - code - temp-graphify/graphify/extract.py
- [[test_case_insensitive_suffix_filtering()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_follows_symlinked_directory()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_from_dir()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_handles_circular_symlinks()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_keeps_coverage_code_namespace()]] - code - temp-graphify/tests/test_detect.py
- [[test_collect_files_parity_with_legacy_on_fixtures()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_parity_with_legacy_synthetic()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_skips_hidden()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_skips_out_of_root_symlinked_directory()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_skips_out_of_root_symlinked_file_by_default()]] - code - temp-graphify/tests/test_extract.py
- [[test_collect_files_walks_each_directory_once()]] - code - temp-graphify/tests/test_extract.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/collect_files
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_test_extract.py]]
- 6 edges to [[_COMMUNITY__load_graphifyignore]]
- 2 edges to [[_COMMUNITY_clear_cache]]
- 2 edges to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY_detect.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_Path]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY_generate]]

## Top bridge nodes
- [[collect_files()]] - degree 22, connects to 8 communities
- [[_legacy_collect_files()]] - degree 7, connects to 2 communities
- [[test_case_insensitive_suffix_filtering()]] - degree 3, connects to 2 communities
- [[test_collect_files_keeps_coverage_code_namespace()]] - degree 3, connects to 1 community
- [[test_collect_files_parity_with_legacy_on_fixtures()]] - degree 3, connects to 1 community
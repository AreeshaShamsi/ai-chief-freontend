---
type: community
cohesion: 0.24
members: 14
---

# test_extract_cache_location.py

**Cohesion:** 0.24 - loosely connected
**Members:** 14 nodes

## Members
- [[1774 — extract() must never write its AST cache into the analyzed source tree.…]] - rationale - temp-graphify/tests/test_extract_cache_location.py
- [[A second extract() of the same corpus must hit the CWD cache the first wrote —…]] - rationale - temp-graphify/tests/test_extract_cache_location.py
- [[Fresh-process regression for the stat-index leak specifically even for a…]] - rationale - temp-graphify/tests/test_extract_cache_location.py
- [[Path_70]] - code
- [[The locationanchor split must keep content-hash keys anchored on the corpus…]] - rationale - temp-graphify/tests/test_extract_cache_location.py
- [[The stat-index location is chosen once per process via a module global (1747).…]] - rationale - temp-graphify/tests/test_extract_cache_location.py
- [[_make_corpus()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[_reset_stat_index()_1]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_cache_keys_stay_relative_for_out_of_cwd_corpus()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_default_cache_does_not_leave_stat_index_in_source_tree()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_default_cache_lands_in_cwd_not_source_tree()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_default_cache_round_trips_via_extract()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_explicit_cache_root_still_wins()]] - code - temp-graphify/tests/test_extract_cache_location.py
- [[test_extract_cache_location.py]] - code - temp-graphify/tests/test_extract_cache_location.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_extract_cache_locationpy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_extract]]
- 2 edges to [[_COMMUNITY_file_hash]]
- 2 edges to [[_COMMUNITY_save_semantic_cache]]
- 1 edge to [[_COMMUNITY_cache.py]]
- 1 edge to [[_COMMUNITY_test_stat_index_portability.py]]
- 1 edge to [[_COMMUNITY_extract.py]]

## Top bridge nodes
- [[test_extract_cache_location.py]] - degree 12, connects to 4 communities
- [[test_default_cache_does_not_leave_stat_index_in_source_tree()]] - degree 6, connects to 2 communities
- [[test_default_cache_round_trips_via_extract()]] - degree 6, connects to 2 communities
- [[test_cache_keys_stay_relative_for_out_of_cwd_corpus()]] - degree 5, connects to 2 communities
- [[test_default_cache_lands_in_cwd_not_source_tree()]] - degree 4, connects to 1 community
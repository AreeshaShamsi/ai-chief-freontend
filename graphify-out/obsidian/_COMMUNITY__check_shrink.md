---
type: community
cohesion: 0.12
members: 22
---

# _check_shrink

**Cohesion:** 0.12 - loosely connected
**Members:** 22 nodes

## Members
- [[1116 a symbol removed from a re-extracted file is a legitimate shrink — every…]] - rationale - temp-graphify/tests/test_watch.py
- [[Build a minimal graph-data dict with n placeholder nodes.]] - rationale - temp-graphify/tests/test_watch.py
- [[Caller declared deletions → shrink is expected → guard skipped silently.]] - rationale - temp-graphify/tests/test_watch.py
- [[Default case smaller new graph + no force + no declared deletions = refuse.]] - rationale - temp-graphify/tests/test_watch.py
- [[First-run case no existing graph → guard inert.]] - rationale - temp-graphify/tests/test_watch.py
- [[Mirror of the above if the caller declared deletions, the tmp file is NOT…]] - rationale - temp-graphify/tests/test_watch.py
- [[Return True (ok to proceed) or False (shrink refused). When False, cleans up…]] - rationale - temp-graphify/graphify/watch.py
- [[The guard's real job is intact a node lost from a file we did NOT re-extract…]] - rationale - temp-graphify/tests/test_watch.py
- [[When refusing, the temp graph file gets cleaned up so it can't leak across runs.]] - rationale - temp-graphify/tests/test_watch.py
- [[_check_shrink()]] - code - temp-graphify/graphify/watch.py
- [[_shrink_payload()]] - code - temp-graphify/tests/test_watch.py
- [[force=True bypasses the guard regardless of node delta.]] - rationale - temp-graphify/tests/test_watch.py
- [[new  existing is always fine.]] - rationale - temp-graphify/tests/test_watch.py
- [[test_check_shrink_allows_explicit_deletions()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_allows_force_override()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_allows_growth()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_allows_no_existing_data()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_allows_shrink_within_rebuilt_sources()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_blocks_shrink_outside_rebuilt_sources()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_blocks_silent_shrink()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_keeps_tmp_when_deletions_declared()]] - code - temp-graphify/tests/test_watch.py
- [[test_check_shrink_unlinks_tmp_on_refuse()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_check_shrink
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_watch.py]]
- 2 edges to [[_COMMUNITY__rebuild_code]]
- 1 edge to [[_COMMUNITY_graphifybuild.py]]

## Top bridge nodes
- [[_check_shrink()]] - degree 14, connects to 3 communities
- [[_shrink_payload()]] - degree 9, connects to 1 community
- [[test_check_shrink_allows_explicit_deletions()]] - degree 4, connects to 1 community
- [[test_check_shrink_allows_force_override()]] - degree 4, connects to 1 community
- [[test_check_shrink_allows_growth()]] - degree 4, connects to 1 community
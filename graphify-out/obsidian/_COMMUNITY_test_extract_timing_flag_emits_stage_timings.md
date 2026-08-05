---
type: community
cohesion: 0.33
members: 4
---

# test_extract_timing_flag_emits_stage_timings

**Cohesion:** 0.33 - loosely connected
**Members:** 4 nodes

## Members
- [[1920 a doc whose only chunk output is a hyperedge (3+ nodes sharing a…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[--timing prints per-stage `graphify timing` lines to stderr (1490); omitting…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[test_extract_timing_flag_emits_stage_timings()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_stamped_manifest_files_counts_hyperedge_only_docs()]] - code - temp-graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_extract_timing_flag_emits_stage_timings
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_test_extract_cli.py]]
- 1 edge to [[_COMMUNITY_main]]
- 1 edge to [[_COMMUNITY_cli.py]]

## Top bridge nodes
- [[test_extract_timing_flag_emits_stage_timings()]] - degree 3, connects to 2 communities
- [[test_stamped_manifest_files_counts_hyperedge_only_docs()]] - degree 3, connects to 2 communities
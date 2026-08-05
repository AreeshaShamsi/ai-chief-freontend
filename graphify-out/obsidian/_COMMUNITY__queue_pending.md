---
type: community
cohesion: 0.17
members: 12
---

# _queue_pending

**Cohesion:** 0.17 - loosely connected
**Members:** 12 nodes

## Members
- [[1059 changed_paths=None means a full-corpus rebuild — the queue must not be…]] - rationale - temp-graphify/tests/test_watch.py
- [[1059 the process that acquires the lock must drain .pending_changes and pass…]] - rationale - temp-graphify/tests/test_watch.py
- [[Append ``changed_paths`` to ``out_dir.pending_changes`` (one per line). Used…]] - rationale - temp-graphify/graphify/watch.py
- [[Empty change set must not create an empty .pending_changes file.]] - rationale - temp-graphify/tests/test_watch.py
- [[Repeated appends across concurrent contenders must dedupe; partial writes…]] - rationale - temp-graphify/tests/test_watch.py
- [[_queue_pending writes one path per line; _drain_pending reads + unlinks and…]] - rationale - temp-graphify/tests/test_watch.py
- [[_queue_pending()]] - code - temp-graphify/graphify/watch.py
- [[test_drain_pending_dedupes_and_skips_blank_lines()]] - code - temp-graphify/tests/test_watch.py
- [[test_queue_and_drain_pending_round_trip()]] - code - temp-graphify/tests/test_watch.py
- [[test_queue_pending_noop_on_empty_list()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_full_corpus_skips_pending_queue()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_merges_pending_on_acquire()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_queue_pending
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY__rebuild_code]]
- 6 edges to [[_COMMUNITY_test_watch.py]]
- 4 edges to [[_COMMUNITY_Path_1]]
- 1 edge to [[_COMMUNITY_skipif]]

## Top bridge nodes
- [[test_drain_pending_dedupes_and_skips_blank_lines()]] - degree 5, connects to 3 communities
- [[test_queue_and_drain_pending_round_trip()]] - degree 5, connects to 3 communities
- [[test_rebuild_code_full_corpus_skips_pending_queue()]] - degree 5, connects to 3 communities
- [[test_rebuild_code_merges_pending_on_acquire()]] - degree 5, connects to 3 communities
- [[_queue_pending()]] - degree 10, connects to 2 communities
---
type: community
cohesion: 0.18
members: 11
---

# _norm

**Cohesion:** 0.18 - loosely connected
**Members:** 11 nodes

## Members
- [[Lowercase + collapse non-alphanumeric runs to space (Unicode-aware).]] - rationale - temp-graphify/graphify/dedup.py
- [[Shannon entropy in bitschar of the normalised label.]] - rationale - temp-graphify/graphify/dedup.py
- [[The prefix-extension guard must fire for pairs where one is a strict prefix of…]] - rationale - temp-graphify/tests/test_dedup.py
- [[The prefix-extension guard must not fire for same-length pairs — only strict…]] - rationale - temp-graphify/tests/test_dedup.py
- [[_entropy()]] - code - temp-graphify/graphify/dedup.py
- [[_norm()]] - code - temp-graphify/graphify/dedup.py
- [[test_entropy_empty_string()]] - code - temp-graphify/tests/test_dedup.py
- [[test_entropy_normal_label_high()]] - code - temp-graphify/tests/test_dedup.py
- [[test_entropy_short_label_low()]] - code - temp-graphify/tests/test_dedup.py
- [[test_prefix_guard_does_not_block_same_length_typos()]] - code - temp-graphify/tests/test_dedup.py
- [[test_prefix_guard_fires_for_extension_pairs()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_norm
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_test_dedup.py]]
- 3 edges to [[_COMMUNITY_dedup.py]]
- 3 edges to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_test_js_import_resolution.py]]

## Top bridge nodes
- [[_norm()]] - degree 10, connects to 4 communities
- [[_entropy()]] - degree 8, connects to 3 communities
- [[test_prefix_guard_does_not_block_same_length_typos()]] - degree 3, connects to 1 community
- [[test_prefix_guard_fires_for_extension_pairs()]] - degree 3, connects to 1 community
- [[test_entropy_empty_string()]] - degree 2, connects to 1 community
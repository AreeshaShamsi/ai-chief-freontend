---
type: community
cohesion: 0.25
members: 8
---

# _is_variant_pair

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[Block fuzzy merge for short labels unless it's a same-length single-char…]] - rationale - temp-graphify/graphify/dedup.py
- [[Genuine same-length single-char typos should still merge (878 non-regression).]] - rationale - temp-graphify/tests/test_dedup.py
- [[True if a and b are sibling modelSKU variants (same stem, different suffix).…]] - rationale - temp-graphify/graphify/dedup.py
- [[_is_variant_pair correctly identifies chip-model variant pairs (878).]] - rationale - temp-graphify/tests/test_dedup.py
- [[_is_variant_pair()]] - code - temp-graphify/graphify/dedup.py
- [[_short_label_blocked()]] - code - temp-graphify/graphify/dedup.py
- [[test_dedup_still_merges_real_typos()]] - code - temp-graphify/tests/test_dedup.py
- [[test_variant_pair_helper()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_is_variant_pair
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_deduplicate_entities]]
- 4 edges to [[_COMMUNITY_test_dedup.py]]
- 2 edges to [[_COMMUNITY_dedup.py]]

## Top bridge nodes
- [[_is_variant_pair()]] - degree 7, connects to 3 communities
- [[_short_label_blocked()]] - degree 6, connects to 3 communities
- [[test_dedup_still_merges_real_typos()]] - degree 4, connects to 1 community
- [[test_variant_pair_helper()]] - degree 3, connects to 1 community
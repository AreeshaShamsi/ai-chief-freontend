---
type: community
cohesion: 0.29
members: 7
---

# test_crossfile_identical_labels_stay_distinct_for_guarded_types

**Cohesion:** 0.29 - loosely connected
**Members:** 7 nodes

## Members
- [[Exact-ID dedup combines AST precision with semantic enrichment (2091).]] - rationale - temp-graphify/tests/test_dedup.py
- [[The 2182 fix is gated to high-entropy `concept` nodes with provenance on BOTH…]] - rationale - temp-graphify/tests/test_dedup.py
- [[The node whose source_file is the file its ID encodes survives, whichever chunk…]] - rationale - temp-graphify/tests/test_dedup.py
- [[parametrize_2]] - code
- [[test_crossfile_identical_labels_stay_distinct_for_guarded_types()]] - code - temp-graphify/tests/test_dedup.py
- [[test_defining_file_wins_over_referencing_file()]] - code - temp-graphify/tests/test_dedup.py
- [[test_same_id_same_entity_retains_complementary_attributes()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_crossfile_identical_labels_stay_distinct_for_guarded_types
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_deduplicate_entities]]
- 3 edges to [[_COMMUNITY_test_dedup.py]]

## Top bridge nodes
- [[test_crossfile_identical_labels_stay_distinct_for_guarded_types()]] - degree 4, connects to 2 communities
- [[test_defining_file_wins_over_referencing_file()]] - degree 4, connects to 2 communities
- [[test_same_id_same_entity_retains_complementary_attributes()]] - degree 4, connects to 2 communities
---
type: community
cohesion: 1.00
members: 2
---

# test_cross_file_id_collision_does_not_mix_attributes

**Cohesion:** 1.00 - tightly connected
**Members:** 2 nodes

## Members
- [[Two files that both mint one ID remain isolated despite exact-ID dedup.]] - rationale - temp-graphify/tests/test_dedup.py
- [[test_cross_file_id_collision_does_not_mix_attributes()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_cross_file_id_collision_does_not_mix_attributes
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_deduplicate_entities]]
- 1 edge to [[_COMMUNITY_test_dedup.py]]

## Top bridge nodes
- [[test_cross_file_id_collision_does_not_mix_attributes()]] - degree 3, connects to 2 communities
---
type: community
cohesion: 0.21
members: 17
---

# label_communities_by_hub

**Cohesion:** 0.21 - loosely connected
**Members:** 17 nodes

## Members
- [[An incremental rebuild must not reuse a saved label for a community whose…]] - rationale - temp-graphify/tests/test_watch.py
- [[Deterministic, LLM-free community labels — `label_communities_by_hub`. Names…]] - rationale - temp-graphify/tests/test_community_hub_labels.py
- [[Deterministic, LLM-free community labels name each community after its…]] - rationale - temp-graphify/graphify/cluster.py
- [[Per-community membership fingerprints ``{cid sha256(sorted member ids)}``.…]] - rationale - temp-graphify/graphify/cluster.py
- [[_g()_1]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[community_member_sigs()]] - code - temp-graphify/graphify/cluster.py
- [[label_communities_by_hub()]] - code - temp-graphify/graphify/cluster.py
- [[test_absent_members_fall_back_to_placeholder()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_community_hub_labels.py]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_community_member_sigs_are_deterministic_and_order_independent()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_community_member_sigs_change_when_membership_changes()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_labels_by_highest_degree_hub()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_multiple_communities_each_get_their_own_hub()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_node_without_label_attr_uses_id()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_not_a_placeholder_for_a_real_community()]] - code - temp-graphify/tests/test_community_hub_labels.py
- [[test_rebuild_code_drops_labels_whose_community_changed()]] - code - temp-graphify/tests/test_watch.py
- [[test_tie_breaks_deterministically_by_node_id()]] - code - temp-graphify/tests/test_community_hub_labels.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/label_communities_by_hub
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_generate]]
- 2 edges to [[_COMMUNITY_cli.py]]
- 2 edges to [[_COMMUNITY_dispatch_command]]
- 2 edges to [[_COMMUNITY_test_watch.py]]

## Top bridge nodes
- [[community_member_sigs()]] - degree 11, connects to 5 communities
- [[label_communities_by_hub()]] - degree 13, connects to 4 communities
- [[test_rebuild_code_drops_labels_whose_community_changed()]] - degree 4, connects to 2 communities
- [[test_community_hub_labels.py]] - degree 13, connects to 1 community
---
type: community
cohesion: 0.10
members: 20
---

# sanitize_semantic_fragment

**Cohesion:** 0.10 - loosely connected
**Members:** 20 nodes

## Members
- [[1561 a `members`-keyed hyperedge with =2 surviving members must be KEPT…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[A hyperedge referencing only nodes not present in the fragment is dropped.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[A node with file_type='rationale' is removed wholesale.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[A rationale node connected to ONE target via `rationale_for` and to ANOTHER…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[A short named node with a period (e.g. abbreviation) is NOT sentence-like.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Boundary a label with exactly 8 words + colon is sentence-like; a 7-word label…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Clean up a semantic extraction fragment in-place. Operations 1. Removes nodes…]] - rationale - temp-graphify/graphify/semantic_cleanup.py
- [[F3 a node with file_type='document' (allowed) that is BOTH sentence-like AND…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[F4 hyperedges referencing removed nodes are repaired or dropped.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Sentence-like rationale node connected via `rationale_for` → attribute on…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[sanitize_semantic_fragment()]] - code - temp-graphify/graphify/semantic_cleanup.py
- [[test_sanitize_boundary_sentence_threshold()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_converts_allowed_filetype_sentence_via_rationale_for_edge()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_converts_sentence_rationale_node_to_attribute()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_drops_hyperedge_with_only_unknown_refs()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_drops_rationale_filetype_node()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_filters_hyperedges_after_node_removal()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_keeps_members_keyed_hyperedge()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_keeps_short_concept_named_node_with_punctuation()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_sanitize_rationale_only_propagates_through_rationale_for_edges()]] - code - temp-graphify/tests/test_semantic_cleanup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/sanitize_semantic_fragment
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_semantic_cleanup.py]]
- 4 edges to [[_COMMUNITY_semantic_cleanup.py]]

## Top bridge nodes
- [[sanitize_semantic_fragment()]] - degree 14, connects to 1 community
- [[test_sanitize_boundary_sentence_threshold()]] - degree 3, connects to 1 community
- [[test_sanitize_converts_allowed_filetype_sentence_via_rationale_for_edge()]] - degree 3, connects to 1 community
- [[test_sanitize_converts_sentence_rationale_node_to_attribute()]] - degree 3, connects to 1 community
- [[test_sanitize_drops_hyperedge_with_only_unknown_refs()]] - degree 3, connects to 1 community
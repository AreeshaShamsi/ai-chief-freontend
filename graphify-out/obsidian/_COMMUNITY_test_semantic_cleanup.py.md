---
type: community
cohesion: 0.19
members: 23
---

# test_semantic_cleanup.py

**Cohesion:** 0.19 - loosely connected
**Members:** 23 nodes

## Members
- [[1561 an alias-keyed hyperedge must not be rejected for a missing `nodes` list…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[An unknownsynonym file_type is NOT a validation failure build_from_json…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[LLM output with file_type='concept' must pass validation for the same reason.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[LLM output with file_type='rationale' must pass validation so the cleanup pass…]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Return validation errors for an untrusted semantic extraction fragment. Empty…]] - rationale - temp-graphify/graphify/semantic_cleanup.py
- [[Tests for graphify.semantic_cleanup.validate_semantic_fragment (825).]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[_valid_fragment()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_semantic_cleanup.py]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_accepts_node_ids_keyed_hyperedge()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_hyperedge_caps_count()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_hyperedge_rejects_bad_id()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_hyperedge_rejects_bad_node_ref()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_hyperedge_requires_list()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_accepts_concept_file_type()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_accepts_rationale_file_type()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_accepts_unknown_file_type()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_accepts_valid()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_rejects_non_object()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_rejects_oversize_payload()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_rejects_path_separator_in_id()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_rejects_too_many_edges()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_validate_semantic_fragment_rejects_too_many_nodes()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[validate_semantic_fragment()]] - code - temp-graphify/graphify/semantic_cleanup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_semantic_cleanuppy
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_sanitize_semantic_fragment]]
- 5 edges to [[_COMMUNITY_load_validated_semantic_fragment]]
- 4 edges to [[_COMMUNITY_semantic_cleanup.py]]
- 3 edges to [[_COMMUNITY_test_merge_chunks_validation.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]

## Top bridge nodes
- [[test_semantic_cleanup.py]] - degree 30, connects to 4 communities
- [[validate_semantic_fragment()]] - degree 22, connects to 3 communities
- [[_valid_fragment()]] - degree 15, connects to 1 community
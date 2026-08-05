---
type: community
cohesion: 0.33
members: 6
---

# _seed_semantic_doc_graph

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[1915 a full _rebuild_code must not AST-quick-scan a doc whose semantic (LLM)…]] - rationale - temp-graphify/tests/test_watch.py
- [[1915 an incremental rebuild whose change set includes a semantic-backed doc…]] - rationale - temp-graphify/tests/test_watch.py
- [[Build a code-only graph, then add guide.md represented ONLY semantically.…]] - rationale - temp-graphify/tests/test_watch.py
- [[_seed_semantic_doc_graph()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_incremental_preserves_semantic_doc_nodes_and_edges()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_semantic_doc_not_double_represented_on_full_rebuild()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_seed_semantic_doc_graph
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY__rebuild_code]]
- 3 edges to [[_COMMUNITY_test_watch.py]]
- 1 edge to [[_COMMUNITY_parametrize]]

## Top bridge nodes
- [[test_rebuild_code_incremental_preserves_semantic_doc_nodes_and_edges()]] - degree 5, connects to 3 communities
- [[_seed_semantic_doc_graph()]] - degree 5, connects to 2 communities
- [[test_rebuild_code_semantic_doc_not_double_represented_on_full_rebuild()]] - degree 4, connects to 2 communities
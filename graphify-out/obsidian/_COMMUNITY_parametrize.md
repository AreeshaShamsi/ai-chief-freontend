---
type: community
cohesion: 0.10
members: 20
---

# parametrize

**Cohesion:** 0.10 - loosely connected
**Members:** 20 nodes

## Members
- [[1755 AST-only updates must not drop semantic hyperedges whose members survive.]] - rationale - temp-graphify/tests/test_watch.py
- [[1865 AST-only updates must not evict semantic edges whose source_file is a…]] - rationale - temp-graphify/tests/test_watch.py
- [[1954 a doc represented ONLY by conceptrationale nodes (no…]] - rationale - temp-graphify/tests/test_watch.py
- [[1954 incremental analogue — a conceptrationale-only semantic doc must not…]] - rationale - temp-graphify/tests/test_watch.py
- [[2251 unparseable graph.json (e.g. truncated by a crash) must fail the rebuild…]] - rationale - temp-graphify/tests/test_watch.py
- [[A full rebuild of a subdirectory must not prune graph data outside it.]] - rationale - temp-graphify/tests/test_watch.py
- [[A hook-style rename list may contain only the destination path.]] - rationale - temp-graphify/tests/test_watch.py
- [[Deleting the final code file must reconcile the existing graph.]] - rationale - temp-graphify/tests/test_watch.py
- [[Like ``_seed_semantic_doc_graph``, but guide.md's semantic layer is ONLY…]] - rationale - temp-graphify/tests/test_watch.py
- [[_add_unrelated_semantic_pair()]] - code - temp-graphify/tests/test_watch.py
- [[_seed_semantic_doc_graph_concept_only()]] - code - temp-graphify/tests/test_watch.py
- [[parametrize_29]] - code
- [[test_rebuild_code_concept_only_semantic_doc_not_double_represented_on_full_rebuild()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_incremental_preserves_concept_only_semantic_doc_nodes_and_edges()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_preserves_hyperedges_for_rebuilt_surviving_source()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_preserves_semantic_edges_from_reextracted_doc()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_prunes_final_deleted_file()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_prunes_renamed_source_not_listed_by_hook()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_code_subdir_preserves_outside_ast_nodes()]] - code - temp-graphify/tests/test_watch.py
- [[test_rebuild_refuses_overwrite_when_existing_graph_corrupt()]] - code - temp-graphify/tests/test_watch.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/parametrize
SORT file.name ASC
```

## Connections to other communities
- 10 edges to [[_COMMUNITY_test_watch.py]]
- 9 edges to [[_COMMUNITY__rebuild_code]]
- 4 edges to [[_COMMUNITY_Path_1]]
- 1 edge to [[_COMMUNITY__seed_semantic_doc_graph]]

## Top bridge nodes
- [[test_rebuild_refuses_overwrite_when_existing_graph_corrupt()]] - degree 6, connects to 3 communities
- [[test_rebuild_code_prunes_renamed_source_not_listed_by_hook()]] - degree 5, connects to 3 communities
- [[test_rebuild_code_subdir_preserves_outside_ast_nodes()]] - degree 5, connects to 3 communities
- [[_seed_semantic_doc_graph_concept_only()]] - degree 5, connects to 2 communities
- [[test_rebuild_code_incremental_preserves_concept_only_semantic_doc_nodes_and_edges()]] - degree 5, connects to 2 communities
---
type: community
cohesion: 0.17
members: 16
---

# _semantic_id_remap

**Cohesion:** 0.17 - loosely connected
**Members:** 16 nodes

## Members
- [[A file whose parent dir name equals its stem (.claudeCLAUDE.md - canonical…]] - rationale - temp-graphify/tests/test_semantic_id_remap_root.py
- [[A node whose source_file equals the scan root must not crash build (1618).…]] - rationale - temp-graphify/tests/test_semantic_id_remap_root.py
- [[Re-derive non-AST node ids from ``source_file`` using the canonical full-path…]] - rationale - temp-graphify/graphify/build.py
- [[Re-key contract a relative source_file is migrated; an absolute one is left…]] - rationale - temp-graphify/tests/test_build.py
- [[The bare file node id follows the same fixed-point rule.]] - rationale - temp-graphify/tests/test_semantic_id_remap_root.py
- [[The idempotency guard must not block a real one-time legacy migration a pre-…]] - rationale - temp-graphify/tests/test_semantic_id_remap_root.py
- [[_semantic_id_remap()]] - code - temp-graphify/graphify/build.py
- [[test_build_from_json_with_root_level_concept_node()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_file_stem_handles_dot_path()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_normal_semantic_remap_still_works()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_id_remap_bare_file_node_is_idempotent()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_id_remap_is_idempotent_when_stem_contains_legacy_stem()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_id_remap_root.py]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_id_remap_root_equal_source_file_no_crash()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_id_remap_still_migrates_genuine_legacy_id()]] - code - temp-graphify/tests/test_semantic_id_remap_root.py
- [[test_semantic_rekey_relative_vs_absolute_source_file()]] - code - temp-graphify/tests/test_build.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_semantic_id_remap
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_graphifybuild.py]]
- 4 edges to [[_COMMUNITY__make_id]]
- 3 edges to [[_COMMUNITY_build_from_json]]
- 2 edges to [[_COMMUNITY_make_id]]
- 2 edges to [[_COMMUNITY_test_build.py]]

## Top bridge nodes
- [[_semantic_id_remap()]] - degree 18, connects to 5 communities
- [[test_semantic_id_remap_root.py]] - degree 13, connects to 3 communities
- [[test_semantic_rekey_relative_vs_absolute_source_file()]] - degree 3, connects to 1 community
- [[test_build_from_json_with_root_level_concept_node()]] - degree 2, connects to 1 community
- [[test_file_stem_handles_dot_path()]] - degree 2, connects to 1 community
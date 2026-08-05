---
type: community
cohesion: 0.27
members: 15
---

# test_merge_chunks_validation.py

**Cohesion:** 0.27 - loosely connected
**Members:** 15 nodes

## Members
- [[A valid fragment may legitimately contain no entities; it still counts.]] - rationale - temp-graphify/tests/test_merge_chunks_validation.py
- [[Tests that `graphify merge-chunks` validates untrusted subagent chunk JSON.…]] - rationale - temp-graphify/tests/test_merge_chunks_validation.py
- [[_run_merge()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[_write()_14]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_accepts_synonym_file_type()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_accepts_unicode_id()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_accepts_valid_empty_chunk()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_fails_closed_on_unmatched_glob()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_fails_closed_when_every_chunk_is_invalid()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_fails_closed_without_chunk_arguments()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_merges_valid_chunks()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_skips_chunk_with_path_escape_id()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_merge_chunks_validation.py]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_validate_semantic_fragment_accepts_synonyms_and_unicode()]] - code - temp-graphify/tests/test_merge_chunks_validation.py
- [[test_validate_semantic_fragment_still_blocks_path_escape()]] - code - temp-graphify/tests/test_merge_chunks_validation.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_merge_chunks_validationpy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_test_semantic_cleanup.py]]
- 1 edge to [[_COMMUNITY_graphify__main__.py]]
- 1 edge to [[_COMMUNITY_main]]

## Top bridge nodes
- [[test_merge_chunks_validation.py]] - degree 15, connects to 2 communities
- [[_run_merge()]] - degree 10, connects to 1 community
- [[test_validate_semantic_fragment_accepts_synonyms_and_unicode()]] - degree 2, connects to 1 community
- [[test_validate_semantic_fragment_still_blocks_path_escape()]] - degree 2, connects to 1 community
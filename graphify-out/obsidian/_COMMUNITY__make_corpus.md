---
type: community
cohesion: 0.14
members: 14
---

# _make_corpus

**Cohesion:** 0.14 - loosely connected
**Members:** 14 nodes

## Members
- [[1897 fresh extraction returns nodes with ROOT-RELATIVE source_file, while the…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[1920 end-to-end a fresh extraction whose only output for a doc is a hyperedge…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[1948 x 1950 interaction a doc stamped complete on a prior run that TRUNCATES…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Key requirement still fires when semantic work is needed. A corpus with a…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Minimal corpus one Go code file + one Markdown doc. Both file types are needed…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[Sanity counter-test a successful chunk run keeps exit 0. Confirms the new…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[When every semantic chunk errors (e.g. backend SDK not installed), the CLI must…]] - rationale - temp-graphify/tests/test_extract_cli.py
- [[_make_corpus()_1]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_exits_nonzero_when_all_semantic_chunks_fail()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_succeeds_when_at_least_one_chunk_completes()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_extract_without_key_still_errors_when_docs_present()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_manifest_stamps_freshly_extracted_semantic_docs()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_manifest_stamps_hyperedge_only_docs()]] - code - temp-graphify/tests/test_extract_cli.py
- [[test_truncated_doc_semantic_hash_is_cleared_for_requeue()]] - code - temp-graphify/tests/test_extract_cli.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_make_corpus
SORT file.name ASC
```

## Connections to other communities
- 8 edges to [[_COMMUNITY_test_extract_cli.py]]
- 5 edges to [[_COMMUNITY_main]]
- 4 edges to [[_COMMUNITY__run_extract]]

## Top bridge nodes
- [[_make_corpus()_1]] - degree 12, connects to 2 communities
- [[test_extract_without_key_still_errors_when_docs_present()]] - degree 5, connects to 2 communities
- [[test_extract_exits_nonzero_when_all_semantic_chunks_fail()]] - degree 4, connects to 2 communities
- [[test_extract_succeeds_when_at_least_one_chunk_completes()]] - degree 4, connects to 2 communities
- [[test_manifest_stamps_freshly_extracted_semantic_docs()]] - degree 4, connects to 2 communities
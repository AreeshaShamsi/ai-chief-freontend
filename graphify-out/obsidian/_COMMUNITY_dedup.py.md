---
type: community
cohesion: 0.10
members: 24
---

# dedup.py

**Cohesion:** 0.10 - loosely connected
**Members:** 24 nodes

## Members
- [[A file-level semantic node whose id is exactly the slugified path (no `_entity`…]] - rationale - temp-graphify/tests/test_dedup.py
- [[A total order for choosing the survivor of an ID collision, independent of the…]] - rationale - temp-graphify/graphify/dedup.py
- [[Entity deduplication pipeline for graphify knowledge graphs. Pipeline exact…]] - rationale - temp-graphify/graphify/dedup.py
- [[Fill the survivor's absentNone attributes from a same-source duplicate,…]] - rationale - temp-graphify/graphify/dedup.py
- [[Report an ID collision in proportion to what dropping the loser actually costs.…]] - rationale - temp-graphify/graphify/dedup.py
- [[Return k-gram character shingles of text.]] - rationale - temp-graphify/graphify/dedup.py
- [[The ID prefixes a node extracted from ``source_file`` may legitimately mint. An…]] - rationale - temp-graphify/graphify/dedup.py
- [[True for AST-extracted code symbols. Code-node identity is the node ID (which…]] - rationale - temp-graphify/graphify/dedup.py
- [[True when exact-ID records came from the same source file. Exact IDs can also…]] - rationale - temp-graphify/graphify/dedup.py
- [[True when the node's own source_file is the file its ID encodes. A doc that…]] - rationale - temp-graphify/graphify/dedup.py
- [[_collision_rank()]] - code - temp-graphify/graphify/dedup.py
- [[_defines_id()]] - code - temp-graphify/graphify/dedup.py
- [[_id_prefixes()]] - code - temp-graphify/graphify/dedup.py
- [[_is_code()]] - code - temp-graphify/graphify/dedup.py
- [[_make_minhash()]] - code - temp-graphify/graphify/dedup.py
- [[_merge_missing_attributes()]] - code - temp-graphify/graphify/dedup.py
- [[_report_id_collision()]] - code - temp-graphify/graphify/dedup.py
- [[_same_source_entity()]] - code - temp-graphify/graphify/dedup.py
- [[_shingles()]] - code - temp-graphify/graphify/dedup.py
- [[dedup.py]] - code - temp-graphify/graphify/dedup.py
- [[test_bare_file_node_defines_its_own_id()]] - code - temp-graphify/tests/test_dedup.py
- [[test_defines_id_helper()]] - code - temp-graphify/tests/test_dedup.py
- [[test_shingles_produces_trigrams()]] - code - temp-graphify/tests/test_dedup.py
- [[test_shingles_short_string()]] - code - temp-graphify/tests/test_dedup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/deduppy
SORT file.name ASC
```

## Connections to other communities
- 12 edges to [[_COMMUNITY_deduplicate_entities]]
- 7 edges to [[_COMMUNITY_test_dedup.py]]
- 4 edges to [[_COMMUNITY_test_minhash.py]]
- 3 edges to [[_COMMUNITY__norm]]
- 2 edges to [[_COMMUNITY__is_variant_pair]]
- 1 edge to [[_COMMUNITY_llm.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_extract_files_direct]]

## Top bridge nodes
- [[dedup.py]] - degree 27, connects to 8 communities
- [[_report_id_collision()]] - degree 5, connects to 2 communities
- [[_make_minhash()]] - degree 4, connects to 2 communities
- [[_defines_id()]] - degree 8, connects to 1 community
- [[_shingles()]] - degree 6, connects to 1 community
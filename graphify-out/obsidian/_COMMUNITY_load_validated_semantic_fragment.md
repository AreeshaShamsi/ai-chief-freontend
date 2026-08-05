---
type: community
cohesion: 0.25
members: 8
---

# load_validated_semantic_fragment

**Cohesion:** 0.25 - loosely connected
**Members:** 8 nodes

## Members
- [[Invalid JSON returns an error instead of raising.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Load and validate a semantic chunk, rejecting oversize files before parsing.…]] - rationale - temp-graphify/graphify/semantic_cleanup.py
- [[Oversize files are rejected by stat() — payload is never parsed.]] - rationale - temp-graphify/tests/test_semantic_cleanup.py
- [[Path_52]] - code
- [[load_validated_semantic_fragment()]] - code - temp-graphify/graphify/semantic_cleanup.py
- [[test_load_validated_semantic_fragment_accepts_valid()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_load_validated_semantic_fragment_rejects_invalid_json()]] - code - temp-graphify/tests/test_semantic_cleanup.py
- [[test_load_validated_semantic_fragment_rejects_oversize_before_parse()]] - code - temp-graphify/tests/test_semantic_cleanup.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/load_validated_semantic_fragment
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_test_semantic_cleanup.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_semantic_cleanup.py]]

## Top bridge nodes
- [[load_validated_semantic_fragment()]] - degree 9, connects to 4 communities
- [[test_load_validated_semantic_fragment_accepts_valid()]] - degree 3, connects to 1 community
- [[test_load_validated_semantic_fragment_rejects_invalid_json()]] - degree 3, connects to 1 community
- [[test_load_validated_semantic_fragment_rejects_oversize_before_parse()]] - degree 3, connects to 1 community
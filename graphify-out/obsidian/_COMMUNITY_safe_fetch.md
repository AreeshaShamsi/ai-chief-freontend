---
type: community
cohesion: 0.22
members: 10
---

# safe_fetch

**Cohesion:** 0.22 - loosely connected
**Members:** 10 nodes

## Members
- [[Fetch url and return raw bytes. Protections applied - URL scheme validated…]] - rationale - temp-graphify/graphify/security.py
- [[_make_mock_response()]] - code - temp-graphify/tests/test_security.py
- [[safe_fetch()]] - code - temp-graphify/graphify/security.py
- [[test_safe_fetch_raises_on_non_2xx()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_raises_on_size_exceeded()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_rejects_file_url()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_rejects_ftp_url()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_returns_bytes()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_text_decodes_utf8()]] - code - temp-graphify/tests/test_security.py
- [[test_safe_fetch_text_replaces_bad_bytes()]] - code - temp-graphify/tests/test_security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/safe_fetch
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_security.py]]
- 5 edges to [[_COMMUNITY_ingest.py]]
- 3 edges to [[_COMMUNITY_security.py]]

## Top bridge nodes
- [[safe_fetch()]] - degree 13, connects to 3 communities
- [[test_safe_fetch_text_decodes_utf8()]] - degree 3, connects to 2 communities
- [[test_safe_fetch_text_replaces_bad_bytes()]] - degree 3, connects to 2 communities
- [[_make_mock_response()]] - degree 5, connects to 1 community
- [[test_safe_fetch_raises_on_non_2xx()]] - degree 3, connects to 1 community
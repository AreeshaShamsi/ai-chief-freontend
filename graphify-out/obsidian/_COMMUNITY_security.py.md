---
type: community
cohesion: 0.08
members: 31
---

# security.py

**Cohesion:** 0.08 - loosely connected
**Members:** 31 nodes

## Members
- [[dot-connect()]] - code - temp-graphify/graphify/security.py
- [[dot-connect()_1]] - code - temp-graphify/graphify/security.py
- [[dot-http_open()]] - code - temp-graphify/graphify/security.py
- [[dot-https_open()]] - code - temp-graphify/graphify/security.py
- [[dot-redirect_request()]] - code - temp-graphify/graphify/security.py
- [[HTTPConnection that resolves + validates DNS once, then connects to the exact…]] - rationale - temp-graphify/graphify/security.py
- [[HTTPSConnection variant of _SSRFGuardedHTTPConnection. Connects to the…]] - rationale - temp-graphify/graphify/security.py
- [[IPv4Address]] - code
- [[IPv6Address]] - code
- [[OpenerDirector]] - code
- [[Raise ValueError if url is not http or https, or targets a privateinternal…]] - rationale - temp-graphify/graphify/security.py
- [[Redirect handler that re-validates every redirect target. Prevents open-…]] - rationale - temp-graphify/graphify/security.py
- [[Resolve host once and return (family, validated_ip) for the first address…]] - rationale - temp-graphify/graphify/security.py
- [[Return True if ip falls in a privatereservedinternal range. Shared by…]] - rationale - temp-graphify/graphify/security.py
- [[_NoFileRedirectHandler]] - code - temp-graphify/graphify/security.py
- [[_SSRFGuardedHTTPConnection]] - code - temp-graphify/graphify/security.py
- [[_SSRFGuardedHTTPHandler]] - code - temp-graphify/graphify/security.py
- [[_SSRFGuardedHTTPSConnection]] - code - temp-graphify/graphify/security.py
- [[_SSRFGuardedHTTPSHandler]] - code - temp-graphify/graphify/security.py
- [[_build_opener()]] - code - temp-graphify/graphify/security.py
- [[_ip_is_blocked()]] - code - temp-graphify/graphify/security.py
- [[_resolve_and_validate()]] - code - temp-graphify/graphify/security.py
- [[security.py]] - code - temp-graphify/graphify/security.py
- [[test_validate_url_accepts_http()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_url_accepts_https()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_url_rejects_data()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_url_rejects_empty_scheme()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_url_rejects_file()]] - code - temp-graphify/tests/test_security.py
- [[test_validate_url_rejects_ftp()]] - code - temp-graphify/tests/test_security.py
- [[urllib handler that routes http through _SSRFGuardedHTTPConnection.]] - rationale - temp-graphify/graphify/security.py
- [[validate_url()]] - code - temp-graphify/graphify/security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/securitypy
SORT file.name ASC
```

## Connections to other communities
- 13 edges to [[_COMMUNITY_test_security.py]]
- 4 edges to [[_COMMUNITY_ingest.py]]
- 3 edges to [[_COMMUNITY_safe_fetch]]
- 2 edges to [[_COMMUNITY_to_json]]
- 2 edges to [[_COMMUNITY_test_transcribe.py]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY__read_text]]
- 1 edge to [[_COMMUNITY_make_id]]
- 1 edge to [[_COMMUNITY_paths.py]]
- 1 edge to [[_COMMUNITY_scip_ingest.py]]
- 1 edge to [[_COMMUNITY_sanitize_label]]
- 1 edge to [[_COMMUNITY_validate_graph_path]]
- 1 edge to [[_COMMUNITY_serve.py]]
- 1 edge to [[_COMMUNITY_symbol_resolution.py]]

## Top bridge nodes
- [[security.py]] - degree 29, connects to 13 communities
- [[validate_url()]] - degree 16, connects to 4 communities
- [[_build_opener()]] - degree 3, connects to 1 community
- [[test_validate_url_accepts_http()]] - degree 2, connects to 1 community
- [[test_validate_url_accepts_https()]] - degree 2, connects to 1 community
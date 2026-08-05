---
type: community
cohesion: 0.10
members: 20
---

# _get_extractor

**Cohesion:** 0.10 - loosely connected
**Members:** 20 nodes

## Members
- [[A `.h` with a C++ class must route to extract_cpp, not extract_c (which has no…]] - rationale - temp-graphify/tests/test_languages.py
- [[A bridging header that is only `import X.h` (no @interface) must route to…]] - rationale - temp-graphify/tests/test_languages.py
- [[A plain C header (no C++ signal) must keep its extract_c routing.]] - rationale - temp-graphify/tests/test_languages.py
- [[An ObjC `.h` (has @interface) routes to extract_objc; a plain C `.h` stays on…]] - rationale - temp-graphify/tests/test_languages.py
- [[Any_2]] - code
- [[Extensionless CLIs resolve their extractor from the shebang, mirroring…]] - rationale - temp-graphify/tests/test_extract.py
- [[Return the correct extractor function for a file, or None if unsupported.]] - rationale - temp-graphify/graphify/extract.py
- [[_get_extractor should route .psd1 to extract_powershell_manifest.]] - rationale - temp-graphify/tests/test_languages.py
- [[_get_extractor()]] - code - temp-graphify/graphify/extract.py
- [[test_cpp_header_routes_to_cpp_extractor()]] - code - temp-graphify/tests/test_languages.py
- [[test_dispatch_table()]] - code - temp-graphify/tests/test_dotnet.py
- [[test_extensionless_shebang_via_dispatch()]] - code - temp-graphify/tests/test_extract.py
- [[test_extensionless_without_usable_shebang_stays_unsupported()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_bash_via_dispatch()]] - code - temp-graphify/tests/test_extract.py
- [[test_extract_json_via_dispatch()]] - code - temp-graphify/tests/test_extract.py
- [[test_get_extractor_routes_matlab_m_away_from_objc()]] - code - temp-graphify/tests/test_extract.py
- [[test_objc_header_dispatch_routes_objc_not_c()]] - code - temp-graphify/tests/test_languages.py
- [[test_objc_header_with_import_routes_to_objc()]] - code - temp-graphify/tests/test_languages.py
- [[test_plain_c_header_stays_on_c_extractor()]] - code - temp-graphify/tests/test_languages.py
- [[test_powershell_psd1_dispatched()]] - code - temp-graphify/tests/test_languages.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_get_extractor
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_Path]]
- 6 edges to [[_COMMUNITY_test_extract.py]]
- 6 edges to [[_COMMUNITY_test_languages.py]]
- 5 edges to [[_COMMUNITY_test_mcp_ingest.py]]
- 3 edges to [[_COMMUNITY__rebuild_code]]
- 2 edges to [[_COMMUNITY_test_manifest_ingest.py]]
- 2 edges to [[_COMMUNITY_test_dotnet.py]]
- 1 edge to [[_COMMUNITY_classify_file]]
- 1 edge to [[_COMMUNITY_extract.py]]
- 1 edge to [[_COMMUNITY_extract_cpp]]
- 1 edge to [[_COMMUNITY_extract]]
- 1 edge to [[_COMMUNITY__make_id]]
- 1 edge to [[_COMMUNITY_extract_objc]]
- 1 edge to [[_COMMUNITY_extract_powershell]]

## Top bridge nodes
- [[_get_extractor()]] - degree 39, connects to 14 communities
- [[test_cpp_header_routes_to_cpp_extractor()]] - degree 4, connects to 2 communities
- [[test_objc_header_with_import_routes_to_objc()]] - degree 4, connects to 2 communities
- [[test_plain_c_header_stays_on_c_extractor()]] - degree 4, connects to 2 communities
- [[test_extensionless_shebang_via_dispatch()]] - degree 3, connects to 1 community
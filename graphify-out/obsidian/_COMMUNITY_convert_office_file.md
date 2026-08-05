---
type: community
cohesion: 0.14
members: 20
---

# convert_office_file

**Cohesion:** 0.14 - loosely connected
**Members:** 20 nodes

## Members
- [[1649 — a modified .docx.xlsx must re-enter --update. detect_incremental…]] - rationale - temp-graphify/tests/test_office_incremental.py
- [[2059 the sidecar name must depend on the scan-root-RELATIVE path, not the…]] - rationale - temp-graphify/tests/test_detect.py
- [[A second conversion of an unchanged source must not rewrite the sidecar, so its…]] - rationale - temp-graphify/tests/test_detect.py
- [[A source outside the scan root (--include, custom layouts) falls back to the…]] - rationale - temp-graphify/tests/test_detect.py
- [[Convert a .docx or .xlsx to a markdown sidecar in out_dir. Returns the path of…]] - rationale - temp-graphify/graphify/detect.py
- [[Path_87]] - code
- [[Set path's mtime relative to now so ordering is deterministic.]] - rationale - temp-graphify/tests/test_office_incremental.py
- [[The sidecar name must be identical whether the source path arrives in NFC or…]] - rationale - temp-graphify/tests/test_detect.py
- [[Two same-stem Office files in different subdirs must still get distinct sidecar…]] - rationale - temp-graphify/tests/test_detect.py
- [[_bump_mtime()]] - code - temp-graphify/tests/test_office_incremental.py
- [[_make_docx()]] - code - temp-graphify/tests/test_office_incremental.py
- [[convert_office_file()]] - code - temp-graphify/graphify/detect.py
- [[test_convert_office_file_does_not_rewrite_existing_sidecar()]] - code - temp-graphify/tests/test_detect.py
- [[test_convert_office_file_hash_disambiguates_same_stem()]] - code - temp-graphify/tests/test_detect.py
- [[test_convert_office_file_hash_stable_across_nfc_nfd()]] - code - temp-graphify/tests/test_detect.py
- [[test_convert_office_file_outside_root_falls_back()]] - code - temp-graphify/tests/test_detect.py
- [[test_convert_office_file_sidecar_name_stable_across_checkouts()]] - code - temp-graphify/tests/test_detect.py
- [[test_modified_docx_reconverts_sidecar()]] - code - temp-graphify/tests/test_office_incremental.py
- [[test_office_incremental.py]] - code - temp-graphify/tests/test_office_incremental.py
- [[test_unchanged_docx_sidecar_not_rewritten()]] - code - temp-graphify/tests/test_office_incremental.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/convert_office_file
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_test_detect.py]]
- 4 edges to [[_COMMUNITY_detect.py]]
- 2 edges to [[_COMMUNITY_test_office_limits.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]

## Top bridge nodes
- [[convert_office_file()]] - degree 14, connects to 3 communities
- [[test_office_incremental.py]] - degree 7, connects to 2 communities
- [[test_convert_office_file_does_not_rewrite_existing_sidecar()]] - degree 3, connects to 1 community
- [[test_convert_office_file_hash_disambiguates_same_stem()]] - degree 3, connects to 1 community
- [[test_convert_office_file_hash_stable_across_nfc_nfd()]] - degree 3, connects to 1 community
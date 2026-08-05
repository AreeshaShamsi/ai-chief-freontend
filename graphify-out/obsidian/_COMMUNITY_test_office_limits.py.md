---
type: community
cohesion: 0.11
members: 28
---

# test_office_limits.py

**Cohesion:** 0.11 - loosely connected
**Members:** 28 nodes

## Members
- [[A PDF larger than the raw cap is skipped before pypdf opens it.]] - rationale - temp-graphify/tests/test_office_limits.py
- [[A normal multi-member office zip passes the streaming-ceiling pass.]] - rationale - temp-graphify/tests/test_office_limits.py
- [[A tiny file that expands far past the ratio threshold is rejected.]] - rationale - temp-graphify/tests/test_office_limits.py
- [[Convert a .docx file to markdown text using python-docx.]] - rationale - temp-graphify/graphify/detect.py
- [[Convert an .xlsx file to markdown text using openpyxl.]] - rationale - temp-graphify/graphify/detect.py
- [[Extract plain text from a PDF file using pypdf.]] - rationale - temp-graphify/graphify/detect.py
- [[Reject a zip-based office file that is a likely zipXML bomb. Two layers,…]] - rationale - temp-graphify/graphify/detect.py
- [[Resource-cap guards for parsing untrusted officePDF files (F2). .docx.xlsx…]] - rationale - temp-graphify/tests/test_office_limits.py
- [[The live converters bail out (return ) on a bomb before parsing.]] - rationale - temp-graphify/tests/test_office_limits.py
- [[True if path exists and its on-disk size is within cap.]] - rationale - temp-graphify/graphify/detect.py
- [[With a low decompressed cap, content whose actual bytes exceed it is rejected.…]] - rationale - temp-graphify/tests/test_office_limits.py
- [[_file_within_size_cap()]] - code - temp-graphify/graphify/detect.py
- [[_write_zip()]] - code - temp-graphify/tests/test_office_limits.py
- [[_zip_within_caps()]] - code - temp-graphify/graphify/detect.py
- [[count_words()]] - code - temp-graphify/graphify/detect.py
- [[docx_to_markdown()]] - code - temp-graphify/graphify/detect.py
- [[extract_pdf_text()]] - code - temp-graphify/graphify/detect.py
- [[test_converters_return_empty_for_bomb()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_count_words_sample_md()]] - code - temp-graphify/tests/test_detect.py
- [[test_file_within_size_cap()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_legit_multi_member_passes_streaming()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_legit_zip_passes()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_non_zip_rejected()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_office_limits.py]] - code - temp-graphify/tests/test_office_limits.py
- [[test_pdf_over_cap_returns_empty()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_streaming_ceiling_rejects_oversized_actual()]] - code - temp-graphify/tests/test_office_limits.py
- [[test_zip_ratio_bomb_rejected()]] - code - temp-graphify/tests/test_office_limits.py
- [[xlsx_to_markdown()]] - code - temp-graphify/graphify/detect.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_office_limitspy
SORT file.name ASC
```

## Connections to other communities
- 14 edges to [[_COMMUNITY_detect.py]]
- 5 edges to [[_COMMUNITY_test_detect.py]]
- 2 edges to [[_COMMUNITY_convert_office_file]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_llm.py]]
- 1 edge to [[_COMMUNITY_test_image_vision.py]]
- 1 edge to [[_COMMUNITY_google_workspace.py]]

## Top bridge nodes
- [[xlsx_to_markdown()]] - degree 9, connects to 4 communities
- [[extract_pdf_text()]] - degree 8, connects to 3 communities
- [[test_office_limits.py]] - degree 12, connects to 2 communities
- [[count_words()]] - degree 8, connects to 2 communities
- [[docx_to_markdown()]] - degree 7, connects to 2 communities
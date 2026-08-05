---
type: community
cohesion: 0.14
members: 25
---

# google_workspace.py

**Cohesion:** 0.14 - loosely connected
**Members:** 25 nodes

## Members
- [[Any_4]] - code
- [[Export a Google Workspace shortcut to a Markdown sidecar. Returns the converted…]] - rationale - temp-graphify/graphify/google_workspace.py
- [[Extract a Drive file ID from common Google DocsDrive URL shapes.]] - rationale - temp-graphify/graphify/google_workspace.py
- [[Optional Google Workspace shortcut export support. Google Drive for desktop…]] - rationale - temp-graphify/graphify/google_workspace.py
- [[Path_39]] - code
- [[Read a .gdoc.gsheet.gslides shortcut and return export metadata.]] - rationale - temp-graphify/graphify/google_workspace.py
- [[Return True when Google Workspace shortcut export is enabled.]] - rationale - temp-graphify/graphify/google_workspace.py
- [[_extract_file_id_from_url()]] - code - temp-graphify/graphify/google_workspace.py
- [[_extract_resource_key()]] - code - temp-graphify/graphify/google_workspace.py
- [[_run_gws_export()]] - code - temp-graphify/graphify/google_workspace.py
- [[_safe_yaml_str()]] - code - temp-graphify/graphify/google_workspace.py
- [[_sidecar_path()]] - code - temp-graphify/graphify/google_workspace.py
- [[_with_frontmatter()]] - code - temp-graphify/graphify/google_workspace.py
- [[convert_google_workspace_file()]] - code - temp-graphify/graphify/google_workspace.py
- [[google_workspace.py]] - code - temp-graphify/graphify/google_workspace.py
- [[google_workspace_enabled()]] - code - temp-graphify/graphify/google_workspace.py
- [[read_google_shortcut()]] - code - temp-graphify/graphify/google_workspace.py
- [[test_convert_gdoc_to_markdown_sidecar()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_convert_gsheet_uses_xlsx_markdown_callback()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_google_workspace.py]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_google_workspace_enabled_env()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_read_google_shortcut_doc_id()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_read_google_shortcut_extracts_id_from_url()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_run_gws_export_does_not_send_resource_key_as_query_param()]] - code - temp-graphify/tests/test_google_workspace.py
- [[test_run_gws_export_uses_output_directory_as_cwd()]] - code - temp-graphify/tests/test_google_workspace.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/google_workspacepy
SORT file.name ASC
```

## Connections to other communities
- 3 edges to [[_COMMUNITY_detect.py]]
- 2 edges to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY_test_office_limits.py]]

## Top bridge nodes
- [[convert_google_workspace_file()]] - degree 12, connects to 3 communities
- [[google_workspace_enabled()]] - degree 5, connects to 2 communities
- [[google_workspace.py]] - degree 12, connects to 1 community
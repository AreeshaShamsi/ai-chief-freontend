---
source_file: "temp-graphify/graphify/extractors/powershell.py"
type: "code"
community: "extract_powershell_manifest"
location: "L351"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/extract_powershell_manifest
---

# extract_powershell_manifest()

## Connections
- [[Extract module dependency edges from a PowerShell .psd1 manifest file. .psd1…]] - `rationale_for` [EXTRACTED]
- [[Path_28]] - `references` [EXTRACTED]
- [[_make_id()]] - `calls` [EXTRACTED]
- [[e()]] - `indirect_call` [INFERRED]
- [[extract.py]] - `indirect_call` [INFERRED]
- [[extractors__init__.py]] - `indirect_call` [INFERRED]
- [[powershell.py]] - `contains` [EXTRACTED]
- [[test_powershell_psd1_has_file_node()]] - `calls` [INFERRED]
- [[test_powershell_psd1_nested_modules()]] - `calls` [INFERRED]
- [[test_powershell_psd1_no_dangling_edges()]] - `calls` [INFERRED]
- [[test_powershell_psd1_no_error()]] - `calls` [INFERRED]
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - `calls` [INFERRED]
- [[test_powershell_psd1_required_modules_hashtable()]] - `calls` [INFERRED]
- [[test_powershell_psd1_required_modules_string()]] - `calls` [INFERRED]
- [[test_powershell_psd1_root_module()]] - `calls` [INFERRED]

#graphify/code #graphify/INFERRED #community/extract_powershell_manifest
---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_powershell_manifest"
location: "L1865"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# test_powershell_psd1_root_module()

## Connections
- [[RootModule = 'MyModule.psm1' produces an imports_from edge to 'mymodule'.]] - `rationale_for` [EXTRACTED]
- [[extract_powershell_manifest()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_powershell_manifest
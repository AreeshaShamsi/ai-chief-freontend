---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_powershell_manifest"
location: "L1866"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# RootModule = 'MyModule.psm1' produces an imports_from edge to 'mymodule'.

## Connections
- [[test_powershell_psd1_root_module()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_powershell_manifest
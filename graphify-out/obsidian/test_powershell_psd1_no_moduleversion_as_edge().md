---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_powershell_manifest"
location: "L1900"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# test_powershell_psd1_no_moduleversion_as_edge()

## Connections
- [[ModuleVersion values ('5.0', '1.0.0') must NOT appear as import targets.]] - `rationale_for` [EXTRACTED]
- [[extract_powershell_manifest()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_powershell_manifest
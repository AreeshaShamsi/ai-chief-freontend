---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_powershell_manifest"
location: "L1901"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# ModuleVersion values ('5.0', '1.0.0') must NOT appear as import targets.

## Connections
- [[test_powershell_psd1_no_moduleversion_as_edge()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_powershell_manifest
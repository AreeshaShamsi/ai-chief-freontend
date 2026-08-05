---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_powershell_manifest"
location: "L1875"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# NestedModules = @('Helpers.psm1', 'Logger.psm1') produces edges for both.

## Connections
- [[test_powershell_psd1_nested_modules()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_powershell_manifest
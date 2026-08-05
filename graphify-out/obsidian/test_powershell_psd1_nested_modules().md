---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_powershell_manifest"
location: "L1874"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_powershell_manifest
---

# test_powershell_psd1_nested_modules()

## Connections
- [[NestedModules = @('Helpers.psm1', 'Logger.psm1') produces edges for both.]] - `rationale_for` [EXTRACTED]
- [[extract_powershell_manifest()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_powershell_manifest
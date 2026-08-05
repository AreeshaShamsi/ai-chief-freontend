---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_powershell"
location: "L1787"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_powershell
---

# test_powershell_import_module_with_name_param()

## Connections
- [[Import-Module -Name Bar.psm1 resolves to module stem 'bar'.]] - `rationale_for` [EXTRACTED]
- [[extract_powershell()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_powershell
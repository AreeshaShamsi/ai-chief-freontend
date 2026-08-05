---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_powershell"
location: "L1818"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_powershell
---

# Import-Module must not appear in raw_calls (it is an import, not a function…

## Connections
- [[test_powershell_import_module_not_a_raw_call()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_powershell
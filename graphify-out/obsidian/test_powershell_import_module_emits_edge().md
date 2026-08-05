---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_powershell"
location: "L1779"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_powershell
---

# test_powershell_import_module_emits_edge()

## Connections
- [[Import-Module Foo at top level emits an imports_from edge.]] - `rationale_for` [EXTRACTED]
- [[extract_powershell()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_powershell
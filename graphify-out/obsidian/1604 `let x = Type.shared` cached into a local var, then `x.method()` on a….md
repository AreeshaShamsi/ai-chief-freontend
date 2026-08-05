---
source_file: "temp-graphify/tests/test_swift_cross_file_calls.py"
type: "rationale"
community: "test_swift_cross_file_calls.py"
location: "L158"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_swift_cross_file_callspy
---

# #1604: `let x = Type.shared` cached into a local var, then `x.method()` on a…

## Connections
- [[test_deferred_singleton_local_var_resolves()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_swift_cross_file_callspy
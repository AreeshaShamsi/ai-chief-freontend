---
source_file: "temp-graphify/tests/test_go_builtin_call_targets.py"
type: "rationale"
community: "test_go_builtin_call_targets.py"
location: "L74"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_go_builtin_call_targetspy
---

# A builtin `append` call must not create an edge to the user's method.

## Connections
- [[test_builtin_append_does_not_bind_to_user_method()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_go_builtin_call_targetspy
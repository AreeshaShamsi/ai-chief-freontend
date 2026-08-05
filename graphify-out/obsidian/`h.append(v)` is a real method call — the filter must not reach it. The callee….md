---
source_file: "temp-graphify/tests/test_go_builtin_call_targets.py"
type: "rationale"
community: "test_go_builtin_call_targets.py"
location: "L168"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_go_builtin_call_targetspy
---

# `h.append(v)` is a real method call — the filter must not reach it. The callee…

## Connections
- [[test_go_selector_call_to_shadowing_method_survives()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_go_builtin_call_targetspy
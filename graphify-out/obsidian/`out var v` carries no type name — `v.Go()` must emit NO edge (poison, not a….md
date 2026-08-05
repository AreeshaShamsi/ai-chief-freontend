---
source_file: "temp-graphify/tests/test_csharp_member_calls.py"
type: "rationale"
community: "test_csharp_member_calls.py"
location: "L489"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_csharp_member_callspy
---

# `out var v` carries no type name — `v.Go()` must emit NO edge (poison, not a…

## Connections
- [[test_out_var_receiver_stays_unbound()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_csharp_member_callspy
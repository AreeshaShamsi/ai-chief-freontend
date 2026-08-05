---
source_file: "temp-graphify/tests/test_csharp_member_calls.py"
type: "rationale"
community: "test_csharp_member_calls.py"
location: "L471"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_csharp_member_callspy
---

# `b.TryGet(out Sect s)` binds s: Sect — `s.Go()` resolves to Sect.Go.

## Connections
- [[test_out_declared_receiver_resolves()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_csharp_member_callspy
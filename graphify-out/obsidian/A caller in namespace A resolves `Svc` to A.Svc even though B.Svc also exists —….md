---
source_file: "temp-graphify/tests/test_csharp_member_calls.py"
type: "rationale"
community: "test_csharp_member_calls.py"
location: "L207"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_csharp_member_callspy
---

# A caller in namespace A resolves `Svc` to A.Svc even though B.Svc also exists —…

## Connections
- [[test_same_namespace_receiver_resolves_without_using()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_csharp_member_callspy
---
source_file: "temp-graphify/graphify/security.py"
type: "rationale"
community: "security.py"
location: "L218"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/securitypy
---

# urllib handler that routes http:// through _SSRFGuardedHTTPConnection.

## Connections
- [[_SSRFGuardedHTTPHandler]] - `rationale_for` [EXTRACTED]
- [[_SSRFGuardedHTTPSHandler]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/securitypy
---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_objc"
location: "L1397"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_objc
---

# Two classes each declaring -name: self.name in A must NOT fan out to B's -name.

## Connections
- [[test_objc_dot_syntax_no_fanout_two_same_named_properties()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_objc
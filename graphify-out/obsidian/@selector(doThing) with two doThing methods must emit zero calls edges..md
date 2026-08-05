---
source_file: "temp-graphify/tests/test_languages.py"
type: "rationale"
community: "extract_objc"
location: "L1450"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_objc
---

# @selector(doThing) with two doThing methods must emit zero calls edges.

## Connections
- [[test_objc_selector_no_fanout_two_same_named_methods()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_objc
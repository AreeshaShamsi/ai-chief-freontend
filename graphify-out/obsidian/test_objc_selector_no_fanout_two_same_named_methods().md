---
source_file: "temp-graphify/tests/test_languages.py"
type: "code"
community: "extract_objc"
location: "L1449"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_objc
---

# test_objc_selector_no_fanout_two_same_named_methods()

## Connections
- [[@selector(doThing) with two doThing methods must emit zero calls edges.]] - `rationale_for` [EXTRACTED]
- [[extract_objc()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_objc
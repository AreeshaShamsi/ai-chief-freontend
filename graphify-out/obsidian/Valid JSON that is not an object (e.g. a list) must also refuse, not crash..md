---
source_file: "temp-graphify/tests/test_settings_merge.py"
type: "rationale"
community: "test_settings_merge.py"
location: "L134"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_settings_mergepy
---

# Valid JSON that is not an object (e.g. a list) must also refuse, not crash.

## Connections
- [[test_non_object_top_level_aborts_without_clobbering()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_settings_mergepy
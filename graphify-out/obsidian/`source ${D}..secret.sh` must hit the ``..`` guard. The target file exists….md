---
source_file: "temp-graphify/tests/test_extract.py"
type: "rationale"
community: "extract_bash"
location: "L2263"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/extract_bash
---

# `source "${D}/../secret.sh"` must hit the ``..`` guard. The target file exists…

## Connections
- [[test_extract_bash_source_suffix_guard_rejects_traversal()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/extract_bash
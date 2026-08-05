---
source_file: "temp-graphify/tests/test_extract.py"
type: "code"
community: "extract_bash"
location: "L2229"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_bash
---

# test_extract_bash_source_suffix_guard_mid_path_variable()

## Connections
- [[`source lib${X}.sh` keeps an expansion in the suffix, so the ``$``-in-suffix…]] - `rationale_for` [EXTRACTED]
- [[extract_bash()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_bash
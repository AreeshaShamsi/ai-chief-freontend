---
source_file: "temp-graphify/tests/test_extract.py"
type: "code"
community: "extract_bash"
location: "L1706"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_bash
---

# test_extract_bash_source_via_variable_path_resolves_to_real_file()

## Connections
- [[`source ${DIR}libx.sh` (the `dirname ${BASH_SOURCE0}` idiom) must…]] - `rationale_for` [EXTRACTED]
- [[extract_bash()]] - `calls` [INFERRED]
- [[test_extract.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_bash
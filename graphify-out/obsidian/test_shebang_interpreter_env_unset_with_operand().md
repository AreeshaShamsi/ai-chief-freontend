---
source_file: "temp-graphify/tests/test_detect.py"
type: "code"
community: "classify_file"
location: "L1642"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/classify_file
---

# test_shebang_interpreter_env_unset_with_operand()

## Connections
- [[_shebang_interpreter()]] - `calls` [EXTRACTED]
- [[`env -u VAR python3` skips both -u and its required operand.]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[test_detect.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/classify_file
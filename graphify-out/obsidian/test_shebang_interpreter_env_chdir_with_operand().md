---
source_file: "temp-graphify/tests/test_detect.py"
type: "code"
community: "classify_file"
location: "L1651"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/classify_file
---

# test_shebang_interpreter_env_chdir_with_operand()

## Connections
- [[_shebang_interpreter()]] - `calls` [EXTRACTED]
- [[`env -C tmp python3` skips both -C and its workdir operand.]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[test_detect.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/classify_file
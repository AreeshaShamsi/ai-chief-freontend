---
source_file: "temp-graphify/tests/test_llm_parser.py"
type: "code"
community: "_parse_llm_json"
location: "L132"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/_parse_llm_json
---

# test_model_env_var_adds_model_flag()

## Connections
- [[GRAPHIFY_CLAUDE_CLI_MODEL must be forwarded to claude -p --model.]] - `rationale_for` [EXTRACTED]
- [[_call_claude_cli()]] - `calls` [EXTRACTED]
- [[_make_envelope()]] - `calls` [EXTRACTED]
- [[patch]] - `references` [EXTRACTED]
- [[test_llm_parser.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/_parse_llm_json
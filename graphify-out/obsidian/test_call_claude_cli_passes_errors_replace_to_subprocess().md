---
source_file: "temp-graphify/tests/test_llm_backends.py"
type: "code"
community: "test_llm_backends.py"
location: "L1025"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_llm_backendspy
---

# test_call_claude_cli_passes_errors_replace_to_subprocess()

## Connections
- [[_call_claude_cli()]] - `calls` [EXTRACTED]
- [[_make_cli_envelope()]] - `calls` [EXTRACTED]
- [[subprocess.run must be called with errors='replace' so non-UTF-8 output bytes…]] - `rationale_for` [EXTRACTED]
- [[test_llm_backends.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_llm_backendspy
---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "extract_files_direct"
location: "L2725"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/extract_files_direct
---

# _validate_ollama_base_url()

## Connections
- [[Warn if OLLAMA_BASE_URL looks unsafe; hard-block link-localmetadata (F3).…]] - `rationale_for` [EXTRACTED]
- [[_call_llm()]] - `calls` [EXTRACTED]
- [[_ollama_host_is_link_local_or_metadata()]] - `calls` [EXTRACTED]
- [[cli.py]] - `imports` [EXTRACTED]
- [[detect_backend()]] - `calls` [EXTRACTED]
- [[dispatch_command()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_ollama.py]] - `imports` [EXTRACTED]
- [[test_ollama_alias_resolving_to_link_local_blocked()]] - `calls` [EXTRACTED]
- [[test_ollama_blocks_link_local_and_metadata()]] - `calls` [EXTRACTED]
- [[test_ollama_loopback_and_lan_do_not_raise()]] - `calls` [EXTRACTED]
- [[test_ollama_warn_false_still_hard_blocks_but_stays_quiet()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/extract_files_direct
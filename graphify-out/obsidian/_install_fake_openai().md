---
source_file: "temp-graphify/tests/test_llm_backends.py"
type: "code"
community: "test_llm_backends.py"
location: "L384"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_llm_backendspy
---

# _install_fake_openai()

## Connections
- [[Inject a stub `openai` module so `_call_openai_compat` can run without the real…]] - `rationale_for` [EXTRACTED]
- [[test_call_openai_compat_preserves_real_finish_reason()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_relabels_empty_content_as_length()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_relabels_none_content_as_length()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_relabels_unparseable_json_as_length()]] - `calls` [EXTRACTED]
- [[test_llm_backends.py]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_llm_backendspy
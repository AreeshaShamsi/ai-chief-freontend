---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_chunking.py"
location: "L1819"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkingpy
---

# _estimate_file_tokens()

## Connections
- [[Estimate the prompt-token cost of a file or slice under `_read_files` rules.…]] - `rationale_for` [EXTRACTED]
- [[_is_vision_image()]] - `calls` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[read_slice_text()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_falls_back_to_chars_when_no_tokenizer()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_handles_tiktoken_special_token()]] - `calls` [EXTRACTED]
- [[test_estimate_file_tokens_uses_tiktoken_when_available()]] - `calls` [EXTRACTED]
- [[test_estimate_tokens_for_slice_scales_with_range()]] - `calls` [EXTRACTED]
- [[test_image_token_estimate_is_flat()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkingpy
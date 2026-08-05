---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_chunking.py"
location: "L1996"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkingpy
---

# _extract_with_adaptive_retry()

## Connections
- [[Extract a chunk; if the response is truncated (`finish_reason=length`) or the…]] - `rationale_for` [EXTRACTED]
- [[Path_43]] - `references` [EXTRACTED]
- [[_chunk_partial_files()]] - `calls` [EXTRACTED]
- [[_looks_like_context_exceeded()]] - `calls` [EXTRACTED]
- [[_mark_partial()]] - `calls` [EXTRACTED]
- [[_merged_partial_files()]] - `calls` [EXTRACTED]
- [[bisect_slice()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_adaptive_retry_bisects_on_hollow_ollama_response()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_caps_at_max_depth()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_gives_up_on_single_file_overflow()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_marks_max_depth_giveup_partial()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_marks_single_file_truncation_partial()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_re_raises_unrelated_errors()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_recurses_for_persistent_truncation()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_returns_directly_when_not_truncated()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_single_file_truncation_does_not_recurse()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_splits_on_context_exceeded()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_splits_when_finish_reason_length()]] - `calls` [EXTRACTED]
- [[test_adaptive_retry_successful_split_is_not_marked_partial()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[unit_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkingpy
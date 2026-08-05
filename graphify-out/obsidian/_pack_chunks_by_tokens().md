---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_chunking.py"
location: "L1858"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_chunkingpy
---

# _pack_chunks_by_tokens()

## Connections
- [[Greedily pack filesslices into chunks that fit a token budget. Units are first…]] - `rationale_for` [EXTRACTED]
- [[_estimate_file_tokens()]] - `calls` [EXTRACTED]
- [[_is_vision_image()]] - `calls` [EXTRACTED]
- [[extract_corpus_parallel()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_chunk_packing_caps_images_per_chunk()]] - `calls` [EXTRACTED]
- [[test_chunking.py]] - `imports` [EXTRACTED]
- [[test_pack_chunks_groups_by_directory()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_handles_slices()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_oversized_file_gets_its_own_chunk()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_packs_small_files_together()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_rejects_non_positive_budget()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_starts_new_chunk_when_budget_would_overflow()]] - `calls` [EXTRACTED]
- [[test_pack_chunks_with_special_token_doc_does_not_crash()]] - `calls` [EXTRACTED]
- [[unit_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_chunkingpy
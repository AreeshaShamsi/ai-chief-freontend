---
source_file: "temp-graphify/graphify/file_slice.py"
type: "code"
community: "test_file_slice.py"
location: "L107"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_file_slicepy
---

# expand_oversized_files()

## Connections
- [[FileSlice]] - `calls` [EXTRACTED]
- [[Path_37]] - `references` [EXTRACTED]
- [[Replace each oversized splittable-text file with a list of ``FileSlice``s.…]] - `rationale_for` [EXTRACTED]
- [[extract_corpus_parallel()]] - `calls` [EXTRACTED]
- [[file_slice.py]] - `contains` [EXTRACTED]
- [[is_splittable_text()]] - `calls` [EXTRACTED]
- [[llm.py]] - `imports` [EXTRACTED]
- [[slice_boundaries()]] - `calls` [EXTRACTED]
- [[test_checkpoint_caches_sliced_document_chunks()]] - `calls` [INFERRED]
- [[test_expand_does_not_slice_code_even_when_oversized()]] - `calls` [EXTRACTED]
- [[test_expand_oversized_markdown_is_sliced_with_full_coverage()]] - `calls` [EXTRACTED]
- [[test_expand_small_file_stays_whole()]] - `calls` [EXTRACTED]
- [[test_expand_unreadable_file_passes_through()]] - `calls` [EXTRACTED]
- [[test_file_slice.py]] - `imports` [EXTRACTED]
- [[test_pack_chunks_handles_slices()]] - `calls` [EXTRACTED]
- [[test_read_files_keys_every_slice_to_parent_path()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_file_slicepy
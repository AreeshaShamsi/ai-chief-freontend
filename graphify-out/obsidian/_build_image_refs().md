---
source_file: "temp-graphify/graphify/llm.py"
type: "code"
community: "test_image_vision.py"
location: "L798"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_image_visionpy
---

# _build_image_refs()

## Connections
- [[Build `_ImageRef`s for raster images. `read_bytes=True` (base64 backends) loads…]] - `rationale_for` [EXTRACTED]
- [[Path_43]] - `references` [EXTRACTED]
- [[_ImageRef]] - `references` [EXTRACTED]
- [[_resolve_under_root()]] - `calls` [EXTRACTED]
- [[extract_files_direct()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]
- [[test_anthropic_content_has_base64_block()]] - `calls` [EXTRACTED]
- [[test_bedrock_content_uses_raw_bytes()]] - `calls` [EXTRACTED]
- [[test_build_image_refs_drops_oversized()]] - `calls` [EXTRACTED]
- [[test_build_image_refs_sets_rel_media_and_bytes()]] - `calls` [EXTRACTED]
- [[test_build_image_refs_skips_out_of_root_symlink()]] - `calls` [EXTRACTED]
- [[test_builders_fall_back_to_string_without_pixels()]] - `calls` [EXTRACTED]
- [[test_call_bedrock_sends_raw_image_bytes()]] - `calls` [EXTRACTED]
- [[test_call_claude_sends_image_block()]] - `calls` [EXTRACTED]
- [[test_call_openai_compat_sends_image_url()]] - `calls` [EXTRACTED]
- [[test_claude_cli_adds_dir_and_read_instruction()]] - `calls` [EXTRACTED]
- [[test_claude_cli_passes_oversized_image_by_path()]] - `calls` [EXTRACTED]
- [[test_openai_content_has_data_uri()]] - `calls` [EXTRACTED]
- [[test_path_backend_skips_byte_read_and_size_cap()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_image_visionpy
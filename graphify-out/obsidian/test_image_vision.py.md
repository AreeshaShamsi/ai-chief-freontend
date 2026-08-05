---
source_file: "temp-graphify/tests/test_image_vision.py"
type: "code"
community: "test_image_vision.py"
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_image_visionpy
---

# test_image_vision.py

## Connections
- [[Tests for image-vision support across the direct extraction backends. Covers…]] - `rationale_for` [EXTRACTED]
- [[_bedrock_resp()]] - `contains` [EXTRACTED]
- [[_fake_anthropic()]] - `contains` [EXTRACTED]
- [[_fake_boto3()]] - `contains` [EXTRACTED]
- [[_fake_openai()]] - `contains` [EXTRACTED]
- [[_make_corpus()_2]] - `contains` [EXTRACTED]
- [[graphify__init__.py]] - `imports_from` [EXTRACTED]
- [[llm.py]] - `imports_from` [EXTRACTED]
- [[test_anthropic_content_has_base64_block()]] - `contains` [EXTRACTED]
- [[test_bedrock_content_uses_raw_bytes()]] - `contains` [EXTRACTED]
- [[test_bedrock_response_text_falls_back_without_text()]] - `contains` [EXTRACTED]
- [[test_bedrock_response_text_single_text_block_unchanged()]] - `contains` [EXTRACTED]
- [[test_bedrock_response_text_skips_leading_reasoning_block()]] - `contains` [EXTRACTED]
- [[test_bedrock_response_text_skips_non_text_leading_blocks()]] - `contains` [EXTRACTED]
- [[test_bedrock_response_text_tolerates_malformed_blocks()]] - `contains` [EXTRACTED]
- [[test_build_image_refs_drops_oversized()]] - `contains` [EXTRACTED]
- [[test_build_image_refs_sets_rel_media_and_bytes()]] - `contains` [EXTRACTED]
- [[test_build_image_refs_skips_out_of_root_symlink()]] - `contains` [EXTRACTED]
- [[test_builders_fall_back_to_string_without_pixels()]] - `contains` [EXTRACTED]
- [[test_call_bedrock_api_timeout_defaults_when_unset()]] - `contains` [EXTRACTED]
- [[test_call_bedrock_honors_api_timeout()]] - `contains` [EXTRACTED]
- [[test_call_bedrock_parses_reasoning_model_response()]] - `contains` [EXTRACTED]
- [[test_call_bedrock_sends_raw_image_bytes()]] - `contains` [EXTRACTED]
- [[test_call_claude_sends_image_block()]] - `contains` [EXTRACTED]
- [[test_call_openai_compat_sends_image_url()]] - `contains` [EXTRACTED]
- [[test_call_openai_compat_text_only_without_images()]] - `contains` [EXTRACTED]
- [[test_capability_flags()]] - `contains` [EXTRACTED]
- [[test_chunk_packing_caps_images_per_chunk()]] - `contains` [EXTRACTED]
- [[test_claude_cli_adds_dir_and_read_instruction()]] - `contains` [EXTRACTED]
- [[test_claude_cli_passes_oversized_image_by_path()]] - `contains` [EXTRACTED]
- [[test_extract_files_direct_gates_pixels_by_capability()]] - `contains` [EXTRACTED]
- [[test_image_token_estimate_is_flat()]] - `contains` [EXTRACTED]
- [[test_no_images_is_byte_identical()]] - `contains` [EXTRACTED]
- [[test_non_pdf_still_read_as_plain_text()]] - `contains` [EXTRACTED]
- [[test_openai_content_has_data_uri()]] - `contains` [EXTRACTED]
- [[test_partition_splits_raster_from_text()]] - `contains` [EXTRACTED]
- [[test_path_backend_skips_byte_read_and_size_cap()]] - `contains` [EXTRACTED]
- [[test_pdf_is_not_treated_as_vision_image()]] - `contains` [EXTRACTED]
- [[test_pdf_routed_through_pypdf_not_readtext()]] - `contains` [EXTRACTED]
- [[test_read_files_skips_out_of_root_symlink()]] - `contains` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_image_visionpy
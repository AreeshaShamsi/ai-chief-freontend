---
type: community
cohesion: 0.07
members: 55
---

# test_image_vision.py

**Cohesion:** 0.07 - loosely connected
**Members:** 55 nodes

## Members
- [[A corpus with one raster image, one svg (text), and one markdown doc.]] - rationale - temp-graphify/tests/test_image_vision.py
- [[Build `_ImageRef`s for raster images. `read_bytes=True` (base64 backends) loads…]] - rationale - temp-graphify/graphify/llm.py
- [[Call AWS Bedrock via boto3 Converse API using the standard AWS credential chain.]] - rationale - temp-graphify/graphify/llm.py
- [[End-to-end a reasoning-model response must not look hollow.]] - rationale - temp-graphify/tests/test_image_vision.py
- [[Map each dispatched text unit's resolved path to the (lower-cased, capped)…]] - rationale - temp-graphify/graphify/llm.py
- [[Path_43]] - code
- [[Return a text-like file's content for the extraction prompt. Most files are…]] - rationale - temp-graphify/graphify/llm.py
- [[Return fileslice contents formatted for the extraction prompt. Each unit is…]] - rationale - temp-graphify/graphify/llm.py
- [[Return the first Converse content block that carries text. Converse returns…]] - rationale - temp-graphify/graphify/llm.py
- [[Return the resolved path only when it stays inside ``root``.]] - rationale - temp-graphify/graphify/llm.py
- [[Split a chunk into (text-like units, raster-image files). A ``FileSlice`` is…]] - rationale - temp-graphify/graphify/llm.py
- [[Tests for image-vision support across the direct extraction backends. Covers…]] - rationale - temp-graphify/tests/test_image_vision.py
- [[_bedrock_resp()]] - code - temp-graphify/tests/test_image_vision.py
- [[_bedrock_response_text()]] - code - temp-graphify/graphify/llm.py
- [[_build_image_refs()]] - code - temp-graphify/graphify/llm.py
- [[_call_bedrock()]] - code - temp-graphify/graphify/llm.py
- [[_dispatched_source_text()]] - code - temp-graphify/graphify/llm.py
- [[_fake_anthropic()]] - code - temp-graphify/tests/test_image_vision.py
- [[_fake_boto3()]] - code - temp-graphify/tests/test_image_vision.py
- [[_fake_openai()]] - code - temp-graphify/tests/test_image_vision.py
- [[_file_to_text()]] - code - temp-graphify/graphify/llm.py
- [[_is_vision_image()]] - code - temp-graphify/graphify/llm.py
- [[_make_corpus()_2]] - code - temp-graphify/tests/test_image_vision.py
- [[_partition_semantic_files()]] - code - temp-graphify/graphify/llm.py
- [[_read_files()]] - code - temp-graphify/graphify/llm.py
- [[_resolve_under_root()]] - code - temp-graphify/graphify/llm.py
- [[parametrize_11]] - code
- [[test_anthropic_content_has_base64_block()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_content_uses_raw_bytes()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_falls_back_without_text()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_single_text_block_unchanged()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_skips_leading_reasoning_block()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_skips_non_text_leading_blocks()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_bedrock_response_text_tolerates_malformed_blocks()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_build_image_refs_drops_oversized()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_build_image_refs_sets_rel_media_and_bytes()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_build_image_refs_skips_out_of_root_symlink()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_bedrock_api_timeout_defaults_when_unset()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_bedrock_honors_api_timeout()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_bedrock_parses_reasoning_model_response()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_bedrock_sends_raw_image_bytes()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_claude_sends_image_block()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_openai_compat_sends_image_url()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_call_openai_compat_text_only_without_images()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_chunk_packing_caps_images_per_chunk()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_claude_cli_adds_dir_and_read_instruction()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_claude_cli_passes_oversized_image_by_path()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_extract_files_direct_gates_pixels_by_capability()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_image_vision.py]] - code - temp-graphify/tests/test_image_vision.py
- [[test_non_pdf_still_read_as_plain_text()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_partition_splits_raster_from_text()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_path_backend_skips_byte_read_and_size_cap()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_pdf_is_not_treated_as_vision_image()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_pdf_routed_through_pypdf_not_readtext()]] - code - temp-graphify/tests/test_image_vision.py
- [[test_read_files_skips_out_of_root_symlink()]] - code - temp-graphify/tests/test_image_vision.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_image_visionpy
SORT file.name ASC
```

## Connections to other communities
- 27 edges to [[_COMMUNITY_llm.py]]
- 7 edges to [[_COMMUNITY_test_chunking.py]]
- 7 edges to [[_COMMUNITY_extract_files_direct]]
- 6 edges to [[_COMMUNITY_test_file_slice.py]]
- 3 edges to [[_COMMUNITY__call_claude_cli]]
- 3 edges to [[_COMMUNITY_test_llm_backends.py]]
- 2 edges to [[_COMMUNITY_test_evidence_binding.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]
- 1 edge to [[_COMMUNITY_test_office_limits.py]]
- 1 edge to [[_COMMUNITY_test_detect.py]]
- 1 edge to [[_COMMUNITY__load_custom_providers]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY__parse_llm_json]]

## Top bridge nodes
- [[_call_bedrock()]] - degree 16, connects to 6 communities
- [[test_image_vision.py]] - degree 40, connects to 4 communities
- [[Path_43]] - degree 12, connects to 4 communities
- [[_read_files()]] - degree 12, connects to 3 communities
- [[_dispatched_source_text()]] - degree 8, connects to 3 communities
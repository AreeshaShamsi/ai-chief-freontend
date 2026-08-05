---
type: community
cohesion: 0.11
members: 38
---

# test_file_slice.py

**Cohesion:** 0.11 - loosely connected
**Members:** 38 nodes

## Members
- [[A contiguous ``start, end)`` character range of a splittable text file.…]] - rationale - temp-graphify/graphify/file_slice.py
- [[Contiguous ``(start, end)`` ranges covering all of ``text``, each ≤ max_chars.…]] - rationale - temp-graphify/graphify/file_slice.py
- [[FileSlice]] - code - temp-graphify/graphify/file_slice.py
- [[Intra-file slicing for oversized text documents (1369). The extraction packer…]] - rationale - temp-graphify/graphify/file_slice.py
- [[Path_37]] - code
- [[Path_73]] - code
- [[Read just this slice's characters from its parent file.]] - rationale - temp-graphify/graphify/file_slice.py
- [[Replace each oversized splittable-text file with a list of ``FileSlice``s.…]] - rationale - temp-graphify/graphify/file_slice.py
- [[Return a cut index in ``(start, end`` at the strongest nearby boundary.…]] - rationale - temp-graphify/graphify/file_slice.py
- [[Split a slice into two halves at a newline near its midpoint, or None. Used by…]] - rationale - temp-graphify/graphify/file_slice.py
- [[The on-disk path a unit belongs to (the parent file for a slice).]] - rationale - temp-graphify/graphify/file_slice.py
- [[True for plain-text document types that may be sliced.]] - rationale - temp-graphify/graphify/file_slice.py
- [[_best_cut()]] - code - temp-graphify/graphify/file_slice.py
- [[_write()_6]] - code - temp-graphify/tests/test_file_slice.py
- [[bisect_slice()]] - code - temp-graphify/graphify/file_slice.py
- [[expand_oversized_files()]] - code - temp-graphify/graphify/file_slice.py
- [[file_slice.py]] - code - temp-graphify/graphify/file_slice.py
- [[is_splittable_text()]] - code - temp-graphify/graphify/file_slice.py
- [[parametrize_7]] - code
- [[read_slice_text()]] - code - temp-graphify/graphify/file_slice.py
- [[slice_boundaries()]] - code - temp-graphify/graphify/file_slice.py
- [[test_bisect_slice_returns_none_for_tiny()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_bisect_slice_splits_at_newline()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_estimate_tokens_for_slice_scales_with_range()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_expand_does_not_slice_code_even_when_oversized()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_expand_oversized_markdown_is_sliced_with_full_coverage()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_expand_small_file_stays_whole()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_expand_unreadable_file_passes_through()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_file_slice.py]] - code - temp-graphify/tests/test_file_slice.py
- [[test_pack_chunks_handles_slices()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_partition_keeps_slices_as_text()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_read_files_keys_every_slice_to_parent_path()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_slice_boundaries_full_coverage_and_bounds()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_slice_boundaries_prefers_heading_boundary()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_slice_boundaries_single_huge_line_still_progresses()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_slice_boundaries_small_text_is_one_range()]] - code - temp-graphify/tests/test_file_slice.py
- [[test_unit_path_resolves_slice_and_path()]] - code - temp-graphify/tests/test_file_slice.py
- [[unit_path()]] - code - temp-graphify/graphify/file_slice.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_file_slicepy
SORT file.name ASC
```

## Connections to other communities
- 11 edges to [[_COMMUNITY_test_chunking.py]]
- 8 edges to [[_COMMUNITY_llm.py]]
- 6 edges to [[_COMMUNITY_test_image_vision.py]]
- 2 edges to [[_COMMUNITY_test_evidence_binding.py]]
- 1 edge to [[_COMMUNITY_graphify__init__.py]]

## Top bridge nodes
- [[FileSlice]] - degree 16, connects to 3 communities
- [[unit_path()]] - degree 12, connects to 3 communities
- [[read_slice_text()]] - degree 9, connects to 3 communities
- [[test_file_slice.py]] - degree 26, connects to 2 communities
- [[expand_oversized_files()]] - degree 16, connects to 2 communities
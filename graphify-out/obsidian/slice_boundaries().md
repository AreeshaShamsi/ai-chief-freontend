---
source_file: "temp-graphify/graphify/file_slice.py"
type: "code"
community: "test_file_slice.py"
location: "L86"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_file_slicepy
---

# slice_boundaries()

## Connections
- [[Contiguous ``(start, end)`` ranges covering all of ``text``, each ≤ max_chars.…]] - `rationale_for` [EXTRACTED]
- [[_best_cut()]] - `calls` [EXTRACTED]
- [[expand_oversized_files()]] - `calls` [EXTRACTED]
- [[file_slice.py]] - `contains` [EXTRACTED]
- [[test_file_slice.py]] - `imports` [EXTRACTED]
- [[test_slice_boundaries_full_coverage_and_bounds()]] - `calls` [EXTRACTED]
- [[test_slice_boundaries_prefers_heading_boundary()]] - `calls` [EXTRACTED]
- [[test_slice_boundaries_single_huge_line_still_progresses()]] - `calls` [EXTRACTED]
- [[test_slice_boundaries_small_text_is_one_range()]] - `calls` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/test_file_slicepy
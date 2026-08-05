---
source_file: "temp-graphify/graphify/extractors/resolution.py"
type: "code"
community: "test_vue_extraction.py"
location: "L614"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/test_vue_extractionpy
---

# _vue_mask_non_script()

## Connections
- [[Blank everything outside ``script`` bodies, keeping ``r````n``. Replaces…]] - `rationale_for` [EXTRACTED]
- [[_parse_js_tree()]] - `calls` [EXTRACTED]
- [[extract.py]] - `imports` [EXTRACTED]
- [[extract_vue()]] - `calls` [EXTRACTED]
- [[resolution.py]] - `contains` [EXTRACTED]
- [[test_generic_component_open_tag_with_angle_brackets()]] - `calls` [INFERRED]
- [[test_mask_preserves_line_numbers_and_blanks_markup()]] - `calls` [INFERRED]

#graphify/code #graphify/EXTRACTED #community/test_vue_extractionpy
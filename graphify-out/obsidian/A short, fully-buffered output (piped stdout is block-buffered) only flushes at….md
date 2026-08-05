---
source_file: "temp-graphify/tests/test_cli_broken_pipe.py"
type: "rationale"
community: "test_cli_broken_pipe.py"
location: "L35"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/test_cli_broken_pipepy
---

# A short, fully-buffered output (piped stdout is block-buffered) only flushes at…

## Connections
- [[test_small_buffered_output_survives_reader_that_reads_nothing()]] - `rationale_for` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/test_cli_broken_pipepy
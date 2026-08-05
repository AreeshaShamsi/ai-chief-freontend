---
type: community
cohesion: 0.33
members: 6
---

# test_cli_broken_pipe.py

**Cohesion:** 0.33 - loosely connected
**Members:** 6 nodes

## Members
- [[A short, fully-buffered output (piped stdout is block-buffered) only flushes at…]] - rationale - temp-graphify/tests/test_cli_broken_pipe.py
- [[CLI must not crash when a downstream reader closes the pipe early (1807).…]] - rationale - temp-graphify/tests/test_cli_broken_pipe.py
- [[`graphify --help  head -n1` must leave graphify exiting 0, not 255.]] - rationale - temp-graphify/tests/test_cli_broken_pipe.py
- [[test_cli_broken_pipe.py]] - code - temp-graphify/tests/test_cli_broken_pipe.py
- [[test_help_survives_reader_closing_pipe_early()]] - code - temp-graphify/tests/test_cli_broken_pipe.py
- [[test_small_buffered_output_survives_reader_that_reads_nothing()]] - code - temp-graphify/tests/test_cli_broken_pipe.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/test_cli_broken_pipepy
SORT file.name ASC
```

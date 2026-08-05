---
type: community
cohesion: 0.67
members: 4
---

# Server

**Cohesion:** 0.67 - moderately connected
**Members:** 4 nodes

## Members
- [[dot-run()]] - code - temp-graphify/tests/fixtures/crate_b/src/lib.rs
- [[dot-start()]] - code - temp-graphify/tests/fixtures/crate_b/src/lib.rs
- [[Server]] - code - temp-graphify/tests/fixtures/crate_b/src/lib.rs
- [[crate_bsrclib.rs]] - code - temp-graphify/tests/fixtures/crate_b/src/lib.rs

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Server
SORT file.name ASC
```

---
type: community
cohesion: 0.67
members: 4
---

# sample.slnx

**Cohesion:** 0.67 - moderately connected
**Members:** 4 nodes

## Members
- [[Domain]] - code - temp-graphify/tests/fixtures/src/Domain/Domain.csproj
- [[Tests]] - code - temp-graphify/tests/fixtures/tests/Tests/Tests.csproj
- [[WebApi]] - code - temp-graphify/tests/fixtures/src/WebApi/WebApi.csproj
- [[sample.slnx]] - code - temp-graphify/tests/fixtures/sample.slnx

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/sampleslnx
SORT file.name ASC
```

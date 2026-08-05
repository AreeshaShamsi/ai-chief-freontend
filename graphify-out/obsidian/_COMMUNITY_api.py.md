---
type: community
cohesion: 0.14
members: 16
---

# api.py

**Cohesion:** 0.14 - loosely connected
**Members:** 16 nodes

## Members
- [[API module - exposes the document pipeline over HTTP. Thin layer over parser,…]] - rationale - temp-graphify/worked/example/raw/api.py
- [[Accept a list of file paths, run the full pipeline on each, and return a…]] - rationale - temp-graphify/worked/example/raw/api.py
- [[Delete a document by ID.]] - rationale - temp-graphify/worked/example/raw/api.py
- [[Fetch a document by ID and return it.]] - rationale - temp-graphify/worked/example/raw/api.py
- [[List all document IDs in storage.]] - rationale - temp-graphify/worked/example/raw/api.py
- [[Parse a list of files and return their record IDs.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Return all record IDs currently in storage.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Simple keyword search over the index. Returns documents whose keyword list…]] - rationale - temp-graphify/worked/example/raw/api.py
- [[api.py]] - code - temp-graphify/worked/example/raw/api.py
- [[batch_parse()]] - code - temp-graphify/worked/example/raw/parser.py
- [[handle_delete()]] - code - temp-graphify/worked/example/raw/api.py
- [[handle_get()]] - code - temp-graphify/worked/example/raw/api.py
- [[handle_list()]] - code - temp-graphify/worked/example/raw/api.py
- [[handle_search()]] - code - temp-graphify/worked/example/raw/api.py
- [[handle_upload()]] - code - temp-graphify/worked/example/raw/api.py
- [[list_records()]] - code - temp-graphify/worked/example/raw/storage.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/apipy
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_storage.py]]
- 4 edges to [[_COMMUNITY_validator.py]]
- 4 edges to [[_COMMUNITY_parser.py]]
- 3 edges to [[_COMMUNITY_processor.py]]
- 1 edge to [[_COMMUNITY__make_id]]

## Top bridge nodes
- [[api.py]] - degree 21, connects to 4 communities
- [[batch_parse()]] - degree 6, connects to 2 communities
- [[list_records()]] - degree 5, connects to 1 community
- [[handle_delete()]] - degree 3, connects to 1 community
- [[handle_get()]] - degree 3, connects to 1 community
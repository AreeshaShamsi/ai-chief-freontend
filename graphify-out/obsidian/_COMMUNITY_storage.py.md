---
type: community
cohesion: 0.25
members: 15
---

# storage.py

**Cohesion:** 0.25 - loosely connected
**Members:** 15 nodes

## Members
- [[Fetch a single document by ID.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Load the full document index from disk.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Persist the index to disk.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Remove a document and its index entry. Returns True if it existed.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Storage module - persists documents to disk and maintains the search index. All…]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Write a parsed document to storage. Returns the assigned record ID.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[Write an enriched document to storage, updating the index with keywords.]] - rationale - temp-graphify/worked/example/raw/storage.py
- [[_ensure_storage()]] - code - temp-graphify/worked/example/raw/storage.py
- [[delete_record()]] - code - temp-graphify/worked/example/raw/storage.py
- [[load_index()]] - code - temp-graphify/worked/example/raw/storage.py
- [[load_record()]] - code - temp-graphify/worked/example/raw/storage.py
- [[save_index()]] - code - temp-graphify/worked/example/raw/storage.py
- [[save_parsed()]] - code - temp-graphify/worked/example/raw/storage.py
- [[save_processed()]] - code - temp-graphify/worked/example/raw/storage.py
- [[storage.py]] - code - temp-graphify/worked/example/raw/storage.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/storagepy
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_api.py]]
- 7 edges to [[_COMMUNITY_processor.py]]
- 3 edges to [[_COMMUNITY_parser.py]]

## Top bridge nodes
- [[storage.py]] - degree 12, connects to 3 communities
- [[load_index()]] - degree 12, connects to 2 communities
- [[load_record()]] - degree 6, connects to 2 communities
- [[delete_record()]] - degree 7, connects to 1 community
- [[save_parsed()]] - degree 7, connects to 1 community
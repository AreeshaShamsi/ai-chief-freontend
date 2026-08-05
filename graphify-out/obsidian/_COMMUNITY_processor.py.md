---
type: community
cohesion: 0.17
members: 16
---

# processor.py

**Cohesion:** 0.17 - loosely connected
**Members:** 16 nodes

## Members
- [[Add keyword index and cross-references to a validated document.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Enrich a validated document and persist it. Returns the record ID.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Look up the index and return IDs of related documents by keyword overlap.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Lowercase, strip extra whitespace, remove control characters.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Processor module - transforms validated documents into enriched records ready…]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Pull non-stopword tokens from text, deduplicated.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[Re-enrich a document to pick up new cross-references.]] - rationale - temp-graphify/worked/example/raw/api.py
- [[Re-enrich all records in the index. Returns count of records updated.]] - rationale - temp-graphify/worked/example/raw/processor.py
- [[enrich_document()]] - code - temp-graphify/worked/example/raw/processor.py
- [[extract_keywords()]] - code - temp-graphify/worked/example/raw/processor.py
- [[find_cross_references()]] - code - temp-graphify/worked/example/raw/processor.py
- [[handle_enrich()]] - code - temp-graphify/worked/example/raw/api.py
- [[normalize_text()]] - code - temp-graphify/worked/example/raw/processor.py
- [[process_and_save()]] - code - temp-graphify/worked/example/raw/processor.py
- [[processor.py]] - code - temp-graphify/worked/example/raw/processor.py
- [[reprocess_all()]] - code - temp-graphify/worked/example/raw/processor.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/processorpy
SORT file.name ASC
```

## Connections to other communities
- 7 edges to [[_COMMUNITY_storage.py]]
- 3 edges to [[_COMMUNITY_api.py]]
- 3 edges to [[_COMMUNITY_validator.py]]
- 1 edge to [[_COMMUNITY__make_id]]

## Top bridge nodes
- [[handle_enrich()]] - degree 6, connects to 4 communities
- [[process_and_save()]] - degree 7, connects to 2 communities
- [[processor.py]] - degree 10, connects to 1 community
- [[enrich_document()]] - degree 6, connects to 1 community
- [[normalize_text()]] - degree 5, connects to 1 community
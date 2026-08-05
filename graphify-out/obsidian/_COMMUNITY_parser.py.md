---
type: community
cohesion: 0.23
members: 12
---

# parser.py

**Cohesion:** 0.23 - loosely connected
**Members:** 12 nodes

## Members
- [[Extract title, sections, and links from markdown.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Full pipeline parse, validate, save. Returns the saved record ID.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Parse a JSON document into a structured dict.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Parser module - reads raw input documents and converts them into a structured…]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Read a file from disk and return a structured document.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[Split plaintext into paragraphs.]] - rationale - temp-graphify/worked/example/raw/parser.py
- [[parse_and_save()]] - code - temp-graphify/worked/example/raw/parser.py
- [[parse_file()]] - code - temp-graphify/worked/example/raw/parser.py
- [[parse_json()]] - code - temp-graphify/worked/example/raw/parser.py
- [[parse_markdown()]] - code - temp-graphify/worked/example/raw/parser.py
- [[parse_plaintext()]] - code - temp-graphify/worked/example/raw/parser.py
- [[parser.py]] - code - temp-graphify/worked/example/raw/parser.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/parserpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_api.py]]
- 3 edges to [[_COMMUNITY_storage.py]]
- 3 edges to [[_COMMUNITY_validator.py]]

## Top bridge nodes
- [[parser.py]] - degree 12, connects to 3 communities
- [[parse_and_save()]] - degree 6, connects to 3 communities
- [[parse_file()]] - degree 7, connects to 1 community
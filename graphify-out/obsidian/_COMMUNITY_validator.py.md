---
type: community
cohesion: 0.19
members: 15
---

# validator.py

**Cohesion:** 0.19 - loosely connected
**Members:** 15 nodes

## Members
- [[Clean up text fields using the processor.]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[Exception]] - code
- [[Processor_1]] - code
- [[Raise if any required field is missing.]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[Raise if the format is not in the allowed list.]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[Run all validation checks on a parsed document. Raises ValidationError on…]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[Validate a list of documents. Returns (valid_docs, errors).]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[ValidationError]] - code - temp-graphify/worked/example/raw/validator.py
- [[Validator module - checks that parsed documents meet schema requirements before…]] - rationale - temp-graphify/worked/example/raw/validator.py
- [[check_format()]] - code - temp-graphify/worked/example/raw/validator.py
- [[check_required_fields()]] - code - temp-graphify/worked/example/raw/validator.py
- [[normalize_fields()]] - code - temp-graphify/worked/example/raw/validator.py
- [[validate_batch()]] - code - temp-graphify/worked/example/raw/validator.py
- [[validate_document()]] - code - temp-graphify/worked/example/raw/validator.py
- [[validator.py]] - code - temp-graphify/worked/example/raw/validator.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/validatorpy
SORT file.name ASC
```

## Connections to other communities
- 4 edges to [[_COMMUNITY_api.py]]
- 3 edges to [[_COMMUNITY_processor.py]]
- 3 edges to [[_COMMUNITY_parser.py]]
- 1 edge to [[_COMMUNITY__make_id]]

## Top bridge nodes
- [[validator.py]] - degree 11, connects to 3 communities
- [[validate_document()]] - degree 10, connects to 3 communities
- [[ValidationError]] - degree 5, connects to 1 community
- [[normalize_fields()]] - degree 4, connects to 1 community
- [[validate_batch()]] - degree 4, connects to 1 community
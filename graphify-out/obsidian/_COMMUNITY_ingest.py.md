---
type: community
cohesion: 0.16
members: 23
---

# ingest.py

**Cohesion:** 0.16 - loosely connected
**Members:** 23 nodes

## Members
- [[Classify the URL for targeted extraction.]] - rationale - temp-graphify/graphify/ingest.py
- [[Convert HTML to clean markdown. Uses markdownify if available, else basic strip.]] - rationale - temp-graphify/graphify/ingest.py
- [[Download a binary file (PDF, image) directly.]] - rationale - temp-graphify/graphify/ingest.py
- [[Escape a string for embedding in a YAML double-quoted scalar. Handles every…]] - rationale - temp-graphify/graphify/ingest.py
- [[Fetch url and return decoded text (UTF-8, replacing bad bytes). Wraps…]] - rationale - temp-graphify/graphify/security.py
- [[Fetch a URL and save it into target_dir as a graphify-ready file. Returns the…]] - rationale - temp-graphify/graphify/ingest.py
- [[Fetch a generic webpage and convert to markdown.]] - rationale - temp-graphify/graphify/ingest.py
- [[Fetch a tweet URL. Returns (content, filename).]] - rationale - temp-graphify/graphify/ingest.py
- [[Fetch arXiv abstract page.]] - rationale - temp-graphify/graphify/ingest.py
- [[Path_41]] - code
- [[Turn a URL into a safe filename.]] - rationale - temp-graphify/graphify/ingest.py
- [[_detect_url_type()]] - code - temp-graphify/graphify/ingest.py
- [[_download_binary()]] - code - temp-graphify/graphify/ingest.py
- [[_fetch_arxiv()]] - code - temp-graphify/graphify/ingest.py
- [[_fetch_html()]] - code - temp-graphify/graphify/ingest.py
- [[_fetch_tweet()]] - code - temp-graphify/graphify/ingest.py
- [[_fetch_webpage()]] - code - temp-graphify/graphify/ingest.py
- [[_html_to_markdown()]] - code - temp-graphify/graphify/ingest.py
- [[_safe_filename()]] - code - temp-graphify/graphify/ingest.py
- [[_yaml_str()_1]] - code - temp-graphify/graphify/ingest.py
- [[ingest()]] - code - temp-graphify/graphify/ingest.py
- [[ingest.py]] - code - temp-graphify/graphify/ingest.py
- [[safe_fetch_text()]] - code - temp-graphify/graphify/security.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/ingestpy
SORT file.name ASC
```

## Connections to other communities
- 5 edges to [[_COMMUNITY_safe_fetch]]
- 4 edges to [[_COMMUNITY_save_query_result]]
- 4 edges to [[_COMMUNITY_security.py]]
- 2 edges to [[_COMMUNITY_test_transcribe.py]]
- 1 edge to [[_COMMUNITY_cli.py]]
- 1 edge to [[_COMMUNITY_dispatch_command]]
- 1 edge to [[_COMMUNITY_reflect.py]]
- 1 edge to [[_COMMUNITY_test_reflect.py]]
- 1 edge to [[_COMMUNITY_test_security.py]]

## Top bridge nodes
- [[ingest.py]] - degree 19, connects to 6 communities
- [[ingest()]] - degree 12, connects to 4 communities
- [[safe_fetch_text()]] - degree 9, connects to 3 communities
- [[_download_binary()]] - degree 6, connects to 1 community
- [[_yaml_str()_1]] - degree 6, connects to 1 community
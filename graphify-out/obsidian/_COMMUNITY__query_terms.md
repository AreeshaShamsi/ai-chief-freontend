---
type: community
cohesion: 0.12
members: 17
---

# _query_terms

**Cohesion:** 0.12 - loosely connected
**Members:** 17 nodes

## Members
- [[Chinese text should use the cached jieba module and keep the original term.]] - rationale - temp-graphify/tests/test_serve.py
- [[Mixed Chinese and English text should be handled correctly.]] - rationale - temp-graphify/tests/test_serve.py
- [[Segment Chinese text and keep the original term for exact matching.]] - rationale - temp-graphify/graphify/serve.py
- [[Split a query into searchable terms, segmenting Chinese text, then drop…]] - rationale - temp-graphify/graphify/serve.py
- [[True if term is Chinese, non-English, or an English word longer than 2 chars.]] - rationale - temp-graphify/graphify/serve.py
- [[_has_chinese()]] - code - temp-graphify/graphify/serve.py
- [[_is_searchable()]] - code - temp-graphify/graphify/serve.py
- [[_query_terms()]] - code - temp-graphify/graphify/serve.py
- [[_segment_chinese()]] - code - temp-graphify/graphify/serve.py
- [[test_query_terms_all_german_stopwords_falls_back_to_unfiltered()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_all_stopwords_falls_back_to_unfiltered()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_chinese_mixed()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_chinese_segments_with_cached_jieba()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_drops_german_question_stopwords()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_drops_question_stopwords()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_filters_only_short_english_terms()]] - code - temp-graphify/tests/test_serve.py
- [[test_query_terms_strips_search_punctuation()]] - code - temp-graphify/tests/test_serve.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/_query_terms
SORT file.name ASC
```

## Connections to other communities
- 9 edges to [[_COMMUNITY_test_serve.py]]
- 4 edges to [[_COMMUNITY_serve.py]]
- 3 edges to [[_COMMUNITY__score_nodes]]
- 2 edges to [[_COMMUNITY_test_benchmark.py]]
- 1 edge to [[_COMMUNITY_Graph]]
- 1 edge to [[_COMMUNITY__find_node]]

## Top bridge nodes
- [[_query_terms()]] - degree 21, connects to 6 communities
- [[_is_searchable()]] - degree 3, connects to 1 community
- [[_segment_chinese()]] - degree 3, connects to 1 community
- [[test_query_terms_chinese_mixed()]] - degree 3, connects to 1 community
- [[test_query_terms_chinese_segments_with_cached_jieba()]] - degree 3, connects to 1 community
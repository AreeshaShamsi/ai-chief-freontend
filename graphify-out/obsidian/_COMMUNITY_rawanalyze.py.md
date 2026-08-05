---
type: community
cohesion: 0.09
members: 36
---

# raw/analyze.py

**Cohesion:** 0.09 - loosely connected
**Members:** 36 nodes

## Members
- [[Build a NetworkX graph from graphify nodeedge dicts. Preserves original edge…]] - rationale - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[Compare two graph snapshots and return what changed. Returns { new_nodes…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Cross-file edges between real codedoc entities, ranked by a composite surprise…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Find connections that are genuinely surprising - not obvious from file…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[For single-source corpora find edges that bridge different communities. These…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Generate questions the graph is uniquely positioned to answer. Based on…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Graph analysis god nodes (most connected), surprising connections (cross-…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Invert communities dict node_id - community_id._1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Leiden community detection on NetworkX graphs. Splits oversized communities.…]] - rationale - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[Ratio of actual intra-community edges to maximum possible._1]] - rationale - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[Return True if this node is a file-level hub node (e.g. 'client', 'models') or…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Return True if this node is a manually-injected semantic concept node rather…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Return the first path component - used to detect cross-repo edges._1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Return the top_n most-connected real entities - the core abstractions. File-…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[Run Leiden community detection. Returns {community_id node_ids}. Community…_1]] - rationale - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[Run a second Leiden pass on a community subgraph to split it further._1]] - rationale - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[Score how surprising a cross-file edge is. Returns (score, reasons)._1]] - rationale - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_cross_community_surprises()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_cross_file_surprises()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_file_category()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_is_concept_node()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_is_file_node()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_node_community_map()_2]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_split_community()_1]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[_surprise_score()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[_top_level_dir()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[build_graph()_1]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[cluster()_1]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[cohesion_score()_1]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[god_nodes()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[graph_diff()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[rawanalyze.py]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[rawcluster.py]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[score_all()_1]] - code - temp-graphify/worked/mixed-corpus/raw/cluster.py
- [[suggest_questions()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py
- [[surprising_connections()_1]] - code - temp-graphify/worked/mixed-corpus/raw/analyze.py

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/raw/analyzepy
SORT file.name ASC
```

## Connections to other communities
- 1 edge to [[_COMMUNITY_Graph]]

## Top bridge nodes
- [[build_graph()_1]] - degree 3, connects to 1 community
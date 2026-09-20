# Sources of truth and freshness

Use primary documentation to establish platform behavior. Use independent analysis for experiments, context, and hypotheses. Record the URL, publication or update date, access date, and whether a statement is a fact, observation, inference, or recommendation.

Last reviewed: 2026-09-20.

## Official search and web sources

| Area | Primary source | Use it for |
| --- | --- | --- |
| Google Search documentation | https://developers.google.com/search/docs | Crawl, indexing, structured data, ranking systems, and documentation requirements |
| Google Search Central blog | https://developers.google.com/search/blog | Announcements and guidance from the Google Search team |
| Google Search status | https://status.search.google.com/ | Confirmed Search incidents and service status |
| Bing Webmaster blog | https://blogs.bing.com/webmaster | Bing crawling, indexing, and webmaster announcements |
| Core Web Vitals | https://web.dev/explore/learn-core-web-vitals | Metric definitions and web performance guidance |
| Schema.org | https://schema.org/docs.html | Vocabulary definitions and structured-data semantics |
| Google Analytics | https://developers.google.com/analytics | GA4 measurement and reporting documentation |
| Search Console API | https://developers.google.com/webmaster-tools | Search Console data and API contracts |

## AI-search and retrieval sources

Use platform documentation and product announcements when available. Treat third-party observations as time-stamped evidence, not a universal ranking rule. When a platform does not document a behavior, label it as observed, hypothesized, or unknown.

## Emerging conventions

`llms.txt` is an emerging convention described by [llmstxt.org](https://llmstxt.org/). It is not a Google Search requirement, and its presence does not guarantee indexing, ranking, retrieval, or AI citation. Recommend it only when it improves machine-readable navigation for the site's audience and can be maintained accurately.

## Claim labels

- **Documented fact**: directly stated in an authoritative source with a date or current documentation context.
- **Observed behavior**: reproduced or measured in a defined test, crawl, or query corpus.
- **Inference**: a reasoned interpretation that may change as evidence changes.
- **Recommendation**: an action proposed for the specific site or startup, with owner and validation signal.
- **Rumor or opinion**: not sufficient on its own for a technical or roadmap decision.

Before a recurring report, re-check time-sensitive sources and update the access date. Do not copy a previous recommendation without fresh evidence.

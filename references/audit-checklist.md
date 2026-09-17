# SEO audit checklist

Use only sections relevant to the requested scope. Record URL, evidence, impact, confidence, recommendation, owner, and validation for each issue.

## Crawl and index

- Important URLs return the expected 200/3xx/4xx status.
- `robots.txt`, meta robots, and `X-Robots-Tag` do not block valuable pages.
- XML sitemaps contain canonical, indexable, 200-status URLs and accurate `lastmod` values.
- Canonicals, redirects, pagination, faceted URLs, and internal links agree.
- Important pages are discoverable through useful internal paths.

## Rendering and performance

- Important content, links, metadata, and structured data are present in rendered HTML.
- HTTPS, mobile layout, JavaScript errors, and hydration failures are checked.
- Review LCP, INP, and CLS; connect performance findings to real templates and business pages.

## On-page and content

- Title, description, H1, headings, image text, and internal links match the page intent.
- Page type matches the SERP and the user's decision stage.
- Content demonstrates originality, expertise, evidence, freshness, and clear ownership.
- Thin, duplicated, stale, cannibalizing, or orphaned pages have an explicit action.

## Prioritization

- Critical: blocks crawl, render, indexation, or canonical discovery.
- High: material ranking, traffic, conversion, or template risk.
- Medium: meaningful relevance, snippet, UX, or crawl-efficiency improvement.
- Low: cleanup or documentation with limited near-term impact.

Do not claim that schema is absent from a markdown or raw-fetch response when it may be injected client-side. Verify rendered HTML or a structured-data tool first.

# Evidence, measurement, and reporting

## Source contracts

- GSC/Search Console: use the exact property; treat date, page, query, country, and page-query dimensions as separate views. Use date totals for site totals and label dimension-specific aggregates.
- GA4: state the property, date range, attribution/context, and export fields. Do not present a sample of rows as a site total.
- Crawlers and Firecrawl: preserve crawl date, scope, status, rendering mode, and exclusions. Do not treat a partial crawl as a complete site audit.
- PageSpeed/CrUX: record URL/template, device, field vs lab source, date, and metric definitions.
- Backlinks/DataForSEO/other APIs: record provider, query parameters, country/language, date, and limits.

## AI citation benchmark

Use a stable query corpus. For every run, retain query ID and exact wording, platform/model or entry point, locale, timestamp, isolation mode, complete answer, every visible source, expected URL, classification, and errors or rate limits. Never overwrite dated evidence. A benchmark measures observed retrieval behavior; it is not a ranking guarantee.

## Crawler telemetry

Classify bots by purpose (search/retrieval, training, user fetch, or unknown), path, status, response size, cache/render behavior, and owned-content coverage. Compare equivalent time windows and separate bot request volume from useful page retrieval. Do not recommend blocking or rate limiting from a small sample without material, sustained evidence.

## Recurring reports

- Compare the current complete period with the correct prior period; keep a stable baseline when rerunning within the same period.
- Rebuild action items from current evidence. A repeated action needs fresh evidence.
- Keep raw totals, comparable cohorts, and membership changes separate. Do not call sitemap expansion or sample composition changes deindexing.
- A useful report has a judgment-led summary, evidence tables/charts, prioritized actions, owners, and validation dates. Avoid unsupported certainty.

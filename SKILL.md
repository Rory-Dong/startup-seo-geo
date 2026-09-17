---
name: seo-geo-suite
description: Audit, plan, implement, and measure traditional SEO and AI-search visibility (GEO) across websites and content. Use for SEO audits, technical SEO, schema/sitemaps/hreflang, content authority, programmatic/local/ecommerce SEO, GSC and crawl evidence, AI citations, crawler access, llms.txt, competitive visibility, and SEO/GEO reporting.
metadata:
  version: "1.0.0"
  consolidates:
    - seo-audit-suite
    - ai-search-geo
    - geo-technical-reporting
    - seo-content-authority
    - seo-technical-assets
    - seo-intelligence-tooling
    - local-commerce-seo
    - programmatic-seo
    - competitor-intelligence
---

# SEO + GEO Suite

Use this skill as the routing layer for organic search and AI-search visibility work. Treat traditional SEO and GEO as related but distinct: search rankings, crawlability, and indexation remain foundations, while GEO adds citability, entity clarity, authority, platform presence, and AI crawler access.

## Choose the smallest useful mode

| Request | Mode | Read when needed |
|---|---|---|
| Full site, page, ranking drop, indexing, Core Web Vitals, SEO roadmap | Traditional SEO audit | `references/audit-checklist.md` |
| AI Overviews, ChatGPT, Perplexity, citations, recommendations, AI visibility | Content GEO | `references/citability-checklist.md` |
| robots.txt, AI bots, llms.txt, server rendering, entity/schema readiness | Technical GEO | `references/llms-template.md` |
| JSON-LD, schema, sitemap, hreflang, canonicals, image/social metadata | Technical SEO assets | `references/schema-patterns.md` |
| E-E-A-T, SERP intent, topic clusters, content brief, internal links | Content authority | `references/content-and-programmatic.md` |
| Data-driven pages, templates, URL systems, indexation at scale | Programmatic SEO | `references/content-and-programmatic.md` |
| GBP, maps, local citations, reviews, product/category/shopping pages | Local or ecommerce SEO | `references/local-and-commerce.md` |
| GSC, GA4, PageSpeed, CrUX, DataForSEO, Firecrawl, backlinks, drift | SEO intelligence | `references/evidence-and-reporting.md` |
| Competitor profiles, alternatives, comparison pages, battlecards | Competitive SEO/GEO | `references/local-and-commerce.md` |
| Query corpus testing, citation benchmark, crawler telemetry, weekly report | Measurement/reporting | `references/evidence-and-reporting.md` |

Combine modes only when the request needs them. For example, a GEO audit may use Traditional SEO audit + Content GEO + Technical GEO; a schema task should not trigger a full site audit unless requested.

## Operating workflow

1. Establish scope: domain or repository, page set, business model, target audience, locations, target queries, platforms, date range, and desired deliverable.
2. Inspect the available evidence before making claims. Prefer rendered HTML for client-side metadata and schema; use GSC/GA4/crawl exports or approved connectors when available; label assumptions and missing data.
3. Separate observations from recommendations. Every important finding should include evidence, impact, confidence, priority, owner, and a validation method.
4. Prioritize by business impact and implementation leverage. Use Critical for crawl/index/render blockers, High for material ranking or visibility risk, Medium for meaningful optimization, and Low for cleanup.
5. Produce the requested artifact: diagnosis, implementation patch, content brief, technical markup, report, roadmap, or monitoring plan. Do not invent metrics, citations, crawl results, platform behavior, or successful implementation.
6. End with validation: what to re-fetch, test, compare, or monitor, and when a change should be rechecked.

## Traditional SEO guardrails

- Check status codes, robots.txt, XML sitemaps, canonicals, noindex, redirects, rendering, internal links, metadata, headings, mobile UX, and Core Web Vitals where relevant. Use INP rather than the deprecated FID metric.
- Match page type to search intent and SERP expectations. Evaluate content quality, originality, freshness, first-hand evidence, authorship, and internal linking rather than keyword density alone.
- Include only canonical, indexable, 200-status URLs in sitemaps. Keep hreflang alternates reciprocal, self-referencing, canonical, and valid for the locale.
- Mark up only truthful, visible page content. Distinguish structured-data machine understanding from eligibility for a rich result. Do not promise FAQ or deprecated HowTo rich results.
- For programmatic SEO, require unique value, freshness, quality gates, crawl paths, and an explicit index/noindex decision before scaling page creation.

## GEO guardrails

Evaluate five dimensions: citability, entity clarity, authority, third-party/platform presence, and technical access. For content, lead with direct answers, use question-led headings, keep answer blocks self-contained, add dated sources and attribution, and use comparison tables where they improve extraction.

For technical GEO, distinguish search/citation access from model-training access. Inspect `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Googlebot`, `Google-Extended`, `Bingbot`, `CCBot`, and other relevant tokens without assuming that every bot has the same purpose. Blocking a training crawler is a policy decision; blocking retrieval/search crawlers can reduce AI answer visibility.

For AI visibility measurement, preserve the exact query corpus, run isolated tests when platform behavior is being compared, record complete answers and visible sources, timestamp each run, and retain historical evidence. Never infer visibility from a single anecdotal answer.

## Deliverable defaults

For an audit, use an executive summary followed by an evidence table and a Now/Next/Later roadmap. For an implementation request, show the smallest accurate patch plus validation steps. For a content request, provide intent, audience, outline or rewrite direction, evidence requirements, internal-link targets, and citability checks. For a recurring report, compare the current period with the correct prior period and rebuild actions from fresh evidence instead of copying prior recommendations.

## Supporting references

- Read [references/audit-checklist.md](references/audit-checklist.md) for a compact site/page audit checklist.
- Read [references/citability-checklist.md](references/citability-checklist.md) for page-level GEO scoring and rewrite checks.
- Read [references/llms-template.md](references/llms-template.md) when drafting or reviewing `llms.txt`.
- Read [references/schema-patterns.md](references/schema-patterns.md) when generating JSON-LD.
- Read [references/content-and-programmatic.md](references/content-and-programmatic.md) for content authority, programmatic, and competitive page work.
- Read [references/local-and-commerce.md](references/local-and-commerce.md) for local, maps, ecommerce, and product visibility work.
- Read [references/evidence-and-reporting.md](references/evidence-and-reporting.md) for data-source contracts, citation benchmarks, crawler telemetry, and recurring reports.

# Startup SEO Starter for Codex

A Codex skill maintained by [Pingplus](https://pingplus.ai) for early-stage companies and small teams building an SEO-ready website, AI-search visibility, an early organic-growth foundation, and a sustainable SEO/GEO monitoring workflow.

It connects product positioning, website information architecture, landing pages, technical SEO, initial content, GEO, and early measurement in one workflow. It does not turn mature enterprise SEO operations, paid acquisition, or general product dashboard design into part of the skill.

## Who It Is For

- Newly launched SaaS, AI products, and developer tools
- Independent developers and small startup teams
- B2B companies building their first marketing website
- New brands validating organic-growth opportunities
- Teams that want to improve conversion, Google Search visibility, and AI-search understanding together

## Capabilities

- Map product positioning to website pages
- Discover ICP language, customer vocabulary, initial keywords, and page opportunities
- Structure homepages and landing pages
- Plan website information architecture, URLs, and internal links
- Establish technical SEO fundamentals: indexing, Schema, sitemaps, canonicals, and hreflang
- Run pre-launch and post-launch SEO checks and create 30/60/90-day launch plans
- Build an initial keyword, search-intent, topic-cluster, and content roadmap
- Establish GEO foundations: citability, entity clarity, authority, and `llms.txt`
- Connect GSC/GA4 measurement to CTA, signup, demo, activation, and revenue events
- Build early authority through founder distribution, customer proof, directories, partnerships, and reviews
- Support optional local SEO and ecommerce tracks
- Create early baselines from GSC, analytics, performance, and crawler data
- Use an optional GSC/GA4 MCP connector that produces normalized JSON data
- Follow Google MCP installation, OAuth, GA4 property, and CSV/JSON fallback guidance
- Run optional weekly SEO/GEO reporting and iteration cadences
- Monitor SEO/GEO changes with source tiers, incremental deduplication, date verification, impact assessment, and action summaries

## Recurring Reporting and Monitoring

Generic weekly reporting guidance is available in `references/weekly-reporting.md`. It helps Codex produce a weekly SEO/GEO operating report without including any company-specific product names, internal data sources, fixed storage locations, or project-specific scripts.

The monitoring method is documented in `references/seo-geo-monitoring.md`. It supports two-day, weekly, or on-demand SEO/GEO change digests that distinguish official facts, industry analysis, and startup-specific recommendations. Scheduling, history, external access, and notifications remain the responsibility of a local automation, CI job, or other scheduler.

## Scope Exclusions

- Company- or product-specific internal rules
- Fixed BigQuery tables, API keys, or cloud-storage configuration
- A team-specific reporting template
- Guarantees of rankings, indexing, AI citations, or conversions
- A default dependency on external APIs; data connectors are optional adapters

## Usage

Copy this directory into your Codex skills directory or invoke it explicitly with `$startup-seo-starter`.

Example requests:

```text
Use $startup-seo-starter to plan the first SEO-ready website for this startup.
Use $startup-seo-starter to audit this homepage for positioning, conversion, SEO, and AI-search readiness.
Use $startup-seo-starter to create a 90-day organic-growth plan with a weekly measurement cadence.
Use $startup-seo-starter to review configured SEO/GEO sources since the last run and produce a two-day change digest.
```

## Status

This is the `1.1.0` release. It provides startup-focused workflows, decision criteria, reusable intake and output templates, and reference documentation, plus an optional GSC/GA4 MCP CLI wrapper. Other crawling, AI citation benchmarking, dynamic monitoring, and report execution capabilities should be connected through the tools available in each team's environment.

Google MCP installation and authorization guidance is available in `references/mcp-setup.md`. The skill does not silently download MCP software, modify client configuration, or handle Google credentials without user approval.

## License

MIT License. See [LICENSE](LICENSE).

## Installation and Validation

The repository is named `startup-seo-geo` for GitHub discovery. The installed Codex skill and invocation name remain `$startup-seo-starter` because the workflow is specifically focused on startup SEO foundations.

Copy or clone this repository into your Codex skills directory, then validate the public skill:

```bash
git clone https://github.com/Rory-Dong/startup-seo-geo.git ~/.codex/skills/startup-seo-starter
cd ~/.codex/skills/startup-seo-starter
node scripts/validate-skill.mjs
node scripts/google-mcp-connector.mjs --source gsc --action sites --dry-run
node scripts/google-mcp-connector.mjs --source ga4 --action properties --dry-run
```

The skill uses `SKILL.md` and `agents/openai.yaml` and is intended for Codex clients that support local skill directories. The optional connector requires Node.js 20 or later and an installed `search-console-mcp` runtime; see `references/google-connectors.md` for compatibility notes. No Google authorization is needed for the dry-run checks.

If Google access is unavailable, provide a GSC CSV/JSON export or a GA4 CSV/JSON export with the property, date range, dimensions, metrics, and data cutoff. The resulting report must label the export source and limitations rather than present it as live data.

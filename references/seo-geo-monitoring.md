# SEO/GEO change monitoring

Use this reference when the team wants to keep up with meaningful changes in search, AI search, technical SEO, content discovery, or citation behavior. It defines a monitoring method and digest contract; it does not itself create a schedule, send notifications, or guarantee access to external sources.

## Monitoring goal

Track changes that can alter what an early-stage company should do with its website, content, technical setup, measurement, or distribution. Prefer a small, reliable signal set over a large news feed.

The default audience is a startup team with limited time. A useful item should answer at least one of these questions:

- Did a search or AI-search platform change a documented feature, control, crawler, eligibility rule, or reporting behavior?
- Is there credible evidence of a material change in retrieval, citations, indexing, or user journeys?
- What can this team change or verify within the next 30 days?

Do not treat every ranking rumor, product announcement, research prototype, or opinion post as an operational change.

## Source mix

Start with sources in three tiers and customize them to the company's market and language:

| Tier | Use for | Typical examples |
| --- | --- | --- |
| Official | Confirmed platform behavior, documentation, incidents, and product changes | Google Search Central, Google Search Status Dashboard, Bing Webmaster Blog, web.dev, Schema.org, Google AI Blog, OpenAI News or documentation, Perplexity announcements |
| Independent analysis | Context, experiments, case studies, and interpretation | Search Engine Land, Search Engine Roundtable, Search Engine Journal, Marie Haynes, Glenn Gabe, Aleyda Solis, Ahrefs, Semrush, SISTRIX |
| Specialist or market-specific | Technical detail and first-hand observations | Relevant crawler/performance specialists, industry publications, customer or partner channels, and sources in the target market |

Use official sources to establish what changed. Use independent sources to discover implications and competing interpretations. Use specialist sources only when they add evidence or market context. If sources disagree, show the disagreement and do not collapse it into a false certainty.

## Incremental run procedure

For each run:

1. Define the timezone, current run time, and window since the last successful run. If there is no reliable prior run, use a short initial window and say so.
2. Check the selected source set using the available browser, RSS/Atom feed, connector, or other approved access method. Do not claim a source was checked when it was inaccessible, blocked, undated, or only partially observed.
3. Keep only items with a clearly verifiable publication or update date inside the window. For status dashboards or documentation, record the page's last-updated time or the incident timestamp when available.
4. Deduplicate by canonical URL first, then by normalized title and date. Do not report an item again merely because it remains prominent on a homepage.
5. Classify each candidate as official announcement, incident/status, documentation change, independent analysis, experiment, research, or opinion.
6. Filter for direct startup impact: website structure, crawl/index behavior, content production, product pages, structured data, AI retrieval/citation, brand/entity signals, performance, analytics, or conversion.
7. Rank the survivors by evidence strength, startup relevance, and actionability. A small number of high-signal items is better than a full feed.

When access is incomplete, preserve the source's state rather than filling the gap with search snippets or assumptions. The valid states are:

- `checked with a material update`
- `checked with no material update`
- `inaccessible or not verifiable: [specific reason]`

## Digest contract

For a two-day, weekly, or other recurring digest, use this structure unless the user requests another format:

### 1. Period judgment

Give 2–4 sentences covering the most important verified change, who is affected, and the first action to consider. If there is no sufficiently verified update, say so plainly.

### 2. Source coverage

Include every configured source in a table with its state and either the material finding or the concrete access/verification reason. This prevents a partial run from looking like a complete review.

### 3. Material updates

Usually include 0–6 items, ordered by impact. For every item provide:

- title, source, publication/update date, and canonical original link;
- topic: SEO, technical SEO, content, Google Search, AI search, GEO, performance, or entity/brand;
- source facts: what the source directly says or measures;
- author or researcher interpretation, clearly labeled;
- why it matters to an early-stage company;
- one to three specific actions or verification steps.

Separate source facts, author viewpoints, and the skill's recommendations. Do not use a secondary summary as the original link when the primary source is available.

### 4. Action queue

Limit the action queue to five items. Each row should include priority, exact action, affected page/team, expected effect, owner if known, and a validation date or success signal. An item without evidence should be labeled as a hypothesis or omitted.

## Evidence and safety rules

- A platform announcement is not automatically a ranking change. Distinguish documented behavior, observed correlation, experiment, prediction, and rumor.
- A research paper, prototype, patent, or employee comment should not be described as a live production ranking system without confirming evidence.
- Do not infer an indexing problem from a reporting delay, sampling change, sitemap expansion, or a small crawler sample.
- Keep the exact article URL, date, access status, and run window so later digests can avoid repetition.
- When a source is blocked, rate-limited, missing a date, or only visible through a partial preview, report that limitation explicitly.
- Do not invent article details, dates, quotes, traffic effects, citations, or recommendations to reach a target item count.
- Keep “what happened” separate from “what this startup should do.” A recommendation may be reasonable even when it is not directly proven by the news item, but it must be labeled as a recommendation.

## Scheduling and local automation

The skill supplies the monitoring method and output contract. A local scheduler, Codex automation, CI job, or human cadence supplies the recurring execution, source access, history, and notification.

For a two-day cadence, the external automation should retain at least:

- the last successful run and its timezone;
- the prior date window;
- reported canonical URLs and normalized titles;
- source-level access states and failure reasons;
- the final digest or a link to it.

An automation prompt can invoke this skill with a request such as: “Review the configured SEO/GEO sources since the last successful run and produce an incremental digest using `references/seo-geo-monitoring.md`.” It should not silently download software, alter credentials, or change browser/client configuration. Ask for those actions separately when needed.

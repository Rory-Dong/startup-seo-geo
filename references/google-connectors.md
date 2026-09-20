# GSC and GA4 connector

The public skill includes an optional CLI wrapper at `scripts/google-mcp-connector.mjs`. It reuses the installed `search-console-mcp` runtime when that MCP package is available. The skill does not include credentials, account files, property IDs, or any product-specific configuration.

## Setup

Set the environment variable to the local package directory, or pass `--runtime`:

```bash
export SEARCH_CONSOLE_MCP_RUNTIME="/path/to/search-console-mcp"
```

The directory must contain the runtime's `dist/` folder. Authentication remains owned by the MCP runtime. Use its normal account setup or service-account configuration; never commit tokens, private keys, or account files to this repository.

## GSC operations

```bash
node scripts/google-mcp-connector.mjs --source gsc --action sites

node scripts/google-mcp-connector.mjs \
  --source gsc \
  --action query \
  --site sc-domain:example.com \
  --start-date 2026-09-01 \
  --end-date 2026-09-07 \
  --dimensions date \
  --output ./data/gsc-date.json

node scripts/google-mcp-connector.mjs \
  --source gsc \
  --action query \
  --site sc-domain:example.com \
  --dimensions query \
  --limit 100

node scripts/google-mcp-connector.mjs \
  --source gsc \
  --action sitemaps \
  --site sc-domain:example.com
```

Supported GSC actions are `sites`, `query`, `sitemaps`, and `inspect`. Use the exact registered property string. For a domain property, use `sc-domain:example.com`; do not substitute a URL-prefix property merely because its hostname matches.

GSC query defaults are the most recent 28 days ending three days before today, with `dataState=all`. For repeatable reports, always pass explicit dates and dimensions.

## GA4 operations

```bash
node scripts/google-mcp-connector.mjs --source ga4 --action properties

node scripts/google-mcp-connector.mjs \
  --source ga4 \
  --action query \
  --property-id 123456789 \
  --start-date 2026-09-01 \
  --end-date 2026-09-07 \
  --dimensions landingPagePlusQueryString \
  --metrics sessions,engagementRate,conversions

node scripts/google-mcp-connector.mjs \
  --source ga4 \
  --action organic-landing-pages \
  --property-id 123456789 \
  --start-date 2026-09-01 \
  --end-date 2026-09-07

node scripts/google-mcp-connector.mjs \
  --source ga4 \
  --action conversion-funnel \
  --property-id 123456789 \
  --start-date 2026-09-01 \
  --end-date 2026-09-07 \
  --event-name signup_complete
```

Supported GA4 actions are `properties`, `query`, `organic-landing-pages`, `page-performance`, `traffic-sources`, `realtime`, and `conversion-funnel`. GA4 query results are normalized into rows while retaining dimension and metric headers.

## Data contract

Every response has:

- `schemaVersion`: normalized output contract;
- `source`: `gsc` or `ga4`;
- `action`: operation performed;
- `fetchedAt`: retrieval timestamp;
- `request`: property, date, dimensions, metrics, and filters;
- `data`: returned rows or operation-specific data.

Keep GSC Search Analytics totals separate from GA4 behavior and conversion totals. The connector retrieves evidence; the skill still needs to label coverage, attribution limits, missing events, and confidence when producing a report.

# Google MCP setup

Use this reference when live GSC or GA4 data is requested but the local `search-console-mcp` runtime is not available or has no authorized property.

## Project

The connector is designed to work with the open-source [search-console-mcp](https://github.com/saurabhsharma2u/search-console-mcp), which provides Google Search Console, GA4, Bing, URL Inspection, sitemap, and PageSpeed tools.

The public skill does not silently install the MCP server or modify a user's MCP configuration. Installation, OAuth, service-account setup, and client configuration require the user's explicit approval.

## Recommended installation

The project documents the current installation flow. The usual setup is:

```bash
npx search-console-mcp setup
```

Then add the MCP server to the client's MCP configuration using the project's documented command form:

```json
{
  "mcpServers": {
    "search-console": {
      "command": "npx",
      "args": ["search-console-mcp"]
    }
  }
}
```

Restart the client after changing its MCP configuration. Client configuration locations differ; do not assume a single path for Codex, Claude Desktop, Cursor, or other clients.

## Google Search Console authorization

For local interactive use, use the MCP setup wizard and OAuth flow:

```bash
npx search-console-mcp setup
```

Use the exact registered Search Console property when querying data. Domain properties look like `sc-domain:example.com`; URL-prefix properties include the full URL and trailing slash where registered.

For server or CI automation, the project also documents service-account setup:

1. Create a Google service account.
2. Grant that service-account email access to the Search Console property.
3. Set `GOOGLE_APPLICATION_CREDENTIALS` to the local JSON key path.
4. Keep the key outside the repository and never print it in reports or logs.

## Google Analytics 4 authorization

GA4 requires a GA4-enabled account and property access. Follow the MCP project's GA4 setup flow:

```bash
npx search-console-mcp setup --engine=ga4
```

If the property list is empty, verify that the authorized Google account or service account has access in **GA4 Admin → Property Access Management**, then rerun setup. Record the numeric GA4 property ID outside the public repository.

## Connect the startup SEO wrapper

Once the MCP runtime is installed, point the wrapper at its package directory:

```bash
export SEARCH_CONSOLE_MCP_RUNTIME="/path/to/search-console-mcp"
node scripts/google-mcp-connector.mjs --source gsc --action sites
node scripts/google-mcp-connector.mjs --source ga4 --action properties
```

If the runtime is already available through the active Codex MCP configuration, prefer direct MCP tool calls. Use the wrapper when a repeatable JSON export is needed for analysis or a weekly report.

## Fallbacks

When installation, authorization, or network access is unavailable:

- accept GSC CSV/JSON exports;
- accept GA4 CSV/JSON exports or a documented report export;
- clearly label the data cutoff, property, dimensions, and missing fields;
- never fabricate live metrics or claim that a connector succeeded.

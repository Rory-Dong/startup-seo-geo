#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const HELP = `
Google Search Console + GA4 connector for startup-seo-starter

Runtime:
  SEARCH_CONSOLE_MCP_RUNTIME=/path/to/search-console-mcp

GSC:
  node scripts/google-mcp-connector.mjs --source gsc --action sites
  node scripts/google-mcp-connector.mjs --source gsc --action query --site sc-domain:example.com --start-date 2026-09-01 --end-date 2026-09-07 --dimensions date --output gsc.json
  node scripts/google-mcp-connector.mjs --source gsc --action sitemaps --site sc-domain:example.com
  node scripts/google-mcp-connector.mjs --source gsc --action inspect --site sc-domain:example.com --urls 'https://example.com/,https://example.com/pricing'

GA4:
  node scripts/google-mcp-connector.mjs --source ga4 --action properties
  node scripts/google-mcp-connector.mjs --source ga4 --action query --property-id 123456789 --start-date 2026-09-01 --end-date 2026-09-07 --dimensions landingPagePlusQueryString --metrics sessions,engagementRate,conversions
  node scripts/google-mcp-connector.mjs --source ga4 --action organic-landing-pages --property-id 123456789 --start-date 2026-09-01 --end-date 2026-09-07
  node scripts/google-mcp-connector.mjs --source ga4 --action page-performance --property-id 123456789 --page-path /pricing
  node scripts/google-mcp-connector.mjs --source ga4 --action traffic-sources --property-id 123456789 --channel-group Organic Search
  node scripts/google-mcp-connector.mjs --source ga4 --action realtime --property-id 123456789
  node scripts/google-mcp-connector.mjs --source ga4 --action conversion-funnel --property-id 123456789 --start-date 2026-09-01 --end-date 2026-09-07

Options:
  --runtime PATH       Override SEARCH_CONSOLE_MCP_RUNTIME
  --output PATH        Write JSON to a file instead of stdout
  --dry-run             Validate action arguments without loading the MCP runtime
  --help                Show this help
`;

const ACTIONS = {
  gsc: new Set(['sites', 'query', 'sitemaps', 'inspect']),
  ga4: new Set(['properties', 'query', 'organic-landing-pages', 'page-performance', 'traffic-sources', 'realtime', 'conversion-funnel']),
};

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (!token.startsWith('--')) {
      throw new Error(`Unexpected argument: ${token}`);
    }
    const body = token.slice(2);
    const equalIndex = body.indexOf('=');
    if (equalIndex >= 0) {
      args[body.slice(0, equalIndex)] = body.slice(equalIndex + 1);
      continue;
    }
    const next = argv[index + 1];
    if (next && !next.startsWith('--')) {
      args[body] = next;
      index += 1;
    } else {
      args[body] = true;
    }
  }
  return args;
}

function required(args, name) {
  const value = args[name];
  if (value === undefined || value === '' || value === true) {
    throw new Error(`Missing required option: --${name}`);
  }
  return String(value);
}

function validateActionArguments(args, source, action) {
  if (!ACTIONS[source].has(action)) {
    throw new Error(`Unsupported ${source.toUpperCase()} action: ${action}. Supported actions: ${[...ACTIONS[source]].join(', ')}`);
  }

  if (source === 'gsc') {
    if (action !== 'sites') required(args, 'site');
    if (action === 'inspect') {
      const urls = csv(args.urls || args.url);
      if (!urls.length) throw new Error('GSC inspect requires --urls URL1,URL2 or --url URL.');
    }
    if (action === 'query') {
      integer(args.limit, 1000);
      parseJsonOption(args.filters, 'filters');
    }
    return;
  }

  if (action !== 'properties') required(args, 'property-id');
  if (action !== 'properties') integer(args.limit, 50);
  if (action === 'query') nonNegativeInteger(args.offset, 0);
}

function csv(value, fallback = []) {
  if (value === undefined || value === '') return fallback;
  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

function integer(value, fallback) {
  if (value === undefined || value === '') return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error(`Expected a positive integer, got: ${value}`);
  return parsed;
}

function nonNegativeInteger(value, fallback) {
  if (value === undefined || value === '') return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 0) throw new Error(`Expected a non-negative integer, got: ${value}`);
  return parsed;
}

function dateDaysAgo(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

function dateRange(args, source) {
  const endDate = args['end-date'] || (source === 'gsc' ? dateDaysAgo(3) : dateDaysAgo(0));
  const start = new Date(`${endDate}T00:00:00Z`);
  start.setUTCDate(start.getUTCDate() - 27);
  const startDate = args['start-date'] || start.toISOString().slice(0, 10);
  return { startDate, endDate };
}

function parseJsonOption(value, name) {
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch (error) {
    throw new Error(`Invalid JSON in --${name}: ${error.message}`);
  }
}

function runtimeRoot(args) {
  const value = args.runtime || process.env.SEARCH_CONSOLE_MCP_RUNTIME;
  if (!value) {
    throw new Error('Set SEARCH_CONSOLE_MCP_RUNTIME to the installed search-console-mcp package directory, or pass --runtime.');
  }
  return path.resolve(value);
}

async function importRuntimeModule(root, relativePath) {
  const file = path.join(root, 'dist', relativePath);
  try {
    await fs.access(file);
  } catch {
    throw new Error(`MCP runtime module not found: ${file}`);
  }
  return import(pathToFileURL(file).href);
}

function envelope(source, action, request, data) {
  return {
    schemaVersion: 'startup-seo-google/1',
    source,
    action,
    fetchedAt: new Date().toISOString(),
    request,
    data,
  };
}

function formatGa4Rows(response) {
  if (!response?.rows) return [];
  return response.rows.map((row) => {
    const item = {};
    response.dimensionHeaders?.forEach((header, index) => {
      item[header.name] = row.dimensionValues?.[index]?.value ?? '';
    });
    response.metricHeaders?.forEach((header, index) => {
      const value = row.metricValues?.[index]?.value ?? '';
      const number = Number(value);
      item[header.name] = value !== '' && Number.isFinite(number) ? number : value;
    });
    return item;
  });
}

async function runGsc(args, root) {
  const action = args.action || 'query';
  if (action === 'sites') {
    const { listSites } = await importRuntimeModule(root, 'google/tools/sites.js');
    return envelope('gsc', action, { accountId: args['account-id'] || null }, await listSites(args['account-id']));
  }

  const site = required(args, 'site');
  if (action === 'sitemaps') {
    const { listSitemaps } = await importRuntimeModule(root, 'google/tools/sitemaps.js');
    return envelope('gsc', action, { site }, await listSitemaps(site));
  }
  if (action === 'inspect') {
    const { inspectBatch } = await importRuntimeModule(root, 'google/tools/inspection.js');
    const urls = csv(args.urls || args.url);
    return envelope('gsc', action, { site, urls }, await inspectBatch(site, urls, args.language || 'en-US'));
  }
  if (action !== 'query') throw new Error(`Unsupported GSC action: ${action}`);

  const { startDate, endDate } = dateRange(args, 'gsc');
  const dimensions = csv(args.dimensions, ['date']);
  const filters = parseJsonOption(args.filters, 'filters');
  const { queryAnalytics } = await importRuntimeModule(root, 'google/tools/analytics.js');
  const request = {
    siteUrl: site,
    startDate,
    endDate,
    dimensions,
    filters,
    limit: integer(args.limit, 1000),
    dataState: args['data-state'] || 'all',
    type: args.type || 'web',
  };
  const rows = await queryAnalytics(request);
  return envelope('gsc', action, request, rows);
}

async function runGa4(args, root) {
  const action = args.action || 'query';
  if (action === 'properties') {
    const { listProperties } = await importRuntimeModule(root, 'ga4/tools/properties.js');
    return envelope('ga4', action, { accountId: args['account-id'] || null }, await listProperties(args['account-id']));
  }

  const propertyId = required(args, 'property-id');
  const { startDate, endDate } = dateRange(args, 'ga4');
  const accountId = args['account-id'];
  const limit = integer(args.limit, 50);
  const analytics = await importRuntimeModule(root, 'ga4/tools/analytics.js');

  if (action === 'organic-landing-pages') {
    const data = await analytics.getOrganicLandingPages(propertyId, startDate, endDate, limit, accountId);
    return envelope('ga4', action, { propertyId, startDate, endDate, limit, accountId: accountId || null }, data);
  }
  if (action === 'page-performance') {
    const data = await analytics.getPagePerformance(propertyId, startDate, endDate, args['page-path'] || '', limit, accountId);
    return envelope('ga4', action, { propertyId, startDate, endDate, pagePath: args['page-path'] || null, limit, accountId: accountId || null }, data);
  }
  if (action === 'traffic-sources') {
    const data = await analytics.getTrafficSources(propertyId, startDate, endDate, args['channel-group'], limit, accountId);
    return envelope('ga4', action, { propertyId, startDate, endDate, channelGroup: args['channel-group'] || null, limit, accountId: accountId || null }, data);
  }
  if (action === 'query') {
    const dimensions = csv(args.dimensions, ['landingPagePlusQueryString']);
    const metrics = csv(args.metrics, ['sessions', 'engagementRate', 'conversions']);
    const request = {
      propertyId,
      startDate,
      endDate,
      dimensions,
      metrics,
      limit,
      offset: nonNegativeInteger(args.offset, 0),
      accountId,
    };
    const response = await analytics.queryAnalytics(request);
    return envelope('ga4', action, request, {
      rows: formatGa4Rows(response),
      rowCount: response?.rows?.length || 0,
      dimensionHeaders: response?.dimensionHeaders || [],
      metricHeaders: response?.metricHeaders || [],
    });
  }
  if (action === 'realtime') {
    const { getRealtimeData } = await importRuntimeModule(root, 'ga4/tools/realtime.js');
    return envelope('ga4', action, { propertyId, accountId: accountId || null }, await getRealtimeData(propertyId, accountId));
  }
  if (action === 'conversion-funnel') {
    const { getConversionFunnel } = await importRuntimeModule(root, 'ga4/tools/behavior.js');
    const data = await getConversionFunnel(propertyId, startDate, endDate, args['event-name'], accountId);
    return envelope('ga4', action, { propertyId, startDate, endDate, eventName: args['event-name'] || null, accountId: accountId || null }, data);
  }
  throw new Error(`Unsupported GA4 action: ${action}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(HELP.trim());
    return;
  }
  const source = required(args, 'source').toLowerCase();
  if (!['gsc', 'ga4'].includes(source)) throw new Error('--source must be gsc or ga4.');
  const action = String(args.action || 'query').toLowerCase();
  args.action = action;
  validateActionArguments(args, source, action);
  const configuredRuntime = args.runtime || process.env.SEARCH_CONSOLE_MCP_RUNTIME || null;
  const plan = { source, action, runtime: configuredRuntime ? path.resolve(configuredRuntime) : null };
  if (args['dry-run']) {
    console.log(JSON.stringify({ dryRun: true, plan }, null, 2));
    return;
  }
  const root = runtimeRoot(args);
  const result = source === 'gsc' ? await runGsc(args, root) : await runGa4(args, root);
  const output = JSON.stringify(result, null, 2);
  if (args.output) {
    const outputPath = path.resolve(args.output);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, `${output}\n`, 'utf8');
    console.error(`Wrote ${outputPath}`);
  } else {
    console.log(output);
  }
}

main().catch((error) => {
  console.error(`google-mcp-connector: ${error.message}`);
  process.exitCode = 1;
});

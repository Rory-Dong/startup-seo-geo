# Startup website SEO launch checklist

Use this checklist before launch and again after the public URL is live. Mark each item as verified, not applicable with a reason, or blocked.

## Domain and access

- HTTPS works on the canonical host and non-canonical hosts redirect correctly.
- Preferred host, trailing-slash policy, locale paths, and URL conventions are intentional.
- Important pages are publicly accessible without accidental login, staging protection, or `noindex`.
- 404, 410, redirect, and server-error behavior is intentional and tested.

## Crawl and index

- `robots.txt` is present, reachable, and does not block valuable pages or required assets.
- XML sitemap contains only canonical, indexable, 200-status URLs and uses accurate `lastmod` values.
- Sitemap is referenced from `robots.txt` and ready for Search Console submission.
- Canonical tags, redirects, internal links, and sitemap URLs agree.
- There are no accidental staging URLs, duplicate hostnames, parameter noise, or orphaned launch pages.

## Page and content

- Every indexable page has a unique title, description, H1, useful headings, and a clear primary intent.
- Homepage and key landing pages explain audience, problem, product, proof, and next action above the first useful viewport.
- Claims, pricing, testimonials, customer logos, statistics, and author information are truthful and supported.
- Images have useful alt text, dimensions, loading behavior, and social preview metadata where relevant.
- Internal links connect the homepage, product, use-case, resource, trust, and conversion pages.

## Structured data and experience

- JSON-LD matches visible content and the actual page type.
- Mobile layout, keyboard focus, contrast, forms, loading, error, and empty states are usable.
- LCP, INP, CLS, JavaScript errors, and critical rendering paths have been checked on representative pages.
- Open Graph and social preview cards show the intended title, description, and image.

## Measurement and follow-up

- Search Console and analytics are installed on the canonical property.
- Key conversion events and consent/privacy behavior are verified.
- A baseline is saved for indexable URLs, organic clicks/impressions, rankings where available, and qualified conversions.
- Sitemap submission, URL inspection, broken links, and post-launch logs are scheduled for recheck.
- The team has a 30/60/90-day content, authority, and measurement plan.

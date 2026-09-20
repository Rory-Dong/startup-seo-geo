# Analytics and organic conversion measurement

Use this reference to connect early SEO work to qualified business outcomes. Traffic alone is not a sufficient startup SEO goal.

## Measurement plan

Define before implementation:

- business objective and primary conversion;
- secondary actions that indicate evaluation or activation;
- source, medium, campaign, landing page, audience, and date dimensions;
- owner, tool, retention period, consent requirements, and reporting cadence;
- baseline, target direction, and the decision the measurement should inform.

## Recommended event model

Adapt names to the product, but keep them stable and descriptive:

| Event | Example parameters | Purpose |
|---|---|---|
| `cta_click` | `cta_id`, `location`, `page_type` | Identify which message and placement earns action |
| `form_start` | `form_id`, `page_type` | Detect intent before submission |
| `form_submit` | `form_id`, `lead_type` | Measure qualified lead creation |
| `signup_start` | `plan`, `page_type` | Measure account-creation intent |
| `signup_complete` | `plan`, `locale` | Connect SEO landing pages to acquisition |
| `trial_start` or `demo_booked` | `product_area`, `source` | Measure meaningful activation |
| `purchase` or `subscription_start` | `plan`, `currency`, `value` | Measure revenue outcomes when applicable |

Do not send sensitive personal data or raw form contents as analytics parameters. Respect consent, regional privacy requirements, and the analytics platform's data policy.

## Source and funnel analysis

- Use Search Console for search visibility: clicks, impressions, CTR, position, queries, and pages.
- Use analytics for behavior and outcomes: landing sessions, engagement, events, qualified actions, activation, and revenue where configured.
- Keep search-console dimensions separate from analytics dimensions; do not present one as a substitute for the other.
- Segment by landing page, page type, intent, country, device, and new/returning users when the sample supports it.
- Review the path from organic landing page to qualified action, not only the last page viewed.

## Startup reporting questions

Each review should answer:

1. Which pages are earning relevant visibility?
2. Which pages attract visits but fail to communicate or convert?
3. Which queries reveal a content or product-positioning opportunity?
4. Which technical or index issue blocks a high-value page?
5. Which next experiment has a clear owner and validation date?

Avoid false precision on small samples. State data coverage, attribution limits, missing events, and confidence.

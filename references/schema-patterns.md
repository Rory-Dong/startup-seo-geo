# JSON-LD starter patterns

Use JSON-LD, absolute URLs, stable `@id` values, and only facts visible and truthful on the page. Adapt properties to the actual page type and validate with Schema Markup Validator or the relevant search-engine testing tool.

## Organization and WebSite

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "Example Brand",
      "url": "https://example.com/",
      "sameAs": ["https://www.linkedin.com/company/example"]
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "Example Brand",
      "publisher": {"@id": "https://example.com/#organization"}
    }
  ]
}
```

## WebPage and BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://example.com/guides/topic#webpage",
      "url": "https://example.com/guides/topic",
      "name": "Topic guide",
      "isPartOf": {"@id": "https://example.com/#website"},
      "about": {"@id": "https://example.com/#organization"}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/"},
        {"@type": "ListItem", "position": 2, "name": "Guides", "item": "https://example.com/guides"},
        {"@type": "ListItem", "position": 3, "name": "Topic guide", "item": "https://example.com/guides/topic"}
      ]
    }
  ]
}
```

For `Article`, `Product`, `SoftwareApplication`, `LocalBusiness`, `Person`, `VideoObject`, or `FAQPage`, add only properties supported by the visible page content and current platform guidance. Schema improves machine understanding; it does not guarantee a rich result or AI citation.

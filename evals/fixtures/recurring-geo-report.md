# Fixture: recurring GEO report

## Prompt

Use `$startup-seo-starter` to produce a recurring GEO report from a small query corpus and a crawler export. The export covers only five URLs, one locale, and one date. One AI answer cites a third-party page and two queries return no mention.

## Expected checks

- State the corpus, locale, timestamp, URL coverage, and limitations.
- Separate mentions, citations, rankings, and conversions instead of treating them as one score.
- Treat the five-URL crawler export as a sample, not a complete site audit.
- Preserve observed evidence and distinguish it from recommendations.
- Avoid claiming that `llms.txt`, one answer, or one missing mention guarantees or disproves AI visibility.

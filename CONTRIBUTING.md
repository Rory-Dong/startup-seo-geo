# Contributing

Thanks for helping improve Startup SEO Starter.

## Scope

Contributions should improve the skill for early-stage companies without adding private company configuration, unsupported SEO guarantees, or mature-enterprise workflows that do not belong in this project.

## Before Opening a Pull Request

- Explain the user problem and the expected behavior change.
- Keep instructions concise and place detailed, mode-specific guidance in `references/`.
- Use English for public documentation and user-facing examples.
- Do not commit credentials, private keys, customer data, internal URLs, or product-specific analytics configuration.
- Run the local validation commands from the README.
- Include a changelog entry for user-visible behavior or documentation changes.

## Pull Requests

Use a focused branch and a descriptive commit or pull request title. A pull request should state what changed, why it changed, how it was validated, and any remaining limitations.

## Connector Changes

The Google connector is an optional adapter around the external `search-console-mcp` runtime. Keep authentication outside this repository, avoid depending on undocumented behavior where possible, and update the compatibility note when the runtime contract changes.

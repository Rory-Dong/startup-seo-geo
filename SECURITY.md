# Security Policy

## Supported Scope

This repository contains documentation, a local CLI wrapper, and static assets. It does not contain Google credentials, API keys, customer data, or a hosted service.

## Reporting a Vulnerability

Please do not disclose credentials, private data, or an exploitable issue in a public issue. Use GitHub private vulnerability reporting if it is enabled for this repository, or contact the maintainers through the official [Pingplus website](https://pingplus.ai) to arrange a private report.

Include the affected file or component, reproduction steps, impact, and any suggested mitigation. Redact secrets from logs and screenshots.

## Credential Handling

Keep OAuth tokens, service-account keys, property IDs tied to private environments, and exported analytics data outside this repository. The connector must not print credentials or commit account files.

# Prompt and evaluation fixtures

These fixtures are maintainer checks for the skill's scope and evidence behavior. They are not production customer data and are not loaded as instructions during ordinary skill use.

For each fixture, evaluate whether the response:

- selects only the relevant operating mode;
- labels missing inputs and assumptions;
- separates verified facts, observations, inferences, and recommendations;
- avoids invented metrics, rankings, citations, customers, or claims;
- produces a prioritized artifact with a validation signal.

Run these after changes to `SKILL.md`, routing references, or report templates. A human reviewer should inspect the actual response; the CI workflow checks only repository structure and static invariants.

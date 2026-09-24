---
title: Rehorse
slug: rehorse
oneLiner: A Claude Code plugin that lets an AI agent work unattended in its own git worktree, so nothing reaches your branch until you merge it.
stack: [Python, Claude Code, Git, pytest]
repoUrl: https://github.com/neeleshseerapu/Rehorse
demoUrl: ""
videoUrl: ""
logo: /logos/rehorse.svg
featured: true
order: 1
result: Fixed 12 of 13 real bugs from the rich and FastAPI repositories, graded by the maintainers' own tests.
findings:
  - Its reviewer caught regressions in its own drafts, twice.
  - Stopped instead of rewriting a test that locked in a bug.
  - "The one miss passed all 981 tests, but not the maintainers' new ones."
details:
  - Each task runs in its own git worktree.
  - Tests are written first, then locked.
  - A separate reviewer sees only the spec, diff, and tests.
---
I wrote every rule as a hook, a Python script that Claude Code runs on every tool call.
Hooks run outside the model, so the rules still hold when the agent ignores its instructions or permissions are bypassed.

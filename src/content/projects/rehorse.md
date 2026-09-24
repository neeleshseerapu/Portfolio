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
result: Fixed 12 of 13 real bugs from the rich and FastAPI repositories, graded by the maintainers' own tests. The reviewer agent also caught a regression their test suites missed.
---
The hardest decision was where to enforce the rules. A model can ignore instructions in a prompt, and with permissions bypassed nothing stops it. So I wrote every rule as a hook, a Python script that Claude Code runs on every tool call. The hooks deny edits outside the worktree, lock the test files while the agent writes the implementation, and keep the session from ending until the tests have run. That's more code to test and maintain, but the rules hold in every permission mode.

The same idea shaped the review step. The reviewer agent never sees how the code was built. It gets only the spec, the diff, and the latest test output, so it judges the change on its own.

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
I wrote every rule as a hook, a Python script that Claude Code runs on every tool call.
Hooks run outside the model, so the rules still hold when the agent ignores its instructions or permissions are bypassed.

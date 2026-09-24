---
title: Bloom
slug: bloom
oneLiner: A notes app that turns Markdown headings into a live mind-map, where an LLM can brainstorm new sub-ideas for any node.
stack: [React, TypeScript, ReactFlow, Zustand, Tailwind]
repoUrl: https://github.com/neeleshseerapu/Bloom
demoUrl: https://bloomnotes-gilt.vercel.app/
videoUrl: ""
logo: /logos/bloom.svg
featured: false
order: 2
---
I built Bloom to run entirely in the browser, with no backend. You paste your own API key for Anthropic, OpenAI, or Gemini, and requests go straight from your browser to that provider. That kept the app a static site I can host for free, and nobody's AI usage runs through a server I pay for.

The tradeoff is that your key is stored in your browser. So the README asks people to use a personal key, and the app estimates the cost of every AI call and lets you set a spend limit per session.

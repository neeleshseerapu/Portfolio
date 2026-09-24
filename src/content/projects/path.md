---
title: Path
slug: path
oneLiner: An inventory and request-tracking app that helps PATH manage donations across its sites, built with LA Blueprint.
stack: [Next.js, React, TypeScript, Supabase]
repoUrl: https://github.com/lablueprint/path
demoUrl: https://path-inventory.vercel.app/
videoUrl: ""
logo: ""
featured: false
order: 3
result: Moved the workflow for 200+ supervisors and 8,000+ volunteers off manual spreadsheets.
---
I designed the ticket schema and its Supabase Row Level Security policies, so the database itself enforces who can see and change each ticket.

The hardest bug was in search. Filters on columns from a related table were being ignored, because Supabase's default join still returns a row when the related row doesn't match. I restructured the queries to use an inner join on the inventory item, so the filter removes non-matching rows. The search and filter state also lives in the URL, so a filtered view can be bookmarked or shared.

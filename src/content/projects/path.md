---
title: Path
slug: path
oneLiner: Inventory and request tracking for PATH's donation sites, built with LA Blueprint.
stack: [Next.js, React, TypeScript, Supabase]
repoUrl: https://github.com/lablueprint/path
demoUrl: https://path-inventory.vercel.app/
videoUrl: ""
logo: /logos/path.png
featured: false
order: 3
result: Moved 200+ supervisors and 8,000+ volunteers from spreadsheets to one React and Supabase app.
---
Search filters on related tables were silently ignored, because Supabase's default join keeps rows whose related row doesn't match.
I switched the queries to an inner join on the inventory item, so the filters remove non-matching rows.

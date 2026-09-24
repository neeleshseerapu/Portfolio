# Portfolio

Personal site built with Astro and deployed on Vercel. Every page is static; the only server code is `src/pages/api/message.ts`, which emails contact messages through Resend.

- `npm run dev`: local dev server (runs the message endpoint too)
- `npm run build`: builds to `.vercel/output/`

## Environment variables

Set these in `.env` locally and in Vercel (Project → Settings → Environment Variables):

- `RESEND_API_KEY`: a Resend API key with sending access.
- `CONTACT_TO`: the inbox that receives messages (must be your Resend account email until you verify a domain).

Without them the site still builds, and the contact form replies that messaging isn't set up.

## Editing content

All content lives in data files. Components never need to change.

- **Personal info and links:** `src/data/site.ts`. An empty link is hidden.
- **Add a project:** copy any file in `src/content/projects/` and edit it. The filename doesn't matter; `slug` sets the URL (`/projects/<slug>/`).
- **Change the featured project:** set `featured: true` on the project(s) to feature and `false` on the rest. Any number works, including none.
- **Reorder:** lower `order` comes first (projects and experience).
- **Findings and details (optional):** add `findings:` and `details:` lists to a project's frontmatter to show "Key findings" and "How it works" on its card. Keep each item to one short sentence.
- **Add a role:** copy a file in `src/content/experience/`.
- **Line breaks:** write one sentence per line in `.md` bodies. On wide screens each sentence shows on its own line; on phones they flow together. Frontmatter strings (`tagline`, `oneLiner`, `result`) are split into sentences automatically.
- **Media:** put files in `public/` and reference them from the root, e.g. `logo: /logos/name.svg` or `videoUrl: /demos/name.mp4`. A `.gif` shows as an image, other local files as a video, and an `https://` link as a "Video" link.

`npm run build` checks every file against the schema in `src/content.config.ts` and names the file and field if something is missing or malformed.

# Portfolio

Static personal site built with Astro.

- `npm run dev`: local dev server
- `npm run build`: static output to `dist/`
- `npm run preview`: serve the built `dist/`

## Editing content

All content lives in data files. Components never need to change.

- **Personal info and links:** `src/data/site.ts`. An empty link is hidden.
- **Add a project:** copy any file in `src/content/projects/` and edit it. The filename doesn't matter; `slug` sets the URL (`/projects/<slug>/`).
- **Change the featured project:** set `featured: true` on the project(s) to feature and `false` on the rest. Any number works, including none.
- **Reorder:** lower `order` comes first (projects and experience).
- **Add a role:** copy a file in `src/content/experience/`.
- **Media:** put files in `public/` and reference them from the root, e.g. `logo: /logos/name.svg` or `videoUrl: /demos/name.mp4`. A `.gif` shows as an image, other local files as a video, and an `https://` link as a "Video" link.

`npm run build` checks every file against the schema in `src/content.config.ts` and names the file and field if something is missing or malformed.

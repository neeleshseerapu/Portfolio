import type { CollectionEntry } from 'astro:content';
import { site } from '@/data/site';

const abs = (path: string, base?: URL) => (base ? new URL(path, base).href : path);

export const person = (base?: URL) => ({
  '@type': 'Person',
  '@id': abs('/#person', base),
  name: site.name,
  email: site.links.email || undefined,
  description: site.tagline,
  alumniOf: { '@type': 'CollegeOrUniversity', name: site.school },
  sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
  url: base?.href,
});

export const sourceCode = ({ data }: CollectionEntry<'projects'>, base?: URL) => ({
  '@type': 'SoftwareSourceCode',
  name: data.title,
  description: data.oneLiner,
  codeRepository: data.repoUrl,
  url: abs(`/projects/${data.slug}/`, base),
  keywords: data.stack,
  author: { '@id': abs('/#person', base) },
});

export const graph = (...nodes: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export const GET: APIRoute = async ({ site: base }) => {
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const { resume, github, linkedin, email } = site.links;
  const links = [
    ['Resume (PDF)', resume && url(resume)],
    ['GitHub', github],
    ['LinkedIn', linkedin],
    ['Email', email && `mailto:${email}`],
  ].filter(([, href]) => href);

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    `${site.name} studies computer science at ${site.school} (${site.schoolShort}) and works as ${site.role} at ${site.company}.`,
    '',
    '## Projects',
    '',
    ...projects.map(({ data }) => `- [${data.title}](${url(`/projects/${data.slug}/`)}): ${data.oneLiner}`),
    '',
    '## Links',
    '',
    ...links.map(([label, href]) => `- [${label}](${href})`),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

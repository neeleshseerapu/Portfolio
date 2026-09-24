import type { APIRoute } from 'astro';
import { site } from '@/data/site';
import { getExperience, getProjects } from '@/lib/content';

export const GET: APIRoute = async ({ site: base }) => {
  const url = (path: string) => (base ? new URL(path, base).href : path);
  const projects = await getProjects();
  const experience = await getExperience();
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
    '## Projects',
    '',
    ...projects.map(({ data }) => `- [${data.title}](${url(`/projects/${data.slug}/`)}): ${data.oneLiner}`),
    '',
    '## Experience',
    '',
    ...experience.map(({ data }) => `- ${data.role}, ${data.company} (${data.start} to ${data.end})`),
    '',
    '## Links',
    '',
    ...links.map(([label, href]) => `- [${label}](${href})`),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

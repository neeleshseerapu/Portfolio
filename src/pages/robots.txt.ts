import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', site && `Sitemap: ${new URL('sitemap-index.xml', site).href}`]
      .filter(Boolean)
      .join('\n') + '\n',
  );

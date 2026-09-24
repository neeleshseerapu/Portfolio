import { defineConfig, envField, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.domain || undefined,
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.endsWith('/sent/') })],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});

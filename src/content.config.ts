import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z.union([z.url(), z.literal('')]).optional();

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    oneLiner: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.url(),
    demoUrl: optionalUrl,
    videoUrl: z.string().optional(),
    logo: z.string().optional(),
    featured: z.boolean(),
    order: z.number(),
    result: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, experience };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    status: z.enum(['egg', 'hatchling', 'chick']).default('egg'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes };
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    author: z.string().default("Equipo Coches Alemania VAG"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    canonical: z.string().optional()
  })
});

export const collections = { blog };

import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    githubUrl: z.string().optional(),
    projectPage: z.string().optional(),
    priority: z.number()
  }),
});

export const collections = { projects };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Portfolio collection
 * ---------------------
 * Reads every `project.md` inside `assets/portfolio/<slug>/`.
 * The user edits these files in Obsidian — they live in the same place
 * where their thumbnails / images sit, so each project is a self-
 * contained folder.
 */
const portfolio = defineCollection({
  loader: glob({
    pattern: ['*/project.md', '!_*/project.md'],
    base: './assets/portfolio',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    slug: z.string(),
    // Dates often come back as numbers when the year is unquoted in YAML.
    date: z.union([z.string(), z.number()]).transform((v) => String(v)),
    category: z.string(),
    role: z.string(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    thumbnail: z.string(),
    excerpt: z.string().nullable().optional(),
    behance_url: z.string().nullable().optional(),
    live_url: z.string().nullable().optional(),
  }),
});

/**
 * About-me collection
 * --------------------
 * Three free-form markdown files (no frontmatter):
 *   - About Me.md   — Quote + Short Version + Full Version
 *   - Experience.md — full-time work history
 *   - Projects.md   — side projects summary
 *
 * Schema is permissive because these files don't carry frontmatter.
 * The page component parses the body into sections at render time.
 */
const aboutMe = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './assets/about-me',
    // Normalize IDs: "About Me.md" -> "about-me", "Experience.md" -> "experience"
    generateId: ({ entry }) =>
      entry.replace(/\.md$/i, '').toLowerCase().replace(/\s+/g, '-'),
  }),
  schema: z.object({}).passthrough(),
});

/**
 * Blog collection
 * ----------------
 * Three post types share the same folder + schema:
 *   - article  → long-form markdown body, full detail page
 *   - vlog     → YouTube embed + optional description, detail page
 *   - short    → vertical Reel/TikTok/Short embed, opens in modal
 *
 * One folder per post under `assets/blog/<slug>/`, contains:
 *   - post.md       (frontmatter + optional markdown body)
 *   - thumbnail.jpg (cover image; required for shorts, optional for vlog)
 *   - images/       (in-article images, optional)
 */
const blog = defineCollection({
  loader: glob({
    pattern: ['*/post.md', '!_*/post.md'],
    base: './assets/blog',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]).transform((v) =>
      typeof v === 'string' ? v : v.toISOString().slice(0, 10)
    ),
    type: z.enum(['article', 'vlog', 'short']),
    slug: z.string(),
    // For vlog/short — the original URL on YouTube / Facebook / TikTok
    url: z.string().nullable().optional(),
    // Thumbnail file name (relative to the post folder)
    thumbnail: z.string().optional(),
    // Short blurb shown in the blog grid card
    excerpt: z.string().nullable().optional(),
    // Tags shown as small pills on the card
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    // Optional explicit category override (defaults to type-based label)
    category: z.string().nullable().optional(),
  }),
});

export const collections = {
  portfolio,
  'about-me': aboutMe,
  blog,
};

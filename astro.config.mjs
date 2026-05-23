// @ts-check
import { defineConfig } from 'astro/config';
import remarkRewriteImages from './scripts/remark-rewrite-images.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://imcenix.com',
  // Generates a static site (output: 'static' is the default in Astro 5)
  trailingSlash: 'ignore',
  build: {
    // Each page renders as /portfolio/<slug>/index.html so paths work on
    // SFTP-hosted sites without server-side URL rewriting.
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    remarkPlugins: [remarkRewriteImages],
  },
});

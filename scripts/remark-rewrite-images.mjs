// Remark plugin that rewrites relative image paths in portfolio markdown
// bodies from `images/foo.png` to the absolute public URL
// `/portfolio/<folder>/images/foo.png`.
//
// Why: Astro's markdown integration tries to import every referenced image
// at build time. When a project folder has no `images/` files yet (e.g.
// you've only added the thumbnail), the build crashes with `ImageNotFound`.
// Rewriting to an absolute URL bypasses Astro's asset importer entirely:
// the browser fetches the file at request time (from the symlink in
// public/portfolio/...) and shows a broken-image icon if it doesn't exist
// — but the build keeps going.

import path from 'node:path';

// Map of `/assets/<topLevel>/...` segment → public URL prefix
const REWRITE_ROOTS = [
  { segment: `${path.sep}assets${path.sep}portfolio${path.sep}`, publicPrefix: 'portfolio' },
  { segment: `${path.sep}assets${path.sep}blog${path.sep}`,      publicPrefix: 'blog'      },
];

export default function remarkRewriteImages() {
  return (tree, file) => {
    const filePath =
      file?.path ??
      (Array.isArray(file?.history) ? file.history[0] : null) ??
      '';

    if (typeof filePath !== 'string') return;

    const root = REWRITE_ROOTS.find((r) => filePath.includes(r.segment));
    if (!root) return;

    const folder = path.basename(path.dirname(filePath));

    walk(tree);

    function walk(node) {
      if (!node) return;
      if (node.type === 'image' && typeof node.url === 'string') {
        const url = node.url.trim();
        const isAbsolute =
          url.startsWith('http://') ||
          url.startsWith('https://') ||
          url.startsWith('/') ||
          url.startsWith('data:');
        if (!isAbsolute) {
          node.url = `/${root.publicPrefix}/${folder}/${url}`;
        }
      }
      if (Array.isArray(node.children)) {
        for (const child of node.children) walk(child);
      }
    }
  };
}

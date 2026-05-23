// Symlink (or copy as fallback) `assets/portfolio` and `assets/images`
// into `public/` so Astro can serve them as static files at:
//   /portfolio/<slug>/thumbnail.png
//   /portfolio/<slug>/images/<file>
//   /images/cenix.jpg
//
// Runs automatically before `npm run dev` and `npm run build`
// (see "predev" / "prebuild" scripts in package.json).

import { symlink, rm, mkdir, cp, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const PUBLIC = path.join(ROOT, 'public');

const targets = [
  { from: path.join(ASSETS, 'portfolio'),        to: path.join(PUBLIC, 'portfolio') },
  { from: path.join(ASSETS, 'images'),           to: path.join(PUBLIC, 'images')    },
  { from: path.join(ASSETS, 'about-me', 'logos'), to: path.join(PUBLIC, 'logos')    },
  { from: path.join(ASSETS, 'blog'),             to: path.join(PUBLIC, 'blog')      },
];

await mkdir(PUBLIC, { recursive: true });

for (const { from, to } of targets) {
  // Skip if source doesn't exist
  try {
    await stat(from);
  } catch {
    console.warn(`Skipping: ${path.relative(ROOT, from)} does not exist`);
    continue;
  }

  // Remove any existing target (symlink, file, or folder)
  await rm(to, { recursive: true, force: true });

  // Try symlink first (instant, no duplication during dev)
  try {
    await symlink(from, to, 'dir');
    console.log(`Linked: ${path.relative(ROOT, to)} -> ${path.relative(ROOT, from)}`);
  } catch (err) {
    // Fall back to copying (e.g., Windows without admin)
    await cp(from, to, { recursive: true });
    console.log(`Copied: ${path.relative(ROOT, from)} -> ${path.relative(ROOT, to)}`);
  }
}

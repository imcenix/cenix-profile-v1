// Tải ảnh cover cho tin trong mục News — CHẠY TRÊN GITHUB ACTIONS (network đầy đủ),
// như một bước trước khi build. Sandbox Cowork bị chặn tải ảnh nên task hằng ngày
// chỉ ghi URL ảnh vào scripts/cover-manifest.json, còn việc tải để bước này lo.
//
// Mỗi entry trong manifest:
//   { "path": "assets/news/<slug>/cover.jpg", "url": "https://...ảnh trực tiếp" }
//   hoặc { "path": "...", "page": "https://...bài gốc" }  -> tự bóc og:image.
// Chỉ tải file chưa tồn tại. Không commit ngược — build dùng ngay ảnh vừa tải.

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = resolve(root, 'scripts/cover-manifest.json');
if (!existsSync(manifestPath)) { console.log('[covers] no manifest, skip'); process.exit(0); }

const UA = { 'user-agent': 'Mozilla/5.0 (CenixBot cover fetch)' };
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

for (const entry of manifest) {
  const abs = resolve(root, entry.path);
  if (existsSync(abs)) continue;
  try {
    let url = entry.url;
    if (!url && entry.page) {
      const html = await (await fetch(entry.page, { headers: UA })).text();
      const m = html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/) ||
                html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/);
      if (!m) { console.warn(`[covers] no og:image on ${entry.page}, skip`); continue; }
      url = m[1];
    }
    const res = await fetch(url, { headers: UA });
    if (!res.ok) { console.warn(`[covers] ${url} -> HTTP ${res.status}, skip`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, buf);
    console.log(`[covers] downloaded ${entry.path} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.warn(`[covers] failed ${entry.path}: ${e.message}`);
  }
}

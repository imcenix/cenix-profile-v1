import { getCollection } from 'astro:content';

const SITE = 'https://imcenix.com';

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET() {
  const posts = (await getCollection('blog'))
    .filter((post) => !post.id.startsWith('_template'))
    .filter((post) => post.data.type === 'article');

  const staticUrls = [
    SITE + '/',
    SITE + '/portfolio/',
    SITE + '/blog/',
  ];

  const entries = [
    ...staticUrls.map((url) => ({ url })),
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.data.slug}/`,
      lastmod: post.data.date,
    })),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(({ url, lastmod }) => [
      '  <url>',
      `    <loc>${xmlEscape(url)}</loc>`,
      ...(lastmod ? [`    <lastmod>${xmlEscape(lastmod)}</lastmod>`] : []),
      '  </url>',
    ].join('\n')),
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

// Génère le site statique dans dist/ : pages HTML, ressources, sitemap et robots.txt.
// Le CSS est ensuite compilé par Tailwind (voir script "build" de package.json).
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from './site/config.mjs';
import { page } from './site/ui.mjs';
import { cities, categories, guides } from './site/data.mjs';
import { home, objetsPage, zonesPage, aProposPage, contactPage, mentionsPage, cityPage, categoryPage, guidePage, notFoundPage } from './site/pages.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

page.data = { cities, categories, guides };

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const pages = [
  ['index.html', home(), 1.0],
  ['objets.html', objetsPage(), 0.9],
  ['zones.html', zonesPage(), 0.8],
  ['a-propos.html', aProposPage(), 0.6],
  ['contact.html', contactPage(), 0.9],
  ...cities.map((c) => [c.file, cityPage(c), 0.8]),
  ...categories.map((c) => [c.file, categoryPage(c), 0.8]),
  ...guides.map((g) => [g.file, guidePage(g), 0.7]),
  ['mentions-legales.html', mentionsPage(), null],
  ['404.html', notFoundPage(), null]
];

for (const [file, html] of pages) writeFileSync(join(dist, file), html);

// Ressources statiques (images, JS)
for (const dir of ['img', 'js']) {
  if (existsSync(join(root, 'assets', dir))) cpSync(join(root, 'assets', dir), join(dist, 'assets', dir), { recursive: true });
}

// robots.txt & sitemap.xml
const sitemapUrl = SITE_URL ? `${SITE_URL}/sitemap.xml` : '';
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n${sitemapUrl ? `\nSitemap: ${sitemapUrl}\n` : ''}`);
if (SITE_URL) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.filter(([, , p]) => p !== null).map(([f, , p]) => `  <url><loc>${SITE_URL}/${f === 'index.html' ? '' : f}</loc><lastmod>${today}</lastmod><priority>${p.toFixed(1)}</priority></url>`);
  writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
} else {
  console.warn('⚠ SITE_URL non défini : sitemap.xml et URLs canoniques non générés.');
}
console.log(`✓ ${pages.length} pages générées dans dist/`);

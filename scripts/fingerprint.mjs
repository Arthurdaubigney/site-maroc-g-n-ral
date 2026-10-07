// Ajoute un hash de contenu aux fichiers CSS/JS pour éviter tout cache obsolète côté navigateur.
import { readFileSync, writeFileSync, renameSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const targets = [['assets/css/style.css', 'css'], ['assets/js/main.js', 'js']];
const map = {};

for (const [rel, ext] of targets) {
  const file = join(dist, rel);
  const hash = createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 10);
  const hashed = rel.replace(`.${ext}`, `.${hash}.${ext}`);
  renameSync(file, join(dist, hashed));
  map[rel] = hashed;
}

for (const f of readdirSync(dist).filter((n) => n.endsWith('.html'))) {
  let html = readFileSync(join(dist, f), 'utf8');
  for (const [from, to] of Object.entries(map)) html = html.split(from).join(to);
  writeFileSync(join(dist, f), html);
}
console.log('✓ CSS/JS versionnés :', Object.values(map).join(', '));

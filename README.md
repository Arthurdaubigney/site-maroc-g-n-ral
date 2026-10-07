# Maison Volubilis Antiquités

Site vitrine statique (HTML5 + Tailwind CSS) — estimation et rachat d'antiquités au Maroc et à l'international.

## Commandes

```bash
npm install
npm run build   # génère le site dans dist/ (pages HTML + CSS Tailwind + sitemap)
npm run dev     # génère les pages puis recompile le CSS en continu
```

## Structure

- `scripts/site/` : sources des pages (gabarits, contenus des villes, catégories et guides)
- `scripts/build.mjs` : génération des pages HTML, `robots.txt` et `sitemap.xml`
- `src/input.css` : styles Tailwind + motifs zellige
- `assets/img`, `assets/js` : images et script
- `docs/SEO-mots-cles.md` : récapitulatif des mots-clés et opportunités
- `dist/` : site compilé (non versionné, publié par Vercel)

## Déploiement (Vercel)

`vercel.json` lance `npm run build` et publie `dist/`.
Définir la variable d'environnement `SITE_URL` (ex. `https://www.mondomaine.ma`) pour le sitemap et les URLs canoniques.

## Formulaire

Chaque page contient un emplacement `#formulaire` (commentaire HTML dans `scripts/site/ui.mjs`, fonction `formSlot`) où coller le code du formulaire.

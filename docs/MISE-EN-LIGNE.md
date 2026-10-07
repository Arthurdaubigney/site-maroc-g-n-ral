# Check-list de mise en ligne

## Obligatoire
- [ ] **Tally → redirection** : dans le formulaire `LZQNAG`, onglet *Settings → Redirect on completion*, saisir `https://VOTRE-DOMAINE/merci` (nom de domaine définitif, sans faute, en `https://`).
      Le site redirige déjà automatiquement vers `/merci` à l'envoi du formulaire ; la redirection Tally sert de sécurité.
- [ ] **`SITE_URL`** : variable d'environnement Vercel (`https://VOTRE-DOMAINE`) pour le sitemap et les URLs canoniques.
- [ ] **Google Ads** : coller la balise Google et l'événement de conversion dans `scripts/site/pages.mjs` (fonction `merciPage`, bloc `headExtra`), puis `npm run build`.
- [ ] Si un suivi Google est ajouté : mettre à jour la rubrique « Cookies » des mentions légales et ajouter un bandeau de consentement.

## Recommandé
- [ ] Google Search Console : soumettre `https://VOTRE-DOMAINE/sitemap.xml`
- [ ] Google Business Profile
- [ ] Tester la page `/merci` après un vrai envoi du formulaire (elle ne doit être atteignable que par ce biais).

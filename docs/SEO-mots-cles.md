# Récapitulatif SEO — Maison Volubilis Antiquités

> Les volumes de recherche n'ont pas été mesurés (aucun accès à Google Search Console ni à un outil de mots-clés).
> Les regroupements ci-dessous reposent sur l'intention de recherche et sur l'observation des résultats Google
> pour des requêtes types. À valider avec Search Console une fois le site en ligne.

## 1. Mots-clés couverts par le site

| Famille | Mots-clés principaux | Page cible | Statut |
|---|---|---|---|
| Marque / générique | antiquaire Maroc, rachat antiquités Maroc, estimation antiquités gratuite, expertise objets d'art Maroc | `index.html` | Existant |
| Catalogue | objets anciens recherchés, rachat objets d'art, mobilier ancien, argenterie ancienne, bronzes | `objets.html` | Existant |
| Zone | antiquaire à domicile Maroc, estimation à domicile, antiquaire international | `zones.html` | Existant |
| Confiance | antiquaire de confiance, maison d'expertise objets d'art | `a-propos.html` | Existant |
| Conversion | estimation gratuite antiquités, demande d'estimation | `contact.html` | Existant |
| **Local — Casablanca** | antiquaire Casablanca, rachat meubles anciens Casablanca, estimation tableaux Casablanca | `antiquaire-casablanca.html` | **Nouveau** |
| **Local — Marrakech** | antiquaire Marrakech, rachat objets d'art Marrakech, vendre antiquités riad | `antiquaire-marrakech.html` | **Nouveau** |
| **Local — Rabat** | antiquaire Rabat, tapis de Rabat, estimation antiquités Rabat Salé | `antiquaire-rabat.html` | **Nouveau** |
| **Local — Tanger** | antiquaire Tanger, rachat livres anciens Tanger, tableaux orientalistes Tanger | `antiquaire-tanger.html` | **Nouveau** |
| **Local — Fès** | antiquaire Fès, poterie de Fès ancienne, broderie de Fès, rachat médina | `antiquaire-fes.html` | **Nouveau** |
| **Local — Agadir** | antiquaire Agadir, bijoux berbères Agadir, antiquités Souss, Taroudant, Tiznit | `antiquaire-agadir.html` | **Nouveau** |
| **Tapis** | tapis berbère ancien, Beni Ouarain, Azilal, boucherouite, kilim, hanbel, tapis de Rabat, estimation tapis berbère | `tapis-berberes-anciens.html` | **Nouveau** |
| **Bijoux / horlogerie** | bijoux berbères anciens, bijoux amazighs argent, bijoux citadins, montre de poche ancienne, rachat bijoux anciens | `bijoux-berberes-anciens.html` | **Nouveau** |
| **Mobilier** | mobilier ancien marocain, coffre ancien, porte sculptée, mobilier Art déco, rachat meubles anciens | `mobilier-ancien-marocain.html` | **Nouveau** |
| **Peinture** | tableaux orientalistes, peinture moderne marocaine, estimation tableau, cadre ancien | `tableaux-peinture-marocaine.html` | **Nouveau** |
| **Informationnel (vente)** | vendre ses antiquités au Maroc, où vendre un meuble ancien, estimer un objet ancien | `vendre-antiquites-maroc.html` | **Nouveau** |
| **Informationnel (succession)** | estimation succession mobilier, débarras maison de famille, héritage objets d'art | `estimation-succession.html` | **Nouveau** |

## 2. Opportunités détectées

Observées sur les pages de résultats Google (requêtes : rachat antiquités Maroc, antiquaire Casablanca, vendre tapis berbère ancien Maroc, vendre bijoux anciens berbères Maroc).

1. **Le marché local est peu occupé par des pages dédiées.** Un seul concurrent direct ressort avec des pages par ville (Marrakech, Casablanca, Rabat). Les autres résultats sont des annuaires (Telecontact, Pages-Maroc), des petites annonces (Avito) et des sites français. **Fès, Tanger et Agadir en page dédiée n'étaient pas occupées par un concurrent marocain observé** : pages créées.
2. **Les tapis berbères sont dominés par des sites français et des annonces Avito**, sans offre « rachat / estimation » basée au Maroc. Page créée, avec le vocabulaire marocain (Beni Ouarain, Azilal, boucherouite, hanbel, tapis de Rabat).
3. **Les bijoux berbères anciens sont captés par des maisons de ventes aux enchères étrangères** : un acteur local « estimation gratuite » est un angle différenciant. Page créée.
4. **Aucune page « succession / héritage » côté antiquaire marocain** observée : page créée (intention forte, confiance, discrétion).
5. **Requêtes informationnelles** (« vendre ses antiquités au Maroc ») : guide créé pour capter les internautes en amont du besoin.

## 3. Ce qui a été intégré techniquement

- Une page par ville et par catégorie, avec titre, description, H1 et contenu uniques (pas de texte dupliqué).
- Données structurées : `LocalBusiness` (toutes les pages), `FAQPage`, `BreadcrumbList`, `Service`, `Article`.
- Maillage interne : liens villes ↔ catégories ↔ guides, menu de pied de page par ville et par thème.
- Balises Open Graph / Twitter, `robots.txt`, `sitemap.xml` et URLs canoniques générés à la compilation (voir « SITE_URL » ci-dessous).
- Pages `mentions-legales` et `404` en `noindex`.
- Textes alternatifs descriptifs sur toutes les images, images chargées en différé, `lang="ar"` sur les mentions arabes.

> **SITE_URL** : le sitemap et les URLs canoniques sont générés à partir de la variable d'environnement `SITE_URL`
> (ex. `https://www.votredomaine.ma`) ou, à défaut, de l'adresse de production Vercel. Définissez `SITE_URL` dans Vercel
> dès que le nom de domaine définitif est connu.

## 4. Prochaines opportunités (non réalisées)

| Priorité | Action | Pourquoi |
|---|---|---|
| Haute | Créer et valider la **fiche Google Business Profile** (zone de service : villes d'intervention) | Apparition dans le pack local « antiquaire + ville » |
| Haute | Connecter **Google Search Console** et soumettre `sitemap.xml` | Mesurer impressions, requêtes réelles et pages à renforcer |
| Moyenne | Pages supplémentaires : **Meknès, Essaouira, Tétouan, Oujda, Kénitra, El Jadida** | Mêmes mécaniques que les six villes actuelles |
| Moyenne | **Version anglaise** (`/en/`) : « antique dealer Morocco », « sell antiques Morocco », « Moroccan rug appraisal » | Clientèle internationale annoncée dans le positionnement |
| Moyenne | **Version arabe** pour les requêtes locales (« بائع التحف في المغرب ») | Audience marocaine non francophone |
| Moyenne | Obtenir des **liens entrants** : annuaires marocains (Telecontact, Pages-Maroc), presse déco, blogs patrimoine | Autorité du domaine |
| Basse | Articles de fond : « reconnaître un vrai Beni Ouarain », « poinçons d'argent marocains », « entretenir un tapis ancien » | Longue traîne et autorité thématique |

## 5. Règles de rédaction respectées

- Aucune promesse de délai ou de durée d'estimation.
- Mise en avant de la gratuité, de la confidentialité absolue, du déplacement à domicile et de l'absence d'engagement.
- Aucun numéro de téléphone ni adresse e-mail : le formulaire est l'unique moyen de contact.
- Aucun chiffre, prix, témoignage ou ancienneté inventé.

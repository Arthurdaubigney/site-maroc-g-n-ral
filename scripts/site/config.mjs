// Configuration globale du site.
export const NAME = 'Maison Volubilis Antiquités';

// URL publique du site (canonical, sitemap, Open Graph).
// Définir SITE_URL (ex. https://www.mondomaine.ma) dans Vercel ; à défaut, l'URL de production Vercel est utilisée.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : '')).replace(/\/$/, '');

export const nav = [
  ['index.html', 'Accueil'],
  ['objets.html', 'Objets recherchés'],
  ['zones.html', 'Zones d’intervention'],
  ['a-propos.html', 'La Maison']
];

// Chemin SVG de l'arche (coordonnées normalisées 0..1) : arche outrepassée marocaine
export const ARCH_PATH = 'M0.07,1 V0.56 C-0.03,0.34 0.12,0.13 0.5,0 C0.88,0.13 1.03,0.34 0.93,0.56 V1 Z';

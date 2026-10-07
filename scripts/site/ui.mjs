import { NAME, SITE_URL, nav, ARCH_PATH } from './config.mjs';

/* ---------- Icônes (SVG ligne) ---------- */
const svg = (inner, cls = 'h-6 w-6') => `<svg aria-hidden="true" class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25">${inner}</svg>`;
export const ic = {
  arrow: svg('<path d="M4 12h16m-6-6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>', 'h-4 w-4'),
  lock: svg('<rect x="5" y="10.5" width="14" height="9.5" rx="1"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" stroke-linecap="round"/>'),
  pin: svg('<path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.3"/>'),
  gem: svg('<path d="m6.5 4.5-3 5L12 20.5l8.5-11-3-5h-11ZM3.5 9.5h17M9 4.5l3 5 3-5M12 9.5v11" stroke-linejoin="round"/>'),
  camera: svg('<path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.5"/>'),
  eye: svg('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>'),
  hand: svg('<path d="M3 12.5 7 9l4 1.5 3.5-2L21 12l-4 5.5-5-.5-3 2-3.5-2.5L3 12.5Z" stroke-linejoin="round"/><path d="m8.5 14 3 1.5" stroke-linecap="round"/>'),
  home: svg('<path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5M10 20v-5.5h4V20" stroke-linejoin="round"/>'),
  globe: svg('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.2 3.8 8.5S14.5 18.1 12 20.5C9.5 18.1 8.2 15.3 8.2 12S9.5 5.9 12 3.5Z"/>'),
  check: svg('<path d="m5 12.5 4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round"/>', 'mt-0.5 h-5 w-5 shrink-0 text-bronze-600').replace('stroke-width="1.25"', 'stroke-width="1.5"'),
  chev: svg('<path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>', 'chev h-5 w-5 shrink-0 text-bronze-600').replace('stroke-width="1.25"', 'stroke-width="1.5"')
};
const pinSm = ic.pin.replace('h-6 w-6', 'mt-0.5 h-5 w-5 shrink-0');
export { pinSm };

/* ---------- Ornements ---------- */
export const star8 = (cls = 'h-5 w-5') => `<svg aria-hidden="true" class="${cls}" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,1 15.1,5.6 20.5,3.5 18.4,8.9 23,12 18.4,15.1 20.5,20.5 15.1,18.4 12,23 8.9,18.4 3.5,20.5 5.6,15.1 1,12 5.6,8.9 3.5,3.5 8.9,5.6"/></svg>`;

export const divider = (light = false) => `<div class="flex items-center gap-4 ${light ? 'text-bronze-400' : 'text-bronze-600'}" aria-hidden="true"><span class="h-px w-12 bg-current opacity-60"></span>${star8('h-4 w-4')}<span class="h-px w-12 bg-current opacity-60"></span></div>`;

export const frieze = () => '<div class="frieze" aria-hidden="true"></div>';

const archSvgDefs = `<svg width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute"><defs><clipPath id="arch-clip" clipPathUnits="objectBoundingBox"><path d="${ARCH_PATH}"/></clipPath></defs></svg>`;

/** Cadre en arche (double filet doré) autour d'une image. */
export const archFrame = (imgHtml, ratio = 'aspect-[3/4]', extra = '') => `
<div class="relative ${ratio} ${extra}">
  <svg class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true"><path d="${ARCH_PATH}" fill="none" stroke="#C2A06A" stroke-width="1.5" vector-effect="non-scaling-stroke"/></svg>
  <div class="arch absolute inset-[10px] overflow-hidden">${imgHtml}</div>
</div>`;

/* ---------- Images ---------- */
export const alt = {
  'cabinet-ancien': 'Armoire ancienne en bois sombre ornée de chandeliers dans un salon feutré',
  'tapis-kilim': 'Tapis kilim ancien aux motifs géométriques rouges et bleus',
  'tableau-cadre-dore': 'Tableau de paysage dans un cadre doré sur un mur clair',
  'bronze-penseur': 'Sculpture en bronze patiné, le Penseur de Rodin',
  'argenterie': 'Service à thé ancien en argent et laiton sur un plateau ouvragé',
  'montre-gousset': 'Montre de poche ancienne en or avec sa chaîne sur velours bleu nuit',
  'riad-patio': 'Patio d’un riad marocain traditionnel aux zelliges et boiseries',
  'boutique-mobilier': 'Mobilier ancien présenté dans une boutique d’antiquités',
  'lanterne': 'Lanterne marocaine ancienne posée sur un plancher en bois',
  'buffet-patine': 'Buffet ancien patiné vert-de-gris et vase en terre cuite dans la pénombre',
  'riad-arche': 'Cour d’un riad marocain vue à travers une arche sculptée, sol en zellige',
  'fes-porte-bleue': 'Porte monumentale de la médina de Fès ornée de zelliges bleus',
  'casablanca-hassan-ii': 'Mosquée Hassan II et son minaret à Casablanca',
  'rabat-oudayas': 'Remparts de la kasbah des Oudayas face à l’océan à Rabat',
  'tanger-maison-bleue': 'Maisons bleues et escalier dans la médina de Tanger',
  'marrakech-souk-lanternes': 'Lanternes en cuivre et en verre dans un souk de Marrakech',
  'agadir-plage': 'Baie d’Agadir et sa plage au pied des montagnes',
  'zellige-fontaine': 'Fontaine en zellige sous une arche sculptée',
  'the-menthe-theiere': 'Théière en argent et verres à thé à la menthe posés sur un tapis rouge',
  'tapis-medina': 'Tapis marocains présentés dans une demeure de la médina',
  'salon-marocain-arche': 'Salon marocain avec porte en bois sculpté et arche ornée de zelliges',
  'fes-medina-vue': 'Vue aérienne de la médina de Fès'
};
export const img = (n, cls = 'h-full w-full object-cover', { eager = false, pos = '' } = {}) =>
  `<img src="assets/img/${n}.jpg" alt="${alt[n]}" class="${cls}${(pos || (n === 'tableau-cadre-dore' ? 'object-[75%_50%]' : '')) ? ' ' + (pos || 'object-[75%_50%]') : ''}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

/* ---------- En-tête / pied de page ---------- */
export const header = (cur) => `
  <a href="#contenu" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-emerald-900 focus:px-4 focus:py-2 focus:text-champagne-50">Aller au contenu</a>
  <header data-header class="sticky top-0 z-50 bg-champagne-50 transition-shadow duration-[250ms]">
    <div class="container-x flex h-[72px] items-center justify-between gap-6">
      <a href="index.html" class="flex items-center gap-3" aria-label="${NAME} — accueil">
        <span class="relative flex h-11 w-11 items-center justify-center text-emerald-900" aria-hidden="true">
          ${star8('absolute inset-0 h-full w-full text-bronze-500/90')}
          <span class="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-champagne-50 font-display text-lg font-semibold">MV</span>
        </span>
        <span class="leading-none">
          <span class="block whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-emerald-900">Maison Volubilis</span>
          <span class="mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.38em] text-bronze-600">Antiquités · <span class="font-arabic text-[0.8rem] tracking-normal">المغرب</span></span>
        </span>
      </a>
      <nav aria-label="Navigation principale" class="hidden items-center gap-6 lg:flex xl:gap-8">
        ${nav.map(([h, l]) => `<a href="${h}" class="nav-link"${h === cur ? ' aria-current="page"' : ''}>${l}</a>`).join('\n        ')}
      </nav>
      <div class="flex items-center gap-3">
        <a href="contact.html#formulaire" class="btn-primary hidden whitespace-nowrap !px-5 !py-3 lg:inline-flex">Estimation gratuite</a>
        <button type="button" data-menu-toggle aria-expanded="false" aria-controls="menu-mobile" class="inline-flex h-11 w-11 items-center justify-center border border-bronze-500/50 text-emerald-900 lg:hidden">
          <span class="sr-only">Menu</span>
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
    ${frieze()}
    <div id="menu-mobile" data-menu-panel class="mobile-panel absolute inset-x-0 top-full border-b border-bronze-500/25 bg-champagne-50 lg:hidden">
      <nav aria-label="Navigation mobile" class="container-x flex flex-col py-4">
        ${nav.map(([h, l]) => `<a href="${h}" class="border-b border-ink-900/10 py-4 font-display text-2xl text-emerald-900"${h === cur ? ' aria-current="page"' : ''}>${l}</a>`).join('\n        ')}
        <a href="contact.html#formulaire" class="btn-primary mt-5">Demander une estimation</a>
      </nav>
    </div>
  </header>`;

export const footer = (data) => `
  ${frieze()}
  <footer class="on-dark relative bg-emerald-950 bg-zellige-dark text-champagne-100/80">
    <div class="container-x grid gap-12 py-16 md:grid-cols-12">
      <div class="md:col-span-4">
        <p class="font-display text-3xl font-semibold text-champagne-50">Maison Volubilis</p>
        <p class="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.38em] text-bronze-400">Antiquités</p>
        <p class="font-arabic mt-4 text-2xl text-bronze-400" lang="ar" dir="rtl">أهلاً وسهلاً</p>
        <p class="mt-4 max-w-sm text-sm leading-relaxed">Maison d’expertise, d’estimation et de rachat d’antiquités et d’objets d’art, au Maroc et à l’international. Estimation gratuite, confidentielle et sans engagement.</p>
        <a href="contact.html#formulaire" class="btn-primary mt-6 !px-5 !py-3">Accéder au formulaire</a>
      </div>
      <div class="md:col-span-3">
        <p class="eyebrow">Antiquaire par ville</p>
        <ul class="mt-5 space-y-3 text-sm">
          ${data.cities.map((c) => `<li><a class="transition-colors duration-[250ms] hover:text-bronze-400" href="${c.file}">Antiquaire à ${c.name}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div class="md:col-span-3">
        <p class="eyebrow">Rachat &amp; estimation</p>
        <ul class="mt-5 space-y-3 text-sm">
          ${data.categories.map((c) => `<li><a class="transition-colors duration-[250ms] hover:text-bronze-400" href="${c.file}">${c.short}</a></li>`).join('\n          ')}
          ${data.guides.map((g) => `<li><a class="transition-colors duration-[250ms] hover:text-bronze-400" href="${g.file}">${g.short}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div class="md:col-span-2">
        <p class="eyebrow">La Maison</p>
        <ul class="mt-5 space-y-3 text-sm">
          ${nav.map(([h, l]) => `<li><a class="transition-colors duration-[250ms] hover:text-bronze-400" href="${h}">${l}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
    <div class="border-t border-champagne-100/10">
      <div class="container-x flex flex-col gap-2 py-6 text-xs text-champagne-100/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ${NAME} · Site édité par PSA, SASU.</p>
        <p><a class="underline-offset-4 hover:text-bronze-400 hover:underline" href="mentions-legales.html">Mentions légales</a> · Discrétion absolue : vos informations ne sont jamais communiquées sans votre accord.</p>
      </div>
    </div>
  </footer>`;

/* ---------- Emplacement du formulaire ---------- */
export const formSlot = (title = 'Demande d’estimation', lead = 'Décrivez-nous votre objet et joignez quelques photographies. Notre expert l’étudie avec soin ; l’estimation est gratuite, confidentielle et sans aucun engagement de votre part.') => `
        <div id="formulaire" class="form-slot" data-form-slot>
          <p class="eyebrow">Estimation gratuite &amp; confidentielle</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">${title}</h2>
          <p class="mt-4 max-w-prose text-ink-500">${lead}</p>
          <div class="mt-8" data-form-target>
            <!--
              ┌──────────────────────────────────────────────────────────┐
              │ EMPLACEMENT DU FORMULAIRE                                │
              │ Collez ici votre <form>…</form> ou le code d’intégration │
              │ (Formspree, Netlify Forms, Tally, Google Forms, iframe…).│
              │ Supprimez ensuite le bloc « form-slot__placeholder ».    │
              └──────────────────────────────────────────────────────────┘
            -->
            <div class="form-slot__placeholder">
              <p class="font-display text-2xl text-emerald-900">Le formulaire d’estimation prendra place ici</p>
              <p class="mx-auto mt-3 max-w-md text-sm text-ink-500">Emplacement réservé au formulaire de contact et d’estimation, notre unique moyen de contact.</p>
            </div>
          </div>
          <ul class="mt-8 grid gap-3 border-t border-bronze-500/25 pt-6 text-sm text-ink-700 sm:grid-cols-3">
            <li class="flex gap-2">${ic.check}Estimation gratuite</li>
            <li class="flex gap-2">${ic.check}Confidentialité absolue</li>
            <li class="flex gap-2">${ic.check}Sans engagement</li>
          </ul>
        </div>`;

export const ctaBand = (heading = 'Une pièce à faire estimer ?', text = 'Confiez-nous quelques photographies : nous étudions votre objet en toute discrétion, sans frais et sans engagement.') => `
    <section class="on-dark bg-emerald-900 bg-zellige-dark" aria-labelledby="cta-title">
      <div class="container-x section-y">
        <div class="grid items-start gap-12 lg:grid-cols-12">
          <div class="lg:col-span-5" data-reveal>
            <p class="eyebrow">Estimation &amp; rachat</p>
            <h2 id="cta-title" class="mt-4 text-4xl text-champagne-50 sm:text-5xl">${heading}</h2>
            <div class="mt-6">${divider(true)}</div>
            <p class="mt-6 max-w-md text-lg leading-relaxed text-champagne-100/80">${text}</p>
            <p class="mt-8 flex items-center gap-3 text-sm text-champagne-100/70">${ic.lock.replace('h-6 w-6', 'h-5 w-5 text-bronze-400')}Déplacement à domicile possible, au Maroc comme à l’international.</p>
          </div>
          <div class="lg:col-span-7" data-reveal style="--i:2">
            ${formSlot()}
          </div>
        </div>
      </div>
    </section>`;

/* ---------- FAQ ---------- */
export const faqBlock = (items, { title = 'Questions fréquentes', eyebrow = 'Avant de faire votre demande', id = 'faq-title', open = true } = {}) => `
    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="${id}">
      <div class="container-x section-y grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4" data-reveal>
          <p class="eyebrow">${eyebrow}</p>
          <h2 id="${id}" class="mt-4 text-4xl sm:text-5xl">${title}</h2>
        </div>
        <div class="faq lg:col-span-8" data-reveal style="--i:1">
          ${items.map(([q, a], i) => `<details${open && i === 0 ? ' open' : ''}><summary>${q}${ic.chev}</summary><div>${a}</div></details>`).join('\n          ')}
        </div>
      </div>
    </section>`;

const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
export const faqJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: stripTags(q), acceptedAnswer: { '@type': 'Answer', text: stripTags(a) } }))
});

export const breadcrumb = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, file], i) => ({ '@type': 'ListItem', position: i + 1, name, ...(SITE_URL ? { item: `${SITE_URL}/${file === 'index.html' ? '' : file}` } : {}) }))
});

export const crumbsHtml = (trail) => `<nav aria-label="Fil d’Ariane" class="text-xs uppercase tracking-[0.16em] text-champagne-100/60"><ol class="flex flex-wrap items-center gap-2">${trail.map(([n, f], i) => i < trail.length - 1 ? `<li><a class="hover:text-bronze-400" href="${f}">${n}</a></li><li aria-hidden="true">/</li>` : `<li aria-current="page" class="text-bronze-400">${n}</li>`).join('')}</ol></nav>`;

/* ---------- Gabarit de page ---------- */
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: NAME,
  description: 'Maison d’expertise, d’estimation et de rachat d’antiquités et d’objets d’art au Maroc et à l’international.',
  areaServed: [
    ...['Casablanca', 'Marrakech', 'Rabat', 'Tanger', 'Fès', 'Agadir'].map((n) => ({ '@type': 'City', name: n })),
    { '@type': 'Country', name: 'Maroc' }
  ],
  knowsAbout: ['Antiquités', 'Mobilier ancien', 'Tapis berbères anciens', 'Bijoux anciens', 'Tableaux', 'Bronzes', 'Argenterie', 'Horlogerie ancienne'],
  ...(SITE_URL ? { url: SITE_URL } : {})
};

export const page = ({ file, title, desc, body, schemas = [], ogImage = 'riad-arche', noindex = false }) => {
  const url = SITE_URL ? `${SITE_URL}/${file === 'index.html' ? '' : file}` : '';
  const ld = [orgJsonLd, ...schemas];
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  ${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
  <meta name="theme-color" content="#0B3027">
  ${url ? `<link rel="canonical" href="${url}">\n  <meta property="og:url" content="${url}">` : ''}
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_MA">
  <meta property="og:site_name" content="${NAME}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${SITE_URL ? SITE_URL + '/' : ''}assets/img/${ogImage}.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230B3027'/%3E%3Cpolygon points='32,4 38,14 50,10 46,22 58,32 46,42 50,54 38,50 32,60 26,50 14,54 18,42 6,32 18,22 14,10 26,14' fill='%23C2A06A'/%3E%3Ctext x='32' y='39' font-family='Georgia,serif' font-size='18' text-anchor='middle' fill='%230B3027'%3EMV%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script>document.documentElement.classList.add('js');</script>
  ${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ')}
</head>
<body>
${archSvgDefs}
${header(file)}
  <main id="contenu">
${body}
  </main>
${footer(page.data)}
  <script src="assets/js/main.js" defer></script>
</body>
</html>
`;
};

import { NAME } from './config.mjs';
import { ic, pinSm, star8, divider, frieze, archFrame, img, alt, formSlot, ctaBand, faqBlock, faqJsonLd, breadcrumb, crumbsHtml, page } from './ui.mjs';
import { cities, categories, guides } from './data.mjs';

const cityById = Object.fromEntries(cities.map((c) => [c.id, c]));
const slug = (s) => s.toLowerCase().replace(/è/g, 'e');

/* ---------- Blocs partagés ---------- */
const hero = ({ kicker, h1, lead, crumbs, imgName, imgPos = '', ratio = 'aspect-[4/5]' }) => `
    <section class="on-dark relative overflow-hidden bg-emerald-950 bg-zellige-dark" aria-labelledby="page-title">
      <div class="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-12">
        <div class="lg:col-span-7">
          ${crumbs ? `<div data-reveal class="mb-8">${crumbsHtml(crumbs)}</div>` : ''}
          <p class="eyebrow" data-reveal>${kicker}</p>
          <h1 id="page-title" class="mt-5 text-5xl font-medium leading-[1.04] tracking-tight text-champagne-50 sm:text-6xl" data-reveal style="--i:1">${h1}</h1>
          <p class="mt-8 max-w-xl text-lg leading-relaxed text-champagne-100/80" data-reveal style="--i:2">${lead}</p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal style="--i:3">
            <a href="contact.html#formulaire" class="btn-primary">Demander une estimation gratuite</a>
          </div>
        </div>
        <div class="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md" data-reveal style="--i:2">
          ${archFrame(img(imgName, 'h-full w-full object-cover', { eager: true, pos: imgPos }), ratio)}
        </div>
      </div>
    </section>
    ${frieze()}`;

const steps = (light = true) => `
    <section class="on-dark bg-emerald-900 bg-zellige-dark" aria-labelledby="process-title">
      <div class="container-x section-y">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Le processus d’estimation</p>
          <h2 id="process-title" class="mt-4 text-4xl text-champagne-50 sm:text-5xl">Trois étapes, aucune obligation</h2>
          <div class="mt-6">${divider(true)}</div>
        </div>
        <ol class="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          ${[
            ['1', 'Envoi des photos', 'Photographiez votre objet sous plusieurs angles, signatures et marques comprises, puis transmettez-nous le tout via le formulaire.', ic.camera],
            ['2', 'Étude par l’expert', 'Notre expert examine la provenance, l’époque, l’état et la rareté de la pièce, en toute confidentialité.', ic.eye],
            ['3', 'Proposition d’achat sans engagement', 'Nous vous remettons une proposition de rachat argumentée. Vous restez entièrement libre de l’accepter ou non.', ic.hand]
          ].map(([n, t, d, i], k) => `<li data-reveal style="--i:${k}">
            <div class="relative flex h-20 w-20 items-center justify-center text-bronze-500">${star8('absolute inset-0 h-full w-full')}<span class="relative font-display text-3xl font-semibold text-emerald-950">${n}</span></div>
            <span class="mt-6 block text-bronze-400">${i}</span>
            <h3 class="mt-3 text-2xl text-champagne-50 sm:text-3xl">${t}</h3>
            <p class="mt-3 leading-relaxed text-champagne-100/75">${d}</p>
          </li>`).join('\n          ')}
        </ol>
        <div class="mt-14" data-reveal><a href="contact.html#formulaire" class="btn-primary">Commencer mon estimation</a></div>
      </div>
    </section>`;

const cityCards = (list, { heading = 'Six villes, un même niveau d’exigence', eyebrow = 'Antiquaire par ville' } = {}) => `
    <section class="section-y" aria-labelledby="villes-title">
      <div class="container-x">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">${eyebrow}</p>
          <h2 id="villes-title" class="mt-4 text-4xl sm:text-5xl">${heading}</h2>
          <div class="mt-6">${divider()}</div>
        </div>
        <ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${list.map((c, k) => `<li data-reveal style="--i:${k % 3}">
            <a href="${c.file}" class="art-card group block aspect-[4/5]">
              ${img(c.photo, 'h-full w-full object-cover', { pos: c.pos })}
              <div class="art-card__body">
                <p class="eyebrow eyebrow-light">Antiquaire</p>
                <h3 class="mt-1 font-display text-3xl text-champagne-50">${c.name}</h3>
                <p class="mt-2 text-sm leading-relaxed text-champagne-100/85">${c.lead.split('.')[0]}.</p>
                <span class="link-arrow mt-4 !text-bronze-400">Estimation à ${c.name} ${ic.arrow}</span>
              </div>
            </a>
          </li>`).join('\n          ')}
        </ul>
      </div>
    </section>`;

const relatedLinks = (items) => `
    <section class="section-y" aria-labelledby="related-title">
      <div class="container-x">
        <p class="eyebrow" data-reveal>À découvrir aussi</p>
        <h2 id="related-title" class="mt-4 text-3xl sm:text-4xl" data-reveal style="--i:1">Pour aller plus loin</h2>
        <ul class="mt-8 grid gap-px border border-bronze-500/30 bg-bronze-500/30 sm:grid-cols-2 lg:grid-cols-3">
          ${items.map(([t, d, f], k) => `<li class="bg-champagne-50" data-reveal style="--i:${k % 3}"><a href="${f}" class="group block h-full p-7 transition-colors duration-[250ms] hover:bg-champagne-100"><h3 class="font-display text-2xl text-emerald-900">${t}</h3><p class="mt-2 text-sm leading-relaxed text-ink-500">${d}</p><span class="link-arrow mt-4">Lire ${ic.arrow}</span></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>`;

const allRelated = (excludeFile) => [
  ...categories.map((c) => [c.short, c.lead.split('.')[0] + '.', c.file]),
  ...guides.map((g) => [g.short, g.lead.split('.')[0] + '.', g.file])
].filter(([, , f]) => f !== excludeFile);

const serviceLd = (name, desc, areaName) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description: desc,
  provider: { '@type': 'LocalBusiness', name: NAME },
  areaServed: { '@type': areaName === 'Maroc' ? 'Country' : 'City', name: areaName },
  offers: { '@type': 'Offer', description: 'Estimation gratuite, confidentielle et sans engagement' }
});

/* =====================================================================
   ACCUEIL
   ===================================================================== */
const homeFaq = [
  ['L’estimation est-elle réellement gratuite ?', 'Oui. L’estimation est entièrement gratuite et ne vous engage à rien. Vous n’avez aucune obligation de vendre.'],
  ['Mes informations resteront-elles confidentielles ?', 'Absolument. La discrétion est au cœur de notre métier : vos coordonnées, vos objets et leur valeur ne sont jamais divulgués sans votre accord.'],
  ['Pouvez-vous vous déplacer chez moi ?', 'Oui, un déplacement à domicile est possible dans l’ensemble du Maroc et à l’international, selon la nature et l’importance des pièces.'],
  ['Quels objets rachetez-vous ?', 'Mobilier ancien, tapis et textiles rares, tableaux, bronzes et sculptures, argenterie, bijoux et horlogerie, ainsi que de nombreux objets d’art et de collection. Consultez la page <a class="text-bronze-700 underline underline-offset-4" href="objets.html">Objets recherchés</a>.'],
  ['Quelles photos dois-je envoyer ?', 'Une vue d’ensemble, des détails, les signatures ou poinçons, les dimensions et les éventuels défauts. Le détail des consignes se trouve sur la page <a class="text-bronze-700 underline underline-offset-4" href="contact.html#photos">de demande d’estimation</a>.']
];

const expertise = [
  ['Mobilier ancien', 'Commodes, buffets, vitrines, coffres, boiseries et sièges d’époque, du mobilier marocain à l’Art déco.', 'cabinet-ancien', 'mobilier-ancien-marocain.html', 'lg:col-span-7', 'aspect-[4/3] lg:aspect-auto lg:h-[460px]'],
  ['Tapis & Textiles rares', 'Tapis berbères, kilims, tissages, broderies et soieries anciennes.', 'tapis-medina', 'tapis-berberes-anciens.html', 'lg:col-span-5', 'aspect-[4/3] lg:aspect-auto lg:h-[460px]'],
  ['Tableaux & Peintures d’Orient', 'Huiles, aquarelles et dessins, orientalistes ou modernes, signés ou attribués.', 'tableau-cadre-dore', 'tableaux-peinture-marocaine.html', 'lg:col-span-4', 'aspect-[4/5]'],
  ['Bronzes & Sculptures', 'Bronzes patinés, marbres, statuettes et sculptures d’artistes ou d’atelier.', 'bronze-penseur', 'objets.html#bronze-penseur', 'lg:col-span-4', 'aspect-[4/5]'],
  ['Argenterie', 'Services à thé, plateaux, couverts et orfèvrerie poinçonnée, d’Europe et du Maghreb.', 'argenterie', 'objets.html#argenterie', 'lg:col-span-4', 'aspect-[4/5]'],
  ['Bijoux & Horlogerie', 'Bijoux berbères et anciens, parures, montres de poche et pièces d’horlogerie.', 'montre-gousset', 'bijoux-berberes-anciens.html', 'lg:col-span-12', 'aspect-[4/3] sm:aspect-[16/7]']
];

export const home = () => page({
  file: 'index.html',
  title: 'Antiquaire au Maroc : estimation et rachat d’antiquités',
  desc: 'Antiquaire au Maroc : estimation gratuite et confidentielle, rachat de mobilier ancien, tapis berbères, tableaux, bronzes, argenterie et bijoux. Déplacement à domicile dans tout le Maroc.',
  schemas: [faqJsonLd(homeFaq)],
  body: `
    <!-- HERO -->
    <section class="on-dark relative overflow-hidden bg-emerald-950 bg-zellige-dark" aria-labelledby="hero-title">
      <div class="container-x grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div class="lg:col-span-7">
          <p class="eyebrow" data-reveal>Antiquaire · Expertise · Rachat</p>
          <h1 id="hero-title" class="mt-6 text-5xl font-medium leading-[1.02] tracking-tight text-champagne-50 sm:text-6xl xl:text-7xl" data-reveal style="--i:1">
            L’expertise, l’estimation et le rachat d’<em class="font-medium italic text-bronze-400">antiquités</em> au Maroc.
          </h1>
          <p class="mt-8 max-w-xl text-lg leading-relaxed text-champagne-100/80" data-reveal style="--i:2">
            Des riads de Marrakech aux villas de Casablanca, des demeures de Fès aux maisons de Tanger : la Maison Volubilis étudie vos pièces avec rigueur et discrétion, chez vous si vous le souhaitez.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row" data-reveal style="--i:3">
            <a href="contact.html#formulaire" class="btn-primary">Demander une estimation gratuite</a>
            <a href="objets.html" class="btn-outline-light">Objets recherchés</a>
          </div>
          <ul class="mt-12 grid gap-5 border-t border-champagne-100/15 pt-8 sm:grid-cols-3" data-reveal style="--i:4">
            <li class="flex items-start gap-3 text-sm text-champagne-100"><span class="text-bronze-400">${ic.lock}</span><span>Estimation Gratuite &amp; Confidentielle</span></li>
            <li class="flex items-start gap-3 text-sm text-champagne-100"><span class="text-bronze-400">${ic.globe}</span><span>Déplacement au Maroc &amp; International</span></li>
            <li class="flex items-start gap-3 text-sm text-champagne-100"><span class="text-bronze-400">${ic.gem}</span><span>Expertise Objets d’Art</span></li>
          </ul>
        </div>
        <div class="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md" data-reveal style="--i:2">
          ${archFrame(img('riad-arche', 'h-full w-full object-cover', { eager: true }), 'aspect-[3/4]')}
          <figure class="absolute -bottom-5 -left-3 w-32 border border-bronze-500/60 bg-emerald-950 p-1.5 sm:-left-10 sm:w-40">
            ${img('the-menthe-theiere', 'aspect-[4/5] w-full object-cover')}
          </figure>
        </div>
      </div>
      <div class="border-t border-champagne-100/10">
        <ul class="container-x grid grid-cols-3 gap-x-2 gap-y-5 py-7 text-center sm:grid-cols-6" aria-label="Villes d’intervention">
          ${cities.map((c) => `<li><a href="${c.file}" class="group block"><span class="block text-[0.72rem] uppercase tracking-[0.22em] text-champagne-100/80 transition-colors duration-[250ms] group-hover:text-bronze-400">${c.name}</span></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
    ${frieze()}

    <!-- DOMAINES D'EXPERTISE -->
    <section class="section-y" aria-labelledby="expertise-title">
      <div class="container-x">
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-reveal>
            <p class="eyebrow">Domaines d’expertise</p>
            <h2 id="expertise-title" class="mt-4 max-w-2xl text-4xl sm:text-5xl">Six univers, un même regard exigeant</h2>
            <div class="mt-6">${divider()}</div>
          </div>
          <a href="objets.html" class="link-arrow" data-reveal style="--i:1">Voir tous les objets recherchés ${ic.arrow}</a>
        </div>
        <ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          ${expertise.map(([t, d, im, href, span, h], i) => `<li class="${span}" data-reveal style="--i:${i % 3}">
            <a href="${href}" class="art-card group block ${h}">
              ${img(im)}
              <div class="art-card__body">
                <h3 class="font-display text-2xl text-champagne-50 sm:text-3xl">${t}</h3>
                <p class="mt-2 max-w-md text-sm leading-relaxed text-champagne-100/85">${d}</p>
              </div>
            </a>
          </li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <!-- L'AME DU MAROC -->
    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="ame-title">
      <div class="container-x section-y grid items-center gap-14 lg:grid-cols-12">
        <div class="grid grid-cols-6 gap-4 lg:col-span-6" data-reveal>
          <div class="col-span-4 row-span-2">${archFrame(img('zellige-fontaine'), 'aspect-[3/4]')}</div>
          <div class="col-span-2 aspect-[3/4] overflow-hidden">${img('marrakech-souk-lanternes')}</div>
          <div class="col-span-2 aspect-[3/4] overflow-hidden">${img('fes-porte-bleue')}</div>
        </div>
        <div class="lg:col-span-6 lg:pl-8">
          <p class="eyebrow" data-reveal>Un patrimoine à transmettre</p>
          <h2 id="ame-title" class="mt-4 text-4xl sm:text-5xl" data-reveal style="--i:1">De la médina au riad, des objets qui racontent le Maroc</h2>
          <div class="mt-6" data-reveal style="--i:2">${divider()}</div>
          <p class="mt-6 max-w-prose text-lg leading-relaxed text-ink-500" data-reveal style="--i:2">
            Boiseries de cèdre, cuivres ciselés, tapis de l’Atlas, zelliges, bijoux amazighs, poteries de Fès : chaque région du Royaume a laissé des pièces que l’on retrouve aujourd’hui dans les maisons de famille. Nous les regardons avec le respect qu’elles méritent.
          </p>
          <p class="mt-4 max-w-prose leading-relaxed text-ink-500" data-reveal style="--i:3">
            Notre rôle : reconnaître ce qui a de la valeur, l’expliquer simplement, puis, si vous le souhaitez, donner à ces objets une nouvelle vie auprès de collectionneurs passionnés.
          </p>
          <a href="a-propos.html" class="link-arrow mt-8" data-reveal style="--i:4">Découvrir la Maison ${ic.arrow}</a>
        </div>
      </div>
    </section>

${steps()}

${cityCards(cities)}

    <!-- RÉASSURANCE -->
    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="presence-title">
      <div class="container-x section-y grid items-center gap-14 lg:grid-cols-12">
        <div class="lg:col-span-5" data-reveal>
          ${archFrame(img('salon-marocain-arche'), 'aspect-[3/4]', 'mx-auto max-w-sm')}
        </div>
        <div class="lg:col-span-7 lg:pl-10">
          <p class="eyebrow" data-reveal>Réassurance &amp; présence au Maroc</p>
          <h2 id="presence-title" class="mt-4 text-4xl sm:text-5xl" data-reveal style="--i:1">Une maison de confiance, partout où se trouvent vos trésors</h2>
          <p class="mt-6 max-w-prose text-lg leading-relaxed text-ink-500" data-reveal style="--i:2">
            Succession, déménagement, collection à transmettre ou simple curiosité : nous accueillons chaque demande avec le même respect. Notre intervention est gratuite, notre discrétion absolue et notre proposition ne vous engage en rien.
          </p>
          <dl class="mt-10 grid gap-8 sm:grid-cols-2">
            ${[
              [ic.lock, 'Confidentialité absolue', 'Votre identité, vos objets et leur valeur restent strictement entre nous.'],
              [ic.home, 'Déplacement à domicile', 'L’expert peut se rendre chez vous pour examiner les pièces sur place.'],
              [ic.hand, 'Aucun engagement', 'Vous décidez librement, sans frais ni obligation de vendre.'],
              [ic.gem, 'Expertise reconnue', 'Un regard spécialisé sur le mobilier, les tapis, les tableaux, les bronzes et l’orfèvrerie.']
            ].map(([i, t, d], k) => `<div class="flex gap-4" data-reveal style="--i:${k}"><span class="text-bronze-600">${i}</span><div><dt class="font-display text-2xl text-emerald-900">${t}</dt><dd class="mt-1 text-sm leading-relaxed text-ink-500">${d}</dd></div></div>`).join('\n            ')}
          </dl>
          <div class="mt-10 flex flex-wrap gap-4 border-t border-bronze-500/25 pt-8" data-reveal>
            <a href="vendre-antiquites-maroc.html" class="link-arrow">Guide : vendre ses antiquités ${ic.arrow}</a>
            <a href="estimation-succession.html" class="link-arrow">Succession &amp; héritage ${ic.arrow}</a>
          </div>
        </div>
      </div>
    </section>

${faqBlock(homeFaq, { eyebrow: 'Questions fréquentes', title: 'Avant de faire votre demande' })}
${ctaBand()}`
});

/* =====================================================================
   OBJETS
   ===================================================================== */
const objets = [
  ['cabinet-ancien', 'Mobilier ancien', 'Pour collectionneurs & négoce', ['Commodes, secrétaires, bureaux et bonheurs-du-jour', 'Buffets, vitrines, bibliothèques et armoires d’époque', 'Coffres, portes sculptées et boiseries marocaines', 'Mobilier Art déco, andalou et colonial'], 'aspect-[4/3]', 'mobilier-ancien-marocain.html'],
  ['tapis-medina', 'Tapis & Textiles rares', 'Pièces de collection', ['Tapis berbères anciens : Beni Ouarain, Azilal, boucherouite', 'Kilims, hanbels et tissages de l’Atlas', 'Tapis anciens de Perse, d’Anatolie et du Caucase', 'Soieries, broderies de Fès et de Rabat, tentures'], 'aspect-[3/4]', 'tapis-berberes-anciens.html'],
  ['tableau-cadre-dore', 'Tableaux & Peintures d’Orient', 'Signés ou attribués', ['Huiles et aquarelles orientalistes', 'Peinture moderne et contemporaine marocaine', 'Dessins, gravures et affiches anciennes', 'Cadres anciens, dorés et sculptés'], 'aspect-[4/3]', 'tableaux-peinture-marocaine.html'],
  ['bronze-penseur', 'Bronzes & Sculptures', 'Œuvres d’artistes et d’ateliers', ['Bronzes patinés signés, fonte d’édition ou d’atelier', 'Marbres, albâtres et sculptures en pierre', 'Statuettes, animaliers et groupes décoratifs', 'Objets d’Extrême-Orient et d’Afrique'], 'aspect-[3/4]', null],
  ['argenterie', 'Argenterie', 'Orfèvrerie poinçonnée', ['Services à thé et à café, théières et plateaux', 'Couverts, ménagères et pièces de forme', 'Argent massif et métal argenté de belle facture', 'Orfèvrerie et cuivres ciselés du Maghreb'], 'aspect-[3/4]', null],
  ['montre-gousset', 'Bijoux & Horlogerie', 'Pièces précieuses', ['Montres de poche, de col et pendulettes', 'Bijoux anciens, parures et pièces signées', 'Bijoux berbères en argent, ambre et corail', 'Pendules, cartels et horloges de parquet'], 'aspect-[4/3]', 'bijoux-berberes-anciens.html']
];
const objetsFaq = [
  ['Quels objets anciens recherchez-vous au Maroc ?', 'Mobilier ancien, tapis berbères et textiles rares, tableaux, bronzes, argenterie, bijoux, horlogerie, luminaires, céramiques, livres et manuscrits, ainsi que des collections complètes.'],
  ['Rachetez-vous un seul objet ou seulement des collections ?', 'Les deux : une pièce unique comme un ensemble complet peuvent être étudiés.'],
  ['Mon objet est abîmé ou restauré, l’étudiez-vous quand même ?', 'Oui. Nous préférons voir l’objet tel qu’il est, avec ses restaurations éventuelles.']
];
export const objetsPage = () => page({
  file: 'objets.html',
  title: 'Objets recherchés : rachat d’antiquités et d’objets d’art',
  desc: 'Mobilier ancien, tapis berbères, tableaux, bronzes, argenterie, bijoux et horlogerie : découvrez les pièces recherchées par la Maison Volubilis pour ses collectionneurs.',
  ogImage: 'tapis-medina',
  schemas: [faqJsonLd(objetsFaq), breadcrumb([['Accueil', 'index.html'], ['Objets recherchés', 'objets.html']])],
  body: `${hero({ kicker: 'Objets recherchés', h1: 'Les pièces que recherchent nos collectionneurs', lead: 'Pour alimenter notre clientèle de collectionneurs, nous rachetons des objets d’art, du mobilier ancien et des pièces de collection, d’une pièce unique à une collection entière.', crumbs: [['Accueil', 'index.html'], ['Objets recherchés', 'objets.html']], imgName: 'salon-marocain-arche' })}

    <section class="section-y" aria-label="Catégories d’objets">
      <div class="container-x">
        <ul class="grid gap-x-8 gap-y-16 md:grid-cols-2">
          ${objets.map(([im, t, tag, list, ratio, more], k) => `<li id="${im}" class="${k % 2 ? 'md:mt-20' : ''}" data-reveal>
            <div class="${ratio} overflow-hidden">${img(im)}</div>
            <p class="eyebrow mt-6">${tag}</p>
            <h2 class="mt-2 text-3xl sm:text-4xl">${t}</h2>
            <ul class="mt-5 space-y-2.5 text-ink-700">
              ${list.map((l) => `<li class="flex gap-3">${ic.check}<span>${l}</span></li>`).join('\n              ')}
            </ul>
            <div class="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <a href="contact.html#formulaire" class="link-arrow">Faire estimer une pièce ${ic.arrow}</a>
              ${more ? `<a href="${more}" class="link-arrow">En savoir plus ${ic.arrow}</a>` : ''}
            </div>
          </li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="autres-title">
      <div class="container-x section-y grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5" data-reveal>
          <p class="eyebrow">Et aussi</p>
          <h2 id="autres-title" class="mt-4 text-4xl sm:text-5xl">Luminaires, poteries &amp; curiosités</h2>
          <p class="mt-6 max-w-md leading-relaxed text-ink-500">Notre intérêt ne s’arrête pas aux grandes catégories. Une pièce singulière mérite toujours d’être regardée.</p>
          <div class="mt-8 max-w-xs">${archFrame(img('lanterne'), 'aspect-[3/4]')}</div>
        </div>
        <div class="lg:col-span-7">
          <ul class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            ${[
              ['Luminaires & lanternes', 'Lustres, appliques, lanternes en cuivre ou en laiton, lampes anciennes.'],
              ['Céramiques & poteries', 'Faïences de Fès et de Safi, porcelaines d’Europe et d’Asie, grès et terres cuites.'],
              ['Verrerie & cristal', 'Cristaux signés, verreries émaillées, flacons et carafes anciennes.'],
              ['Livres & manuscrits', 'Éditions anciennes, manuscrits, cartes, gravures et documents d’archives.'],
              ['Art islamique & amazigh', 'Coffres, boiseries sculptées, zelliges anciens et pièces ethnographiques.'],
              ['Collections complètes', 'Successions, cabinets de curiosités et ensembles cohérents, étudiés dans leur globalité.']
            ].map(([t, d], k) => `<li data-reveal style="--i:${k % 2}"><h3 class="font-display text-2xl text-emerald-900">${t}</h3><p class="mt-2 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n            ')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section-y" aria-labelledby="criteres-title">
      <div class="container-x">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Notre regard</p>
          <h2 id="criteres-title" class="mt-4 text-4xl sm:text-5xl">Ce que l’expert observe</h2>
          <div class="mt-6">${divider()}</div>
        </div>
        <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          ${[
            ['Provenance', 'Origine, historique de la pièce, documents et anciennes collections.'],
            ['Authenticité', 'Matériaux, techniques de fabrication, signatures, poinçons et marques.'],
            ['État', 'Conservation, restaurations anciennes ou récentes, patine d’origine.'],
            ['Rareté', 'Qualité d’exécution, importance de l’artiste ou de l’atelier, demande des collectionneurs.']
          ].map(([t, d], k) => `<li class="border-t border-bronze-500/50 pt-6" data-reveal style="--i:${k}"><h3 class="font-display text-2xl text-emerald-900">${t}</h3><p class="mt-3 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
${faqBlock(objetsFaq)}
${ctaBand('Vous possédez l’une de ces pièces ?')}`
});

/* =====================================================================
   ZONES
   ===================================================================== */
export const zonesPage = () => page({
  file: 'zones.html',
  title: 'Antiquaire à domicile au Maroc : zones d’intervention',
  desc: 'Estimation et rachat d’antiquités à domicile à Casablanca, Marrakech, Rabat, Tanger, Fès, Agadir et sur tout le territoire marocain, ainsi qu’à l’international.',
  ogImage: 'fes-medina-vue',
  schemas: [breadcrumb([['Accueil', 'index.html'], ['Zones d’intervention', 'zones.html']])],
  body: `${hero({ kicker: 'Zones d’intervention', h1: 'Nous venons à vous, partout au Maroc', lead: 'Un déplacement à domicile est possible dans toutes les grandes villes du Royaume et sur l’ensemble du territoire, ainsi qu’à l’international. Vous n’avez rien à transporter : l’estimation se fait chez vous, gratuitement et sans engagement.', crumbs: [['Accueil', 'index.html'], ['Zones d’intervention', 'zones.html']], imgName: 'fes-medina-vue', ratio: 'aspect-[3/4]' })}

${cityCards(cities, { heading: 'Six villes, un même niveau d’exigence', eyebrow: 'Principales villes' })}

    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="territoire-title">
      <div class="container-x section-y grid items-center gap-14 lg:grid-cols-12">
        <div class="lg:col-span-6" data-reveal>
          <p class="eyebrow">Tout le territoire</p>
          <h2 id="territoire-title" class="mt-4 text-4xl sm:text-5xl">Au-delà des grandes villes</h2>
          <p class="mt-6 max-w-prose leading-relaxed text-ink-500">Kasbahs du Sud, demeures de Meknès, d’Essaouira, de Tétouan, d’Oujda ou de Chefchaouen : où que se trouve votre collection, nous étudions la possibilité de nous déplacer. Indiquez simplement votre localité dans votre demande.</p>
          <div class="mt-8"><a href="contact.html#formulaire" class="btn-primary">Demander une estimation</a></div>
        </div>
        <div class="lg:col-span-6" data-reveal style="--i:2">
          <div class="aspect-[4/3] overflow-hidden">${img('tapis-kilim')}</div>
        </div>
      </div>
    </section>

    <section class="section-y" aria-labelledby="inter-title">
      <div class="container-x grid gap-14 lg:grid-cols-12">
        <div class="lg:col-span-5" data-reveal>
          <p class="eyebrow">International</p>
          <h2 id="inter-title" class="mt-4 text-4xl sm:text-5xl">Une clientèle et des collections sans frontières</h2>
          <p class="mt-6 leading-relaxed text-ink-500">Vous résidez à l’étranger et détenez des pièces au Maroc, ou l’inverse ? Nous accompagnons les particuliers, les familles et les successions, avec la même confidentialité.</p>
        </div>
        <ol class="space-y-8 lg:col-span-7 lg:pl-10">
          ${[
            ['Vous nous décrivez la situation', 'Localisation des objets, nature de la collection, contraintes éventuelles.'],
            ['Nous étudions les pièces', 'À partir de vos photographies, puis sur place si une visite est nécessaire.'],
            ['Nous vous soumettons une proposition', 'Argumentée et sans engagement : vous restez libre de votre décision.']
          ].map(([t, d], k) => `<li class="flex gap-6 border-t border-bronze-500/40 pt-6" data-reveal style="--i:${k}"><span class="relative flex h-14 w-14 shrink-0 items-center justify-center text-bronze-500">${star8('absolute inset-0 h-full w-full')}<span class="relative font-display text-xl font-semibold text-emerald-950">${k + 1}</span></span><div><h3 class="font-display text-2xl text-emerald-900">${t}</h3><p class="mt-2 text-ink-500">${d}</p></div></li>`).join('\n          ')}
        </ol>
      </div>
    </section>
${ctaBand('Où se trouvent vos pièces ?', 'Précisez simplement la ville ou la région dans votre demande. Nous organisons ensuite la suite avec vous, en toute discrétion.')}`
});

/* =====================================================================
   A PROPOS
   ===================================================================== */
export const aProposPage = () => page({
  file: 'a-propos.html',
  title: 'La Maison Volubilis : expertise, éthique et discrétion',
  desc: 'Découvrez la Maison Volubilis Antiquités : la passion des objets anciens, une éthique exigeante, une discrétion absolue et un réseau d’acheteurs collectionneurs.',
  ogImage: 'lanterne',
  schemas: [breadcrumb([['Accueil', 'index.html'], ['La Maison', 'a-propos.html']])],
  body: `${hero({ kicker: 'La Maison', h1: 'Une passion pour les objets qui ont une histoire', lead: 'Maison Volubilis Antiquités est une maison d’expertise, d’estimation et de rachat d’antiquités et d’objets d’art, qui intervient au Maroc et à l’international.', crumbs: [['Accueil', 'index.html'], ['La Maison', 'a-propos.html']], imgName: 'lanterne' })}

    <section class="section-y" aria-labelledby="histoire-title">
      <div class="container-x grid gap-14 lg:grid-cols-12">
        <div class="lg:col-span-4" data-reveal>
          <p class="eyebrow">Notre histoire</p>
          <h2 id="histoire-title" class="mt-4 text-4xl sm:text-5xl">Le volubilis, une fleur qui s’attache à ce qui dure</h2>
          <div class="mt-6">${divider()}</div>
        </div>
        <div class="space-y-6 text-lg leading-relaxed text-ink-500 lg:col-span-7 lg:col-start-6" data-reveal style="--i:1">
          <p>Le nom de la Maison évoque Volubilis, cité antique du Maroc dont les mosaïques et les bronzes témoignent de plus de deux mille ans d’histoire, et la plante grimpante qui s’enroule autour de ce qu’elle admire.</p>
          <p>Cette image résume notre métier : nous nous attachons à des objets qui ont traversé le temps, nous cherchons à comprendre d’où ils viennent et à leur trouver le collectionneur qui saura les apprécier.</p>
          <p>Chaque pièce, du plus modeste objet de vitrine à la commode d’époque, porte la trace de ceux qui l’ont fabriquée, possédée et aimée. C’est ce regard, patient et respectueux, que nous mettons au service de nos clients.</p>
        </div>
      </div>
    </section>

    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="valeurs-title">
      <div class="container-x section-y">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Nos engagements</p>
          <h2 id="valeurs-title" class="mt-4 text-4xl sm:text-5xl">Éthique, discrétion, expertise</h2>
        </div>
        <ul class="mt-14 grid gap-px border border-bronze-500/30 bg-bronze-500/30 sm:grid-cols-2 lg:grid-cols-4">
          ${[
            [ic.eye, 'Expertise', 'Chaque pièce est étudiée avec rigueur : époque, matériaux, signatures, état et marché.'],
            [ic.lock, 'Discrétion', 'Vos informations, vos objets et leur valeur ne sont jamais divulgués sans votre accord.'],
            [ic.hand, 'Éthique', 'Des propositions honnêtes et argumentées, sans pression, sans engagement.'],
            [ic.globe, 'Réseau', 'Un réseau de collectionneurs, de galeristes et de marchands, au Maroc et à l’étranger.']
          ].map(([i, t, d], k) => `<li class="bg-champagne-50 p-8" data-reveal style="--i:${k}"><span class="text-bronze-600">${i}</span><h3 class="mt-5 text-3xl text-emerald-900">${t}</h3><p class="mt-3 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="section-y" aria-labelledby="reseau-title">
      <div class="container-x grid items-center gap-14 lg:grid-cols-12">
        <div class="lg:col-span-6" data-reveal>
          <div class="aspect-[4/3] overflow-hidden">${img('cabinet-ancien')}</div>
        </div>
        <div class="lg:col-span-6 lg:pl-8">
          <p class="eyebrow" data-reveal>Un réseau d’acheteurs</p>
          <h2 id="reseau-title" class="mt-4 text-4xl sm:text-5xl" data-reveal style="--i:1">Pourquoi nous pouvons racheter vos pièces</h2>
          <p class="mt-6 leading-relaxed text-ink-500" data-reveal style="--i:2">Notre activité repose sur un réseau d’acheteurs : collectionneurs privés, galeries et marchands spécialisés. Connaître la demande réelle nous permet de formuler des propositions de rachat cohérentes avec le marché, et de donner à chaque objet une seconde vie.</p>
          <ul class="mt-8 space-y-3 text-ink-700" data-reveal style="--i:3">
            <li class="flex gap-3">${ic.check}Estimation gratuite et confidentielle</li>
            <li class="flex gap-3">${ic.check}Déplacement à domicile possible, au Maroc et à l’international</li>
            <li class="flex gap-3">${ic.check}Proposition d’achat sans aucun engagement</li>
          </ul>
          <a href="contact.html#formulaire" class="btn-primary mt-10" data-reveal style="--i:4">Demander une estimation</a>
        </div>
      </div>
    </section>
${ctaBand('Faisons connaissance autour de vos objets', 'Parlez-nous de votre pièce ou de votre collection : nous l’étudions avec respect, discrétion et sans engagement.')}`
});

/* =====================================================================
   CONTACT
   ===================================================================== */
export const contactPage = () => page({
  file: 'contact.html',
  title: 'Estimation gratuite d’antiquités : votre demande',
  desc: 'Demandez une estimation gratuite, confidentielle et sans engagement de vos antiquités et objets d’art. Consignes pour photographier vos pièces.',
  ogImage: 'riad-arche',
  schemas: [breadcrumb([['Accueil', 'index.html'], ['Demande d’estimation', 'contact.html']])],
  body: `
    <section class="on-dark bg-emerald-950 bg-zellige-dark" aria-labelledby="page-title">
      <div class="container-x py-20 sm:py-24">
        <p class="eyebrow" data-reveal>Contact &amp; estimation</p>
        <h1 id="page-title" class="mt-5 max-w-3xl text-5xl font-medium leading-[1.04] tracking-tight text-champagne-50 sm:text-6xl" data-reveal style="--i:1">Faites estimer vos objets, en toute confiance</h1>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-champagne-100/80" data-reveal style="--i:2">L’estimation est gratuite, confidentielle et sans engagement. Un déplacement à domicile est possible au Maroc comme à l’international.</p>
      </div>
    </section>
    ${frieze()}

    <section class="section-y" aria-label="Formulaire et consignes">
      <div class="container-x grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-7" data-reveal>
          ${formSlot('Votre demande d’estimation', 'Renseignez vos coordonnées, décrivez votre objet et joignez vos photographies. Votre demande reste strictement confidentielle.')}
        </div>
        <aside class="space-y-8 lg:col-span-5" data-reveal style="--i:2">
          <div class="border border-bronze-500/30 p-8">
            <p class="eyebrow">Comment nous joindre</p>
            <p class="mt-5 leading-relaxed text-ink-700">Le formulaire est notre unique moyen de contact : il garantit la confidentialité de votre demande et nous permet d’étudier votre objet dans de bonnes conditions.</p>
            <p class="mt-5 flex items-start gap-3 text-bronze-600">${pinSm}<span class="text-ink-900">Casablanca, Marrakech, Rabat, Tanger, Fès, Agadir et sur l’ensemble du Maroc</span></p>
            <p class="mt-6 border-t border-bronze-500/25 pt-5 text-sm text-ink-500">Déplacement à domicile possible, au Maroc et à l’international.</p>
          </div>
          <div id="photos" class="on-dark bg-emerald-900 bg-zellige-dark p-8 text-champagne-100/85">
            <p class="eyebrow">Consignes pour vos photos</p>
            <h2 class="mt-3 text-3xl text-champagne-50">Photographier vos objets</h2>
            <ol class="mt-6 space-y-4 text-sm leading-relaxed">
              ${[
                ['Vue d’ensemble', 'Prenez l’objet entier, de face, en pleine lumière naturelle, sur un fond uni.'],
                ['Plusieurs angles', 'Dessus, dessous, côtés et dos : ajoutez ouvertures, tiroirs et intérieurs.'],
                ['Signatures & marques', 'Photographiez signatures, poinçons, cachets, étiquettes et numéros.'],
                ['Détails & défauts', 'Montrez la patine, les restaurations, les éclats ou les manques sans les masquer.'],
                ['Dimensions', 'Indiquez hauteur, largeur et profondeur, ou placez un objet de référence à côté.'],
                ['Documents', 'Joignez factures, certificats ou toute information sur la provenance, si vous en avez.']
              ].map(([t, d], k) => `<li class="flex gap-4"><span class="font-display text-2xl text-bronze-400">${k + 1}</span><span><strong class="font-medium text-champagne-50">${t}.</strong> ${d}</span></li>`).join('\n              ')}
            </ol>
          </div>
          <div class="flex gap-4 border border-bronze-500/30 p-6 text-sm leading-relaxed text-ink-500"><span class="text-bronze-600">${ic.lock}</span><p><strong class="font-medium text-ink-900">Confidentialité absolue.</strong> Vos photographies et vos informations ne sont partagées avec personne sans votre accord explicite.</p></div>
        </aside>
      </div>
    </section>
`
});

/* =====================================================================
   MENTIONS LEGALES
   ===================================================================== */
const row = (k, v) => `<div class="grid gap-1 border-b border-ink-900/10 py-4 sm:grid-cols-3 sm:gap-6"><dt class="text-sm font-medium uppercase tracking-[0.12em] text-bronze-700">${k}</dt><dd class="text-ink-700 sm:col-span-2">${v}</dd></div>`;
const lnk = (h, t, ext) => `<a class="text-bronze-700 underline underline-offset-4" href="${h}"${ext ? ' rel="noopener noreferrer"' : ''}>${t}</a>`;
export const mentionsPage = () => page({
  file: 'mentions-legales.html',
  title: `Mentions légales | ${NAME}`,
  desc: `Mentions légales du site ${NAME} : éditeur, hébergeur, propriété intellectuelle et protection des données personnelles.`,
  noindex: true,
  body: `
    <section class="on-dark bg-emerald-950 bg-zellige-dark" aria-labelledby="page-title">
      <div class="container-x py-20 sm:py-24">
        <p class="eyebrow">Informations légales</p>
        <h1 id="page-title" class="mt-5 text-5xl font-medium leading-[1.04] tracking-tight text-champagne-50 sm:text-6xl">Mentions légales</h1>
      </div>
    </section>
    ${frieze()}
    <section class="section-y">
      <div class="container-x max-w-4xl space-y-16">
        <div>
          <h2 class="text-3xl sm:text-4xl">Éditeur du site</h2>
          <dl class="mt-6 border-t border-ink-900/10">
            ${row('Société', 'PSA')}
            ${row('Forme juridique', 'SASU, société par actions simplifiée unipersonnelle')}
            ${row('Capital social', '10 000,00 €')}
            ${row('Siège social', '2 avenue des Lyonnais, 21200 Beaune, France')}
            ${row('SIREN', '909 703 324')}
            ${row('SIRET (siège)', '909 703 324 00014')}
            ${row('RCS', '909 703 324 R.C.S. Dijon')}
            ${row('TVA intracommunautaire', 'FR46909703324')}
            ${row('Directeur de la publication', 'Le représentant légal de la société PSA')}
            ${row('Contact', 'Exclusivement via le ' + lnk('contact.html#formulaire', 'formulaire de contact et d’estimation') + ' du site.')}
          </dl>
          <p class="mt-6 leading-relaxed text-ink-500">Le site ${NAME} est exploité par la société PSA sous la marque « ${NAME} ».</p>
        </div>
        <div>
          <h2 class="text-3xl sm:text-4xl">Hébergement</h2>
          <dl class="mt-6 border-t border-ink-900/10">
            ${row('Hébergeur', 'Vercel Inc.')}
            ${row('Adresse', '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis')}
            ${row('Site web', lnk('https://vercel.com', 'vercel.com', true))}
          </dl>
        </div>
        <div class="space-y-4 leading-relaxed text-ink-500">
          <h2 class="text-3xl text-ink-900 sm:text-4xl">Propriété intellectuelle</h2>
          <p>L’ensemble des contenus du site (textes, structure, graphismes, marque, logo) est protégé par le droit de la propriété intellectuelle et reste la propriété de la société PSA, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
          <p>Les photographies proviennent de la banque d’images ${lnk('https://www.pexels.com', 'Pexels', true)}, utilisées selon la licence Pexels.</p>
        </div>
        <div class="space-y-4 leading-relaxed text-ink-500">
          <h2 class="text-3xl text-ink-900 sm:text-4xl">Données personnelles</h2>
          <p>Les informations transmises via le formulaire (coordonnées, description et photographies des objets) sont utilisées uniquement pour étudier votre demande d’estimation et y répondre. Elles ne sont ni vendues ni communiquées à des tiers sans votre accord, et sont conservées le temps nécessaire au traitement de votre demande.</p>
          <p>Le formulaire est fourni par le service Tally (${lnk('https://tally.so', 'tally.so', true)}), qui héberge les réponses transmises : son fonctionnement est régi par sa propre politique de confidentialité.</p>
          <p>Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de limitation du traitement de vos données. Pour l’exercer, utilisez le ${lnk('contact.html#formulaire', 'formulaire de contact')} en précisant l’objet de votre demande.</p>
          <p>Vous pouvez également introduire une réclamation auprès de la CNIL (${lnk('https://www.cnil.fr', 'cnil.fr', true)}).</p>
        </div>
        <div class="space-y-4 leading-relaxed text-ink-500">
          <h2 class="text-3xl text-ink-900 sm:text-4xl">Cookies et polices</h2>
          <p>Ce site n’utilise aucun cookie de suivi ou de publicité. Les polices de caractères sont chargées depuis Google Fonts et le formulaire est chargé depuis Tally : ces services peuvent recevoir votre adresse IP lors de l’affichage de la page.</p>
        </div>
        <div class="space-y-4 leading-relaxed text-ink-500">
          <h2 class="text-3xl text-ink-900 sm:text-4xl">Responsabilité</h2>
          <p>Les estimations et propositions de rachat sont données à titre indicatif, gratuitement et sans engagement, sur la base des informations et photographies fournies. Elles ne constituent pas une offre ferme tant qu’un accord écrit n’a pas été conclu entre les parties.</p>
        </div>
      </div>
    </section>`
});

/* =====================================================================
   PAGES VILLES
   ===================================================================== */
export const cityPage = (c) => {
  const others = cities.filter((x) => x.id !== c.id);
  const trail = [['Accueil', 'index.html'], ['Zones d’intervention', 'zones.html'], [`Antiquaire à ${c.name}`, c.file]];
  return page({
    file: c.file, title: c.title, desc: c.desc, ogImage: c.photo,
    schemas: [faqJsonLd(c.faq), breadcrumb(trail), serviceLd(`Estimation et rachat d’antiquités à ${c.name}`, c.desc, c.name)],
    body: `${hero({ kicker: `Antiquaire à ${c.name}`, h1: c.h1, lead: c.lead, crumbs: trail, imgName: c.photo, imgPos: c.pos })}

    <section class="section-y" aria-labelledby="intro-title">
      <div class="container-x grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5" data-reveal>
          <p class="eyebrow">Estimation à ${c.name}</p>
          <h2 id="intro-title" class="mt-4 text-4xl sm:text-5xl">Faire estimer vos objets d’art à ${c.name}</h2>
          <div class="mt-6">${divider()}</div>
        </div>
        <div class="space-y-5 text-lg leading-relaxed text-ink-500 lg:col-span-7" data-reveal style="--i:1">
          ${c.intro.map((p) => `<p>${p}</p>`).join('\n          ')}
          <ul class="grid gap-3 pt-4 text-base text-ink-700 sm:grid-cols-3">
            <li class="flex gap-2">${ic.check}Estimation gratuite</li>
            <li class="flex gap-2">${ic.check}Confidentialité absolue</li>
            <li class="flex gap-2">${ic.check}Sans engagement</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="objets-title">
      <div class="container-x section-y">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Ce que nous rachetons à ${c.name}</p>
          <h2 id="objets-title" class="mt-4 text-4xl sm:text-5xl">Objets d’art et antiquités recherchés</h2>
        </div>
        <ul class="mt-12 grid gap-px border border-bronze-500/30 bg-bronze-500/30 sm:grid-cols-2 lg:grid-cols-3">
          ${c.objects.map(([t, d], k) => `<li class="bg-champagne-50 p-8" data-reveal style="--i:${k % 3}"><span class="font-display text-4xl text-bronze-500/70">0${k + 1}</span><h3 class="mt-3 text-2xl text-emerald-900">${t}</h3><p class="mt-2 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n          ')}
          <li class="flex flex-col justify-center bg-emerald-900 p-8 text-champagne-100" data-reveal style="--i:2"><p class="font-display text-2xl text-champagne-50">Une autre pièce ?</p><p class="mt-2 text-sm text-champagne-100/80">Une pièce singulière mérite toujours d’être regardée.</p><a href="contact.html#formulaire" class="link-arrow mt-4 !text-bronze-400">Nous la présenter ${ic.arrow}</a></li>
        </ul>
      </div>
    </section>

    <section class="section-y" aria-labelledby="quartiers-title">
      <div class="container-x grid items-center gap-12 lg:grid-cols-12">
        <div class="lg:col-span-6" data-reveal>
          <p class="eyebrow">Déplacement à domicile</p>
          <h2 id="quartiers-title" class="mt-4 text-4xl sm:text-5xl">Où intervenons-nous à ${c.name} ?</h2>
          <p class="mt-6 leading-relaxed text-ink-500">L’expert se déplace chez vous, dans les quartiers et communes suivants, et au-delà sur demande :</p>
          <ul class="mt-6 flex flex-wrap gap-2.5">
            ${c.places.map((p) => `<li class="inline-flex items-center gap-2 border border-bronze-500/50 px-4 py-2 text-sm text-emerald-900">${star8('h-3 w-3 text-bronze-500')}${p}</li>`).join('\n            ')}
          </ul>
          <div class="mt-8"><a href="contact.html#formulaire" class="btn-primary">Demander une estimation à ${c.name}</a></div>
        </div>
        <div class="lg:col-span-6" data-reveal style="--i:2">
          <div class="aspect-[4/3] overflow-hidden">${img(c.photo, 'h-full w-full object-cover', { pos: c.pos })}</div>
        </div>
      </div>
    </section>

${steps()}
${faqBlock(c.faq, { title: `Antiquaire à ${c.name} : vos questions`, eyebrow: `Estimation à ${c.name}`, id: 'faq-ville' })}

    <section class="section-y" aria-labelledby="autres-villes-title">
      <div class="container-x">
        <p class="eyebrow" data-reveal>Autres villes</p>
        <h2 id="autres-villes-title" class="mt-4 text-3xl sm:text-4xl" data-reveal style="--i:1">Nous intervenons aussi à</h2>
        <ul class="mt-8 grid grid-cols-2 gap-px border border-bronze-500/30 bg-bronze-500/30 sm:grid-cols-5">
          ${others.map((o) => `<li class="bg-champagne-50"><a href="${o.file}" class="group block px-5 py-6 text-center transition-colors duration-[250ms] hover:bg-champagne-100"><span class="block text-xs uppercase tracking-[0.2em] text-emerald-900">${o.name}</span></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
${ctaBand(`Une pièce à faire estimer à ${c.name} ?`)}`
  });
};

/* =====================================================================
   PAGES CATEGORIES
   ===================================================================== */
export const categoryPage = (c) => {
  const trail = [['Accueil', 'index.html'], ['Objets recherchés', 'objets.html'], [c.short, c.file]];
  const rel = c.related.map((id) => cityById[id]);
  return page({
    file: c.file, title: c.title, desc: c.desc, ogImage: c.photo,
    schemas: [faqJsonLd(c.faq), breadcrumb(trail), serviceLd(c.h1, c.desc, 'Maroc')],
    body: `${hero({ kicker: c.short, h1: c.h1, lead: c.lead, crumbs: trail, imgName: c.photo })}

    <section class="section-y" aria-labelledby="intro-title">
      <div class="container-x grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-5" data-reveal>
          <p class="eyebrow">${c.short}</p>
          <h2 id="intro-title" class="mt-4 text-4xl sm:text-5xl">Un regard d’expert sur chaque pièce</h2>
          <div class="mt-6">${divider()}</div>
          <div class="mt-8 hidden max-w-xs lg:block">${archFrame(img(c.photo2), 'aspect-[3/4]')}</div>
        </div>
        <div class="space-y-5 text-lg leading-relaxed text-ink-500 lg:col-span-7" data-reveal style="--i:1">
          ${c.intro.map((p) => `<p>${p}</p>`).join('\n          ')}
          <ul class="grid gap-3 pt-4 text-base text-ink-700 sm:grid-cols-3">
            <li class="flex gap-2">${ic.check}Estimation gratuite</li>
            <li class="flex gap-2">${ic.check}Confidentialité absolue</li>
            <li class="flex gap-2">${ic.check}Sans engagement</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-champagne-100/70 bg-zellige" aria-labelledby="liste-title">
      <div class="container-x section-y">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Rachat &amp; estimation</p>
          <h2 id="liste-title" class="mt-4 text-4xl sm:text-5xl">${c.listTitle}</h2>
        </div>
        <ul class="mt-12 grid gap-px border border-bronze-500/30 bg-bronze-500/30 sm:grid-cols-2 lg:grid-cols-3">
          ${c.list.map(([t, d], k) => `<li class="bg-champagne-50 p-8" data-reveal style="--i:${k % 3}"><span class="text-bronze-500">${star8('h-5 w-5')}</span><h3 class="mt-4 text-2xl text-emerald-900">${t}</h3><p class="mt-2 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="section-y" aria-labelledby="criteres-title">
      <div class="container-x">
        <div class="max-w-2xl" data-reveal>
          <p class="eyebrow">Notre regard</p>
          <h2 id="criteres-title" class="mt-4 text-4xl sm:text-5xl">Ce que l’expert observe</h2>
        </div>
        <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          ${c.criteria.map(([t, d], k) => `<li class="border-t border-bronze-500/50 pt-6" data-reveal style="--i:${k}"><h3 class="font-display text-2xl text-emerald-900">${t}</h3><p class="mt-3 text-sm leading-relaxed text-ink-500">${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
    </section>

${steps()}
${faqBlock(c.faq, { title: 'Vos questions', eyebrow: c.short, id: 'faq-cat' })}

    <section class="section-y" aria-labelledby="villes-cat-title">
      <div class="container-x">
        <p class="eyebrow" data-reveal>Près de chez vous</p>
        <h2 id="villes-cat-title" class="mt-4 text-3xl sm:text-4xl" data-reveal style="--i:1">Estimation à domicile</h2>
        <ul class="mt-8 flex flex-wrap gap-3" data-reveal style="--i:2">
          ${cities.map((o) => `<li><a href="${o.file}" class="inline-flex items-center gap-3 border border-bronze-500/50 px-5 py-3 text-emerald-900 transition-colors duration-[250ms] hover:bg-emerald-900 hover:text-champagne-50"><span class="text-sm uppercase tracking-[0.16em]">${o.name}</span></a></li>`).join('\n          ')}
        </ul>
      </div>
    </section>
${relatedLinks(allRelated(c.file).slice(0, 3))}
${ctaBand(`Faire estimer : ${c.short.toLowerCase()}`)}`
  });
};

/* =====================================================================
   GUIDES
   ===================================================================== */
export const guidePage = (g) => {
  const trail = [['Accueil', 'index.html'], [g.short, g.file]];
  return page({
    file: g.file, title: g.title, desc: g.desc, ogImage: g.photo,
    schemas: [faqJsonLd(g.faq), breadcrumb(trail), {
      '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.desc,
      author: { '@type': 'Organization', name: NAME }, publisher: { '@type': 'Organization', name: NAME }, inLanguage: 'fr'
    }],
    body: `${hero({ kicker: 'Guide', h1: g.h1, lead: g.lead, crumbs: trail, imgName: g.photo })}

    <section class="section-y" aria-label="Contenu du guide">
      <div class="container-x grid gap-12 lg:grid-cols-12">
        <aside class="lg:col-span-4" data-reveal>
          <div class="lg:sticky lg:top-32">
            <p class="eyebrow">Dans ce guide</p>
            <ol class="mt-5 space-y-3 border-l border-bronze-500/40 pl-5 text-sm text-ink-700">
              ${g.sections.map(([t], k) => `<li><a class="transition-colors duration-[250ms] hover:text-bronze-700" href="#s${k + 1}">${t}</a></li>`).join('\n              ')}
            </ol>
            <a href="contact.html#formulaire" class="btn-primary mt-8">Demander une estimation</a>
          </div>
        </aside>
        <div class="space-y-14 lg:col-span-8">
          ${g.sections.map(([t, ps], k) => `<article id="s${k + 1}" data-reveal>
            <h2 class="text-3xl sm:text-4xl">${t}</h2>
            <div class="mt-5 space-y-4 text-lg leading-relaxed text-ink-500">${ps.map((p) => `<p>${p}</p>`).join('')}</div>
          </article>`).join('\n          ')}
        </div>
      </div>
    </section>
${faqBlock(g.faq, { title: 'Vos questions', eyebrow: 'Guide', id: 'faq-guide' })}
${relatedLinks(allRelated(g.file).slice(0, 3))}
${ctaBand('Prêt à faire estimer vos objets ?')}`
  });
};

/* =====================================================================
   404
   ===================================================================== */
export const notFoundPage = () => page({
  file: '404.html', title: `Page introuvable | ${NAME}`, desc: 'Cette page est introuvable.', noindex: true,
  body: `
    <section class="on-dark bg-emerald-950 bg-zellige-dark">
      <div class="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
        <h1 class="mt-4 text-5xl font-medium text-champagne-50 sm:text-6xl">Cette page est introuvable</h1>
        <p class="mt-6 max-w-lg text-lg text-champagne-100/80">Le lien que vous avez suivi n’existe plus ou a été déplacé.</p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row"><a href="index.html" class="btn-primary">Retour à l’accueil</a><a href="contact.html#formulaire" class="btn-outline-light">Demander une estimation</a></div>
      </div>
    </section>`
});

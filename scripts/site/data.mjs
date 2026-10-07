// Contenus des pages de référencement : villes, catégories d'objets, guides.

export const cities = [
  {
    id: 'casablanca', name: 'Casablanca', file: 'antiquaire-casablanca.html', photo: 'casablanca-hassan-ii', pos: 'object-[50%_30%]',
    title: 'Antiquaire à Casablanca — Estimation et rachat à domicile',
    desc: 'Antiquaire à Casablanca : estimation gratuite et confidentielle, rachat de mobilier ancien, tableaux, bronzes, argenterie et objets d’art. Déplacement à domicile.',
    h1: 'Antiquaire à Casablanca : estimation et rachat à domicile',
    lead: 'Villas Art déco, appartements du Maârif, maisons d’Anfa : la métropole conserve des intérieurs remarquables. Nous nous déplaçons chez vous pour estimer vos pièces, gratuitement et en toute discrétion.',
    intro: [
      'Casablanca a grandi au rythme de l’Art déco et du style néo-mauresque : de la nouvelle médina des Habous aux immeubles du centre-ville, l’architecture a laissé derrière elle un mobilier, des luminaires et des objets d’art qui traversent aujourd’hui les générations.',
      'Que vous déménagiez, réorganisiez une maison de famille ou souhaitiez simplement connaître la valeur d’une pièce, l’expert de la Maison Volubilis se rend à votre domicile, examine chaque objet sur place et vous remet une proposition de rachat argumentée, sans aucune obligation.'
    ],
    places: ['Centre-ville & Habous', 'Maârif', 'Anfa', 'Racine', 'Gauthier', 'Oasis', 'Aïn Diab', 'Bouskoura', 'Dar Bouazza', 'Mohammedia'],
    objects: [
      ['Mobilier Art déco & années 1930 à 1960', 'Buffets, bureaux, fauteuils, bars et consoles de villas casablancaises.'],
      ['Tableaux & peinture moderne marocaine', 'Huiles, gouaches et dessins d’artistes marocains et européens.'],
      ['Bronzes, marbres & sculptures', 'Statuettes, animaliers et pièces de bureau signées ou d’atelier.'],
      ['Argenterie, cristal & luminaires', 'Services, plateaux, lustres, appliques et verreries de qualité.'],
      ['Tapis, pendules & objets de vitrine', 'Tapis anciens, pendules, cartels et curiosités de collection.']
    ],
    faq: [
      ['Intervenez-vous dans tous les quartiers de Casablanca ?', 'Oui. Nous nous déplaçons dans l’ensemble de l’agglomération, du centre-ville à Aïn Diab, ainsi qu’à Mohammedia, Bouskoura et Dar Bouazza.'],
      ['L’estimation à Casablanca est-elle payante ?', 'Non. L’estimation est entièrement gratuite et sans engagement, y compris lorsque l’expert se déplace chez vous.'],
      ['Mes objets resteront-ils confidentiels ?', 'Absolument. Votre identité, vos objets et leur valeur restent strictement confidentiels.'],
      ['Quels objets rachetez-vous à Casablanca ?', 'Mobilier ancien, tableaux, bronzes, argenterie, luminaires, tapis, bijoux anciens et horlogerie. Une pièce inhabituelle mérite toujours d’être regardée.']
    ]
  },
  {
    id: 'marrakech', name: 'Marrakech', file: 'antiquaire-marrakech.html', photo: 'marrakech-souk-lanternes', pos: '',
    title: 'Antiquaire à Marrakech — Estimation et rachat d’objets d’art',
    desc: 'Antiquaire à Marrakech : estimation gratuite et confidentielle de mobilier marocain, tapis berbères, bijoux, luminaires et objets d’art. Rachat à domicile, riads et villas.',
    h1: 'Antiquaire à Marrakech : estimation et rachat d’objets d’art',
    lead: 'Riads de la médina, villas de la Palmeraie, appartements de Guéliz : Marrakech regorge de pièces d’exception. Notre expert vient à vous, sans frais et sans engagement.',
    intro: [
      'Marrakech est depuis des siècles un carrefour de l’artisanat : boiseries sculptées, cuivres ciselés, tapis de l’Atlas, bijoux du Sud, zelliges et luminaires remplissent riads et demeures. Beaucoup de ces pièces ont une histoire que seul un regard spécialisé peut lire.',
      'Nous intervenons dans la médina comme à Guéliz, à l’Hivernage, dans la Palmeraie ou sur la route de l’Ourika. Chaque objet est examiné sur place, avec soin, et donne lieu à une proposition de rachat claire que vous restez libre d’accepter ou non.'
    ],
    places: ['Médina & riads', 'Guéliz', 'Hivernage', 'Palmeraie', 'Route de l’Ourika', 'Targa', 'Amelkis', 'Route de Fès'],
    objects: [
      ['Mobilier & boiseries marocains', 'Coffres, portes sculptées, moucharabiehs, tables incrustées et consoles.'],
      ['Tapis berbères & textiles', 'Tapis de l’Atlas, kilims, hanbels, broderies et tissages anciens.'],
      ['Luminaires, cuivres & laitons', 'Lanternes, lustres, plateaux, théières et objets ciselés.'],
      ['Bijoux berbères & objets d’argent', 'Parures, fibules, bracelets, colliers d’ambre et de corail.'],
      ['Zelliges, poteries & céramiques', 'Panneaux de zellige anciens, poteries et faïences de collection.']
    ],
    faq: [
      ['Pouvez-vous venir dans mon riad en médina ?', 'Oui. Même lorsque l’accès est étroit, l’expert se rend sur place pour examiner vos objets, y compris dans la médina.'],
      ['Estimez-vous le mobilier et les objets marocains ?', 'Oui, c’est un domaine central : coffres, boiseries, tapis berbères, bijoux, cuivres, poteries et zelliges anciens.'],
      ['L’estimation à Marrakech a-t-elle un coût ?', 'Non, elle est gratuite et sans engagement.'],
      ['Vendre depuis l’étranger une pièce située à Marrakech est-il possible ?', 'Oui. Précisez simplement l’emplacement de l’objet dans votre demande, nous organisons la suite avec vous.']
    ]
  },
  {
    id: 'rabat', name: 'Rabat', file: 'antiquaire-rabat.html', photo: 'rabat-oudayas', pos: '',
    title: 'Antiquaire à Rabat — Estimation et rachat d’antiquités',
    desc: 'Antiquaire à Rabat : estimation gratuite et confidentielle d’antiquités, tapis de Rabat, broderies, tableaux, argenterie et mobilier. Déplacement à domicile à Rabat et Salé.',
    h1: 'Antiquaire à Rabat : estimation et rachat d’antiquités',
    lead: 'De l’Agdal à Souissi, de la kasbah des Oudayas à la médina : nous nous déplaçons à Rabat et à Salé pour estimer vos objets d’art en toute discrétion.',
    intro: [
      'Capitale du Royaume, Rabat abrite de nombreuses demeures et résidences de famille, souvent depuis plusieurs générations. On y trouve du mobilier européen et marocain, des tableaux, de l’argenterie, des manuscrits, mais aussi des pièces typiques de la région comme le tapis de Rabat ou la broderie citadine.',
      'La discrétion est ici essentielle : nous accueillons les demandes de particuliers, de familles et de successions avec la plus grande réserve. L’estimation est gratuite, à domicile si vous le souhaitez, et la proposition de rachat ne vous engage en rien.'
    ],
    places: ['Agdal', 'Hay Riad', 'Souissi', 'Océan', 'Hassan', 'Kasbah des Oudayas & médina', 'Salé', 'Témara', 'Harhoura'],
    objects: [
      ['Tapis de Rabat & tapis anciens', 'Tapis aux motifs caractéristiques de la région, tapis d’Orient et de collection.'],
      ['Broderies & textiles citadins', 'Broderies de Rabat et de Salé, soieries, tentures et vêtements anciens.'],
      ['Tableaux, dessins & gravures', 'Peinture marocaine et européenne, orientalisme, cadres anciens.'],
      ['Argenterie, cristal & porcelaine', 'Services de table, plateaux, vaisselle et verrerie de réception.'],
      ['Livres, manuscrits & documents', 'Éditions anciennes, manuscrits, cartes et archives de famille.']
    ],
    faq: [
      ['Intervenez-vous à Salé et à Témara ?', 'Oui, nous couvrons l’ensemble de l’agglomération de Rabat-Salé-Témara.'],
      ['Estimez-vous les tapis de Rabat ?', 'Oui. Les tapis de Rabat et les tapis anciens font partie des pièces que nous étudions et rachetons.'],
      ['Puis-je faire estimer une succession à Rabat ?', 'Oui, avec la plus grande discrétion. Consultez notre page dédiée aux successions pour préparer votre demande.'],
      ['L’estimation est-elle gratuite ?', 'Oui, entièrement, et sans engagement de votre part.']
    ]
  },
  {
    id: 'tanger', name: 'Tanger', file: 'antiquaire-tanger.html', photo: 'tanger-maison-bleue', pos: '',
    title: 'Antiquaire à Tanger — Estimation et rachat d’objets d’art',
    desc: 'Antiquaire à Tanger : estimation gratuite et confidentielle de tableaux, mobilier, livres anciens, argenterie et objets de collection. Déplacement à domicile à Tanger.',
    h1: 'Antiquaire à Tanger : estimation et rachat d’objets d’art',
    lead: 'Ville de passage et de rencontres, Tanger cache dans ses villas et ses maisons de famille des collections d’une rare diversité. Nous venons les estimer chez vous, discrètement.',
    intro: [
      'Longtemps ville internationale, Tanger a attiré artistes, écrivains, diplomates et collectionneurs du monde entier. Cette histoire cosmopolite se lit encore dans les intérieurs de la Montagne, du Marshan, de Malabata ou de la médina : mobilier européen, tableaux, livres, argenterie, objets marins et pièces d’Orient s’y côtoient.',
      'Qu’il s’agisse d’une villa de famille, d’un appartement ou d’une collection constituée au fil des années, l’expert de la Maison Volubilis se déplace à Tanger pour examiner vos pièces et vous proposer un rachat argumenté, gratuit à estimer et sans engagement.'
    ],
    places: ['La Montagne', 'Marshan', 'Malabata', 'Charf', 'Médina & kasbah', 'Centre-ville', 'Boubana', 'Cap Spartel', 'Tétouan & alentours'],
    objects: [
      ['Tableaux orientalistes & modernes', 'Peintures de voyageurs, vues de Tanger, œuvres d’artistes marocains et européens.'],
      ['Livres anciens, cartes & manuscrits', 'Éditions rares, atlas, gravures, correspondances et documents.'],
      ['Mobilier européen & colonial', 'Commodes, bureaux, vitrines, sièges et consoles de villas.'],
      ['Argenterie, cuivres & objets marins', 'Services, cuivres, instruments de navigation et curiosités.'],
      ['Verrerie, céramiques & bibelots', 'Cristaux, porcelaines, faïences et petits objets de vitrine.']
    ],
    faq: [
      ['Vous déplacez-vous à Tanger même pour une seule pièce ?', 'Oui, selon la nature de l’objet. Envoyez-nous d’abord quelques photographies via le formulaire.'],
      ['Intervenez-vous à Tétouan et dans le Nord ?', 'Nous étudions les demandes dans l’ensemble du Nord : Tétouan, Asilah, Larache, Chefchaouen. Précisez votre localité dans le formulaire.'],
      ['Rachetez-vous les livres et documents anciens ?', 'Oui, livres, manuscrits, cartes, gravures et archives font partie des pièces que nous étudions.'],
      ['Mes informations restent-elles confidentielles ?', 'Oui, la confidentialité est absolue.']
    ]
  },
  {
    id: 'fes', name: 'Fès', file: 'antiquaire-fes.html', photo: 'fes-porte-bleue', pos: '',
    title: 'Antiquaire à Fès — Estimation et rachat d’antiquités',
    desc: 'Antiquaire à Fès : estimation gratuite et confidentielle de poteries, broderies, cuivres, boiseries, bijoux et mobilier ancien. Déplacement à domicile à Fès et dans la médina.',
    h1: 'Antiquaire à Fès : estimation et rachat d’antiquités',
    lead: 'Au cœur de l’une des plus riches traditions artisanales du Maroc, nous estimons à domicile vos poteries, broderies, cuivres, boiseries et objets d’art, gratuitement et sans engagement.',
    intro: [
      'Fès est la ville des métiers d’art : céramique au bleu si particulier, broderies citadines, cuivre martelé, boiseries peintes et sculptées, reliure, tissage. Les demeures de la médina, de Fès el-Jdid et de la ville nouvelle conservent de nombreuses pièces anciennes, parfois transmises de génération en génération.',
      'Notre expert se rend chez vous, y compris dans la médina, pour examiner chaque objet et vous remettre une proposition de rachat claire. Vous gardez toute liberté de décision, et vos informations restent strictement confidentielles.'
    ],
    places: ['Fès el-Bali (médina)', 'Fès el-Jdid', 'Ville nouvelle', 'Route d’Ifrane', 'Meknès', 'Ifrane', 'Sefrou'],
    objects: [
      ['Poteries & céramiques de Fès', 'Faïences émaillées, grands plats, vases et pièces de collection.'],
      ['Broderies & textiles citadins', 'Broderies de Fès, tentures, soieries, ceintures et vêtements anciens.'],
      ['Cuivres, laitons & orfèvrerie', 'Plateaux, aiguières, lanternes, coffrets et objets ciselés.'],
      ['Boiseries, coffres & mobilier andalou', 'Bois sculpté et peint, coffres, portes, consoles et tables.'],
      ['Manuscrits, bijoux & objets de culte', 'Manuscrits, reliures, bijoux citadins et objets anciens.']
    ],
    faq: [
      ['Pouvez-vous venir dans la médina de Fès ?', 'Oui. L’expert se déplace dans les demeures de la médina comme dans la ville nouvelle.'],
      ['Estimez-vous les poteries et broderies de Fès ?', 'Oui, ce sont des domaines que nous connaissons bien et que nous rachetons.'],
      ['Intervenez-vous à Meknès et dans la région ?', 'Oui, nous étudions les demandes à Meknès, Ifrane, Sefrou et dans toute la région.'],
      ['L’estimation est-elle payante ?', 'Non, elle est gratuite et sans engagement.']
    ]
  },
  {
    id: 'agadir', name: 'Agadir', file: 'antiquaire-agadir.html', photo: 'agadir-plage', pos: '',
    title: 'Antiquaire à Agadir — Estimation et rachat d’antiquités',
    desc: 'Antiquaire à Agadir : estimation gratuite et confidentielle de bijoux berbères, tapis, poteries, mobilier et objets d’art. Déplacement à domicile à Agadir, Taroudant et dans le Souss.',
    h1: 'Antiquaire à Agadir : estimation et rachat d’antiquités',
    lead: 'Villas, résidences et maisons du Souss : nous nous déplaçons à Agadir et dans toute la région pour estimer vos bijoux berbères, tapis, poteries et objets d’art.',
    intro: [
      'Reconstruite après le séisme de 1960, Agadir est une ville moderne, mais le Souss qui l’entoure reste l’un des grands foyers de l’artisanat amazigh : bijoux en argent et émaux, tapis de l’Anti-Atlas, poteries, coffres et objets de la vie quotidienne y ont été fabriqués et conservés pendant des générations.',
      'Résidents, familles de la région, propriétaires de villas ou personnes installées à l’année : nous venons chez vous pour examiner vos pièces. L’estimation est gratuite, confidentielle et sans engagement, à Agadir comme à Taroudant, Tiznit ou Inezgane.'
    ],
    places: ['Agadir centre', 'Founty', 'Talborjt', 'Anza', 'Taghazout', 'Taroudant', 'Tiznit', 'Inezgane', 'Aït Melloul'],
    objects: [
      ['Bijoux berbères en argent', 'Fibules, bracelets, colliers, parures de tête, émaux et pièces du Sud.'],
      ['Tapis de l’Anti-Atlas & du Souss', 'Tapis, kilims, hanbels et tissages anciens.'],
      ['Poteries, coffres & objets du quotidien', 'Coffres peints, poteries, ustensiles et pièces ethnographiques.'],
      ['Mobilier & tableaux de villas', 'Mobilier de qualité, tableaux, luminaires et décoration.'],
      ['Argenterie, horlogerie & curiosités', 'Services, pendules, montres anciennes et objets de collection.']
    ],
    faq: [
      ['Intervenez-vous à Taroudant et à Tiznit ?', 'Oui, nous étudions les demandes dans tout le Souss, de Taroudant à Tiznit.'],
      ['Rachetez-vous les bijoux berbères en argent ?', 'Oui, bijoux amazighs, parures et pièces anciennes font partie de nos domaines d’expertise.'],
      ['Je vis à l’étranger mais mes objets sont à Agadir : est-ce possible ?', 'Oui. Indiquez où se trouvent les objets, nous nous occupons de la suite avec vous.'],
      ['L’estimation est-elle gratuite ?', 'Oui, entièrement et sans engagement.']
    ]
  }
];

export const categories = [
  {
    id: 'tapis', file: 'tapis-berberes-anciens.html', short: 'Tapis berbères anciens', photo: 'tapis-medina', photo2: 'tapis-kilim',
    title: 'Rachat de tapis berbères anciens — Estimation gratuite',
    desc: 'Rachat et estimation gratuite de tapis berbères anciens au Maroc : Beni Ouarain, Azilal, boucherouite, kilims et hanbels. Étude confidentielle, déplacement à domicile.',
    h1: 'Rachat et estimation de tapis berbères anciens',
    lead: 'Beni Ouarain, Azilal, kilims, hanbels, tapis de Rabat : nous étudions et rachetons les tapis anciens du Maroc, sur photographies ou à domicile, gratuitement et sans engagement.',
    intro: [
      'Le tapis marocain est l’un des grands arts textiles du pays. Tissés par des femmes des tribus du Moyen Atlas, du Haut Atlas, de l’Anti-Atlas ou des plaines, les tapis anciens racontent une région, une époque, parfois une famille. Leur valeur dépend de nombreux éléments qu’un œil exercé sait lire.',
      'Nous examinons la laine, les teintures, le tissage, les motifs et l’état général, puis nous comparons avec ce que recherchent aujourd’hui les collectionneurs, décorateurs et amateurs, au Maroc comme à l’étranger.'
    ],
    listTitle: 'Les tapis que nous recherchons',
    list: [
      ['Beni Ouarain', 'Tapis en laine naturelle aux motifs en losanges, tissés dans le Moyen Atlas.'],
      ['Azilal', 'Tapis colorés du Haut Atlas aux motifs graphiques et libres.'],
      ['Boucherouite', 'Tapis réalisés à partir de chutes de tissus, prisés pour leur énergie colorée.'],
      ['Kilims & hanbels', 'Tissages plats du Maroc, souvent aux motifs géométriques.'],
      ['Tapis de Rabat & citadins', 'Tapis aux décors typiques de la région de Rabat-Salé.'],
      ['Taznakht, Glaoua, Zemmour…', 'Tapis tribaux d’origines diverses, anciens et de belle facture.']
    ],
    criteria: [
      ['Matière & teintures', 'Laine, coton, teintures naturelles ou chimiques anciennes.'],
      ['Ancienneté & origine', 'Tribu, région, période de tissage, technique.'],
      ['Motifs & composition', 'Qualité du dessin, rareté, équilibre des couleurs.'],
      ['État & restaurations', 'Usure, mites, taches, reprises anciennes ou récentes.']
    ],
    faq: [
      ['Comment faire estimer un tapis berbère ?', 'Photographiez le tapis entier, quelques détails du tissage, le dos et les extrémités, puis envoyez-nous le tout via le formulaire. Un déplacement à domicile est possible si nécessaire.'],
      ['Quels tapis rachetez-vous ?', 'Tapis berbères anciens (Beni Ouarain, Azilal, boucherouite), kilims, hanbels, tapis de Rabat, tapis d’Orient et de collection.'],
      ['Faut-il nettoyer le tapis avant l’estimation ?', 'Non. Évitez tout lavage ou réparation : ils peuvent modifier la valeur. Présentez le tapis tel quel.'],
      ['L’estimation est-elle gratuite ?', 'Oui, gratuite, confidentielle et sans engagement.']
    ],
    related: ['marrakech', 'fes', 'agadir']
  },
  {
    id: 'bijoux', file: 'bijoux-berberes-anciens.html', short: 'Bijoux berbères & anciens', photo: 'montre-gousset', photo2: 'argenterie',
    title: 'Rachat de bijoux berbères anciens — Estimation gratuite',
    desc: 'Rachat et estimation gratuite de bijoux berbères et citadins anciens, parures en argent, ambre, corail, et de montres anciennes. Étude confidentielle au Maroc et à l’international.',
    h1: 'Rachat et estimation de bijoux berbères et anciens',
    lead: 'Parures amazighes en argent, bijoux citadins, montres de poche : nous étudions vos bijoux anciens avec précision et discrétion, sans frais et sans engagement.',
    intro: [
      'Au Maroc, le bijou est à la fois parure, symbole et réserve de valeur. Fibules, bracelets, colliers d’ambre et de corail, ceintures et parures de tête portent les marques d’une région et d’un savoir-faire : l’argent travaillé du Sud, les émaux de l’Anti-Atlas, les perles de verre et les pierres.',
      'Nous examinons les matériaux, les techniques de fabrication, les poinçons éventuels, l’état et la rareté de chaque pièce. Nous étudions aussi les bijoux européens anciens, les montres de poche et les pièces d’horlogerie.'
    ],
    listTitle: 'Les bijoux que nous recherchons',
    list: [
      ['Bijoux berbères en argent', 'Fibules, bracelets, colliers, boucles d’oreilles et parures de tête.'],
      ['Bijoux émaillés du Sud', 'Pièces à émaux cloisonnés et décors géométriques du Souss.'],
      ['Ambre, corail & perles', 'Colliers anciens, perles de verre, amulettes et ornements.'],
      ['Bijoux citadins', 'Parures de cérémonie, ceintures et pièces des grandes villes.'],
      ['Bijoux européens anciens', 'Bijoux signés, Art nouveau, Art déco, bijoux de famille.'],
      ['Montres de poche & horlogerie', 'Montres de gousset, pendulettes, pendules et cartels.']
    ],
    criteria: [
      ['Matières & poinçons', 'Argent, or, laiton, pierres, poinçons et marques.'],
      ['Technique & décor', 'Émail, filigrane, gravure, ciselure, assemblage.'],
      ['Origine & usage', 'Région, tribu, fonction du bijou, période.'],
      ['État & authenticité', 'Réparations, remplacements, patine d’origine.']
    ],
    faq: [
      ['Faut-il nettoyer mes bijoux avant l’estimation ?', 'Non. Ne polissez pas les bijoux anciens : la patine fait partie de leur valeur.'],
      ['Estimez-vous les bijoux sur photographies ?', 'Oui, via le formulaire. Photographiez chaque pièce de face, de dos, et les éventuels poinçons ou marques.'],
      ['Rachetez-vous aussi les montres anciennes ?', 'Oui : montres de poche, montres-bracelets anciennes, pendules et pièces d’horlogerie.'],
      ['L’estimation est-elle gratuite ?', 'Oui, gratuite et sans engagement.']
    ],
    related: ['agadir', 'marrakech', 'fes']
  },
  {
    id: 'mobilier', file: 'mobilier-ancien-marocain.html', short: 'Mobilier ancien & marocain', photo: 'cabinet-ancien', photo2: 'salon-marocain-arche',
    title: 'Rachat de mobilier ancien et marocain — Estimation',
    desc: 'Rachat et estimation gratuite de mobilier ancien et marocain : coffres, boiseries, portes sculptées, buffets, commodes, Art déco. Étude confidentielle et déplacement à domicile.',
    h1: 'Rachat et estimation de mobilier ancien et marocain',
    lead: 'Coffres, boiseries sculptées, buffets, commodes, bureaux, mobilier Art déco : nous étudions votre mobilier ancien sur place ou sur photographies, gratuitement et sans engagement.',
    intro: [
      'Le mobilier ancien du Maroc réunit plusieurs traditions : le bois sculpté et peint des grandes villes impériales, les coffres et portes des maisons du Sud, le mobilier européen arrivé avec les communautés étrangères, puis l’Art déco des villas du XXe siècle.',
      'Nous évaluons l’époque, l’essence du bois, les assemblages, la qualité de la sculpture et de la marqueterie, ainsi que l’état de conservation. Une restauration ancienne ne diminue pas toujours la valeur d’une pièce, c’est pourquoi nous préférons toujours voir l’objet tel qu’il est.'
    ],
    listTitle: 'Le mobilier que nous recherchons',
    list: [
      ['Coffres & coffrets marocains', 'Coffres en bois, cèdre ou thuya, coffrets incrustés et peints.'],
      ['Portes, boiseries & moucharabiehs', 'Éléments d’architecture sculptés et pièces décoratives.'],
      ['Tables, consoles & mobilier incrusté', 'Marqueterie, incrustations de nacre, os ou métal.'],
      ['Buffets, bibliothèques & vitrines', 'Pièces de rangement anciennes, régionales ou européennes.'],
      ['Commodes, bureaux & secrétaires', 'Ébénisterie ancienne, estampillée ou de qualité.'],
      ['Art déco & mobilier du XXe siècle', 'Meubles de villas, sièges, bars et luminaires associés.']
    ],
    criteria: [
      ['Époque & style', 'Datation, école, influence régionale ou européenne.'],
      ['Matière & fabrication', 'Essences, assemblages, marqueterie, sculpture.'],
      ['État & restaurations', 'Patine d’origine, remplacements, vermoulures.'],
      ['Rareté & demande', 'Pièces recherchées par les collectionneurs et décorateurs.']
    ],
    faq: [
      ['Vous déplacez-vous pour un seul meuble ?', 'Selon la nature de la pièce. Envoyez d’abord quelques photographies, nous vous répondrons sur la suite.'],
      ['Rachetez-vous le mobilier restauré ?', 'Oui. Nous le regardons tel qu’il est, avec ses éventuelles restaurations.'],
      ['Peut-on estimer un mobilier complet de maison ?', 'Oui. Nous étudions les ensembles complets, notamment dans le cadre de successions.'],
      ['L’estimation est-elle gratuite ?', 'Oui, entièrement et sans engagement.']
    ],
    related: ['casablanca', 'marrakech', 'tanger']
  },
  {
    id: 'tableaux', file: 'tableaux-peinture-marocaine.html', short: 'Tableaux & peinture marocaine', photo: 'tableau-cadre-dore', photo2: 'riad-patio',
    title: 'Rachat de tableaux orientalistes et peinture marocaine',
    desc: 'Rachat et estimation gratuite de tableaux anciens, peintures orientalistes et œuvres d’artistes marocains modernes. Étude confidentielle, déplacement à domicile au Maroc.',
    h1: 'Rachat et estimation de tableaux et de peinture marocaine',
    lead: 'Huiles, gouaches, aquarelles, dessins : nous étudions les tableaux orientalistes, la peinture moderne marocaine et les œuvres anciennes, gratuitement et sans engagement.',
    intro: [
      'La peinture au Maroc a connu plusieurs moments forts : les peintres voyageurs et orientalistes qui ont représenté les villes, les souks et les paysages, puis la génération d’artistes marocains modernes qui a renouvelé le langage plastique du pays à partir du milieu du XXe siècle.',
      'Nous examinons la signature, le support, la technique, l’encadrement, la provenance et l’état de l’œuvre. Une signature lisible, un cachet d’atelier, une étiquette de galerie ou un certificat sont autant d’éléments précieux : photographiez-les.'
    ],
    listTitle: 'Les œuvres que nous recherchons',
    list: [
      ['Peinture orientaliste', 'Vues de villes, scènes de souk, portraits et paysages du Maroc.'],
      ['Peinture moderne marocaine', 'Œuvres d’artistes marocains du XXe siècle, signées ou attribuées.'],
      ['Dessins, aquarelles & gouaches', 'Œuvres sur papier, carnets et études.'],
      ['Gravures, affiches & photographies', 'Estampes, affiches anciennes et tirages d’époque.'],
      ['Cadres anciens', 'Cadres dorés, sculptés ou marouflés de belle facture.'],
      ['Peinture européenne ancienne', 'Huiles et pastels du XVIIIe au XXe siècle.']
    ],
    criteria: [
      ['Signature & attribution', 'Signature, monogramme, cachet, étiquettes.'],
      ['Support & technique', 'Toile, papier, panneau, huile, gouache, aquarelle.'],
      ['Provenance & documents', 'Factures, certificats, catalogues, anciennes ventes.'],
      ['État de conservation', 'Craquelures, restaurations, soulèvements, cadre.']
    ],
    faq: [
      ['Comment photographier un tableau pour l’estimation ?', 'Prenez l’œuvre de face, en pleine lumière, sans reflet, puis le dos, la signature et les étiquettes.'],
      ['Faut-il retirer le cadre ?', 'Non. Ne manipulez pas l’œuvre, photographiez-la telle qu’elle est.'],
      ['Rachetez-vous les œuvres non signées ?', 'Oui, nous étudions aussi les œuvres non signées ou anonymes.'],
      ['L’estimation est-elle gratuite ?', 'Oui, gratuite et sans engagement.']
    ],
    related: ['casablanca', 'tanger', 'rabat']
  }
];

export const guides = [
  {
    id: 'vendre', file: 'vendre-antiquites-maroc.html', short: 'Vendre ses antiquités au Maroc', photo: 'the-menthe-theiere',
    title: 'Vendre ses antiquités au Maroc : le guide complet',
    desc: 'Comment vendre ses antiquités et objets d’art au Maroc : faire expertiser, photographier, choisir entre antiquaire, annonce et vente aux enchères, éviter les erreurs.',
    h1: 'Vendre ses antiquités au Maroc : le guide complet',
    lead: 'Expertise, photographies, choix du mode de vente, erreurs à éviter : tout ce qu’il faut savoir avant de vendre un meuble, un tableau, un tapis ou un bijou ancien au Maroc.',
    sections: [
      ['1. Commencez par identifier votre objet', ['Avant de fixer un prix, il faut savoir ce que l’on possède : époque, matériaux, origine, technique, signature. Regardez le dessous, le dos, les tiroirs, les extrémités : ce sont souvent là que se trouvent poinçons, étiquettes, cachets et numéros.', 'Rassemblez aussi tous les documents : facture, certificat, photographies anciennes, histoire familiale. Une provenance claire valorise un objet.']],
      ['2. Photographiez correctement', ['Une bonne estimation commence par de bonnes photographies : lumière naturelle, fond neutre, vue d’ensemble puis détails, signatures, défauts, dimensions.', 'Consultez nos consignes photographiques sur la page de demande d’estimation.']],
      ['3. Ne nettoyez pas, ne restaurez pas', ['Le réflexe de rendre un objet « propre » est souvent une erreur : une patine, un vernis ou une usure d’origine fait partie de la valeur. Un tapis lavé, un cuivre poli ou un meuble repeint peuvent perdre de l’intérêt pour un collectionneur.']],
      ['4. Choisissez le bon mode de vente', ['Annonce en ligne : large visibilité, mais beaucoup de curieux, des négociations difficiles et un risque d’arnaque. Vente aux enchères : adaptée aux pièces importantes, avec des frais et un calendrier propres à chaque maison. Brocanteur : vente simple mais souvent peu valorisante. Antiquaire-expert : estimation argumentée, discrétion et rachat direct.', 'Dans tous les cas, comparez et ne vous engagez jamais sans avoir compris les conditions.']],
      ['5. Prenez en compte la réglementation', ['Certains biens culturels sont protégés au Maroc et leur sortie du territoire est réglementée. Si votre objet est destiné à l’étranger, renseignez-vous avant toute démarche et demandez conseil.']],
      ['6. Restez libre', ['Une estimation sérieuse est gratuite et n’engage à rien. Méfiez-vous des offres pressantes. Vous devez toujours rester libre d’accepter ou de refuser une proposition.']]
    ],
    faq: [
      ['Où vendre une antiquité au Maroc ?', 'Selon la pièce : antiquaire spécialisé, vente aux enchères, brocante ou annonce. Pour une estimation argumentée et un rachat direct, faites appel à un antiquaire-expert.'],
      ['Combien vaut mon objet ancien ?', 'Cela dépend de l’époque, de la rareté, de l’état, de la provenance et de la demande. Seule une étude de l’objet permet de répondre.'],
      ['Puis-je vendre un objet depuis l’étranger ?', 'Oui. Précisez où se trouve l’objet : nous organisons la suite avec vous.'],
      ['L’estimation engage-t-elle à vendre ?', 'Non. Elle est gratuite, confidentielle et sans engagement.']
    ]
  },
  {
    id: 'succession', file: 'estimation-succession.html', short: 'Succession & héritage', photo: 'buffet-patine',
    title: 'Succession et héritage : faire estimer mobilier et objets d’art',
    desc: 'Succession, héritage, débarras : faire estimer le mobilier et les objets d’art d’une maison de famille au Maroc. Estimation gratuite, discrète et sans engagement.',
    h1: 'Succession et héritage : estimer le contenu d’une maison de famille',
    lead: 'Mobilier, tableaux, tapis, argenterie, bijoux : lorsqu’une maison de famille doit être vidée ou partagée, une estimation discrète aide chacun à décider sereinement.',
    sections: [
      ['Pourquoi faire estimer ?', ['Lors d’une succession, le contenu d’une maison est souvent sous-évalué ou sur-évalué. Une estimation par un expert indépendant apporte une base commune pour le partage entre héritiers et évite les malentendus.', 'Elle permet aussi de distinguer ce qui a une valeur patrimoniale, affective ou marchande, et de décider quoi conserver, transmettre ou vendre.']],
      ['Comment préparer la visite ?', ['Faites un premier tour de la maison avec les héritiers. Photographiez les pièces principales : mobilier, tableaux, tapis, luminaires, argenterie, bijoux, livres, objets de vitrine.', 'Ne jetez, ne donnez ni ne nettoyez rien avant l’estimation : certaines pièces d’apparence modeste ont parfois un réel intérêt.']],
      ['Une démarche discrète', ['La discrétion est au cœur de notre métier. Nous nous déplaçons à domicile, dans toutes les villes du Maroc, examinons les objets sur place et ne communiquons aucune information sans votre accord.', 'Les notaires, adoul ou conseillers de la famille peuvent être associés à la démarche.']],
      ['Une proposition sans engagement', ['Après l’étude, nous vous remettons une proposition de rachat argumentée pour tout ou partie des pièces. Les héritiers restent entièrement libres de l’accepter, de la refuser ou de ne vendre que certains objets.']]
    ],
    faq: [
      ['Pouvez-vous estimer une maison entière ?', 'Oui. Nous étudions les ensembles complets : mobilier, objets d’art, tapis, luminaires, argenterie et bijoux.'],
      ['Faut-il que tous les héritiers soient d’accord ?', 'Il est préférable que la démarche soit partagée. Nous vous conseillons d’en parler à tous les héritiers avant la visite.'],
      ['L’estimation d’une succession est-elle gratuite ?', 'Oui, elle est gratuite, confidentielle et sans engagement.'],
      ['Intervenez-vous partout au Maroc ?', 'Oui, dans toutes les grandes villes et sur l’ensemble du territoire.']
    ]
  }
];

/** Mots-clés cibles par page (utilisés pour le récapitulatif SEO). */
export const keywordMap = [
  ['index.html', ['antiquaire Maroc', 'rachat antiquités Maroc', 'estimation antiquités gratuite', 'expertise objets d’art Maroc']],
  ['objets.html', ['objets anciens recherchés', 'rachat objets d’art', 'mobilier ancien', 'tapis anciens', 'argenterie ancienne', 'bijoux anciens']],
  ['zones.html', ['antiquaire à domicile Maroc', 'estimation à domicile', 'antiquaire international']],
  ['a-propos.html', ['antiquaire de confiance', 'maison d’expertise objets d’art']]
];

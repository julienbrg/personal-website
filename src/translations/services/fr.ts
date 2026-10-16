export const servicesFr = {
  meta: {
    title: 'IA pour les entreprises — Julien Béranger — Strat',
    description:
      "Diagnostic, formation et pilote IA pour les entreprises françaises : des cas d'usage utiles, des équipes autonomes, un premier outil en production en 4 semaines.",
  },
  brand: 'Julien Béranger — Strat',
  hero: {
    headline: "Mettez l'IA au travail dans votre entreprise, pas seulement dans vos slides",
    subhead:
      "J'aide les équipes françaises à repérer les bons cas d'usage, à se former et à livrer un premier outil IA en production, sans jargon ni dépendance à un prestataire.",
    cta: 'Réserver un appel',
    secondaryCta: 'Voir les offres',
    proof: "Ils m'ont fait confiance : Systemlog, AFNIC, EM Lyon, UNESCO",
  },
  whyNow: {
    heading: 'Pourquoi maintenant',
    points: [
      {
        title: "Vos équipes utilisent déjà l'IA",
        description:
          "Souvent sans cadre, avec des comptes personnels et des données sensibles. Mieux vaut l'organiser que l'ignorer.",
      },
      {
        title: 'Vos concurrents testent',
        description:
          "Les gains de productivité sont réels sur les tâches répétitives. Ceux qui s'y mettent tôt prennent de l'avance.",
      },
      {
        title: 'Les outils sont mûrs',
        description:
          "Pas besoin d'un laboratoire de recherche : un bon cas d'usage et quelques semaines suffisent pour un premier résultat.",
      },
    ],
  },
  offers: {
    heading: 'Trois façons de démarrer',
    price: 'Sur devis',
    highlighted: 'Le plus demandé',
    cta: 'En parler',
    diagnostic: {
      title: 'Diagnostic IA',
      duration: '2 jours',
      description:
        "On passe vos processus en revue avec vos équipes et on en sort une liste priorisée de cas d'usage, chiffrés et réalistes.",
      deliverables: [
        'Entretiens avec les équipes concernées',
        "Cartographie des cas d'usage",
        'Feuille de route priorisée',
      ],
    },
    training: {
      title: 'Formation IA',
      duration: '1 à 3 jours',
      description:
        "Une formation pratique, sur vos propres cas, pour que vos équipes utilisent l'IA comme il faut : efficacement et sans exposer vos données.",
      deliverables: [
        'Programme adapté à votre métier',
        'Exercices sur vos documents réels',
        'Bonnes pratiques de sécurité et de confidentialité',
      ],
    },
    pilot: {
      title: 'Pilote IA',
      duration: '4 semaines',
      description:
        "On choisit un cas d'usage et je livre un outil qui tourne en production, branché sur vos systèmes, que vos équipes savent faire évoluer.",
      deliverables: [
        'Un outil IA en production',
        'Code et documentation remis à votre équipe',
        'Mesure du gain avant et après',
      ],
    },
    web3Note:
      "Besoin de blockchain, de smart contracts ou d'un audit Solidity ? Je le fais aussi, parlons-en.",
  },
  process: {
    heading: 'Comment ça se passe',
    steps: [
      {
        title: 'Appel de découverte',
        description: '30 minutes pour comprendre votre contexte et vos objectifs. Gratuit.',
      },
      {
        title: 'Proposition',
        description: 'Une proposition écrite sous 48 h, avec le périmètre, le planning et le prix.',
      },
      {
        title: 'Réalisation',
        description: "Points réguliers, livrables concrets, pas d'effet tunnel.",
      },
      {
        title: 'Passation',
        description: 'Vos équipes repartent autonomes, avec le code et la documentation.',
      },
    ],
  },
  about: {
    heading: 'Qui suis-je',
    body: "Je suis Julien Béranger, développeur et formateur. Je conçois des applications IA et je forme des équipes à les utiliser, en entreprise comme en école. Je travaille directement avec vous, sans intermédiaire : la personne qui fait l'appel est celle qui livre.",
  },
  logoStrip: {
    heading: "Ils m'ont fait confiance",
  },
  faq: {
    heading: 'Questions fréquentes',
    items: [
      {
        question: 'Faut-il des compétences techniques dans mon équipe ?',
        answer:
          "Non. Le diagnostic et la formation s'adressent à tous les métiers. Pour le pilote, un interlocuteur côté informatique aide, mais n'est pas obligatoire.",
      },
      {
        question: 'Que deviennent nos données ?',
        answer:
          "Elles restent chez vous. Je privilégie des modèles hébergés en Europe ou en local quand c'est nécessaire, et rien n'est utilisé pour entraîner un modèle tiers.",
      },
      {
        question: 'Travaillez-vous à distance ?',
        answer: 'Oui, partout en France. Les formations peuvent se faire sur site ou en visio.',
      },
      {
        question: 'Combien ça coûte ?',
        answer:
          'Chaque mission est chiffrée selon votre contexte. Vous recevez un prix ferme avant de vous engager.',
      },
    ],
  },
  finalCta: {
    heading: 'Parlons de votre projet',
    body: "30 minutes, sans engagement, pour voir ce que l'IA peut faire chez vous.",
    cta: 'Réserver un appel',
  },
}

export type ServicesCopy = typeof servicesFr

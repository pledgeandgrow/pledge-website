import { ClientProject } from "@/components/ui/client-modal";

export const portfolioProjects: ClientProject[] = [
  {
    id: "1",
    name: "Dualink",
    logo: "/images/portfolio/dualink-logo.png",
    description: "Refonte complète du site web pour une agence de marketing digital avec intégration d'outils de génération de leads et amélioration du SEO.",
    industry: "Marketing Digital",
    year: 2023,
    deliverables: [
      "Site Web Responsive",
      "Stratégie SEO",
      "Génération de Leads",
      "Intégration CRM"
    ],
    needs: [
      "Moderniser l'image de marque en ligne",
      "Améliorer le positionnement sur les moteurs de recherche",
      "Intégrer des outils de capture de leads",
      "Faciliter la gestion du contenu marketing"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur l'utilisateur, en commençant par une analyse approfondie des besoins de l'agence et de ses clients cibles. Le développement a suivi une méthodologie Agile avec des sprints de deux semaines.",
      technologies: ["SEO", "Marketing Automation", "CMS", "Analytics"],
      languages: ["TypeScript", "HTML5", "CSS3"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React", "Framer Motion", "Chart.js"],
      apis: ["Google Analytics", "HubSpot", "Mailchimp"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation du Trafic Organique", value: "72%" },
        { label: "Taux de Conversion", value: "4.8%" },
        { label: "Leads Générés par Mois", value: "+45" }
      ],
      benefits: [
        "Image de marque renforcée avec un design moderne et professionnel",
        "Meilleure visibilité sur les moteurs de recherche",
        "Augmentation significative des demandes de devis",
        "Processus de qualification des leads optimisé"
      ],
      improvements: [
        "Intégration d'un blog optimisé pour le SEO",
        "Mise en place de formulaires intelligents pour la capture de leads",
        "Création d'un tableau de bord pour le suivi des performances",
        "Optimisation de l'expérience mobile"
      ],
      testimonial: {
        quote: "Notre nouveau site a complètement transformé notre présence en ligne. Les leads générés ont dépassé nos attentes et notre image de marque s'est considérablement renforcée.",
        author: "Marie Dupont",
        position: "Directrice, Dualink"
      }
    }
  },
  {
    id: "2",
    name: "Global Corporate Business",
    logo: "/images/portfolio/gcb-logo.png",
    description: "Développement d'une plateforme de conseil pour l'expansion des entreprises à Oman, incluant des outils d'analyse comptable et financière.",
    industry: "Conseil & Finance",
    year: 2023,
    deliverables: [
      "Plateforme Web",
      "Outils d'Analyse Financière",
      "Système de Gestion Documentaire",
      "Portail Client"
    ],
    needs: [
      "Créer une plateforme pour faciliter l'expansion des entreprises à Oman",
      "Développer des outils d'analyse comptable et financière",
      "Mettre en place un système de gestion documentaire sécurisé",
      "Offrir un portail client pour le suivi des dossiers"
    ],
    methodology: {
      approach: "Nous avons utilisé une approche progressive, en commençant par les fonctionnalités essentielles puis en ajoutant des modules spécialisés. Une attention particulière a été portée à la sécurité des données financières et à la conformité réglementaire.",
      technologies: ["Cloud Computing", "FinTech", "Document Management", "Data Security"],
      languages: ["TypeScript", "Python", "SQL"],
      frameworks: ["Next.js", "Django", "Express"],
      libraries: ["React", "Pandas", "NumPy", "PDF.js"],
      apis: ["Banking APIs", "Currency Exchange", "Document Verification"]
    },
    outcome: {
      statistics: [
        { label: "Réduction du Temps de Traitement", value: "65%" },
        { label: "Augmentation de la Clientèle", value: "40%" },
        { label: "Taux de Satisfaction Client", value: "94%" }
      ],
      benefits: [
        "Processus d'expansion à Oman simplifié et accéléré",
        "Meilleure visibilité sur les aspects financiers et comptables",
        "Sécurisation des échanges documentaires",
        "Suivi en temps réel de l'avancement des dossiers"
      ],
      improvements: [
        "Automatisation des calculs financiers complexes",
        "Mise en place d'un système d'alerte pour les échéances importantes",
        "Création d'un tableau de bord personnalisable",
        "Intégration d'un système de signature électronique"
      ],
      testimonial: {
        quote: "La plateforme a révolutionné notre façon d'accompagner les entreprises dans leur expansion à Oman. Nos clients apprécient particulièrement la transparence et l'efficacité du suivi.",
        author: "Ahmed Al-Saadi",
        position: "Directeur, Global Corporate Business"
      }
    }
  },
  {
    id: "3",
    name: "ERB-BTP",
    logo: "/images/portfolio/erb-btp-logo.png",
    description: "Refonte complète du site web pour une société de construction, rénovation, étanchéité et démolition avec mise en valeur des projets réalisés.",
    industry: "Construction",
    year: 2024,
    deliverables: [
      "Site Web Vitrine",
      "Portfolio de Projets",
      "Formulaire de Contact",
      "Optimisation SEO"
    ],
    needs: [
      "Moderniser l'image de l'entreprise en ligne",
      "Mettre en valeur les projets réalisés avec un portfolio détaillé",
      "Faciliter la prise de contact pour les prospects",
      "Améliorer la visibilité sur les moteurs de recherche"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur le visuel, mettant en avant les réalisations de l'entreprise à travers des photos de haute qualité et des descriptions détaillées des projets. Le site a été conçu pour être facilement navigable et optimisé pour tous les appareils.",
      technologies: ["Responsive Design", "SEO", "CMS", "Image Optimization"],
      languages: ["TypeScript", "HTML5", "CSS3"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React", "Framer Motion", "React Hook Form"],
      apis: ["Google Maps", "Google Analytics"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Demandes de Devis", value: "58%" },
        { label: "Amélioration du Positionnement SEO", value: "Top 5" },
        { label: "Taux de Rebond Réduit", value: "-35%" }
      ],
      benefits: [
        "Image professionnelle renforcée avec un design moderne",
        "Meilleure présentation des services et compétences",
        "Augmentation des demandes de devis via le formulaire de contact",
        "Amélioration de la visibilité locale sur les moteurs de recherche"
      ],
      improvements: [
        "Création d'un portfolio filtrable par type de projet",
        "Intégration de témoignages clients",
        "Optimisation des images pour un chargement rapide",
        "Structure de navigation intuitive"
      ],
      testimonial: {
        quote: "Notre nouveau site reflète parfaitement notre savoir-faire et notre professionnalisme. Les retours de nos clients sont excellents et nous avons constaté une augmentation significative des demandes de devis.",
        author: "Eric Bouton",
        position: "Directeur, ERB-BTP"
      }
    }
  },
  {
    id: "4",
    name: "JABB",
    logo: "/images/portfolio/jabb-logo.png",
    description: "Refonte complète du site web d'une entreprise d'imprimerie avec amélioration du référencement et intégration d'un système de devis en ligne.",
    industry: "Imprimerie",
    year: 2022,
    deliverables: [
      "Site Web Responsive",
      "Système de Devis en Ligne",
      "Catalogue de Produits",
      "Stratégie SEO"
    ],
    needs: [
      "Moderniser le site web existant avec un design attractif",
      "Améliorer le référencement pour augmenter la visibilité",
      "Intégrer un système de devis en ligne pour les clients",
      "Présenter le catalogue de produits et services de manière claire"
    ],
    methodology: {
      approach: "Nous avons commencé par une analyse approfondie du site existant et de la concurrence pour identifier les points d'amélioration. La refonte a été réalisée en mettant l'accent sur l'expérience utilisateur et l'optimisation pour les moteurs de recherche.",
      technologies: ["Responsive Design", "SEO", "E-commerce", "UX/UI"],
      languages: ["JavaScript", "HTML5", "CSS3", "PHP"],
      frameworks: ["WordPress", "WooCommerce"],
      libraries: ["jQuery", "Bootstrap"],
      apis: ["Google Analytics", "Mailchimp"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation du Trafic Organique", value: "120%" },
        { label: "Taux de Conversion des Devis", value: "18%" },
        { label: "Positionnement sur les Mots-clés Cibles", value: "Top 3" }
      ],
      benefits: [
        "Visibilité considérablement améliorée sur les moteurs de recherche",
        "Processus de demande de devis simplifié pour les clients",
        "Présentation plus attractive des produits et services",
        "Image de marque modernisée et professionnelle"
      ],
      improvements: [
        "Optimisation technique du site pour améliorer les performances",
        "Création de contenu optimisé pour le SEO",
        "Mise en place d'un système de devis personnalisés",
        "Intégration d'une galerie de réalisations"
      ],
      testimonial: {
        quote: "La refonte de notre site a eu un impact immédiat sur notre activité. Le nombre de demandes de devis a explosé et notre visibilité en ligne s'est considérablement améliorée.",
        author: "Jean Bertrand",
        position: "Gérant, JABB"
      }
    }
  },
  {
    id: "5",
    name: "JABB Events",
    logo: "/images/portfolio/jabb-events-logo.png",
    description: "Création d'un site e-commerce pour une société d'organisation d'événements, permettant la réservation et le paiement en ligne.",
    industry: "Événementiel",
    year: 2023,
    deliverables: [
      "Site E-commerce",
      "Système de Réservation",
      "Paiement en Ligne",
      "Gestion des Événements"
    ],
    needs: [
      "Créer une plateforme de réservation d'événements en ligne",
      "Intégrer un système de paiement sécurisé",
      "Permettre la personnalisation des événements",
      "Faciliter la gestion des réservations pour l'administrateur"
    ],
    methodology: {
      approach: "Nous avons développé une solution e-commerce sur mesure, adaptée aux spécificités du secteur événementiel. L'accent a été mis sur la simplicité du processus de réservation et la sécurité des transactions.",
      technologies: ["E-commerce", "Payment Gateway", "Booking System", "Event Management"],
      languages: ["TypeScript", "PHP", "SQL"],
      frameworks: ["Next.js", "Laravel"],
      libraries: ["React", "Stripe.js", "FullCalendar"],
      apis: ["Stripe", "PayPal", "Google Calendar"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Réservations", value: "85%" },
        { label: "Réduction du Temps de Traitement", value: "70%" },
        { label: "Taux de Satisfaction Client", value: "96%" }
      ],
      benefits: [
        "Processus de réservation simplifié pour les clients",
        "Réduction significative des tâches administratives",
        "Meilleure visibilité sur les événements à venir",
        "Augmentation du chiffre d'affaires grâce aux ventes en ligne"
      ],
      improvements: [
        "Mise en place d'un système de personnalisation des événements",
        "Intégration d'un calendrier interactif pour la disponibilité",
        "Création d'un tableau de bord administrateur complet",
        "Automatisation des confirmations et rappels par email"
      ],
      testimonial: {
        quote: "La plateforme a transformé notre façon de gérer les événements. Nos clients apprécient la simplicité de réservation et nous avons considérablement réduit notre charge administrative.",
        author: "Sophie Martin",
        position: "Directrice, JABB Events"
      }
    }
  },
  {
    id: "6",
    name: "Gudule",
    logo: "/images/portfolio/gudule-logo.png",
    description: "Développement d'une plateforme de formation en ligne avec gestion des cours, suivi des progrès et système d'évaluation.",
    industry: "Formation",
    year: 2023,
    deliverables: [
      "Plateforme E-learning",
      "Gestion des Cours",
      "Système d'Évaluation",
      "Suivi des Progrès"
    ],
    needs: [
      "Créer une plateforme de formation en ligne intuitive",
      "Développer un système de gestion des cours et du contenu",
      "Intégrer des outils d'évaluation et de certification",
      "Permettre le suivi des progrès des apprenants"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur l'expérience d'apprentissage, en développant une interface intuitive et des fonctionnalités pédagogiques avancées. La plateforme a été conçue pour être évolutive et facilement administrable.",
      technologies: ["E-learning", "LMS", "Content Management", "Assessment Tools"],
      languages: ["TypeScript", "Python", "SQL"],
      frameworks: ["Next.js", "Django"],
      libraries: ["React", "Redux", "Chart.js", "Video.js"],
      apis: ["Vimeo", "Google Drive", "Zoom"]
    },
    outcome: {
      statistics: [
        { label: "Taux de Complétion des Cours", value: "78%" },
        { label: "Augmentation des Inscriptions", value: "65%" },
        { label: "Satisfaction des Utilisateurs", value: "4.8/5" }
      ],
      benefits: [
        "Expérience d'apprentissage améliorée avec des fonctionnalités interactives",
        "Gestion simplifiée des cours et du contenu pédagogique",
        "Suivi précis des progrès et des performances des apprenants",
        "Processus d'évaluation et de certification automatisé"
      ],
      improvements: [
        "Création d'un éditeur de cours intuitif pour les formateurs",
        "Intégration de quiz interactifs et d'exercices pratiques",
        "Développement d'un tableau de bord personnalisé pour les apprenants",
        "Mise en place d'un système de badges et de certifications"
      ],
      testimonial: {
        quote: "La plateforme a transformé notre offre de formation. Nos formateurs peuvent facilement créer du contenu de qualité et nos apprenants bénéficient d'une expérience d'apprentissage optimale.",
        author: "Claire Dubois",
        position: "Responsable Formation, Gudule"
      }
    }
  },
  {
    id: "7",
    name: "Mairie de Chelles",
    logo: "/images/portfolio/chelles-logo.png",
    description: "Création d'un site vitrine pour la ville de Chelles, mettant en avant les services municipaux, les événements locaux et les informations pratiques.",
    industry: "Secteur Public",
    year: 2022,
    deliverables: [
      "Site Web Institutionnel",
      "Agenda des Événements",
      "Annuaire des Services",
      "Formulaires en Ligne"
    ],
    needs: [
      "Créer un site web moderne et accessible pour les citoyens",
      "Faciliter l'accès aux informations et services municipaux",
      "Mettre en place un agenda des événements locaux",
      "Développer des formulaires en ligne pour les démarches administratives"
    ],
    methodology: {
      approach: "Nous avons travaillé en étroite collaboration avec les services municipaux pour identifier les besoins des citoyens et créer une architecture d'information claire. Le site a été développé selon les normes d'accessibilité RGAA pour garantir l'accès à tous les utilisateurs.",
      technologies: ["Responsive Design", "Accessibility", "CMS", "Forms Management"],
      languages: ["JavaScript", "HTML5", "CSS3", "PHP"],
      frameworks: ["WordPress", "Bootstrap"],
      libraries: ["jQuery", "Leaflet"],
      apis: ["Google Maps", "OpenData"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation de la Fréquentation", value: "125%" },
        { label: "Réduction des Appels au Standard", value: "40%" },
        { label: "Formulaires Soumis en Ligne", value: "+500/mois" }
      ],
      benefits: [
        "Meilleure communication entre la municipalité et les citoyens",
        "Accès simplifié aux informations et services municipaux",
        "Réduction de la charge administrative grâce aux formulaires en ligne",
        "Promotion efficace des événements locaux"
      ],
      improvements: [
        "Création d'une architecture d'information intuitive",
        "Développement d'un moteur de recherche interne performant",
        "Mise en place d'un système de notification pour les actualités",
        "Intégration d'une carte interactive des services municipaux"
      ],
      testimonial: {
        quote: "Le nouveau site de la ville a considérablement amélioré notre communication avec les citoyens. Les retours sont très positifs et nous avons constaté une réduction significative des demandes d'information par téléphone.",
        author: "Brice Rabaste",
        position: "Maire de Chelles"
      }
    }
  },
  {
    id: "8",
    name: "Chronos Corp.",
    logo: "/images/portfolio/chronos-logo.png",
    description: "Développement d'une application sur mesure pour la gestion du temps et des projets, intégrant des fonctionnalités avancées de reporting et d'analyse.",
    industry: "Logiciel d'Entreprise",
    year: 2024,
    deliverables: [
      "Application Web",
      "Application Mobile",
      "Tableau de Bord Analytique",
      "Système de Reporting"
    ],
    needs: [
      "Développer une solution de gestion du temps et des projets sur mesure",
      "Intégrer des fonctionnalités avancées de reporting et d'analyse",
      "Créer une interface utilisateur intuitive et responsive",
      "Permettre l'accès aux données en mobilité"
    ],
    methodology: {
      approach: "Nous avons adopté une approche de développement itérative, en commençant par un MVP puis en ajoutant progressivement des fonctionnalités basées sur les retours utilisateurs. L'accent a été mis sur la performance et la fiabilité du système.",
      technologies: ["Progressive Web App", "Real-time Analytics", "Cloud Computing", "Mobile Development"],
      languages: ["TypeScript", "Kotlin", "Swift", "SQL"],
      frameworks: ["Next.js", "React Native", "NestJS"],
      libraries: ["React", "Redux", "D3.js", "Chart.js"],
      apis: ["RESTful API", "GraphQL", "WebSockets"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation de la Productivité", value: "32%" },
        { label: "Réduction des Erreurs de Saisie", value: "95%" },
        { label: "Temps Économisé par Semaine", value: "12h/utilisateur" }
      ],
      benefits: [
        "Gestion du temps et des projets optimisée et centralisée",
        "Prise de décision facilitée grâce aux tableaux de bord analytiques",
        "Réduction significative des tâches administratives",
        "Meilleure visibilité sur l'allocation des ressources"
      ],
      improvements: [
        "Développement d'algorithmes d'analyse prédictive",
        "Création d'interfaces personnalisables selon les rôles",
        "Mise en place d'un système de notifications intelligentes",
        "Intégration avec les outils existants de l'entreprise"
      ],
      testimonial: {
        quote: "Cette solution a révolutionné notre façon de gérer les projets et le temps de nos équipes. Les fonctionnalités d'analyse nous permettent d'identifier rapidement les opportunités d'optimisation et d'améliorer constamment nos processus.",
        author: "Thomas Leroy",
        position: "CTO, Chronos Corp."
      }
    }
  }
];

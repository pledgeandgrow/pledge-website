import { ClientProject } from "@/components/ui/client-modal";

export const portfolioProjects: ClientProject[] = [
  {
    id: "14",
    name: "Cabinet Michou",
    logo: "/images/portfolio/cabinet-michou-logo.png",
    description: "Développement d'un site web professionnel pour un cabinet d'avocats spécialisé, avec système de prise de rendez-vous et espace client sécurisé.",
    industry: "Juridique",
    year: 2024,
    deliverables: [
      "Site Web Responsive",
      "Système de Rendez-vous",
      "Espace Client Sécurisé",
      "Gestion Documentaire"
    ],
    needs: [
      "Créer une présence en ligne professionnelle",
      "Faciliter la prise de rendez-vous pour les clients",
      "Sécuriser l'échange de documents juridiques",
      "Mettre en valeur l'expertise du cabinet"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur la sécurité et le professionnalisme, en créant une interface élégante qui reflète les valeurs du cabinet tout en garantissant la confidentialité des données.",
      technologies: ["Secure Authentication", "Document Management", "Appointment Scheduling", "SSL Encryption"],
      languages: ["TypeScript", "HTML5", "CSS3"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React", "Framer Motion", "PDF.js"],
      apis: ["Google Calendar", "DocuSign", "Stripe"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Consultations", value: "35%" },
        { label: "Taux de Satisfaction Client", value: "96%" },
        { label: "Réduction du Temps Administratif", value: "42%" }
      ],
      benefits: [
        "Image professionnelle renforcée avec un design élégant et sobre",
        "Processus de prise de rendez-vous simplifié pour les clients",
        "Échange sécurisé de documents confidentiels",
        "Meilleure visibilité de l'expertise du cabinet"
      ],
      improvements: [
        "Intégration d'un blog juridique pour le partage d'expertise",
        "Mise en place d'un système de notification pour les rendez-vous",
        "Création d'une FAQ dynamique sur les services proposés",
        "Optimisation pour les moteurs de recherche spécialisés"
      ],
      testimonial: {
        quote: "Le site développé par Pledge & Grow a transformé notre relation client et notre organisation interne. La qualité du travail et le professionnalisme de l'équipe ont dépassé nos attentes.",
        author: "Maître Michou",
        position: "Fondateur, Cabinet Michou"
      }
    }
  },
  {
    id: "15",
    name: "Cabinet Mas Rocher",
    logo: "/images/portfolio/mas-rocher-logo.png",
    description: "Création d'une plateforme digitale pour un cabinet de conseil fiscal et patrimonial, incluant des outils de simulation et un portail client personnalisé.",
    industry: "Finance & Conseil",
    year: 2024,
    deliverables: [
      "Plateforme Web Responsive",
      "Outils de Simulation Fiscale",
      "Portail Client",
      "Système de Notification"
    ],
    needs: [
      "Digitaliser les services de conseil fiscal et patrimonial",
      "Offrir des outils de simulation accessibles aux clients",
      "Créer un espace sécurisé pour le suivi des dossiers",
      "Améliorer la communication avec les clients"
    ],
    methodology: {
      approach: "Nous avons développé une solution sur mesure en étroite collaboration avec les experts du cabinet, en mettant l'accent sur la précision des calculs fiscaux et la sécurité des données financières.",
      technologies: ["Financial Modeling", "Secure Data Storage", "Tax Calculation", "Client Portal"],
      languages: ["TypeScript", "Python", "SQL"],
      frameworks: ["Next.js", "Django", "Express"],
      libraries: ["React", "Pandas", "NumPy", "D3.js"],
      apis: ["Banking APIs", "Tax Data", "Document Verification"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation de la Clientèle", value: "28%" },
        { label: "Temps de Traitement Réduit", value: "53%" },
        { label: "Satisfaction Client", value: "92%" }
      ],
      benefits: [
        "Accessibilité accrue aux services de conseil fiscal",
        "Simulations personnalisées pour les clients",
        "Suivi transparent des dossiers en cours",
        "Communication améliorée entre conseillers et clients"
      ],
      improvements: [
        "Intégration d'alertes fiscales personnalisées",
        "Développement d'un tableau de bord analytique",
        "Mise en place d'un système de signature électronique",
        "Création d'une base de connaissances fiscales"
      ],
      testimonial: {
        quote: "La plateforme développée par Pledge & Grow a révolutionné notre façon de travailler et d'interagir avec nos clients. Les outils de simulation sont particulièrement appréciés et nous ont permis d'offrir un service à plus haute valeur ajoutée.",
        author: "Jean Mas",
        position: "Associé Principal, Cabinet Mas Rocher"
      }
    }
  },
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
  },
  {
    id: "9",
    name: "Melytop",
    logo: "/images/portfolio/melytop-logo.png",
    description: "Création d'une landing page pour une indépendante spécialisée dans l'accompagnement à la maternité, avec un design chaleureux et rassurant.",
    industry: "Santé & Bien-être",
    year: 2023,
    deliverables: [
      "Landing Page",
      "Formulaire de Contact",
      "Optimisation Mobile",
      "Intégration de Témoignages"
    ],
    needs: [
      "Créer une présence en ligne professionnelle et rassurante",
      "Mettre en avant les services d'accompagnement à la maternité",
      "Faciliter la prise de contact pour les futures mamans",
      "Présenter les témoignages de clientes satisfaites"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur l'émotion et la confiance, en utilisant des couleurs douces et des images évocatrices. La landing page a été conçue pour être simple, rassurante et efficace pour générer des contacts.",
      technologies: ["Responsive Design", "SEO Local", "UX/UI", "Performance Optimization"],
      languages: ["HTML5", "CSS3", "JavaScript"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React", "Framer Motion", "React Hook Form"],
      apis: ["Google Analytics", "Calendly"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Prises de Contact", value: "145%" },
        { label: "Taux de Conversion", value: "6.2%" },
        { label: "Positionnement Local", value: "Top 3" }
      ],
      benefits: [
        "Image professionnelle établie avec une présence en ligne de qualité",
        "Augmentation significative des demandes de rendez-vous",
        "Meilleure visibilité locale pour les services d'accompagnement",
        "Renforcement de la confiance grâce aux témoignages mis en avant"
      ],
      improvements: [
        "Optimisation des temps de chargement pour une expérience fluide",
        "Création d'un formulaire de contact intuitif et rassurant",
        "Intégration d'une section de témoignages dynamique",
        "Mise en place d'un système de prise de rendez-vous en ligne"
      ],
      testimonial: {
        quote: "Ma landing page a complètement transformé mon activité. Les futures mamans me contactent facilement et j'ai pu développer ma clientèle de manière significative.",
        author: "Mélanie Dupont",
        position: "Fondatrice, Melytop"
      }
    }
  },
  {
    id: "10",
    name: "Connect & Drive",
    logo: "/images/portfolio/connect-drive-logo.png",
    description: "Refonte du site web d'une entreprise d'installation de panneaux électriques avec amélioration du référencement et intégration d'un calculateur d'économies.",
    industry: "Énergie",
    year: 2024,
    deliverables: [
      "Site Web Responsive",
      "Calculateur d'Économies",
      "Stratégie SEO",
      "Formulaire de Devis"
    ],
    needs: [
      "Moderniser le site web existant avec un design professionnel",
      "Améliorer le référencement pour augmenter la visibilité",
      "Intégrer un outil de calcul d'économies d'énergie",
      "Faciliter la demande de devis pour les prospects"
    ],
    methodology: {
      approach: "Nous avons commencé par une analyse approfondie du marché des énergies renouvelables et des attentes des clients. La refonte a été axée sur la pédagogie et la démonstration des bénéfices économiques et écologiques des installations.",
      technologies: ["Responsive Design", "SEO", "Interactive Tools", "UX/UI"],
      languages: ["TypeScript", "HTML5", "CSS3"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React", "Chart.js", "React Hook Form"],
      apis: ["Google Analytics", "Google Maps", "Energy Price API"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation du Trafic Organique", value: "95%" },
        { label: "Taux de Conversion des Devis", value: "8.5%" },
        { label: "Utilisation du Calculateur", value: "+300/mois" }
      ],
      benefits: [
        "Positionnement renforcé comme expert en installations électriques",
        "Augmentation significative des demandes de devis qualifiées",
        "Meilleure compréhension des bénéfices par les prospects",
        "Image de marque modernisée et professionnelle"
      ],
      improvements: [
        "Développement d'un calculateur d'économies interactif",
        "Création de contenu pédagogique sur les énergies renouvelables",
        "Optimisation technique du site pour améliorer les performances",
        "Mise en place d'un système de suivi des demandes de devis"
      ],
      testimonial: {
        quote: "Notre nouveau site a considérablement amélioré notre image et notre capacité à convaincre les clients. Le calculateur d'économies est particulièrement apprécié et nous aide à convertir plus de prospects.",
        author: "Pierre Martin",
        position: "Directeur, Connect & Drive"
      }
    }
  },
  {
    id: "11",
    name: "AS13F",
    logo: "/images/portfolio/as13f-logo.png",
    description: "Consulting digital pour un club de football amateur visant à améliorer sa présence en ligne et sa communication avec les membres et supporters.",
    industry: "Sport",
    year: 2023,
    deliverables: [
      "Audit Digital",
      "Stratégie de Communication",
      "Plan de Présence Sociale",
      "Formation des Bénévoles"
    ],
    needs: [
      "Analyser la présence digitale existante du club",
      "Développer une stratégie de communication cohérente",
      "Améliorer l'engagement des supporters sur les réseaux sociaux",
      "Former les bénévoles à la gestion des outils digitaux"
    ],
    methodology: {
      approach: "Nous avons réalisé un audit complet de la présence digitale du club, puis élaboré une stratégie adaptée à ses ressources limitées. L'accent a été mis sur des solutions pratiques et faciles à mettre en œuvre par les bénévoles.",
      technologies: ["Social Media", "Content Strategy", "Community Management", "Digital Training"],
      languages: [],
      frameworks: [],
      libraries: [],
      apis: ["Facebook", "Instagram", "Twitter"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Abonnés", value: "210%" },
        { label: "Engagement sur les Publications", value: "+175%" },
        { label: "Fréquentation des Matchs", value: "+35%" }
      ],
      benefits: [
        "Communication plus efficace avec les membres et supporters",
        "Meilleure visibilité locale pour attirer de nouveaux joueurs",
        "Augmentation de la participation aux événements du club",
        "Autonomie des bénévoles dans la gestion des outils digitaux"
      ],
      improvements: [
        "Création d'un calendrier éditorial pour les réseaux sociaux",
        "Mise en place d'un système de communication des résultats de matchs",
        "Développement d'une stratégie de contenu mettant en avant les joueurs",
        "Formation des bénévoles aux outils de création graphique simples"
      ],
      testimonial: {
        quote: "Le consulting digital nous a permis de professionnaliser notre communication avec des moyens limités. Nos supporters sont plus engagés et nous avons attiré de nouveaux joueurs grâce à notre présence en ligne améliorée.",
        author: "Marc Dubois",
        position: "Président, AS13F"
      }
    }
  },
  {
    id: "12",
    name: "Clean-E Sofa",
    logo: "/images/portfolio/clean-e-sofa-logo.png",
    description: "Consulting digital pour une société de nettoyage de canapés et meubles à domicile, visant à améliorer sa visibilité locale et sa génération de leads.",
    industry: "Services à Domicile",
    year: 2022,
    deliverables: [
      "Audit SEO Local",
      "Stratégie de Contenu",
      "Plan de Présence Google My Business",
      "Optimisation des Conversions"
    ],
    needs: [
      "Améliorer la visibilité dans les recherches locales",
      "Développer une stratégie de contenu pertinente",
      "Optimiser la présence sur Google My Business",
      "Augmenter le taux de conversion des visiteurs en clients"
    ],
    methodology: {
      approach: "Nous avons adopté une approche centrée sur le SEO local et la génération de leads. L'accent a été mis sur l'optimisation de la présence Google My Business et la création de contenu répondant aux questions fréquentes des clients potentiels.",
      technologies: ["SEO Local", "Content Marketing", "Conversion Rate Optimization", "Google My Business"],
      languages: [],
      frameworks: [],
      libraries: [],
      apis: ["Google Maps", "Google Analytics"]
    },
    outcome: {
      statistics: [
        { label: "Augmentation des Recherches Locales", value: "185%" },
        { label: "Taux de Conversion", value: "7.8%" },
        { label: "Avis Google Positifs", value: "+45" }
      ],
      benefits: [
        "Visibilité considérablement améliorée dans les recherches locales",
        "Augmentation significative des demandes de devis qualifiées",
        "Meilleure réputation en ligne grâce aux avis clients",
        "Réduction des coûts d'acquisition client"
      ],
      improvements: [
        "Optimisation complète du profil Google My Business",
        "Création d'une stratégie de collecte d'avis clients",
        "Développement de contenu répondant aux questions fréquentes",
        "Mise en place d'un suivi des performances marketing"
      ],
      testimonial: {
        quote: "Le consulting digital a transformé notre activité. Nous sommes maintenant visibles localement et les clients nous trouvent facilement. Notre carnet de commandes est plein et nous avons dû embaucher pour répondre à la demande.",
        author: "Sophie Lambert",
        position: "Gérante, Clean-E Sofa"
      }
    }
  },
  {
    id: "13",
    name: "Beauty Salon 92",
    logo: "/images/portfolio/beauty-salon-92-logo.png",
    description: "Développement d'une application sur mesure pour la gestion des rendez-vous et la fidélisation des clients d'un salon de beauté premium.",
    industry: "Beauté & Bien-être",
    year: 2024,
    deliverables: [
      "Application Web",
      "Application Mobile",
      "Système de Réservation",
      "Programme de Fidélité"
    ],
    needs: [
      "Créer un système de réservation en ligne intuitif",
      "Développer un programme de fidélité digital",
      "Permettre aux clients de consulter l'historique de leurs soins",
      "Faciliter la gestion des rendez-vous pour le personnel"
    ],
    methodology: {
      approach: "Nous avons développé une solution sur mesure répondant aux besoins spécifiques d'un salon de beauté premium. L'accent a été mis sur l'expérience utilisateur, tant pour les clients que pour le personnel du salon.",
      technologies: ["Progressive Web App", "Mobile Development", "Booking System", "CRM"],
      languages: ["TypeScript", "Kotlin", "Swift", "SQL"],
      frameworks: ["Next.js", "React Native", "NestJS"],
      libraries: ["React", "Redux", "FullCalendar", "Chart.js"],
      apis: ["Stripe", "Push Notifications", "Google Calendar"]
    },
    outcome: {
      statistics: [
        { label: "Réservations en Ligne", value: "78%" },
        { label: "Réduction des No-Shows", value: "85%" },
        { label: "Augmentation du Panier Moyen", value: "24%" }
      ],
      benefits: [
        "Processus de réservation simplifié pour les clients",
        "Réduction significative des tâches administratives",
        "Augmentation de la fidélisation client grâce au programme digital",
        "Meilleure gestion des stocks et des ressources humaines"
      ],
      improvements: [
        "Mise en place d'un système de rappels automatiques",
        "Développement d'un tableau de bord pour l'analyse des performances",
        "Création d'un programme de fidélité personnalisable",
        "Intégration d'un système de recommandation de produits"
      ],
      testimonial: {
        quote: "Cette application a révolutionné notre façon de travailler. Nos clients adorent pouvoir réserver en ligne et suivre leur programme de soins. Notre équipe gagne un temps précieux sur l'administratif pour se concentrer sur l'essentiel : le service client.",
        author: "Isabelle Moreau",
        position: "Directrice, Beauty Salon 92"
      }
    }
  }
];

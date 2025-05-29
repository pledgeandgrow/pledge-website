"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { FileText, Palette, Search, Wrench, GraduationCap } from "lucide-react";
import { ServiceModal, ServiceSpecifications, ServiceTechnology, ServiceConditions } from "@/components/ui/service-modal";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  specifications: ServiceSpecifications;
  technology: ServiceTechnology;
  conditions: ServiceConditions;
}

const complementaryServices: ServiceCard[] = [
  {
    id: "documentation",
    title: "Documentation",
    description: "Services de documentation complets pour vos produits numériques et systèmes techniques.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Services de documentation technique et utilisateur",
      clients: ["Startups", "SMEs", "Large enterprises", "Software publishers"],
      sectors: ["Technologie", "Santé", "Finance", "Industrie", "Services", "Éducation"],
      recommendedFor: [
        "Produits numériques nécessitant des guides utilisateurs",
        "Projets techniques nécessitant une documentation complète",
        "APIs et frameworks nécessitant une documentation pour développeurs",
        "Systèmes complexes nécessitant des manuels d'utilisation"
      ]
    },
    technology: {
      programs: ["Adobe InDesign", "Markdown", "Confluence", "GitBook", "Docusaurus"],
      technologies: ["Documentation as Code", "Systèmes de gestion de contenu", "Wikis", "Bases de connaissances"],
      languages: ["Markdown", "HTML", "XML", "AsciiDoc", "reStructuredText"],
      frameworks: ["Jekyll", "Hugo", "Sphinx", "MkDocs", "Docusaurus"],
      libraries: ["Swagger/OpenAPI", "JSDoc", "Doxygen", "ReadTheDocs", "Storybook"]
    },
    conditions: {
      requirements: [
        "Accès aux produits ou systèmes à documenter",
        "Informations techniques et spécifications",
        "Définition du public cible",
        "Exigences de format et de style"
      ],
      deliverables: [
        "Documentation complète et structurée",
        "Guides utilisateurs",
        "Documentation technique",
        "Documentation d'API (si applicable)",
        "Formats adaptés (PDF, HTML, wiki, etc.)"
      ],
      timeline: "2 à 8 semaines selon l'étendue du projet",
      support: "Mises à jour et maintenance de la documentation disponibles via contrat séparé"
    }
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "Services de design centrés sur l'utilisateur qui créent des expériences numériques intuitives.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Services de conception d'expérience et d'interface utilisateur",
      clients: ["Startups", "SMEs", "Large enterprises", "Agencies"],
      sectors: ["E-commerce", "SaaS", "Finance", "Santé", "Médias", "Services"],
      recommendedFor: [
        "Projets nécessitant une expérience utilisateur optimale",
        "Applications avec des flux utilisateurs complexes",
        "Refonte d'interfaces existantes",
        "Produits numériques visant une forte adoption utilisateur"
      ]
    },
    technology: {
      programs: ["Figma", "Adobe XD", "Sketch", "InVision", "Axure"],
      technologies: ["Prototypage", "Design Systems", "Responsive Design", "Accessibilité", "Animation UI"],
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: ["Material Design", "Apple Human Interface", "Fluent Design", "Bootstrap", "Tailwind CSS"],
      libraries: ["Framer Motion", "Lottie", "Storybook", "Chakra UI", "shadcn/ui"]
    },
    conditions: {
      requirements: [
        "Brief de projet détaillé",
        "Personas et parcours utilisateurs",
        "Exigences fonctionnelles",
        "Identité visuelle existante (si applicable)"
      ],
      deliverables: [
        "Wireframes et maquettes",
        "Prototypes interactifs",
        "Design system",
        "Spécifications de design",
        "Assets graphiques"
      ],
      timeline: "4 à 12 semaines selon la complexité du projet",
      support: "Révisions et ajustements inclus dans le projet initial"
    }
  },
  {
    id: "seo",
    title: "SEO",
    description: "Search engine optimization services to improve your online visibility.",
    icon: <Search className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Services d'optimisation pour les moteurs de recherche",
      clients: ["E-commerce", "Blogs", "Sites corporate", "Startups", "PME"],
      sectors: ["Retail", "Services", "Médias", "Santé", "Éducation", "B2B", "B2C"],
      recommendedFor: [
        "Sites web cherchant à améliorer leur visibilité organique",
        "Businesses wanting to reduce their dependence on paid advertising",
        "Projets nécessitant une stratégie de contenu optimisée",
        "Sites web avec des problèmes techniques affectant le référencement"
      ]
    },
    technology: {
      programs: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog"],
      technologies: ["Structured Data", "Schema.org", "XML Sitemaps", "Canonical Tags", "Mobile-first Indexing"],
      languages: ["HTML", "JavaScript", "JSON-LD"],
      frameworks: ["Next.js", "Gatsby", "Nuxt.js", "WordPress", "Shopify"],
      libraries: ["React Helmet", "Next SEO", "Schema Markup", "AMP", "Yoast SEO"]
    },
    conditions: {
      requirements: [
        "Accès aux plateformes d'analyse",
        "Accès au back-office du site web",
        "Objectifs commerciaux et KPIs",
        "Mots-clés cibles (si déjà identifiés)"
      ],
      deliverables: [
        "Audit SEO complet",
        "Optimisations techniques",
        "Stratégie de contenu",
        "Optimisations on-page",
        "Rapports de performance mensuels"
      ],
      timeline: "3 à 6 mois pour des résultats significatifs",
      support: "Suivi et optimisation continue via contrat mensuel"
    }
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Services de maintenance pour assurer le bon fonctionnement et la sécurité de vos solutions numériques.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Services de maintenance et support technique",
      clients: ["Startups", "SMEs", "Large enterprises", "Organizations"],
      sectors: ["Tous secteurs avec présence numérique"],
      recommendedFor: [
        "Sites web et applications nécessitant des mises à jour régulières",
        "Systèmes critiques nécessitant une surveillance continue",
        "Projets nécessitant un support technique régulier",
        "Applications avec des exigences de sécurité élevées"
      ]
    },
    technology: {
      programs: ["JIRA", "Zendesk", "Freshdesk", "Sentry", "New Relic"],
      technologies: ["Monitoring", "Backup Systems", "CI/CD", "Security Scanning", "Performance Optimization"],
      languages: ["Selon les technologies du projet maintenu"],
      frameworks: ["Selon les technologies du projet maintenu"],
      libraries: ["Selon les technologies du projet maintenu"]
    },
    conditions: {
      requirements: [
        "Accès aux systèmes à maintenir",
        "Documentation technique existante",
        "Définition des niveaux de service (SLA)",
        "Processus d'escalade"
      ],
      deliverables: [
        "Mises à jour régulières de sécurité",
        "Corrections de bugs",
        "Surveillance des performances",
        "Sauvegardes régulières",
        "Rapports d'activité mensuels"
      ],
      timeline: "Contrat continu avec engagement minimum de 3 à 12 mois",
      support: "Support technique selon le SLA défini (8/5, 24/7, etc.)"
    }
  },
  {
    id: "consulting-training",
    title: "Consulting / Formation",
    description: "Consulting and training services to help your team master digital technologies.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Services de conseil stratégique et formation technique",
      clients: ["Startups", "SMEs", "Large enterprises", "Institutions"],
      sectors: ["Technologie", "Finance", "Santé", "Retail", "Industrie", "Services"],
      recommendedFor: [
        "Organisations cherchant à renforcer leurs compétences internes",
        "Équipes nécessitant une montée en compétence technique",
        "Businesses in digital transformation",
        "Projets nécessitant une expertise externe ponctuelle"
      ]
    },
    technology: {
      programs: ["LMS (Moodle, Teachable)", "Microsoft Teams", "Zoom", "Slack", "Notion"],
      technologies: ["E-learning", "Workshops", "Mentorat", "Documentation", "Évaluation des compétences"],
      languages: ["Selon les technologies concernées par la formation"],
      frameworks: ["Selon les technologies concernées par la formation"],
      libraries: ["Selon les technologies concernées par la formation"]
    },
    conditions: {
      requirements: [
        "Évaluation des besoins de formation",
        "Niveau de compétence actuel des participants",
        "Objectifs d'apprentissage",
        "Calendrier et disponibilité des équipes"
      ],
      deliverables: [
        "Sessions de formation personnalisées",
        "Matériel de formation",
        "Exercices pratiques",
        "Évaluations et certifications (si applicable)",
        "Support post-formation"
      ],
      timeline: "1 jour à 3 mois selon l'étendue du programme",
      support: "Support post-formation disponible pendant 30 jours"
    }
  }
];

export default function ComplementaryServices() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openModal = (service: ServiceCard) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Services Complémentaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous proposons une gamme de services complémentaires pour maximiser la valeur et la performance de vos solutions numériques.
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {complementaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(service)}
                className="cursor-pointer flex-shrink-0 w-[280px]"
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {complementaryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(service)}
              className="cursor-pointer"
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedService.title}
          specifications={selectedService.specifications}
          technology={selectedService.technology}
          conditions={selectedService.conditions}
        />
      )}
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { Globe, Smartphone, Code, Gamepad, MonitorSmartphone } from "lucide-react";
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

const creationServices: ServiceCard[] = [
  {
    id: "website",
    title: "Site Web",
    description: "Sites web professionnels pour entreprises et organisations avec design responsive.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Développement de sites web sur mesure et CMS",
      clients: ["Startups", "PME", "Grandes entreprises", "E-commerce", "Institutions"],
      sectors: ["Commerce", "Santé", "Éducation", "Finance", "Technologie", "Industrie"],
      recommendedFor: [
        "Entreprises cherchant à établir une présence en ligne professionnelle",
        "Organisations nécessitant des fonctionnalités web avancées",
        "Entreprises souhaitant améliorer leur visibilité en ligne",
        "Projets nécessitant une interface utilisateur moderne et responsive"
      ]
    },
    technology: {
      programs: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
      technologies: ["HTML5", "CSS3", "JavaScript", "API REST", "GraphQL"],
      languages: ["JavaScript", "TypeScript", "PHP", "Python"],
      frameworks: ["React", "Next.js", "Vue.js", "Angular", "Laravel", "Django"],
      libraries: ["TailwindCSS", "Bootstrap", "Material UI", "jQuery"]
    },
    conditions: {
      requirements: [
        "Brief détaillé du projet",
        "Contenu textuel et visuel",
        "Identité visuelle (logo, charte graphique)",
        "Accès aux comptes d'hébergement et domaine"
      ],
      deliverables: [
        "Site web responsive et optimisé",
        "Formation à l'utilisation du CMS",
        "Documentation technique",
        "Optimisation SEO de base",
        "Tests cross-browser"
      ],
      timeline: "4 à 12 semaines selon la complexité du projet",
      support: "Maintenance et support technique disponibles via contrat séparé"
    }
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Solutions Software as a Service personnalisées avec architecture multi-tenant.",
    icon: <Code className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Développement de plateformes SaaS sur mesure",
      clients: ["Startups", "Scale-ups", "Entreprises technologiques", "Innovateurs"],
      sectors: ["B2B", "B2C", "Technologie", "Finance", "Santé", "Éducation"],
      recommendedFor: [
        "Entreprises souhaitant transformer un produit en service par abonnement",
        "Startups cherchant à développer une solution cloud évolutive",
        "Organisations nécessitant une plateforme multi-utilisateurs",
        "Projets nécessitant une architecture évolutive et sécurisée"
      ]
    },
    technology: {
      programs: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"],
      technologies: ["Cloud Computing", "Microservices", "API REST", "GraphQL", "WebSockets"],
      languages: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C#"],
      frameworks: ["Node.js", "Express", "Django", "Flask", "Spring Boot", ".NET Core"],
      libraries: ["React", "Vue.js", "Angular", "Redux", "MobX"]
    },
    conditions: {
      requirements: [
        "Spécifications fonctionnelles détaillées",
        "Modèle économique et stratégie d'abonnement",
        "Définition des rôles utilisateurs et flux de travail",
        "Exigences en matière de sécurité et conformité"
      ],
      deliverables: [
        "Application SaaS complète et testée",
        "Documentation technique et d'API",
        "Formation à l'administration",
        "Déploiement sur infrastructure cloud",
        "Tests de sécurité et de performance"
      ],
      timeline: "3 à 9 mois selon la complexité du projet",
      support: "Support technique et mises à jour disponibles via contrat SLA"
    }
  },
  {
    id: "mobile-app",
    title: "Application Mobile",
    description: "Applications mobiles natives et cross-platform pour iOS et Android.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Développement d'applications mobiles natives et hybrides",
      clients: ["Startups", "PME", "Grandes entreprises", "Organisations"],
      sectors: ["E-commerce", "Santé", "Finance", "Éducation", "Divertissement", "Services"],
      recommendedFor: [
        "Entreprises cherchant à étendre leur présence sur mobile",
        "Organisations nécessitant des applications avec fonctionnalités natives",
        "Projets nécessitant une expérience utilisateur optimisée sur mobile",
        "Services nécessitant des fonctionnalités hors ligne"
      ]
    },
    technology: {
      programs: ["Xcode", "Android Studio", "Figma", "Adobe XD"],
      technologies: ["Push Notifications", "GPS/Localisation", "Bluetooth", "NFC", "Réalité augmentée"],
      languages: ["Swift", "Kotlin", "JavaScript", "TypeScript", "Dart"],
      frameworks: ["React Native", "Flutter", "Ionic", "SwiftUI", "Jetpack Compose"],
      libraries: ["Redux", "MobX", "RxSwift", "Room", "Realm"]
    },
    conditions: {
      requirements: [
        "Spécifications fonctionnelles détaillées",
        "Maquettes d'interface utilisateur",
        "Comptes développeur Apple/Google",
        "Définition des fonctionnalités natives requises"
      ],
      deliverables: [
        "Applications mobiles pour iOS et/ou Android",
        "Code source complet",
        "Documentation technique",
        "Publication sur les app stores",
        "Tests sur différents appareils"
      ],
      timeline: "3 à 6 mois selon la complexité du projet",
      support: "Maintenance et mises à jour disponibles via contrat séparé"
    }
  },
  {
    id: "software",
    title: "Logiciel",
    description: "Logiciels sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Développement de logiciels de bureau et d'entreprise sur mesure",
      clients: ["PME", "Grandes entreprises", "Institutions", "Industries spécialisées"],
      sectors: ["Industrie", "Finance", "Santé", "Logistique", "Éducation", "Services professionnels"],
      recommendedFor: [
        "Entreprises nécessitant des solutions logicielles spécifiques",
        "Organisations cherchant à automatiser des processus métier",
        "Projets nécessitant l'intégration avec des systèmes existants",
        "Secteurs avec des exigences réglementaires spécifiques"
      ]
    },
    technology: {
      programs: ["Visual Studio", "IntelliJ IDEA", "Eclipse", "Qt Creator"],
      technologies: ["Bases de données SQL/NoSQL", "Services Windows", "Systèmes distribués", "Intégration API"],
      languages: ["C#", "Java", "C++", "Python", "JavaScript"],
      frameworks: [".NET", "JavaFX", "Electron", "Qt", "WPF"],
      libraries: ["Entity Framework", "Hibernate", "Spring", "React", "Angular"]
    },
    conditions: {
      requirements: [
        "Cahier des charges détaillé",
        "Description des processus métier",
        "Spécifications techniques des systèmes existants",
        "Exigences en matière de sécurité et performance"
      ],
      deliverables: [
        "Logiciel sur mesure",
        "Documentation technique et utilisateur",
        "Formation des utilisateurs",
        "Installation et configuration",
        "Tests fonctionnels et de performance"
      ],
      timeline: "4 à 12 mois selon la complexité du projet",
      support: "Support technique et maintenance via contrat SLA"
    }
  },
  {
    id: "video-games",
    title: "Jeux Vidéo",
    description: "Jeux vidéo engageants pour plusieurs plateformes avec des expériences immersives.",
    icon: <Gamepad className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Développement de jeux vidéo 2D et 3D pour diverses plateformes",
      clients: ["Studios indépendants", "Éditeurs", "Entreprises", "Institutions éducatives"],
      sectors: ["Divertissement", "Éducation", "Formation", "Marketing", "Santé"],
      recommendedFor: [
        "Projets de divertissement interactif",
        "Serious games pour la formation ou l'éducation",
        "Gamification d'applications ou services existants",
        "Expériences marketing immersives"
      ]
    },
    technology: {
      programs: ["Unity", "Unreal Engine", "Blender", "Maya", "Photoshop"],
      technologies: ["3D Rendering", "Réalité virtuelle", "Réalité augmentée", "Intelligence artificielle", "Multijoueur"],
      languages: ["C#", "C++", "JavaScript", "Python", "GDScript"],
      frameworks: ["Unity", "Unreal Engine", "Godot", "Phaser", "PlayCanvas"],
      libraries: ["FMOD", "Wwise", "Box2D", "Havok Physics", "Steamworks"]
    },
    conditions: {
      requirements: [
        "Document de conception de jeu (GDD)",
        "Assets graphiques et sonores",
        "Spécifications techniques et plateformes cibles",
        "Modèle de monétisation (si applicable)"
      ],
      deliverables: [
        "Jeu vidéo complet et testé",
        "Code source et assets",
        "Documentation technique",
        "Publication sur les plateformes cibles",
        "Support post-lancement initial"
      ],
      timeline: "6 à 18 mois selon la complexité du projet",
      support: "Mises à jour et maintenance disponibles via contrat séparé"
    }
  }
];

export default function CreationServices() {
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Création</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous concevons et développons des produits numériques qui aident les entreprises à se développer et à réussir dans le paysage numérique.
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {creationServices.map((service, index) => (
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
          {creationServices.map((service, index) => (
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

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { ShoppingCart, Brain, Database, Shield, Cloud } from "lucide-react";
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

const integrationServices: ServiceCard[] = [
  {
    id: "e-commerce",
    title: "E-commerce",
    description: "Solutions complètes de boutique en ligne avec traitement des paiements et gestion des stocks.",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    specifications: {
      type: "E-commerce solution development and integration",
      clients: ["Détaillants", "Grossistes", "Marques", "Startups", "PME"],
      sectors: ["Retail", "Mode", "Alimentation", "Électronique", "Artisanat", "Services"],
      recommendedFor: [
        "Businesses wanting to sell online",
        "Commerces physiques cherchant à étendre leur présence en ligne",
        "Marques souhaitant vendre directement aux consommateurs (D2C)",
        "Businesses requiring omnichannel management"
      ]
    },
    technology: {
      programs: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
      technologies: ["API de paiement", "Gestion des stocks", "Panier d'achat", "Passerelles de paiement"],
      languages: ["PHP", "JavaScript", "TypeScript", "Python", "Ruby"],
      frameworks: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "Sylius", "Next.js"],
      libraries: ["React", "Vue.js", "jQuery", "Bootstrap", "TailwindCSS"]
    },
    conditions: {
      requirements: [
        "Catalogue de produits",
        "Informations de compte marchand",
        "Exigences de traitement des paiements",
        "Logistique et expédition"
      ],
      deliverables: [
        "Boutique en ligne complète et fonctionnelle",
        "Intégration des paiements",
        "Gestion des stocks",
        "Formation à l'administration",
        "Documentation utilisateur"
      ],
      timeline: "2 à 4 mois selon la complexité du projet",
      support: "Support technique et maintenance disponibles via contrat séparé"
    }
  },
  {
    id: "ai-automation",
    title: "IA & Automatisation",
    description: "Solutions intelligentes qui exploitent l'IA et l'automatisation pour optimiser les processus métier.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Intégration d'intelligence artificielle et automatisation des processus",
      clients: ["Startups", "SMEs", "Large enterprises", "Institutions"],
      sectors: ["Finance", "Santé", "Retail", "Industrie", "Services", "Éducation"],
      recommendedFor: [
        "Businesses looking to optimize their business processes",
        "Organisations souhaitant exploiter leurs données",
        "Services clients nécessitant une assistance automatisée",
        "Projets nécessitant des prédictions basées sur les données"
      ]
    },
    technology: {
      programs: ["Jupyter", "PyCharm", "TensorFlow", "PyTorch", "IBM Watson"],
      technologies: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "RPA"],
      languages: ["Python", "R", "JavaScript", "Java", "C++"],
      frameworks: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "UiPath", "Automation Anywhere"],
      libraries: ["NumPy", "Pandas", "NLTK", "OpenCV", "spaCy"]
    },
    conditions: {
      requirements: [
        "Données structurées ou non structurées",
        "Définition claire des processus à automatiser",
        "Objectifs mesurables",
        "Accès aux systèmes existants"
      ],
      deliverables: [
        "Solution d'IA ou d'automatisation sur mesure",
        "Documentation technique",
        "Formation utilisateur",
        "Rapports de performance",
        "Intégration avec les systèmes existants"
      ],
      timeline: "3 à 8 mois selon la complexité du projet",
      support: "Maintenance continue et amélioration des modèles via contrat SLA"
    }
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Applications blockchain sécurisées et transparentes pour diverses industries et cas d'utilisation.",
    icon: <Database className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Blockchain-based solution development",
      clients: ["Startups", "Innovative businesses", "Financial institutions", "Organizations"],
      sectors: ["Finance", "Supply Chain", "Immobilier", "Santé", "Droit", "Art"],
      recommendedFor: [
        "Projets nécessitant une transparence et une traçabilité accrues",
        "Applications financières décentralisées",
        "Systèmes de gestion de la chaîne d'approvisionnement",
        "Solutions de tokenisation d'actifs"
      ]
    },
    technology: {
      programs: ["Remix", "Truffle", "Ganache", "MetaMask", "Hardhat"],
      technologies: ["Smart Contracts", "DApps", "Tokenisation", "Consensus Protocols", "DeFi"],
      languages: ["Solidity", "Rust", "JavaScript", "Go", "Python"],
      frameworks: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Binance Smart Chain"],
      libraries: ["Web3.js", "Ethers.js", "OpenZeppelin", "Truffle", "Hardhat"]
    },
    conditions: {
      requirements: [
        "Cas d'utilisation blockchain clairement défini",
        "Exigences de sécurité et de conformité",
        "Modèle économique pour la solution",
        "Définition des rôles et permissions"
      ],
      deliverables: [
        "Application blockchain fonctionnelle",
        "Smart contracts audités",
        "Documentation technique",
        "Formation utilisateur",
        "Tests de sécurité"
      ],
      timeline: "4 à 12 mois selon la complexité du projet",
      support: "Maintenance et mises à jour via contrat séparé"
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersécurité",
    description: "Solutions de sécurité robustes pour protéger vos données, systèmes et utilisateurs.",
    icon: <Shield className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Implémentation de solutions de cybersécurité",
      clients: ["SMEs", "Large enterprises", "Institutions", "Government organizations"],
      sectors: ["Finance", "Santé", "Défense", "Éducation", "Retail", "Services"],
      recommendedFor: [
        "Organisations manipulant des données sensibles",
        "Businesses wanting to strengthen their security posture",
        "Projets nécessitant une conformité réglementaire",
        "Systèmes exposés à des risques de sécurité élevés"
      ]
    },
    technology: {
      programs: ["Wireshark", "Metasploit", "Nessus", "Burp Suite", "OWASP ZAP"],
      technologies: ["Cryptographie", "Authentification multi-facteurs", "Détection d'intrusion", "WAF", "SIEM"],
      languages: ["Python", "Go", "C/C++", "JavaScript", "Bash"],
      frameworks: ["OWASP", "NIST", "ISO 27001", "CIS", "GDPR"],
      libraries: ["OpenSSL", "Cryptography.io", "PyJWT", "Passlib", "OWASP ESAPI"]
    },
    conditions: {
      requirements: [
        "Évaluation des risques et vulnérabilités",
        "Inventaire des actifs numériques",
        "Politiques de sécurité existantes",
        "Exigences réglementaires applicables"
      ],
      deliverables: [
        "Solutions de sécurité implémentées",
        "Rapports d'audit et de test d'intrusion",
        "Documentation des politiques et procédures",
        "Formation à la sensibilisation à la sécurité",
        "Plan de réponse aux incidents"
      ],
      timeline: "2 à 6 mois selon l'étendue du projet",
      support: "Surveillance continue et réponse aux incidents via contrat SLA"
    }
  },
  {
    id: "cloud-devops",
    title: "Cloud / DevOps",
    description: "Scalable cloud solutions and DevOps practices to optimize your infrastructure and deployments.",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Implémentation de solutions cloud et pratiques DevOps",
      clients: ["Startups", "SMEs", "Large enterprises", "Technology organizations"],
      sectors: ["Technologie", "Finance", "Santé", "E-commerce", "Médias", "Services"],
      recommendedFor: [
        "Businesses looking to migrate to the cloud",
        "Organizations wanting to optimize their development processes",
        "Projets nécessitant une infrastructure évolutive",
        "Development teams looking to improve their delivery cycle"
      ]
    },
    technology: {
      programs: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD"],
      technologies: ["Conteneurisation", "Orchestration", "IaC", "CI/CD", "Monitoring"],
      languages: ["YAML", "Bash", "Python", "Go", "HCL"],
      frameworks: ["AWS", "Azure", "GCP", "OpenStack", "Kubernetes"],
      libraries: ["Helm", "Ansible", "Prometheus", "Grafana", "ELK Stack"]
    },
    conditions: {
      requirements: [
        "Architecture système actuelle",
        "Objectifs de performance et d'évolutivité",
        "Exigences de disponibilité et de reprise après sinistre",
        "Existing development processes"
      ],
      deliverables: [
        "Infrastructure cloud configurée",
        "Pipelines CI/CD automatisés",
        "Documentation d'architecture",
        "Formation DevOps",
        "Monitoring et alerting"
      ],
      timeline: "2 à 6 mois selon la complexité du projet",
      support: "Support opérationnel et optimisation continue via contrat SLA"
    }
  }
];

export default function IntegrationServices() {
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Intégration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous intégrons des technologies avancées pour créer des solutions numériques complètes et performantes.
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {integrationServices.map((service, index) => (
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
          {integrationServices.map((service, index) => (
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

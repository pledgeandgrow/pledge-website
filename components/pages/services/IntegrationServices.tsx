"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/useTranslations";

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
    description: "Complete online store solutions with payment processing and inventory management.",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    specifications: {
      type: "E-commerce solution development and integration",
      clients: ["Retailers", "Wholesalers", "Brands", "Startups", "SMEs"],
      sectors: ["Retail", "Fashion", "Food", "Electronics", "Crafts", "Services"],
      recommendedFor: [
        "Businesses wanting to sell online",
        "Physical stores looking to extend their online presence",
        "Brands wanting to sell directly to consumers (D2C)",
        "Businesses requiring omnichannel management"
      ]
    },
    technology: {
      programs: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
      technologies: ["Payment APIs", "Inventory Management", "Shopping Cart", "Payment Gateways"],
      languages: ["PHP", "JavaScript", "TypeScript", "Python", "Ruby"],
      frameworks: ["Shopify", "WooCommerce", "Magento", "PrestaShop", "Sylius", "Next.js"],
      libraries: ["React", "Vue.js", "jQuery", "Bootstrap", "TailwindCSS"]
    },
    conditions: {
      requirements: [
        "Product catalog",
        "Merchant account information",
        "Payment processing requirements",
        "Logistics and shipping"
      ],
      deliverables: [
        "Complete and functional online store",
        "Payment integration",
        "Inventory management",
        "Administration training",
        "User documentation"
      ],
      timeline: "2 to 4 months depending on project complexity",
      support: "Technical support and maintenance available via separate contract"
    }
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Intelligent solutions leveraging AI and automation to optimize business processes.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Artificial intelligence integration and process automation",
      clients: ["Startups", "SMEs", "Large enterprises", "Institutions"],
      sectors: ["Finance", "Healthcare", "Retail", "Industry", "Services", "Education"],
      recommendedFor: [
        "Businesses looking to optimize their business processes",
        "Organizations looking to leverage their data",
        "Customer services requiring automated assistance",
        "Projects requiring data-based predictions"
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
        "Structured or unstructured data",
        "Clear definition of processes to automate",
        "Measurable objectives",
        "Access to existing systems"
      ],
      deliverables: [
        "Custom AI or automation solution",
        "Technical documentation",
        "User training",
        "Performance reports",
        "Integration with existing systems"
      ],
      timeline: "3 to 8 months depending on project complexity",
      support: "Ongoing maintenance and model improvement via SLA contract"
    }
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Secure and transparent blockchain applications for various industries and use cases.",
    icon: <Database className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Blockchain-based solution development",
      clients: ["Startups", "Innovative businesses", "Financial institutions", "Organizations"],
      sectors: ["Finance", "Supply Chain", "Real Estate", "Healthcare", "Law", "Art"],
      recommendedFor: [
        "Projects requiring increased transparency and traceability",
        "Decentralized financial applications",
        "Supply chain management systems",
        "Asset tokenization solutions"
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
        "Clearly defined blockchain use case",
        "Security and compliance requirements",
        "Business model for the solution",
        "Definition of roles and permissions"
      ],
      deliverables: [
        "Functional blockchain application",
        "Audited smart contracts",
        "Technical documentation",
        "User training",
        "Security testing"
      ],
      timeline: "4 to 12 months depending on project complexity",
      support: "Maintenance and updates via separate contract"
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Robust security solutions to protect your data, systems, and users.",
    icon: <Shield className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Implementation of cybersecurity solutions",
      clients: ["SMEs", "Large enterprises", "Institutions", "Government organizations"],
      sectors: ["Finance", "Healthcare", "Defense", "Education", "Retail", "Services"],
      recommendedFor: [
        "Organizations handling sensitive data",
        "Businesses wanting to strengthen their security posture",
        "Projects requiring regulatory compliance",
        "Systems exposed to high security risks"
      ]
    },
    technology: {
      programs: ["Wireshark", "Metasploit", "Nessus", "Burp Suite", "OWASP ZAP"],
      technologies: ["Cryptography", "Multi-factor Authentication", "Intrusion Detection", "WAF", "SIEM"],
      languages: ["Python", "Go", "C/C++", "JavaScript", "Bash"],
      frameworks: ["OWASP", "NIST", "ISO 27001", "CIS", "GDPR"],
      libraries: ["OpenSSL", "Cryptography.io", "PyJWT", "Passlib", "OWASP ESAPI"]
    },
    conditions: {
      requirements: [
        "Risk and vulnerability assessment",
        "Digital asset inventory",
        "Existing security policies",
        "Applicable regulatory requirements"
      ],
      deliverables: [
        "Implemented security solutions",
        "Audit and penetration testing reports",
        "Documentation of policies and procedures",
        "Security awareness training",
        "Incident response plan"
      ],
      timeline: "2 to 6 months depending on project scope",
      support: "Continuous monitoring and incident response via SLA contract"
    }
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Scalable cloud solutions and DevOps practices to optimize your infrastructure and deployments.",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Implementation of cloud solutions and DevOps practices",
      clients: ["Startups", "SMEs", "Large enterprises", "Technology organizations"],
      sectors: ["Technology", "Finance", "Healthcare", "E-commerce", "Media", "Services"],
      recommendedFor: [
        "Businesses looking to migrate to the cloud",
        "Organizations wanting to optimize their development processes",
        "Projects requiring scalable infrastructure",
        "Development teams looking to improve their delivery cycle"
      ]
    },
    technology: {
      programs: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD"],
      technologies: ["Containerization", "Orchestration", "IaC", "CI/CD", "Monitoring"],
      languages: ["YAML", "Bash", "Python", "Go", "HCL"],
      frameworks: ["AWS", "Azure", "GCP", "OpenStack", "Kubernetes"],
      libraries: ["Helm", "Ansible", "Prometheus", "Grafana", "ELK Stack"]
    },
    conditions: {
      requirements: [
        "Current system architecture",
        "Performance and scalability objectives",
        "Availability and disaster recovery requirements",
        "Existing development processes"
      ],
      deliverables: [
        "Configured cloud infrastructure",
        "Automated CI/CD pipelines",
        "Architecture documentation",
        "DevOps training",
        "Monitoring and alerting"
      ],
      timeline: "2 to 6 months depending on project complexity",
      support: "Operational support and continuous optimization via SLA contract"
    }
  }
];

export default function IntegrationServices() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslations('services');

  // Use IntersectionObserver to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const openModal = (service: ServiceCard) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-background dark:bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('integration.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('integration.description')}
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {integrationServices.map((service, index) => (
              <div
                key={service.id}
                className={`cursor-pointer flex-shrink-0 w-[280px] ${isInView ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openModal(service)}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">{t(`integration.services.${service.id}.title`)}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {integrationServices.map((service, index) => (
            <div
              key={service.id}
              className={`cursor-pointer ${isInView ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openModal(service)}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center">{t(`integration.services.${service.id}.title`)}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={t(`integration.services.${selectedService.id}.title`)}
          specifications={selectedService.specifications}
          technology={selectedService.technology}
          conditions={selectedService.conditions}
        />
      )}
    </section>
  );
}

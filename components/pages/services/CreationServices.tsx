"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/useTranslations";

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
    title: "Website",
    description: "Professional websites for businesses and organizations with responsive design.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Custom website development and CMS",
      clients: ["Startups", "SMEs", "Large enterprises", "E-commerce", "Institutions"],
      sectors: ["Commerce", "Healthcare", "Education", "Finance", "Technology", "Industry"],
      recommendedFor: [
        "Businesses looking to establish a professional online presence",
        "Organizations requiring advanced web functionality",
        "Businesses wanting to improve their online visibility",
        "Projects requiring a modern and responsive user interface"
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
        "Detailed project brief",
        "Textual and visual content",
        "Visual identity (logo, brand guidelines)",
        "Access to hosting and domain accounts"
      ],
      deliverables: [
        "Responsive and optimized website",
        "CMS usage training",
        "Technical documentation",
        "Basic SEO optimization",
        "Cross-browser testing"
      ],
      timeline: "4 to 12 weeks depending on project complexity",
      support: "Maintenance and technical support available via separate contract"
    }
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Custom Software as a Service solutions with multi-tenant architecture.",
    icon: <Code className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Custom SaaS platform development",
      clients: ["Startups", "Scale-ups", "Technology companies", "Innovators"],
      sectors: ["B2B", "B2C", "Technology", "Finance", "Healthcare", "Education"],
      recommendedFor: [
        "Businesses looking to transform a product into a subscription service",
        "Startups looking to develop a scalable cloud solution",
        "Organizations requiring a multi-user platform",
        "Projects requiring a scalable and secure architecture"
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
        "Detailed functional specifications",
        "Business model and subscription strategy",
        "Definition of user roles and workflows",
        "Security and compliance requirements"
      ],
      deliverables: [
        "Complete and tested SaaS application",
        "Technical and API documentation",
        "Administration training",
        "Deployment on cloud infrastructure",
        "Security and performance testing"
      ],
      timeline: "3 to 9 months depending on project complexity",
      support: "Technical support and updates available via SLA contract"
    }
  },
  {
    id: "mobile-app",
    title: "Mobile",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Native and hybrid mobile application development",
      clients: ["Startups", "SMEs", "Large enterprises", "Organizations"],
      sectors: ["E-commerce", "Healthcare", "Finance", "Education", "Entertainment", "Services"],
      recommendedFor: [
        "Businesses looking to extend their mobile presence",
        "Organizations requiring applications with native functionality",
        "Projects requiring optimized mobile user experience",
        "Services requiring offline functionality"
      ]
    },
    technology: {
      programs: ["Xcode", "Android Studio", "Figma", "Adobe XD"],
      technologies: ["Push Notifications", "GPS/Location", "Bluetooth", "NFC", "Augmented Reality"],
      languages: ["Swift", "Kotlin", "JavaScript", "TypeScript", "Dart"],
      frameworks: ["React Native", "Flutter", "Ionic", "SwiftUI", "Jetpack Compose"],
      libraries: ["Redux", "MobX", "RxSwift", "Room", "Realm"]
    },
    conditions: {
      requirements: [
        "Detailed functional specifications",
        "User interface mockups",
        "Apple/Google developer accounts",
        "Definition of required native features"
      ],
      deliverables: [
        "Mobile applications for iOS and/or Android",
        "Complete source code",
        "Technical documentation",
        "Publication on app stores",
        "Testing on various devices"
      ],
      timeline: "3 to 6 months depending on project complexity",
      support: "Maintenance and updates available via separate contract"
    }
  },
  {
    id: "software",
    title: "Software",
    description: "Custom software to meet the specific needs of your business.",
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Custom desktop and enterprise software development",
      clients: ["SMEs", "Large enterprises", "Institutions", "Specialized industries"],
      sectors: ["Industry", "Finance", "Healthcare", "Logistics", "Education", "Professional Services"],
      recommendedFor: [
        "Businesses requiring specific software solutions",
        "Organizations looking to automate business processes",
        "Projects requiring integration with existing systems",
        "Sectors with specific regulatory requirements"
      ]
    },
    technology: {
      programs: ["Visual Studio", "IntelliJ IDEA", "Eclipse", "Qt Creator"],
      technologies: ["SQL/NoSQL Databases", "Windows Services", "Distributed Systems", "API Integration"],
      languages: ["C#", "Java", "C++", "Python", "JavaScript"],
      frameworks: [".NET", "JavaFX", "Electron", "Qt", "WPF"],
      libraries: ["Entity Framework", "Hibernate", "Spring", "React", "Angular"]
    },
    conditions: {
      requirements: [
        "Detailed specifications",
        "Business process description",
        "Technical specifications of existing systems",
        "Security and performance requirements"
      ],
      deliverables: [
        "Custom software",
        "Technical and user documentation",
        "User training",
        "Installation and configuration",
        "Functional and performance testing"
      ],
      timeline: "4 to 12 months depending on project complexity",
      support: "Technical support and maintenance via SLA contract"
    }
  },
  {
    id: "video-games",
    title: "Video Games",
    description: "Engaging video games for multiple platforms with immersive experiences.",
    icon: <Gamepad className="h-8 w-8 text-primary" />,
    specifications: {
      type: "2D and 3D video game development for various platforms",
      clients: ["Independent studios", "Publishers", "Businesses", "Educational institutions"],
      sectors: ["Entertainment", "Education", "Training", "Marketing", "Healthcare"],
      recommendedFor: [
        "Interactive entertainment projects",
        "Serious games for training or education",
        "Gamification of existing applications or services",
        "Immersive marketing experiences"
      ]
    },
    technology: {
      programs: ["Unity", "Unreal Engine", "Blender", "Maya", "Photoshop"],
      technologies: ["3D Rendering", "Virtual Reality", "Augmented Reality", "Artificial Intelligence", "Multiplayer"],
      languages: ["C#", "C++", "JavaScript", "Python", "GDScript"],
      frameworks: ["Unity", "Unreal Engine", "Godot", "Phaser", "PlayCanvas"],
      libraries: ["FMOD", "Wwise", "Box2D", "Havok Physics", "Steamworks"]
    },
    conditions: {
      requirements: [
        "Game Design Document (GDD)",
        "Graphical and sound assets",
        "Technical specifications and target platforms",
        "Monetization model (if applicable)"
      ],
      deliverables: [
        "Complete and tested video game",
        "Source code and assets",
        "Technical documentation",
        "Publication on target platforms",
        "Initial post-launch support"
      ],
      timeline: "6 to 18 months depending on project complexity",
      support: "Updates and maintenance available via separate contract"
    }
  }
];

export default function CreationServices() {
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
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('creation.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('creation.description')}
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {creationServices.map((service, index) => (
              <div
                key={service.id}
                className={`cursor-pointer flex-shrink-0 w-[280px] transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(service)}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-center">{t(`creation.services.${service.id}.title`)}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {creationServices.map((service, index) => (
            <div
              key={service.id}
              className={`cursor-pointer transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(service)}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center">{t(`creation.services.${service.id}.title`)}</CardTitle>
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
          title={t(`creation.services.${selectedService.id}.title`)}
          specifications={selectedService.specifications}
          technology={selectedService.technology}
          conditions={selectedService.conditions}
        />
      )}
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/useTranslations";

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
    description: "Comprehensive documentation services for your digital products and technical systems.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Technical and user documentation services",
      clients: ["Startups", "SMEs", "Large enterprises", "Software publishers"],
      sectors: ["Technology", "Healthcare", "Finance", "Industry", "Services", "Education"],
      recommendedFor: [
        "Digital products requiring user guides",
        "Technical projects requiring comprehensive documentation",
        "APIs and frameworks requiring developer documentation",
        "Complex systems requiring user manuals"
      ]
    },
    technology: {
      programs: ["Adobe InDesign", "Markdown", "Confluence", "GitBook", "Docusaurus"],
      technologies: ["Documentation as Code", "Content Management Systems", "Wikis", "Knowledge Bases"],
      languages: ["Markdown", "HTML", "XML", "AsciiDoc", "reStructuredText"],
      frameworks: ["Jekyll", "Hugo", "Sphinx", "MkDocs", "Docusaurus"],
      libraries: ["Swagger/OpenAPI", "JSDoc", "Doxygen", "ReadTheDocs", "Storybook"]
    },
    conditions: {
      requirements: [
        "Access to products or systems to document",
        "Technical information and specifications",
        "Target audience definition",
        "Format and style requirements"
      ],
      deliverables: [
        "Complete and structured documentation",
        "User guides",
        "Technical documentation",
        "API documentation (if applicable)",
        "Adapted formats (PDF, HTML, wiki, etc.)"
      ],
      timeline: "2 to 8 weeks depending on project scope",
      support: "Documentation updates and maintenance available via separate contract"
    }
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "User-centered design services that create intuitive digital experiences.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    specifications: {
      type: "User experience and interface design services",
      clients: ["Startups", "SMEs", "Large enterprises", "Agencies"],
      sectors: ["E-commerce", "SaaS", "Finance", "Healthcare", "Media", "Services"],
      recommendedFor: [
        "Projects requiring optimal user experience",
        "Applications with complex user flows",
        "Redesign of existing interfaces",
        "Digital products aiming for strong user adoption"
      ]
    },
    technology: {
      programs: ["Figma", "Adobe XD", "Sketch", "InVision", "Axure"],
      technologies: ["Prototyping", "Design Systems", "Responsive Design", "Accessibility", "UI Animation"],
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: ["Material Design", "Apple Human Interface", "Fluent Design", "Bootstrap", "Tailwind CSS"],
      libraries: ["Framer Motion", "Lottie", "Storybook", "Chakra UI", "shadcn/ui"]
    },
    conditions: {
      requirements: [
        "Detailed project brief",
        "User personas and journeys",
        "Functional requirements",
        "Existing visual identity (if applicable)"
      ],
      deliverables: [
        "Wireframes and mockups",
        "Interactive prototypes",
        "Design system",
        "Design specifications",
        "Graphic assets"
      ],
      timeline: "4 to 12 weeks depending on project complexity",
      support: "Revisions and adjustments included in the initial project"
    }
  },
  {
    id: "seo",
    title: "SEO",
    description: "Search engine optimization services to improve your online visibility.",
    icon: <Search className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Search engine optimization services",
      clients: ["E-commerce", "Blogs", "Corporate sites", "Startups", "SMEs"],
      sectors: ["Retail", "Services", "Media", "Healthcare", "Education", "B2B", "B2C"],
      recommendedFor: [
        "Websites looking to improve their organic visibility",
        "Businesses wanting to reduce their dependence on paid advertising",
        "Projects requiring an optimized content strategy",
        "Websites with technical issues affecting SEO"
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
        "Access to analytics platforms",
        "Access to website back-office",
        "Business objectives and KPIs",
        "Target keywords (if already identified)"
      ],
      deliverables: [
        "Complete SEO audit",
        "Technical optimizations",
        "Content strategy",
        "On-page optimizations",
        "Monthly performance reports"
      ],
      timeline: "3 to 6 months for significant results",
      support: "Ongoing monitoring and optimization via monthly contract"
    }
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Maintenance services to ensure the proper functioning and security of your digital solutions.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Maintenance services and technical support",
      clients: ["Startups", "SMEs", "Large enterprises", "Organizations"],
      sectors: ["All sectors with digital presence"],
      recommendedFor: [
        "Websites and applications requiring regular updates",
        "Critical systems requiring continuous monitoring",
        "Projects requiring regular technical support",
        "Applications with high security requirements"
      ]
    },
    technology: {
      programs: ["JIRA", "Zendesk", "Freshdesk", "Sentry", "New Relic"],
      technologies: ["Monitoring", "Backup Systems", "CI/CD", "Security Scanning", "Performance Optimization"],
      languages: ["Depending on the technologies of the maintained project"],
      frameworks: ["Depending on the technologies of the maintained project"],
      libraries: ["Depending on the technologies of the maintained project"]
    },
    conditions: {
      requirements: [
        "Access to systems to maintain",
        "Existing technical documentation",
        "Definition of service levels (SLA)",
        "Escalation process"
      ],
      deliverables: [
        "Regular security updates",
        "Bug fixes",
        "Performance monitoring",
        "Regular backups",
        "Monthly activity reports"
      ],
      timeline: "Ongoing contract with minimum commitment of 3 to 12 months",
      support: "Technical support according to defined SLA (8/5, 24/7, etc.)"
    }
  },
  {
    id: "consulting-training",
    title: "Consulting",
    description: "Consulting and training services to help your team master digital technologies.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    specifications: {
      type: "Strategic consulting and technical training services",
      clients: ["Startups", "SMEs", "Large enterprises", "Institutions"],
      sectors: ["Technology", "Finance", "Healthcare", "Retail", "Industry", "Services"],
      recommendedFor: [
        "Organizations looking to strengthen their internal skills",
        "Teams requiring technical skill development",
        "Businesses in digital transformation",
        "Projects requiring occasional external expertise"
      ]
    },
    technology: {
      programs: ["LMS (Moodle, Teachable)", "Microsoft Teams", "Zoom", "Slack", "Notion"],
      technologies: ["E-learning", "Workshops", "Mentoring", "Documentation", "Skills assessment"],
      languages: ["Depending on the technologies covered by the training"],
      frameworks: ["Depending on the technologies covered by the training"],
      libraries: ["Depending on the technologies covered by the training"]
    },
    conditions: {
      requirements: [
        "Assessment of training needs",
        "Current skill level of participants",
        "Learning objectives",
        "Schedule and team availability"
      ],
      deliverables: [
        "Customized training sessions",
        "Training materials",
        "Practical exercises",
        "Assessments and certifications (if applicable)",
        "Post-training support"
      ],
      timeline: "1 day to 3 months depending on program scope",
      support: "Post-training support available for 30 days"
    }
  }
];

export default function ComplementaryServices() {
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
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('complementary.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('complementary.description')}
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {complementaryServices.map((service, index) => (
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
                    <CardTitle className="text-center">{t(`complementary.services.${service.id}.title`)}</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {complementaryServices.map((service, index) => (
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
                  <CardTitle className="text-center">{t(`complementary.services.${service.id}.title`)}</CardTitle>
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
          title={t(`complementary.services.${selectedService.id}.title`)}
          specifications={selectedService.specifications}
          technology={selectedService.technology}
          conditions={selectedService.conditions}
        />
      )}
    </section>
  );
}

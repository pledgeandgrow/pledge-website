"use client";

import { Code, Layout, Smartphone, Globe, Database, LineChart, Server, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";


// Component for Creation Services
const CreationServices = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with Next.js, React, and modern technologies.",
      icon: <Globe className="w-10 h-10 text-primary" />,
      link: "/services/web-development",
    },
    {
      title: "Mobile Development",
      description: "Native mobile applications for iOS and Android using React Native.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      link: "/services/mobile-development",
    },
    {
      title: "SaaS",
      description: "Scalable Software-as-a-Service solutions with subscription models, multi-tenancy, and seamless updates.",
      icon: <Layout className="w-10 h-10 text-primary" />,
      link: "/services/saas",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Creation Services</h3>
        <p className="text-muted-foreground">
          Our team builds beautiful, functional digital products from scratch using the latest technologies.
        </p>
      </div>
      
      {/* Conteneur mobile défilant */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>
              <div className="text-center mt-auto">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={service.link}>En savoir plus</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Disposition en grille pour bureau */}
      <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">
                {service.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-center">
              {service.description}
            </p>
            <div className="text-center mt-auto">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={service.link}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for Integration Services
const IntegrationServices = () => {
  const services = [
    {
      title: "E-commerce",
      description: "Custom e-commerce solutions with secure payment gateways, inventory management, and seamless user experience.",
      icon: <Database className="w-10 h-10 text-primary" />,
      link: "/services/e-commerce",
    },
    {
      title: "AI - Automation",
      description: "Intelligent automation solutions powered by AI to streamline workflows, enhance productivity, and reduce operational costs.",
      icon: <Server className="w-10 h-10 text-primary" />,
      link: "/services/ai-automation",
    },
    {
      title: "Blockchain",
      description: "Secure and transparent blockchain solutions for digital assets, smart contracts, and decentralized applications.",
      icon: <Cloud className="w-10 h-10 text-primary" />,
      link: "/services/blockchain",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Integration Services</h3>
        <p className="text-muted-foreground">
          We connect systems, data, and services to create powerful, integrated digital ecosystems.
        </p>
      </div>
      
      {/* Conteneur mobile défilant */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>
              <div className="text-center mt-auto">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={service.link}>En savoir plus</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Disposition en grille pour bureau */}
      <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">
                {service.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-center">
              {service.description}
            </p>
            <div className="text-center mt-auto">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={service.link}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for Complementary Services
const CustomSolutions = () => {
  const services = [
    {
      title: "Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your digital products running smoothly and securely.",
      icon: <Code className="w-10 h-10 text-primary" />,
      link: "/services/maintenance",
    },
    {
      title: "SEO",
      description: "Search engine optimization strategies to improve visibility, drive traffic, and increase conversions.",
      icon: <LineChart className="w-10 h-10 text-primary" />,
      link: "/services/seo",
    },
    {
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
      icon: <Zap className="w-10 h-10 text-primary" />,
      link: "/services/ux-ui-design",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Complementary Services</h3>
        <p className="text-muted-foreground">
          We provide essential supporting services to enhance, maintain, and optimize your digital products.
        </p>
      </div>
      
      {/* Conteneur mobile défilant */}
      <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>
              <div className="text-center mt-auto">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={service.link}>En savoir plus</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Disposition en grille pour bureau */}
      <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">
                {service.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-center">
              {service.description}
            </p>
            <div className="text-center mt-auto">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={service.link}>Learn More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="bg-muted/30 text-foreground py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We offer a comprehensive range of digital services to help businesses thrive in the digital age.
          </p>
        </div>

        <Tabs defaultValue="creation" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="creation">Creation</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="custom">Complementary</TabsTrigger>
          </TabsList>
          <TabsContent value="creation">
            <CreationServices />
          </TabsContent>
          <TabsContent value="integration">
            <IntegrationServices />
          </TabsContent>
          <TabsContent value="custom">
            <CustomSolutions />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="animate-scale-in" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

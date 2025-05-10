"use client";

import { Code, Layout, Smartphone, Globe, Database, LineChart, Server, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRef } from "react";

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
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Layout className="w-10 h-10 text-primary" />,
      link: "/services/ui-ux-design",
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
      
      {/* Mobile scrollable container */}
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
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop grid layout */}
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
      title: "Backend Development",
      description: "Robust and scalable backend solutions with Node.js and PostgreSQL.",
      icon: <Database className="w-10 h-10 text-primary" />,
      link: "/services/backend-development",
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs to extend your application's capabilities.",
      icon: <Server className="w-10 h-10 text-primary" />,
      link: "/services/api-integration",
    },
    {
      title: "Cloud Services",
      description: "Deployment and management of applications on AWS, Azure, and Google Cloud platforms.",
      icon: <Cloud className="w-10 h-10 text-primary" />,
      link: "/services/cloud-services",
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
      
      {/* Mobile scrollable container */}
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
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop grid layout */}
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

// Component for Custom Solutions
const CustomSolutions = () => {
  const services = [
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business needs.",
      icon: <Code className="w-10 h-10 text-primary" />,
      link: "/services/custom-software",
    },
    {
      title: "Analytics & Optimization",
      description: "Data-driven insights and performance optimization to maximize your digital assets.",
      icon: <LineChart className="w-10 h-10 text-primary" />,
      link: "/services/analytics-optimization",
    },
    {
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience through advanced optimization techniques.",
      icon: <Zap className="w-10 h-10 text-primary" />,
      link: "/services/performance-optimization",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
        <p className="text-muted-foreground">
          We develop specialized solutions tailored to your unique business challenges and opportunities.
        </p>
      </div>
      
      {/* Mobile scrollable container */}
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
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop grid layout */}
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <Tabs defaultValue="creation" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
            <TabsTrigger value="creation">Creation</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="custom">Custom Solutions</TabsTrigger>
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
        
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="px-8" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

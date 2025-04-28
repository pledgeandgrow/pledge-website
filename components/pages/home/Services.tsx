"use client";

import { Code, Layout, Smartphone, Globe, Database, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    { id: "all", name: "All Services" },
    { id: "creation", name: "Creation" },
    { id: "integration", name: "Integration" }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with Next.js, React, and modern technologies.",
      icon: <Globe className="w-10 h-10 text-primary" />,
      link: "/services/web-development",
      category: "creation"
    },
    {
      title: "Mobile Development",
      description: "Native mobile applications for iOS and Android using React Native.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      link: "/services/mobile-development",
      category: "creation"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Layout className="w-10 h-10 text-primary" />,
      link: "/services/ui-ux-design",
      category: "creation"
    },
    {
      title: "Backend Development",
      description: "Robust and scalable backend solutions with Node.js and PostgreSQL.",
      icon: <Database className="w-10 h-10 text-primary" />,
      link: "/services/backend-development",
      category: "integration"
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business needs.",
      icon: <Code className="w-10 h-10 text-primary" />,
      link: "/services/custom-software",
      category: "creation"
    },
    {
      title: "Analytics & Optimization",
      description: "Data-driven insights and performance optimization to maximize your digital assets.",
      icon: <LineChart className="w-10 h-10 text-primary" />,
      link: "/services/analytics-optimization",
      category: "integration"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

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
          
          <Tabs defaultValue="all" className="w-full max-w-md mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              {serviceCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
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
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-card text-card-foreground rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
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
        
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="px-8" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

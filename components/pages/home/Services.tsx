"use client";

import { Code, Layout, Smartphone, Globe, Database, LineChart, Server, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";


// Component for Creation Services
const CreationServices = () => {
  const { t } = useTranslations("home");
  const services = [
    {
      title: t("services.creation.webDevelopment.title"),
      description: t("services.creation.webDevelopment.description"),
      icon: <Globe className="w-10 h-10 text-primary" />,
      link: "/services/web-development",
    },
    {
      title: t("services.creation.mobileDevelopment.title"),
      description: t("services.creation.mobileDevelopment.description"),
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      link: "/services/mobile-development",
    },
    {
      title: t("services.creation.saas.title"),
      description: t("services.creation.saas.description"),
      icon: <Layout className="w-10 h-10 text-primary" />,
      link: "/services/saas",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{t("services.creation.title")}</h3>
        <p className="text-muted-foreground">
          {t("services.creation.description")}
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
  const { t } = useTranslations("home");
  const services = [
    {
      title: t("services.integration.ecommerce.title"),
      description: t("services.integration.ecommerce.description"),
      icon: <Database className="w-10 h-10 text-primary" />,
      link: "/services/e-commerce",
    },
    {
      title: t("services.integration.aiAutomation.title"),
      description: t("services.integration.aiAutomation.description"),
      icon: <Server className="w-10 h-10 text-primary" />,
      link: "/services/ai-automation",
    },
    {
      title: t("services.integration.blockchain.title"),
      description: t("services.integration.blockchain.description"),
      icon: <Cloud className="w-10 h-10 text-primary" />,
      link: "/services/blockchain",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{t("services.integration.title")}</h3>
        <p className="text-muted-foreground">
          {t("services.integration.description")}
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
  const { t } = useTranslations("home");
  const services = [
    {
      title: t("services.complementary.maintenance.title"),
      description: t("services.complementary.maintenance.description"),
      icon: <Code className="w-10 h-10 text-primary" />,
      link: "/services/maintenance",
    },
    {
      title: t("services.complementary.seo.title"),
      description: t("services.complementary.seo.description"),
      icon: <LineChart className="w-10 h-10 text-primary" />,
      link: "/services/seo",
    },
    {
      title: t("services.complementary.uxUiDesign.title"),
      description: t("services.complementary.uxUiDesign.description"),
      icon: <Zap className="w-10 h-10 text-primary" />,
      link: "/services/ux-ui-design",
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{t("services.complementary.title")}</h3>
        <p className="text-muted-foreground">
          {t("services.complementary.description")}
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
  const { t } = useTranslations("home");
  return (
    <section className="bg-muted/30 text-foreground py-16 md:py-24" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("services.description")}
          </p>
        </div>

        <Tabs defaultValue="creation" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="creation">{t("services.creation.title")}</TabsTrigger>
            <TabsTrigger value="integration">{t("services.integration.title")}</TabsTrigger>
            <TabsTrigger value="custom">{t("services.complementary.title")}</TabsTrigger>
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
            <Link href="/services">{t("buttons.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

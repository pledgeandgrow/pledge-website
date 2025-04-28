"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechStack, TechItem } from "@/components/ui/tech-stack";

interface TechCategory {
  id: string;
  name: string;
  description: string;
}

interface TechRadarItem {
  name: string;
  icon: string;
  category: string;
  status: "adopt" | "trial" | "assess" | "hold";
  description: string;
}

export default function TechnologyRadar() {
  const categories: TechCategory[] = [
    {
      id: "all",
      name: "All Technologies",
      description: "Our complete technology radar across all categories"
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "Technologies for building modern, responsive user interfaces"
    },
    {
      id: "backend",
      name: "Backend",
      description: "Server-side technologies for robust application development"
    },
    {
      id: "mobile",
      name: "Mobile",
      description: "Technologies for iOS, Android, and cross-platform development"
    },
    {
      id: "data",
      name: "Data & AI",
      description: "Tools and frameworks for data processing and artificial intelligence"
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      description: "Technologies for deployment, infrastructure, and operations"
    }
  ];

  const statusDescriptions = {
    adopt: "Technologies we use in production and recommend for widespread use",
    trial: "Technologies we're actively using in projects and evaluating for broader adoption",
    assess: "Technologies we're exploring and experimenting with in controlled environments",
    hold: "Technologies we're either phasing out or not recommending for new projects"
  };

  // Frontend technologies
  const frontendTech: TechRadarItem[] = [
    { name: "React", icon: "SiReact", category: "frontend", status: "adopt", description: "Our primary library for building user interfaces across web applications" },
    { name: "Next.js", icon: "SiNextdotjs", category: "frontend", status: "adopt", description: "The React framework we use for production-grade applications with SSR and static site generation" },
    { name: "TypeScript", icon: "SiTypescript", category: "frontend", status: "adopt", description: "Strongly typed programming language that builds on JavaScript for enhanced developer experience" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend", status: "adopt", description: "Utility-first CSS framework for rapidly building custom user interfaces" },
    { name: "Vue.js", icon: "SiVuedotjs", category: "frontend", status: "trial", description: "Progressive JavaScript framework for building user interfaces for specific use cases" },
    { name: "Svelte", icon: "SiSvelte", category: "frontend", status: "assess", description: "Compiler-based framework we're evaluating for performance-critical applications" },
    { name: "Angular", icon: "SiAngular", category: "frontend", status: "hold", description: "Comprehensive framework that we maintain for legacy projects but don't use for new development" }
  ];

  // Backend technologies
  const backendTech: TechRadarItem[] = [
    { name: "Node.js", icon: "SiNodedotjs", category: "backend", status: "adopt", description: "Our primary runtime for building scalable server-side applications" },
    { name: "Express", icon: "SiExpress", category: "backend", status: "adopt", description: "Minimal and flexible Node.js web application framework for building APIs" },
    { name: "NestJS", icon: "SiNestjs", category: "backend", status: "trial", description: "Progressive Node.js framework for building efficient and scalable server-side applications" },
    { name: "GraphQL", icon: "SiGraphql", category: "backend", status: "trial", description: "Query language for APIs that we're increasingly adopting for flexible data fetching" },
    { name: "Django", icon: "SiDjango", category: "backend", status: "assess", description: "Python web framework we're evaluating for data-intensive applications" },
    { name: "Ruby on Rails", icon: "SiRubyonrails", category: "backend", status: "hold", description: "Framework we maintain for legacy projects but don't use for new development" }
  ];

  // Mobile technologies
  const mobileTech: TechRadarItem[] = [
    { name: "React Native", icon: "SiReact", category: "mobile", status: "adopt", description: "Our primary framework for cross-platform mobile app development" },
    { name: "Flutter", icon: "SiFlutter", category: "mobile", status: "trial", description: "UI toolkit we're evaluating for building natively compiled applications" },
    { name: "Swift", icon: "SiSwift", category: "mobile", status: "trial", description: "Apple's language for iOS development when native performance is critical" },
    { name: "Kotlin", icon: "SiKotlin", category: "mobile", status: "trial", description: "Modern language for Android development when native features are required" },
    { name: "Ionic", icon: "SiIonic", category: "mobile", status: "assess", description: "Framework we're exploring for web-based mobile applications" },
    { name: "Xamarin", icon: "SiDotnet", category: "mobile", status: "hold", description: "Framework we maintain for legacy projects but don't use for new development" }
  ];

  // Data & AI technologies
  const dataTech: TechRadarItem[] = [
    { name: "TensorFlow", icon: "SiTensorflow", category: "data", status: "adopt", description: "Our primary framework for machine learning model development and deployment" },
    { name: "PyTorch", icon: "SiPytorch", category: "data", status: "trial", description: "Deep learning framework we're increasingly using for research and prototyping" },
    { name: "Pandas", icon: "SiPandas", category: "data", status: "adopt", description: "Data analysis and manipulation library essential for our data processing pipelines" },
    { name: "Apache Spark", icon: "SiApachespark", category: "data", status: "trial", description: "Unified analytics engine we're using for large-scale data processing" },
    { name: "Hugging Face", icon: "SiHuggingface", category: "data", status: "assess", description: "AI community and model hub we're exploring for NLP applications" },
    { name: "Hadoop", icon: "SiApachehadoop", category: "data", status: "hold", description: "Framework we maintain for specific legacy projects but generally replacing with newer technologies" }
  ];

  // DevOps & Cloud technologies
  const devopsTech: TechRadarItem[] = [
    { name: "Docker", icon: "SiDocker", category: "devops", status: "adopt", description: "Container platform used across all our development and deployment workflows" },
    { name: "Kubernetes", icon: "SiKubernetes", category: "devops", status: "adopt", description: "Container orchestration system for automating deployment and scaling" },
    { name: "AWS", icon: "SiAmazon", category: "devops", status: "adopt", description: "Primary cloud platform for hosting and infrastructure services" },
    { name: "GitHub Actions", icon: "SiGithubactions", category: "devops", status: "adopt", description: "CI/CD platform integrated with our version control workflow" },
    { name: "Terraform", icon: "SiTerraform", category: "devops", status: "trial", description: "Infrastructure as code tool we're increasingly using for cloud provisioning" },
    { name: "Google Cloud", icon: "SiGooglecloud", category: "devops", status: "trial", description: "Secondary cloud platform we're using for specific services and clients" },
    { name: "Azure", icon: "SiAzure", category: "devops", status: "assess", description: "Cloud platform we're evaluating for enterprise clients and .NET applications" },
    { name: "Jenkins", icon: "SiJenkins", category: "devops", status: "hold", description: "CI/CD tool we maintain for legacy projects but replacing with modern alternatives" }
  ];

  // Combine all technologies
  const allTech = [
    ...frontendTech,
    ...backendTech,
    ...mobileTech,
    ...dataTech,
    ...devopsTech
  ];

  // Function to convert TechRadarItem to TechItem for the TechStack component
  const convertToTechItem = (tech: TechRadarItem): TechItem => {
    return {
      name: tech.name,
      icon: tech.icon as any,
      color: getStatusColor(tech.status)
    };
  };

  // Function to get color based on status
  const getStatusColor = (status: string): string => {
    switch (status) {
      case "adopt":
        return "text-green-500";
      case "trial":
        return "text-blue-500";
      case "assess":
        return "text-yellow-500";
      case "hold":
        return "text-red-500";
      default:
        return "";
    }
  };

  // Function to get technologies by category and status
  const getTechByCategory = (category: string, status?: string): TechItem[] => {
    const filteredTech = allTech.filter(tech => 
      (category === "all" || tech.category === category) && 
      (!status || tech.status === status)
    );
    return filteredTech.map(convertToTechItem);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technology Radar</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We continuously monitor, evaluate, and adopt emerging technologies to ensure we're delivering the most effective and future-proof solutions for our clients.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
            Adopt
          </Badge>
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
            Trial
          </Badge>
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
            Assess
          </Badge>
          <Badge variant="outline" className="bg-red-500/10 text-red-500 hover:bg-red-500/20">
            Hold
          </Badge>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <p className="text-center text-muted-foreground mb-8">
                {category.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      Adopt
                    </CardTitle>
                    <CardDescription>{statusDescriptions.adopt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TechStack 
                      technologies={getTechByCategory(category.id, "adopt")} 
                      size="md" 
                      showLabels 
                      className="justify-center"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                      Trial
                    </CardTitle>
                    <CardDescription>{statusDescriptions.trial}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TechStack 
                      technologies={getTechByCategory(category.id, "trial")} 
                      size="md" 
                      showLabels 
                      className="justify-center"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      Assess
                    </CardTitle>
                    <CardDescription>{statusDescriptions.assess}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TechStack 
                      technologies={getTechByCategory(category.id, "assess")} 
                      size="md" 
                      showLabels 
                      className="justify-center"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      Hold
                    </CardTitle>
                    <CardDescription>{statusDescriptions.hold}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TechStack 
                      technologies={getTechByCategory(category.id, "hold")} 
                      size="md" 
                      showLabels 
                      className="justify-center"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

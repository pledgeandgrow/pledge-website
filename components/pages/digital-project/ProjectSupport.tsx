"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import * as SiIcons from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Type for the icons from react-icons/si
type SiIconType = keyof typeof SiIcons;

interface Technology {
  name: string;
  icon: SiIconType;
  category: string;
  color?: string;
}

const technologies: Technology[] = [
  // Frontend Frameworks & Libraries
  { name: "React", icon: "SiReact", category: "frontend", color: "text-blue-400" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend", color: "text-cyan-500" },
  { name: "Vue.js", icon: "SiVuedotjs", category: "frontend", color: "text-green-500" },
  { name: "Angular", icon: "SiAngular", category: "frontend", color: "text-red-600" },
  { name: "Svelte", icon: "SiSvelte", category: "frontend", color: "text-orange-600" },
  { name: "Redux", icon: "SiRedux", category: "frontend", color: "text-purple-600" },
  
  // Backend Technologies
  { name: "Node.js", icon: "SiNodedotjs", category: "backend", color: "text-green-600" },
  { name: "Express", icon: "SiExpress", category: "backend" },
  { name: "NestJS", icon: "SiNestjs", category: "backend", color: "text-red-500" },
  { name: "Django", icon: "SiDjango", category: "backend", color: "text-green-700" },
  { name: "Laravel", icon: "SiLaravel", category: "backend", color: "text-red-600" },
  { name: "Ruby on Rails", icon: "SiRubyonrails", category: "backend", color: "text-red-700" },
  { name: "ASP.NET Core", icon: "SiDotnet", category: "backend", color: "text-purple-700" },
  { name: "Spring Boot", icon: "SiSpring", category: "backend", color: "text-green-500" },
  
  // Mobile Development
  { name: "React Native", icon: "SiReact", category: "mobile", color: "text-blue-400" },
  { name: "Flutter", icon: "SiFlutter", category: "mobile", color: "text-blue-500" },
  { name: "Swift", icon: "SiSwift", category: "mobile", color: "text-orange-500" },
  { name: "Kotlin", icon: "SiKotlin", category: "mobile", color: "text-purple-500" },
  { name: "Ionic", icon: "SiIonic", category: "mobile", color: "text-blue-600" },
  
  // Databases
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database", color: "text-blue-700" },
  { name: "MongoDB", icon: "SiMongodb", category: "database", color: "text-green-600" },
  { name: "MySQL", icon: "SiMysql", category: "database", color: "text-blue-500" },
  { name: "Redis", icon: "SiRedis", category: "database", color: "text-red-500" },
  { name: "Supabase", icon: "SiSupabase", category: "database", color: "text-emerald-600" },
  { name: "Firebase", icon: "SiFirebase", category: "database", color: "text-yellow-500" },
  
  // CMS
  { name: "WordPress", icon: "SiWordpress", category: "cms", color: "text-blue-600" },
  { name: "Shopify", icon: "SiShopify", category: "cms", color: "text-green-600" },
  { name: "Strapi", icon: "SiStrapi", category: "cms", color: "text-purple-600" },
  { name: "Contentful", icon: "SiContentful", category: "cms", color: "text-blue-500" },
  { name: "Drupal", icon: "SiDrupal", category: "cms", color: "text-blue-700" },
  
  // Cloud & DevOps
  { name: "AWS", icon: "SiAmazon", category: "cloud", color: "text-orange-500" },
  { name: "Google Cloud", icon: "SiGooglecloud", category: "cloud", color: "text-blue-500" },
  { name: "Azure", icon: "SiMicrosoftazure", category: "cloud", color: "text-blue-600" },
  { name: "Docker", icon: "SiDocker", category: "cloud", color: "text-blue-500" },
  { name: "Kubernetes", icon: "SiKubernetes", category: "cloud", color: "text-blue-600" },
  { name: "GitHub Actions", icon: "SiGithubactions", category: "cloud", color: "text-gray-700" },
  { name: "Vercel", icon: "SiVercel", category: "cloud" },
  { name: "Netlify", icon: "SiNetlify", category: "cloud", color: "text-teal-500" },
];

export default function ProjectSupport() {
  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "mobile", name: "Mobile" },
    { id: "database", name: "Databases" },
    { id: "cms", name: "CMS & E-commerce" },
    { id: "cloud", name: "Cloud & DevOps" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies We Support
          </h2>
          <p className="text-lg text-muted-foreground">
            We work with a wide range of technologies to deliver the best solutions for your digital project.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="flex flex-nowrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {technologies
                      .filter((tech) => category.id === "all" || tech.category === category.id)
                      .map((tech) => {
                        const IconComponent = SiIcons[tech.icon];
                        
                        return (
                          <TooltipProvider key={tech.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  className="flex flex-col items-center justify-center gap-3 p-4 bg-card rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                                >
                                  <div className="bg-muted/50 p-3 rounded-lg flex items-center justify-center w-16 h-16">
                                    {IconComponent && (
                                      <IconComponent
                                        className={cn(
                                          "h-10 w-10",
                                          tech.color || "text-foreground"
                                        )}
                                      />
                                    )}
                                  </div>
                                  <span className="text-sm text-center font-medium">{tech.name}</span>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{tech.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

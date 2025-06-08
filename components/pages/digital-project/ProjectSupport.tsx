"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import * as SiIcons from "react-icons/si";
import { useTranslations } from "@/hooks/useTranslations";

// Interface for technology items
interface Technology {
  name: string;
  icon: string;
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
  { name: "AWS", icon: "SiAmazonaws", category: "cloud", color: "text-orange-500" },
  { name: "Google Cloud", icon: "SiGooglecloud", category: "cloud", color: "text-blue-500" },
  { name: "Azure", icon: "SiMicrosoftazure", category: "cloud", color: "text-blue-600" },
  { name: "Docker", icon: "SiDocker", category: "cloud", color: "text-blue-500" },
  { name: "Kubernetes", icon: "SiKubernetes", category: "cloud", color: "text-blue-600" },
  { name: "GitHub Actions", icon: "SiGithubactions", category: "cloud", color: "text-gray-700" },
  { name: "Vercel", icon: "SiVercel", category: "cloud" },
  { name: "Netlify", icon: "SiNetlify", category: "cloud", color: "text-teal-500" },
];

const getCategories = (t: (key: string) => string) => [
  { id: "all", name: t('support.categories.all') },
  { id: "frontend", name: t('support.categories.frontend') },
  { id: "backend", name: t('support.categories.backend') },
  { id: "mobile", name: t('support.categories.mobile') },
  { id: "database", name: t('support.categories.database') },
  { id: "cms", name: t('support.categories.cms') },
  { id: "cloud", name: t('support.categories.cloud') },
];

export default function ProjectSupport() {
  const { t } = useTranslations('digital-project');
  const categories = getCategories(t);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTechnologies, setFilteredTechnologies] = useState(technologies);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Filter technologies based on search query and active category
  useEffect(() => {
    const filtered = technologies.filter((tech) => {
      const matchesCategory = activeCategory === "all" || tech.category === activeCategory;
      const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredTechnologies(filtered);
  }, [searchQuery, activeCategory]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(0); // Reset to first page when category changes
  };
  
  // Calculate items per page and total pages for mobile carousel
  const itemsPerPage = isMobile ? 4 : filteredTechnologies.length;
  const totalPages = Math.ceil(filteredTechnologies.length / itemsPerPage);
  
  // Navigate to next page
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  // Navigate to previous page
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Get current page items
  const getCurrentPageItems = () => {
    if (!isMobile) return filteredTechnologies;
    
    const startIndex = currentPage * itemsPerPage;
    return filteredTechnologies.slice(startIndex, startIndex + itemsPerPage);
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('support.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('support.description')}
          </p>

          {/* Search input */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder={t('support.searchPlaceholder')}
              className={cn(
                "pl-10 pr-4 py-2 w-full transition-all duration-300",
                isSearchFocused ? "ring-2 ring-primary" : ""
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto">
          {/* Category tabs - horizontally scrollable on mobile */}
          <div className="flex justify-start md:justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <Tabs value={activeCategory} onValueChange={handleCategoryChange}>
              <TabsList className="flex flex-nowrap">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className={cn(
                      "whitespace-nowrap px-4 py-2 text-sm md:text-base",
                      activeCategory === category.id ? "bg-primary text-primary-foreground" : ""
                    )}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Technology grid with improved responsiveness */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardContent className="p-4 md:p-6">
              {/* Mobile carousel navigation */}
              {isMobile && filteredTechnologies.length > 4 && (
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium">
                    {t('support.pagination.page')} {currentPage + 1} {t('support.pagination.of')} {totalPages}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prevPage}
                      className="h-8 w-8 rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={nextPage}
                      className="h-8 w-8 rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory + searchQuery + currentPage}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6"
                >
                  {filteredTechnologies.length > 0 ? (
                    getCurrentPageItems().map((tech) => {
                      return (
                        <TooltipProvider key={tech.name}>
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger asChild>
                              <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                                className="flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-card rounded-lg hover:bg-accent/50 transition-all cursor-pointer border border-transparent hover:border-border"
                              >
                                <div className="bg-muted/50 p-2 md:p-3 rounded-lg flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                                  {(() => {
                                    // Dynamically import the icon
                                    const IconComponent = SiIcons[tech.icon as keyof typeof SiIcons];
                                    return IconComponent ? (
                                      <IconComponent
                                        className={cn(
                                          "h-7 w-7 md:h-10 md:w-10",
                                          tech.color || "text-foreground"
                                        )}
                                      />
                                    ) : (
                                      <div className="h-7 w-7 md:h-10 md:w-10 bg-muted rounded-full" />
                                    );
                                  })()}
                                </div>
                                <span className="text-xs md:text-sm text-center font-medium line-clamp-2">{tech.name}</span>
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="bg-background border border-border shadow-md">
                              <p className="font-medium">{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })
                  ) : (
                    <div className="col-span-full py-12 text-center">
                      <p className="text-muted-foreground">{t('support.noResults')}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

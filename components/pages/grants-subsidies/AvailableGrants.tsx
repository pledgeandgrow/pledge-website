"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Euro, Calendar, Building, Users, Filter, Search, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Grant types
type GrantCategory = "digital" | "innovation" | "sustainability" | "growth" | "research";

interface Grant {
  id: string;
  title: string;
  description: string;
  fundingAmount: string;
  deadline: string;
  eligibility: string[];
  categories: GrantCategory[];
  organization: string;
  applicationLink: string;
}

export default function AvailableGrants() {
  // State for filtering and searching
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGrants, setFilteredGrants] = useState<Grant[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<GrantCategory[]>([]);
  
  // Available grant categories for filtering
  const categories: { value: GrantCategory; label: string }[] = [
    { value: "digital", label: "Digital Transformation" },
    { value: "innovation", label: "Innovation" },
    { value: "sustainability", label: "Sustainability" },
    { value: "growth", label: "Business Growth" },
    { value: "research", label: "Research & Development" }
  ];
  
  // Sample grants data
  const grants: Grant[] = [
    {
      id: "dts-2025",
      title: "Digital Transformation Support 2025",
      description: "Funding to help businesses implement digital solutions that improve efficiency, productivity, and competitiveness.",
      fundingAmount: "Up to €50,000",
      deadline: "September 30, 2025",
      eligibility: ["SMEs", "Established for at least 2 years", "Fewer than 250 employees"],
      categories: ["digital", "innovation"],
      organization: "European Digital Innovation Hub",
      applicationLink: "https://example.com/dts-2025"
    },
    {
      id: "green-tech-fund",
      title: "Green Technology Innovation Fund",
      description: "Supporting businesses developing innovative solutions to environmental challenges through sustainable technology.",
      fundingAmount: "€25,000 - €100,000",
      deadline: "October 15, 2025",
      eligibility: ["Startups", "SMEs", "Research institutions"],
      categories: ["innovation", "sustainability", "research"],
      organization: "Environmental Innovation Agency",
      applicationLink: "https://example.com/green-tech-fund"
    },
    {
      id: "sme-growth-2025",
      title: "SME Growth Accelerator Program",
      description: "Comprehensive support package including funding, mentoring, and resources to help small businesses scale rapidly.",
      fundingAmount: "Up to €75,000",
      deadline: "November 30, 2025",
      eligibility: ["SMEs with growth potential", "3+ years in operation", "Minimum annual revenue of €100,000"],
      categories: ["growth", "digital"],
      organization: "Business Development Authority",
      applicationLink: "https://example.com/sme-growth"
    },
    {
      id: "ai-adoption-grant",
      title: "AI Adoption for Business Grant",
      description: "Funding to support the implementation of artificial intelligence solutions in business operations and services.",
      fundingAmount: "€20,000 - €60,000",
      deadline: "August 31, 2025",
      eligibility: ["All business sizes", "Established for at least 1 year"],
      categories: ["digital", "innovation", "research"],
      organization: "National AI Initiative",
      applicationLink: "https://example.com/ai-adoption"
    },
    {
      id: "sustainable-ops-fund",
      title: "Sustainable Operations Transition Fund",
      description: "Supporting businesses in transitioning to more sustainable operational practices and reducing environmental impact.",
      fundingAmount: "Up to €40,000",
      deadline: "December 15, 2025",
      eligibility: ["SMEs", "Large enterprises committed to sustainability goals"],
      categories: ["sustainability", "innovation"],
      organization: "Climate Action Partnership",
      applicationLink: "https://example.com/sustainable-ops"
    },
    {
      id: "rd-collab-grant",
      title: "R&D Collaborative Innovation Grant",
      description: "Funding for collaborative research and development projects between businesses and research institutions.",
      fundingAmount: "€50,000 - €200,000",
      deadline: "July 31, 2025",
      eligibility: ["Businesses partnering with research institutions", "Innovative project proposals"],
      categories: ["research", "innovation"],
      organization: "National Research Council",
      applicationLink: "https://example.com/rd-collab"
    }
  ];
  
  // Filter grants based on active tab, search query, and selected categories
  useEffect(() => {
    let results = grants;
    
    // Filter by tab
    if (activeTab !== "all") {
      results = results.filter(grant => {
        if (activeTab === "upcoming") {
          // Parse deadline and check if it's in the future
          const deadlineDate = new Date(grant.deadline);
          const currentDate = new Date();
          return deadlineDate > currentDate;
        }
        return true;
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(grant => 
        grant.title.toLowerCase().includes(query) || 
        grant.description.toLowerCase().includes(query) ||
        grant.organization.toLowerCase().includes(query)
      );
    }
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      results = results.filter(grant => 
        selectedCategories.some(category => grant.categories.includes(category))
      );
    }
    
    setFilteredGrants(results);
  }, [activeTab, searchQuery, selectedCategories]);
  
  // Toggle category selection
  const toggleCategory = (category: GrantCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Funding Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore current grants and subsidies that can help finance your business growth and digital transformation initiatives.
          </p>
        </motion.div>
        
        {/* Filtering and search controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3">
                <TabsTrigger value="all">All Grants</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Deadlines</TabsTrigger>
                <TabsTrigger value="featured" className="hidden md:block">Featured</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search grants..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <span className="flex items-center text-sm font-medium text-muted-foreground">
              <Filter className="h-4 w-4 mr-2" /> Filter by category:
            </span>
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={selectedCategories.includes(category.value) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleCategory(category.value)}
              >
                {category.label}
              </Badge>
            ))}
            {selectedCategories.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategories([])}
                className="text-xs h-7"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
        
        {/* Grants listing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grants-${activeTab}-${selectedCategories.join("-")}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGrants.length > 0 ? (
              filteredGrants.map((grant) => (
                <motion.div key={grant.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl">{grant.title}</CardTitle>
                      </div>
                      <CardDescription className="mt-2">{grant.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                      <div className="flex items-center gap-2">
                        <Euro className="h-5 w-5 text-primary" />
                        <span className="font-medium">{grant.fundingAmount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>Deadline: {grant.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        <span>{grant.organization}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Eligibility:</span>
                          <ul className="text-sm list-disc list-inside ml-1 text-muted-foreground">
                            {grant.eligibility.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {grant.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {categories.find(c => c.value === category)?.label || category}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between">
                      <Button asChild variant="outline" size="sm" className="gap-1">
                        <Link href={grant.applicationLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Website
                        </Link>
                      </Button>
                      <Button asChild size="sm" className="gap-1">
                        <Link href="/contact?subject=Grant Inquiry: ${grant.title}">
                          Get Support
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg text-muted-foreground mb-4">No grants found matching your criteria.</p>
                <Button onClick={() => {
                  setSearchQuery("");
                  setSelectedCategories([]);
                  setActiveTab("all");
                }}>
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Informational note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/5 p-6 rounded-xl border border-primary/10 text-center"
        >
          <p className="text-muted-foreground">
            <span className="font-medium">Note:</span> Grant availability and criteria may change. Contact us for the most up-to-date information and personalized guidance on which funding opportunities are best suited for your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

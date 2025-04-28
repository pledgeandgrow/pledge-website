"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Euro, 
  Calendar, 
  Info, 
  ExternalLink 
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Grant {
  id: string;
  title: string;
  description: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  category: string;
  source: string;
  link: string;
}

export default function AvailableGrants() {
  const allGrants: Grant[] = [
    {
      id: "digital-innovation",
      title: "Digital Innovation Fund",
      description: "Supports businesses implementing innovative digital solutions that enhance productivity or create new business models.",
      amount: "Up to €50,000",
      deadline: "June 30, 2025",
      eligibility: ["SMEs", "Established 2+ years", "All sectors"],
      category: "digital",
      source: "European Commission",
      link: "#"
    },
    {
      id: "ecommerce-boost",
      title: "E-commerce Acceleration Grant",
      description: "Funding for businesses looking to establish or enhance their e-commerce capabilities and online presence.",
      amount: "€10,000 - €30,000",
      deadline: "August 15, 2025",
      eligibility: ["Retail businesses", "B2C companies", "Revenue under €2M"],
      category: "digital",
      source: "Ministry of Economy",
      link: "#"
    },
    {
      id: "green-tech",
      title: "Green Technology Adoption",
      description: "Supports the implementation of environmentally friendly technologies and sustainable digital practices.",
      amount: "Up to €75,000",
      deadline: "September 30, 2025",
      eligibility: ["All business sizes", "Sustainability focus", "Measurable impact"],
      category: "sustainability",
      source: "Environmental Agency",
      link: "#"
    },
    {
      id: "startup-boost",
      title: "Startup Digital Boost",
      description: "Designed specifically for startups needing funding for digital infrastructure, marketing, and technology adoption.",
      amount: "€15,000 - €40,000",
      deadline: "July 31, 2025",
      eligibility: ["Startups under 3 years", "Under 10 employees", "Innovative business model"],
      category: "startup",
      source: "Innovation Hub",
      link: "#"
    },
    {
      id: "ai-ml-adoption",
      title: "AI & Machine Learning Integration",
      description: "Funding for businesses implementing artificial intelligence and machine learning solutions to improve operations.",
      amount: "Up to €100,000",
      deadline: "October 15, 2025",
      eligibility: ["Established businesses", "Data-rich operations", "Clear implementation plan"],
      category: "digital",
      source: "Tech Innovation Fund",
      link: "#"
    },
    {
      id: "rural-digital",
      title: "Rural Digital Transformation",
      description: "Supports businesses in rural areas implementing digital solutions to overcome geographical challenges.",
      amount: "€20,000 - €60,000",
      deadline: "November 30, 2025",
      eligibility: ["Rural location", "All business sizes", "Local economic impact"],
      category: "regional",
      source: "Regional Development Agency",
      link: "#"
    },
    {
      id: "export-digital",
      title: "Digital Export Enablement",
      description: "Helps businesses leverage digital tools to expand into international markets and enhance export capabilities.",
      amount: "Up to €45,000",
      deadline: "August 31, 2025",
      eligibility: ["Export potential", "B2B or B2C", "Growth strategy"],
      category: "international",
      source: "Trade Commission",
      link: "#"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Enhancement",
      description: "Funding for implementing advanced cybersecurity measures to protect business data and customer information.",
      amount: "€15,000 - €35,000",
      deadline: "July 15, 2025",
      eligibility: ["Handles sensitive data", "All business sizes", "Digital operations"],
      category: "security",
      source: "Digital Security Agency",
      link: "#"
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredGrants = activeCategory === "all" 
    ? allGrants 
    : allGrants.filter(grant => grant.category === activeCategory);

  return (
    <section id="available-grants" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Available Funding Opportunities
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore current grants and subsidies that could help finance your next digital project or business transformation.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>All Grants</TabsTrigger>
              <TabsTrigger value="digital" onClick={() => setActiveCategory("digital")}>Digital</TabsTrigger>
              <TabsTrigger value="startup" onClick={() => setActiveCategory("startup")}>Startups</TabsTrigger>
              <TabsTrigger value="other" onClick={() => setActiveCategory("other")}>Other</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGrants.map((grant, index) => (
                <motion.div
                  key={grant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{grant.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/5">
                          {grant.category.charAt(0).toUpperCase() + grant.category.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {grant.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="font-medium">{grant.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>Deadline: {grant.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-primary" />
                          <span>Source: {grant.source}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-medium mb-2">Eligibility:</p>
                        <div className="flex flex-wrap gap-2">
                          {grant.eligibility.map((item, i) => (
                            <Badge key={i} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={grant.link} className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="digital" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGrants.map((grant, index) => (
                <motion.div
                  key={grant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{grant.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/5">
                          {grant.category.charAt(0).toUpperCase() + grant.category.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {grant.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="font-medium">{grant.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>Deadline: {grant.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-primary" />
                          <span>Source: {grant.source}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-medium mb-2">Eligibility:</p>
                        <div className="flex flex-wrap gap-2">
                          {grant.eligibility.map((item, i) => (
                            <Badge key={i} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={grant.link} className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="startup" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGrants.map((grant, index) => (
                <motion.div
                  key={grant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{grant.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/5">
                          {grant.category.charAt(0).toUpperCase() + grant.category.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {grant.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="font-medium">{grant.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>Deadline: {grant.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-primary" />
                          <span>Source: {grant.source}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-medium mb-2">Eligibility:</p>
                        <div className="flex flex-wrap gap-2">
                          {grant.eligibility.map((item, i) => (
                            <Badge key={i} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={grant.link} className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGrants.map((grant, index) => (
                <motion.div
                  key={grant.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{grant.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/5">
                          {grant.category.charAt(0).toUpperCase() + grant.category.slice(1)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {grant.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="font-medium">{grant.amount}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>Deadline: {grant.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-primary" />
                          <span>Source: {grant.source}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="font-medium mb-2">Eligibility:</p>
                        <div className="flex flex-wrap gap-2">
                          {grant.eligibility.map((item, i) => (
                            <Badge key={i} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <a href={grant.link} className="flex items-center justify-center gap-2">
                          Learn More <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

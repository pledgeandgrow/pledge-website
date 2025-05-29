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
      id: "cir",
      title: "01. Crédit d'Impôt Recherche (CIR)",
      description: "Le Crédit d'Impôt Recherche est un dispositif fiscal permettant aux entreprises de bénéficier d'un crédit d'impôt sur les dépenses de recherche et développement (R&D). Il peut couvrir jusqu'à 30% des dépenses éligibles, ce qui peut représenter un soutien financier considérable pour vos projets innovants.",
      amount: "Up to 30% of eligible expenses",
      deadline: "Ongoing",
      eligibility: ["All companies with R&D activities", "Research and development projects"],
      category: "digital",
      source: "French Government",
      link: "#"
    },
    {
      id: "bpifrance",
      title: "02. Aides de Bpifrance",
      description: "Bpifrance offre une gamme variée de financements et d'aides pour les entreprises de toutes tailles. Parmi ces aides, vous pouvez trouver : Prêts à l'innovation : pour financer des projets innovants à tous les stades de développement. Aides à l'innovation : subventions et avances remboursables pour les projets de recherche, développement et innovation.",
      amount: "Varies by program",
      deadline: "Ongoing",
      eligibility: ["Companies of all sizes", "Innovation projects", "R&D activities"],
      category: "digital",
      source: "Bpifrance",
      link: "#"
    },
    {
      id: "fsn",
      title: "03. Le Fonds pour la Société Numérique (FSN)",
      description: "Le FSN finance des projets visant à développer les infrastructures numériques et les services numériques innovants. Les entreprises peuvent obtenir des subventions ou des prêts pour des projets répondant à ces critères.",
      amount: "Varies by project",
      deadline: "Ongoing",
      eligibility: ["Digital infrastructure projects", "Innovative digital services"],
      category: "digital",
      source: "French Government",
      link: "#"
    },
    {
      id: "regional",
      title: "04. Subventions Régionales",
      description: "Les régions françaises offrent également des subventions pour soutenir les projets informatiques et numériques. Les critères d'éligibilité et les montants varient selon les régions, mais ces subventions peuvent représenter une aide précieuse.",
      amount: "Varies by region",
      deadline: "Varies by program",
      eligibility: ["Regional criteria apply", "Digital and IT projects"],
      category: "regional",
      source: "Regional Governments",
      link: "#"
    },
    {
      id: "horizon-europe",
      title: "05. Programme Horizon Europe",
      description: "Hoizon europe est le programme cadre de l'union européenne pour la recherche et l'innovation. Il propose des financements pour des projets de recherche et d'innovation dans divers domaines y compris IT(information technology) et TIC(communication).",
      amount: "Varies by call for proposals",
      deadline: "Multiple deadlines",
      eligibility: ["Research organizations", "Companies", "Public entities", "Consortia"],
      category: "international",
      source: "European Union",
      link: "#"
    },
    {
      id: "digital-transition",
      title: "06. Aide à la transition numérique",
      description: "Diverses aides sont disponibles pour accompagner les PME dans leur transition numérique, telles que : Le Chèque France Num : une aide forfaitaire pour financer des dépenses liées à la transformation numérique des entreprises. Diagnostics numériques : des aides pour réaliser des audits et diagnostics de vos besoins numériques.",
      amount: "Varies by program",
      deadline: "Ongoing",
      eligibility: ["SMEs", "Digital transformation projects"],
      category: "digital",
      source: "Various agencies",
      link: "#"
    },
    {
      id: "bank-loans",
      title: "07. Prêts Bancaires et Financements Privés",
      description: "Outre les aides publiques, les entreprises peuvent également se tourner vers des prêts bancaires et des financements privés pour soutenir leurs projets informatiques. De nombreuses banques et institutions financières offrent des solutions de financement adaptées aux besoins des entreprises technologiques.",
      amount: "Varies by institution",
      deadline: "Ongoing",
      eligibility: ["Credit requirements vary", "IT and technology projects"],
      category: "other",
      source: "Banks and financial institutions",
      link: "#"
    },
    {
      id: "business-angels",
      title: "08. BUSINESS ANGELS",
      description: "Individuals who can invest in your project.",
      amount: "Varies by investor",
      deadline: "Ongoing",
      eligibility: ["Startups", "Innovative projects", "Growth potential"],
      category: "startup",
      source: "Private investors",
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
              <TabsTrigger value="regional" onClick={() => setActiveCategory("regional")}>Regional</TabsTrigger>
              <TabsTrigger value="international" onClick={() => setActiveCategory("international")}>International</TabsTrigger>
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

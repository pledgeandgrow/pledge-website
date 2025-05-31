"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, Award, Newspaper, Globe } from "lucide-react";
import Link from "next/link";

interface Reference {
  id: string;
  name: string;
  url: string;
  description: string;
  category: "legal" | "press" | "directory" | "partner";
  date?: string;
}

export default function ReferencesList() {
  const references: Reference[] = [
    // Legal Listings
    {
      id: "hoodspot",
      name: "01. Hoodspot",
      url: "https://hoodspot.fr/programmeur-informatique/pledge-and-grow-93157766200014/",
      description: "Business analytics platform with detailed information about Pledge & Grow.",
      category: "legal",
      date: "Updated annually"
    },
    {
      id: "figaro-entreprise",
      name: "02. Figaro Entreprise",
      url: "https://entreprises.lefigaro.fr/pledge-and-grow-77/entreprise-931577662",
      description: "Business section of Le Figaro newspaper featuring company profiles including Pledge & Grow.",
      category: "press",
      date: "Updated quarterly"
    },
    {
      id: "data-gouv",
      name: "03. Data Gouv",
      url: "https://annuaire-entreprises.data.gouv.fr/entreprise/pledge-and-grow-931577662",
      description: "French government open data platform with official business information about Pledge & Grow.",
      category: "legal",
      date: "Updated quarterly"
    },
    {
      id: "societe",
      name: "04. Société",
      url: "https://www.societe.com/societe/pledge-and-grow-931577662.html",
      description: "French company information database with legal and financial details about Pledge & Grow.",
      category: "legal",
      date: "Updated quarterly"
    },
    
    // Business Directories
    {
      id: "pages-jaunes",
      name: "05. Pages Jaunes",
      url: "https://www.pagesjaunes.fr/pros/63262977",
      description: "French business directory with Pledge & Grow's contact information and services.",
      category: "directory",
      date: "Updated 2024"
    },
    {
      id: "legaliste",
      name: "06. Le Légaliste",
      url: "https://www.lelegaliste.fr/annonce/constitution/societe-par-actions-simplifiees-sas/1637931",
      description: "Legal business information platform with company registration details for Pledge & Grow.",
      category: "legal",
      date: "Updated 2024"
    },
    {
      id: "greffe",
      name: "07. Greffe",
      url: "https://www.greffe.io/fr/entreprise/pledge-and-grow-931577662",
      description: "Official commercial court registry with legal documentation for Pledge & Grow.",
      category: "legal",
      date: "Updated 2024"
    },
    
    // Partner Platforms
    {
      id: "sortlist",
      name: "08. Sortlist",
      url: "https://www.sortlist.fr/agency/pledge-and-grow",
      description: "Agency matching platform featuring Pledge & Grow's services and portfolio.",
      category: "partner",
      date: "Updated 2024"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "legal":
        return <Building className="h-5 w-5" />;
      case "press":
        return <Newspaper className="h-5 w-5" />;
      case "directory":
        return <Globe className="h-5 w-5" />;
      case "partner":
        return <Award className="h-5 w-5" />;
      default:
        return <Globe className="h-5 w-5" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "legal":
        return "Legal Listing";
      case "press":
        return "Press Mention";
      case "directory":
        return "Business Directory";
      case "partner":
        return "Partner Platform";
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "legal":
        return "bg-blue-500/10 text-blue-500";
      case "press":
        return "bg-purple-500/10 text-purple-500";
      case "directory":
        return "bg-green-500/10 text-green-500";
      case "partner":
        return "bg-amber-500/10 text-amber-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">References & Listings</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Websites, directories, and publications that feature or mention Pledge & Grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference, index) => (
            <motion.div
              key={reference.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{reference.name}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(reference.category)}
                    >
                      {getCategoryLabel(reference.category)}
                    </Badge>
                  </div>
                  <CardDescription>{reference.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {reference.date && (
                    <p className="text-sm text-muted-foreground">
                      {reference.date}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={reference.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Visit {getCategoryIcon(reference.category)} <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            If you would like to feature Pledge & Grow on your platform or publication, please contact us.
          </p>
          <Button asChild>
            <Link href="/contact?subject=Reference Request">
              Contact for Media Inquiries
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

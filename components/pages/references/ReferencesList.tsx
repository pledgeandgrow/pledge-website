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
      id: "infogreffe",
      name: "Infogreffe",
      url: "https://www.infogreffe.fr",
      description: "Official French business registry listing for Pledge & Grow.",
      category: "legal",
      date: "Updated annually"
    },
    {
      id: "societe",
      name: "Société.com",
      url: "https://www.societe.com",
      description: "French company information database with legal and financial details about Pledge & Grow.",
      category: "legal",
      date: "Updated quarterly"
    },
    {
      id: "verif",
      name: "Verif.com",
      url: "https://www.verif.com",
      description: "Business verification platform with legal and financial information about Pledge & Grow.",
      category: "legal",
      date: "Updated quarterly"
    },
    
    // Business Directories
    {
      id: "kompass",
      name: "Kompass",
      url: "https://fr.kompass.com",
      description: "International B2B directory featuring Pledge & Grow's services and contact information.",
      category: "directory",
      date: "Updated 2024"
    },
    {
      id: "europages",
      name: "Europages",
      url: "https://www.europages.fr",
      description: "European B2B platform listing Pledge & Grow among digital service providers.",
      category: "directory",
      date: "Updated 2024"
    },
    {
      id: "pagesjaunes",
      name: "Pages Jaunes",
      url: "https://www.pagesjaunes.fr",
      description: "French business directory with Pledge & Grow's contact information and services.",
      category: "directory",
      date: "Updated 2024"
    },
    
    // Press Mentions
    {
      id: "lesechos",
      name: "Les Echos",
      url: "https://www.lesechos.fr",
      description: "French business newspaper that featured Pledge & Grow in an article about innovative digital agencies.",
      category: "press",
      date: "March 2024"
    },
    {
      id: "latribune",
      name: "La Tribune",
      url: "https://www.latribune.fr",
      description: "Business publication that mentioned Pledge & Grow in a feature on digital transformation.",
      category: "press",
      date: "January 2024"
    },
    {
      id: "techcrunch",
      name: "TechCrunch",
      url: "https://techcrunch.com",
      description: "Technology news website that included Pledge & Grow in an article about European tech startups.",
      category: "press",
      date: "November 2023"
    },
    
    // Partner Platforms
    {
      id: "awwwards",
      name: "Awwwards",
      url: "https://www.awwwards.com",
      description: "Web design awards platform where Pledge & Grow projects have been recognized.",
      category: "partner",
      date: "Ongoing"
    },
    {
      id: "clutch",
      name: "Clutch",
      url: "https://clutch.co",
      description: "B2B ratings and reviews platform featuring Pledge & Grow's services and client testimonials.",
      category: "partner",
      date: "Ongoing"
    },
    {
      id: "digitalagencynetwork",
      name: "Digital Agency Network",
      url: "https://digitalagencynetwork.com",
      description: "Global network of digital agencies that includes Pledge & Grow in its directory.",
      category: "partner",
      date: "Ongoing"
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

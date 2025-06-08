"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, Award, Newspaper, Globe } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

interface Reference {
  id: string;
  name: string;
  url: string;
  description: string;
  category: "legal" | "press" | "directory" | "partner";
  date?: string;
}

export default function ReferencesList() {
  const { t } = useTranslations("references");
  
  const references: Reference[] = [
    // Legal Listings
    {
      id: "hoodspot",
      name: t('references.hoodspot.name'),
      url: "https://hoodspot.fr/programmeur-informatique/pledge-and-grow-93157766200014/",
      description: t('references.hoodspot.description'),
      category: "legal",
      date: t('dates.updatedAnnually')
    },
    {
      id: "figaro-entreprise",
      name: t('references.figaro.name'),
      url: "https://entreprises.lefigaro.fr/pledge-and-grow-77/entreprise-931577662",
      description: t('references.figaro.description'),
      category: "press",
      date: t('dates.updatedQuarterly')
    },
    {
      id: "data-gouv",
      name: t('references.dataGouv.name'),
      url: "https://annuaire-entreprises.data.gouv.fr/entreprise/pledge-and-grow-931577662",
      description: t('references.dataGouv.description'),
      category: "legal",
      date: t('dates.updatedQuarterly')
    },
    {
      id: "societe",
      name: t('references.societe.name'),
      url: "https://www.societe.com/societe/pledge-and-grow-931577662.html",
      description: t('references.societe.description'),
      category: "legal",
      date: t('dates.updatedQuarterly')
    },
    
    // Business Directories
    {
      id: "pages-jaunes",
      name: t('references.pagesJaunes.name'),
      url: "https://www.pagesjaunes.fr/pros/63262977",
      description: t('references.pagesJaunes.description'),
      category: "directory",
      date: t('dates.updated2024')
    },
    {
      id: "legaliste",
      name: t('references.legaliste.name'),
      url: "https://www.lelegaliste.fr/annonce/constitution/societe-par-actions-simplifiees-sas/1637931",
      description: t('references.legaliste.description'),
      category: "legal",
      date: t('dates.updated2024')
    },
    {
      id: "greffe",
      name: t('references.greffe.name'),
      url: "https://www.greffe.io/fr/entreprise/pledge-and-grow-931577662",
      description: t('references.greffe.description'),
      category: "legal",
      date: t('dates.updated2024')
    },
    
    // Partner Platforms
    {
      id: "sortlist",
      name: t('references.sortlist.name'),
      url: "https://www.sortlist.fr/agency/pledge-and-grow",
      description: t('references.sortlist.description'),
      category: "partner",
      date: t('dates.updated2024')
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
        return t('categories.legal');
      case "press":
        return t('categories.press');
      case "directory":
        return t('categories.directory');
      case "partner":
        return t('categories.partner');
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('description')}
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
                      {t('visitButton')} {getCategoryIcon(reference.category)} <ExternalLink className="h-4 w-4 ml-1" />
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
            {t('contactText')}
          </p>
          <Button asChild>
            <Link href="/contact?subject=Reference Request">
              {t('contactButton')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

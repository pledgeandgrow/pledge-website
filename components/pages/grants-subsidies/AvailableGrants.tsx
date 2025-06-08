"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Euro, Calendar, Building, Users, Search, ExternalLink } from "lucide-react";
import Link from "next/link";

import { useTranslations } from "@/hooks/useTranslations";

// Grant interface
interface Grant {
  id: string;
  title: string;
  description: string;
  fundingAmount: string;
  deadline: string;
  eligibility: string[];
  organization: string;
  applicationLink: string;
}

export default function AvailableGrants() {
  const { t } = useTranslations('grants-subsidies');

  // State for filtering and searching
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get grants data from translations
  const createGrantsData = () => {
    const grants: Grant[] = [
      {
        id: "cir",
        title: t('availableGrants.programs.cir.title'),
        description: t('availableGrants.programs.cir.description'),
        fundingAmount: t('availableGrants.programs.cir.fundingAmount'),
        deadline: t('availableGrants.programs.cir.applicationPeriod'),
        eligibility: [t('availableGrants.programs.cir.eligibility')],

        organization: "Ministère de l'Enseignement supérieur et de la Recherche",
        applicationLink: "https://www.enseignementsup-recherche.gouv.fr/cid114521/guide-pratique-du-credit-d-impot-recherche-2021.html"
      },
      {
        id: "bpifrance",
        title: t('availableGrants.programs.bpifrance.title'),
        description: t('availableGrants.programs.bpifrance.description'),
        fundingAmount: t('availableGrants.programs.bpifrance.fundingAmount'),
        deadline: t('availableGrants.programs.bpifrance.applicationPeriod'),
        eligibility: [t('availableGrants.programs.bpifrance.eligibility')],

        organization: "Bpifrance",
        applicationLink: "https://www.bpifrance.fr/"
      },
      {
        id: "fsn",
        title: t('availableGrants.programs.fsn.title'),
        description: t('availableGrants.programs.fsn.description'),
        fundingAmount: t('availableGrants.programs.fsn.fundingAmount'),
        deadline: t('availableGrants.programs.fsn.applicationPeriod'),
        eligibility: [t('availableGrants.programs.fsn.eligibility')],

        organization: "Caisse des Dépôts et Consignations",
        applicationLink: "https://www.caissedesdepots.fr/"
      },
      {
        id: "regional",
        title: t('availableGrants.programs.regional.title'),
        description: t('availableGrants.programs.regional.description'),
        fundingAmount: t('availableGrants.programs.regional.fundingAmount'),
        deadline: t('availableGrants.programs.regional.applicationPeriod'),
        eligibility: [t('availableGrants.programs.regional.eligibility')],

        organization: "Conseils Régionaux",
        applicationLink: "https://www.regions-france.org/"
      },
      {
        id: "horizonEurope",
        title: t('availableGrants.programs.horizonEurope.title'),
        description: t('availableGrants.programs.horizonEurope.description'),
        fundingAmount: t('availableGrants.programs.horizonEurope.fundingAmount'),
        deadline: t('availableGrants.programs.horizonEurope.applicationPeriod'),
        eligibility: [t('availableGrants.programs.horizonEurope.eligibility')],

        organization: "Commission Européenne",
        applicationLink: "https://ec.europa.eu/info/research-and-innovation/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en"
      },
      {
        id: "digitalTransition",
        title: t('availableGrants.programs.digitalTransition.title'),
        description: t('availableGrants.programs.digitalTransition.description'),
        fundingAmount: t('availableGrants.programs.digitalTransition.fundingAmount'),
        deadline: t('availableGrants.programs.digitalTransition.applicationPeriod'),
        eligibility: [t('availableGrants.programs.digitalTransition.eligibility')],

        organization: "France Num",
        applicationLink: "https://www.francenum.gouv.fr/"
      },
      {
        id: "privateFunding",
        title: t('availableGrants.programs.privateFunding.title'),
        description: t('availableGrants.programs.privateFunding.description'),
        fundingAmount: t('availableGrants.programs.privateFunding.fundingAmount'),
        deadline: t('availableGrants.programs.privateFunding.applicationPeriod'),
        eligibility: [t('availableGrants.programs.privateFunding.eligibility')],

        organization: "Banques et institutions financières",
        applicationLink: "https://www.economie.gouv.fr/entreprises/aides-financement-entreprises"
      }
    ];
    return grants;
  };
  
  const grantsData: Grant[] = createGrantsData();
  
  // Filter grants based on search query only
  const filteredGrants = useMemo(() => {
    return grantsData
      .filter((grant: Grant) => {
        // Search filtering
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          grant.title.toLowerCase().includes(query) ||
          grant.description.toLowerCase().includes(query) ||
          grant.fundingAmount.toLowerCase().includes(query)
        );
      });
  }, [grantsData, searchQuery]);
  
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('availableGrants.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('availableGrants.description')}
          </p>
        </motion.div>
        
        {/* Filtering and search controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher des aides..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Grants listing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grants-${searchQuery}`}
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
                        <span>Échéance: {grant.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        <span>{grant.organization}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium">Éligibilité:</span>
                          <ul className="text-sm list-disc list-inside ml-1 text-muted-foreground">
                            {grant.eligibility.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between">
                      <Button asChild variant="outline" size="sm" className="gap-1">
                        <Link href={grant.applicationLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visiter le site
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
                <p className="text-lg text-muted-foreground mb-4">{t('availableGrants.noResults')}</p>
                <Button onClick={() => {
                  setSearchQuery("");
                }}>
                  {t('availableGrants.clearFilters')}
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
            <span className="font-medium">{t('availableGrants.disclaimerTitle')}:</span> {t('availableGrants.disclaimer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

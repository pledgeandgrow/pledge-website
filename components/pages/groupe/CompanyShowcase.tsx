"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

interface Company {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  longDescription: string;
  founded: string;
  location: string;
  website: string;
}

export default function CompanyShowcase() {
  const { t } = useTranslations('groupe');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
  
  // Get the company data from translations
  // Looking at the structure in groupe.json, we can see companies.items is an array
  interface CompaniesTranslation {
    items?: Array<{
      id?: string;
      name?: string;
      logo?: string;
      category?: string;
      description?: string;
      longDescription?: string;
      founded?: string;
      location?: string;
      website?: string;
      employees?: string;
    }>;
  }
  
  const translations = t('companies') as CompaniesTranslation;
  const companiesData = translations?.items || [];
  
  // Add logging to help debug translation issues
  console.log('Companies translation data:', companiesData);
  
  // Map the translation data to our Company interface
  const companies: Company[] = Array.isArray(companiesData) ? companiesData.map((item) => ({
    id: item.id || '',
    name: item.name || '',
    logo: item.logo || '',
    category: item.category || '',
    description: item.description || '',
    longDescription: item.longDescription || '',
    founded: item.founded || '',
    location: item.location || '',
    website: item.website || ''
  })) : [];
  
  // If we still don't have companies, add fallback data
  if (companies.length === 0) {
    console.log('Using fallback company data');
    companies.push(
      {
        id: "pledge-and-grow",
        name: "Pledge & Grow",
        logo: "/images/groupe/logo-pledge.png",
        category: t('companies.filters.digital') || "Digital Services",
        description: t('companies.items.0.description') || "Digital transformation consultancy specializing in web development, mobile applications, and digital strategy.",
        longDescription: t('companies.items.0.longDescription') || "Pledge & Grow is the flagship company of our group, offering comprehensive digital transformation services to businesses across various sectors.",
        founded: "2022",
        location: "Paris, France",
        website: "https://pledgeandgrow.com"
      },
      {
        id: "taskmate",
        name: "Taskmate",
        logo: "/images/groupe/logo-fintech.png",
        category: t('companies.filters.automation') || "Automation Services",
        description: t('companies.items.1.description') || "Advanced automation solutions to streamline business processes and increase operational efficiency.",
        longDescription: t('companies.items.1.longDescription') || "Taskmate specializes in developing intelligent automation solutions that help businesses streamline their operations.",
        founded: "2025",
        location: "Paris, France",
        website: "https://taskmate-ia.vercel.app/"
      },
      {
        id: "verdalize",
        name: "Verdalize",
        logo: "/images/groupe/logo-greentech.png",
        category: t('companies.filters.fintech') || "Financial Technology",
        description: t('companies.items.2.description') || "Innovative financial technology solutions for banks, insurance companies, and financial service providers.",
        longDescription: t('companies.items.2.longDescription') || "Verdalize develops cutting-edge financial technology products that help traditional financial institutions modernize their operations.",
        founded: "2025",
        location: "London, UK",
        website: "https://greentechinnovations.com"
      }
    );
  }

  // No categories needed as tabs have been removed

  return (
    <section id="companies" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('companies.title')}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t('companies.description')}
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {companies.map((company) => (
                  <div key={company.id} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                            {company.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{company.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {company.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{t('companies.company.founded')}: {company.founded}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{t('companies.company.location')}: {company.location}</span>
                          </div>

                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              onClick={() => setSelectedCompany(company)}
                            >
                              {t('companies.company.learnMore')}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            {selectedCompany && (
                              <>
                                <DialogHeader>
                                  <div>
                                    <DialogTitle className="text-2xl">{selectedCompany.name}</DialogTitle>
                                    <DialogDescription className="text-primary">
                                      {selectedCompany.category}
                                    </DialogDescription>
                                  </div>
                                </DialogHeader>
                                
                                <div className="mt-6 space-y-6">
                                  <div>
                                    <h3 className="text-lg font-semibold mb-2">{t('companies.company.about')}</h3>
                                    <p className="text-muted-foreground">
                                      {selectedCompany.longDescription}
                                    </p>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                    <div className="flex flex-col gap-1">
                                      <span className="text-sm text-muted-foreground">{t('companies.company.founded')}</span>
                                      <span className="font-medium flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        {selectedCompany.founded}
                                      </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <span className="text-sm text-muted-foreground">{t('companies.company.location')}</span>
                                      <span className="font-medium flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {selectedCompany.location}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {/* Services & Achievements sections removed as requested */}
                                  
                                  <div className="pt-4">
                                    <Button asChild className="w-full sm:w-auto">
                                      <Link href={selectedCompany.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        {t('companies.company.visitWebsite')} <ExternalLink className="h-4 w-4" />
                                      </Link>
                                    </Button>
                                  </div>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Link href={company.website} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {companies.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {company.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {company.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{t('companies.company.founded')}: {company.founded}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{company.location}</span>
                      </div>

                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          onClick={() => setSelectedCompany(company)}
                        >
                          {t('companies.company.learnMore')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        {selectedCompany && (
                          <>
                            <DialogHeader>
                              <div>
                                <DialogTitle className="text-2xl">{selectedCompany.name}</DialogTitle>
                                <DialogDescription className="text-primary">
                                  {selectedCompany.category}
                                </DialogDescription>
                              </div>
                            </DialogHeader>
                            
                            <div className="mt-6 space-y-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-2">{t('companies.company.about')}</h3>
                                <p className="text-muted-foreground">
                                  {selectedCompany.longDescription}
                                </p>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                                <div className="flex flex-col gap-1">
                                  <span className="text-sm text-muted-foreground">{t('companies.company.founded')}</span>
                                  <span className="font-medium flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    {selectedCompany.founded}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <span className="text-sm text-muted-foreground">{t('companies.company.location')}</span>
                                  <span className="font-medium flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {selectedCompany.location}
                                  </span>
                                </div>

                              </div>
                              
                              {/* Services and Achievements sections removed */}
                              
                              <div className="pt-4">
                                <Button asChild className="w-full sm:w-auto">
                                  <Link href={selectedCompany.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    {t('companies.company.visitWebsite')} <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Link href={company.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Truck, 
  Hotel, 
  Landmark 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Badge import removed as it was unused
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
// Carousel imports removed as they were unused

interface Industry {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  solutions: string[];
  caseStudyAvailable: boolean;
}

export default function IndustrySolutions() {
  const { t } = useTranslations('business-sectors');
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
  // Get industry data from translations
  const getIndustryData = (): Industry[] => [
    {
      id: "retail",
      title: t('industrySolutions.sectors.retail.title'),
      description: t('industrySolutions.sectors.retail.description'),
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.retail.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: true
    },
    {
      id: "manufacturing",
      title: t('industrySolutions.sectors.manufacturing.title'),
      description: t('industrySolutions.sectors.manufacturing.description'),
      icon: <Building2 className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.manufacturing.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: true
    },
    {
      id: "healthcare",
      title: t('industrySolutions.sectors.healthcare.title'),
      description: t('industrySolutions.sectors.healthcare.description'),
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.healthcare.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: true
    },
    {
      id: "education",
      title: t('industrySolutions.sectors.education.title'),
      description: t('industrySolutions.sectors.education.description'),
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.education.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: false
    },
    {
      id: "finance",
      title: t('industrySolutions.sectors.finance.title'),
      description: t('industrySolutions.sectors.finance.description'),
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.finance.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: true
    },
    {
      id: "logistics",
      title: t('industrySolutions.sectors.logistics.title', { defaultValue: "Logistics" }),
      description: t('industrySolutions.sectors.logistics.description', { defaultValue: "Technology solutions that optimize routes, enhance tracking capabilities, and improve overall supply chain efficiency." }),
      icon: <Truck className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.logistics.keyFeatures', { returnObjects: true, defaultValue: ["Fleet management", "Route optimization", "Shipment tracking", "Warehouse management"] }) as string[],
      caseStudyAvailable: false
    },
    {
      id: "hospitality",
      title: t('industrySolutions.sectors.hospitality.title', { defaultValue: "Hospitality" }),
      description: t('industrySolutions.sectors.hospitality.description', { defaultValue: "Digital solutions that enhance guest experiences, streamline bookings, and optimize operational efficiency in hospitality businesses." }),
      icon: <Hotel className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.hospitality.keyFeatures', { returnObjects: true, defaultValue: ["Booking systems", "Guest experience platforms", "Property management", "Revenue management"] }) as string[],
      caseStudyAvailable: true
    },
    {
      id: "government",
      title: t('industrySolutions.sectors.government.title'),
      description: t('industrySolutions.sectors.government.description'),
      icon: <Landmark className="h-10 w-10 text-primary" />,
      solutions: t('industrySolutions.sectors.government.keyFeatures', { returnObjects: true }) as string[],
      caseStudyAvailable: false
    }
  ];

  // Initialize industries data using translations
  const industries = getIndustryData();
  const [activeIndustry, setActiveIndustry] = useState<Industry | null>(null);

  return (
    <section id="industry-solutions" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('industrySolutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('industrySolutions.description')}
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {industries.map((industry) => (
                  <div key={industry.id} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card 
                      className="h-full cursor-pointer hover:shadow-md transition-shadow duration-300"
                      onClick={() => setActiveIndustry(industry)}
                    >
                      <CardHeader>
                        <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                          {industry.icon}
                        </div>
                        <CardTitle className="text-xl">{industry.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-4">
                          {industry.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          {t('industrySolutions.viewSolutions', { defaultValue: 'View Solutions' })}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {industries.slice(0, Math.min(5, industries.length)).map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                  {industries.length > 5 && (
                    <div className="h-2 w-2 rounded-full bg-primary/30">...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full cursor-pointer hover:shadow-md transition-shadow duration-300"
                  onClick={() => setActiveIndustry(industry)}
                >
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      {t('industrySolutions.viewSolutions', { defaultValue: 'View Solutions' })}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {activeIndustry && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                      {activeIndustry.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{activeIndustry.title}</h3>
                      <p className="text-muted-foreground">{activeIndustry.description}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setActiveIndustry(null)}
                    className="rounded-full"
                  >
                    ✕
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">{t('industrySolutions.solutionsTitle', { defaultValue: 'Our Solutions' })}</h4>
                    <ul className="space-y-2">
                      {activeIndustry.solutions.map((solution: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 text-primary">•</div>
                          <div>{solution}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button asChild>
                    <Link href={`/contact?subject=${activeIndustry.title} Solutions`}>
                      {t('industrySolutions.discussProject', { defaultValue: 'Discuss Your Project' })}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

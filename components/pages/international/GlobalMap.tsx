"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

interface Office {
  id: string;
  city: string;
  country: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  teamSize: number;
  timezone: string;
  coordinates: {
    x: number;
    y: number;
  };
}

export default function GlobalMap() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslations('international');

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
  const offices: Office[] = [
    {
      id: "paris",
      city: "Paris",
      country: "France",
      region: "Europe",
      address: "Mehdi BEREL",
      phone: "+33 7 53 69 58 40",
      email: "mehdi.berel@pledgeandgrow.com",
      teamSize: 45,
      timezone: "CET (UTC+1)",
      coordinates: { x: 48.5, y: 33 }
    },
    {
      id: "london",
      city: "London",
      country: "United Kingdom",
      region: "Europe",
      address: "Louis Junqua-Salanne",
      phone: "+44 7535 740594",
      email: "louis.junqua@pledgeandgrow.com",
      teamSize: 38,
      timezone: "GMT (UTC+0)",
      coordinates: { x: 45, y: 29.5 }
    },
    {
      id: "newyork",
      city: "New York",
      country: "United States",
      region: "North America",
      address: "Zachary GREEZ",
      phone: "+44 7393 413579",
      email: "zachary.greez@gmail.com",
      teamSize: 65,
      timezone: "EST (UTC-5)",
      coordinates: { x: 25, y: 35 }
    },
    {
      id: "tunis",
      city: "Tunis",
      country: "Tunisia",
      region: "Africa",
      address: "Rami HADRI",
      phone: "+33 6 35 88 81 24",
      email: "rami.hadri@pledgeandgrow.com",
      teamSize: 20,
      timezone: "CET (UTC+1)",
      coordinates: { x: 52, y: 40 }
    },
    {
      id: "dubai",
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      address: "Shihab BEREL",
      phone: "+971 50 392 7710",
      email: "shihab.berel@pledgeandgrow.com",
      teamSize: 25,
      timezone: "GST (UTC+4)",
      coordinates: { x: 60, y: 42 }
    },
    {
      id: "casablanca",
      city: "Casablanca",
      country: "Morocco",
      region: "Africa",
      address: "Zakaria HADRAOUI",
      phone: "+212 691-407941",
      email: "zakaria.hadraoui@pledgeandgrow.com",
      teamSize: 18,
      timezone: "WET (UTC+0)",
      coordinates: { x: 45, y: 42 }
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  // Using all offices without filtering by region
  const filteredOffices = offices;

  return (
    <section id="global-offices" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('globalMap.title') || "Our Contacts"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('globalMap.description') || "Our contacts in those strategic regions collaborate with us and operate from distance in their region. If you want someone local or in your region, here they are."}
          </p>
        </motion.div>

        {/* Region filters removed as requested */}

        {/* World map removed as requested */}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {filteredOffices.map((office) => (
                  <div key={office.id} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card 
                      className={`h-full transition-all ${selectedOffice?.id === office.id ? 'border-primary/50 bg-primary/5 dark:bg-primary/10' : ''}`}
                      onClick={() => setSelectedOffice(office)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="mb-2">
                            {office.region}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {office.city}, {office.country}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <User className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span className="text-sm font-medium">{office.address}</span>
                          </div>
                          <div className="flex items-start">
                            <Phone className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span className="text-sm text-muted-foreground">{office.phone}</span>
                          </div>
                          <div className="flex items-start">
                            <Mail className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span className="text-sm text-muted-foreground">{office.email}</span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span className="text-sm text-muted-foreground">{office.timezone}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {filteredOffices.map((_, index) => (
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
            {filteredOffices.map((office) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedOffice(office)}
                className="cursor-pointer"
              >
                <Card className={`h-full transition-all ${selectedOffice?.id === office.id ? 'border-primary/50 bg-primary/5 dark:bg-primary/10' : ''}`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {office.region}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {office.city}, {office.country}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <User className="h-4 w-4 text-primary mr-2 mt-1" />
                        <span className="text-sm font-medium">{office.address}</span>
                      </div>
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 text-primary mr-2 mt-1" />
                        <span className="text-sm text-muted-foreground">{office.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-4 w-4 text-primary mr-2 mt-1" />
                        <span className="text-sm text-muted-foreground">{office.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 text-primary mr-2 mt-1" />
                        <span className="text-sm text-muted-foreground">{office.timezone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

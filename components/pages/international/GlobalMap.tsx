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
      phone: "+33 1 23 45 67 89",
      email: "paris@pledgeandgrow.com",
      teamSize: 45,
      timezone: "CET (UTC+1)",
      coordinates: { x: 48.5, y: 33 }
    },
    {
      id: "london",
      city: "London",
      country: "United Kingdom",
      region: "Europe",
      address: "Ilyas BEREL",
      phone: "+44 20 7946 0958",
      email: "london@pledgeandgrow.com",
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
      phone: "+1 212 736 3100",
      email: "newyork@pledgeandgrow.com",
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
      phone: "+216 71 123 456",
      email: "tunis@pledgeandgrow.com",
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
      phone: "+971 4 330 0000",
      email: "dubai@pledgeandgrow.com",
      teamSize: 25,
      timezone: "GST (UTC+4)",
      coordinates: { x: 60, y: 42 }
    },
    {
      id: "casablanca",
      city: "Casablanca",
      country: "Morocco",
      region: "Africa",
      address: "Walid JOUIAD",
      phone: "+212 522 123 456",
      email: "morocco@pledgeandgrow.com",
      teamSize: 18,
      timezone: "WET (UTC+0)",
      coordinates: { x: 45, y: 42 }
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [activeRegion, setActiveRegion] = useState<string>("all");

  const regions = Array.from(new Set(offices.map(office => office.region)));
  
  const filteredOffices = activeRegion === "all" 
    ? offices 
    : offices.filter(office => office.region === activeRegion);

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
            Our Contacts
          </h2>
          <p className="text-lg text-muted-foreground">
            With offices across major global hubs, we deliver localized expertise with a global perspective.
            Our international presence allows us to serve clients in their time zone and language.
            Here is the contacts for commercial purpose internationally.
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

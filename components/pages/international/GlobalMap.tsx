"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
  const offices: Office[] = [
    {
      id: "paris",
      city: "Paris",
      country: "France",
      region: "Europe",
      address: "123 Avenue des Champs-Élysées, 75008 Paris",
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
      address: "30 St Mary Axe, London EC3A 8BF",
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
      address: "350 Fifth Avenue, New York, NY 10118",
      phone: "+1 212 736 3100",
      email: "newyork@pledgeandgrow.com",
      teamSize: 65,
      timezone: "EST (UTC-5)",
      coordinates: { x: 25, y: 35 }
    },
    {
      id: "sydney",
      city: "Sydney",
      country: "Australia",
      region: "Oceania",
      address: "1 Macquarie Place, Sydney NSW 2000",
      phone: "+61 2 9876 5432",
      email: "sydney@pledgeandgrow.com",
      teamSize: 30,
      timezone: "AEST (UTC+10)",
      coordinates: { x: 87, y: 70 }
    },
    {
      id: "dubai",
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      address: "Emirates Towers, Sheikh Zayed Road, Dubai",
      phone: "+971 4 330 0000",
      email: "dubai@pledgeandgrow.com",
      teamSize: 25,
      timezone: "GST (UTC+4)",
      coordinates: { x: 60, y: 42 }
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

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Badge
            variant={activeRegion === "all" ? "default" : "outline"}
            className="cursor-pointer text-sm py-1.5 px-3"
            onClick={() => setActiveRegion("all")}
          >
            All Regions
          </Badge>
          {regions.map(region => (
            <Badge
              key={region}
              variant={activeRegion === region ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5 px-3"
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </Badge>
          ))}
        </div>

        <div className="relative mb-12">
          <div className="relative w-full h-[400px] md:h-[600px] bg-muted rounded-lg overflow-hidden">
            <Image
              src="/images/international/world-map.svg"
              alt="World Map"
              fill
              className="object-cover"
            />
            
            {filteredOffices.map((office) => (
              <motion.div
                key={office.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute cursor-pointer group`}
                style={{ 
                  left: `${office.coordinates.x}%`, 
                  top: `${office.coordinates.y}%` 
                }}
                onClick={() => setSelectedOffice(office)}
              >
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full bg-primary ${selectedOffice?.id === office.id ? 'ring-4 ring-primary/30' : ''}`}></div>
                  <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-primary/30 animate-ping"></div>
                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-background border border-border rounded-md py-1 px-2 text-xs font-medium whitespace-nowrap transition-opacity">
                    {office.city}, {office.country}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{office.timezone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Mail, Phone, MapPin, Globe, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OfficeContact {
  region: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  location: string;
}

export default function GlobalOffices() {
  const officeContacts: OfficeContact[] = [
    {
      region: "Europe",
      contactPerson: "Sophie Martin",
      position: "Head of European Operations",
      email: "europe@pledgeandgrow.com",
      phone: "+33 7 53 69 58 40",
      location: "Paris, France"
    },
    {
      region: "North America",
      contactPerson: "Michael Johnson",
      position: "Business Development Manager",
      email: "northamerica@pledgeandgrow.com",
      phone: "+1 415 555 7890",
      location: "New York, USA"
    },
    {
      region: "Asia",
      contactPerson: "Lin Wei",
      position: "Regional Director",
      email: "asia@pledgeandgrow.com",
      phone: "+65 8123 4567",
      location: "Singapore"
    },
    {
      region: "Middle East & Africa",
      contactPerson: "Ahmed Hassan",
      position: "Business Development Lead",
      email: "mea@pledgeandgrow.com",
      phone: "+971 50 123 4567",
      location: "Dubai, UAE"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Offices
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact our regional representatives for commercial inquiries and partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {officeContacts.map((office, index) => (
            <motion.div
              key={office.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    {office.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div className="ml-3">
                      <p className="font-medium">{office.contactPerson}</p>
                      <p className="text-sm text-muted-foreground">{office.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div className="ml-3">
                      <Link 
                        href={`mailto:${office.email}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {office.email}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div className="ml-3">
                      <Link 
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {office.phone}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-muted-foreground">{office.location}</p>
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Client {
  id: string;
  name: string;
  logo: string;
  region: string;
  industry: string;
}

export default function GlobalClients() {
  const clients: Client[] = [
    {
      id: "client1",
      name: "TechGlobal",
      logo: "/images/clients/client1.svg",
      region: "North America",
      industry: "Technology"
    },
    {
      id: "client2",
      name: "EuroFinance",
      logo: "/images/clients/client2.svg",
      region: "Europe",
      industry: "Finance"
    },
    {
      id: "client3",
      name: "AsiaHealth",
      logo: "/images/clients/client3.svg",
      region: "Asia",
      industry: "Healthcare"
    },
    {
      id: "client4",
      name: "LatamRetail",
      logo: "/images/clients/client4.svg",
      region: "Latin America",
      industry: "Retail"
    },
    {
      id: "client5",
      name: "MENAEnergy",
      logo: "/images/clients/client5.svg",
      region: "Middle East",
      industry: "Energy"
    },
    {
      id: "client6",
      name: "AfricaAgri",
      logo: "/images/clients/client6.svg",
      region: "Africa",
      industry: "Agriculture"
    },
    {
      id: "client7",
      name: "OceaniaTravel",
      logo: "/images/clients/client7.svg",
      region: "Oceania",
      industry: "Travel"
    },
    {
      id: "client8",
      name: "GlobalMedia",
      logo: "/images/clients/client8.svg",
      region: "Global",
      industry: "Media"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            We're proud to work with leading organizations across industries and regions.
            Our diverse client base spans from startups to multinational corporations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="flex justify-center items-center h-20 w-full mb-4 bg-white dark:bg-black/40 rounded-md p-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium mb-2">{client.name}</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {client.region}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {client.industry}
                      </Badge>
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

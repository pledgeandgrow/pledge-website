"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Handshake, Building, Globe, Users } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  type: string;
}

export default function GroupePartners() {
  const partners: Partner[] = [
    { id: "partner1", name: "TechAlliance", logo: "/images/groupe/partners/techalliance.png", type: "Technology" },
    { id: "partner2", name: "InnoVentures", logo: "/images/groupe/partners/innoventures.png", type: "Investment" },
    { id: "partner3", name: "GlobalTech", logo: "/images/groupe/partners/globaltech.png", type: "Technology" },
    { id: "partner4", name: "EduFuture", logo: "/images/groupe/partners/edufuture.png", type: "Education" },
    { id: "partner5", name: "GreenInvest", logo: "/images/groupe/partners/greeninvest.png", type: "Investment" },
    { id: "partner6", name: "DataDriven", logo: "/images/groupe/partners/datadriven.png", type: "Analytics" },
    { id: "partner7", name: "CloudNative", logo: "/images/groupe/partners/cloudnative.png", type: "Infrastructure" },
    { id: "partner8", name: "DesignWorks", logo: "/images/groupe/partners/designworks.png", type: "Design" },
  ];

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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Strategic Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders and innovative organizations to expand our capabilities and deliver exceptional value to our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border shadow-sm text-center"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">20+</h3>
            <p className="text-muted-foreground">Strategic Partnerships</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border shadow-sm text-center"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">6</h3>
            <p className="text-muted-foreground">Industries Covered</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border shadow-sm text-center"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">12</h3>
            <p className="text-muted-foreground">Countries Represented</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border shadow-sm text-center"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">150+</h3>
            <p className="text-muted-foreground">Joint Projects</p>
          </motion.div>
        </div>

        <div className="bg-card p-8 rounded-lg border shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-full relative mb-3">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium text-center">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

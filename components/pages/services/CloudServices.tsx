"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cloud, Mail, Server, Globe, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface CloudService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  link: string;
}

const cloudServices: CloudService[] = [
  {
    id: "hosting",
    title: "Web Hosting",
    description: "Reliable and fast web hosting solutions for websites of all sizes.",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    features: [
      "99.9% uptime guarantee",
      "SSD storage",
      "Free SSL certificates",
      "Daily backups",
      "24/7 monitoring",
      "One-click WordPress installation"
    ],
    price: "From €9.99/month",
    link: "/digital-project"
  },
  {
    id: "email",
    title: "Business Email",
    description: "Professional email solutions with your custom domain name.",
    icon: <Mail className="h-8 w-8 text-primary" />,
    features: [
      "Custom domain email addresses",
      "Large storage capacity",
      "Spam and virus protection",
      "Mobile access",
      "Calendar and contacts sync",
      "Email forwarding and aliases"
    ],
    price: "From €4.99/month per user",
    link: "/digital-project"
  },
  {
    id: "vps",
    title: "Virtual Private Servers",
    description: "Scalable VPS solutions with dedicated resources and full control.",
    icon: <Server className="h-8 w-8 text-primary" />,
    features: [
      "Dedicated CPU and RAM",
      "Root access",
      "Choice of operating systems",
      "Scalable resources",
      "Managed or unmanaged options",
      "High-performance SSD storage"
    ],
    price: "From €19.99/month",
    link: "/digital-project"
  },
  {
    id: "domain",
    title: "Domain Names",
    description: "Register and manage domain names for your online presence.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    features: [
      "Wide range of TLDs (.com, .net, .org, etc.)",
      "Free WHOIS privacy protection",
      "Easy domain management",
      "Domain transfer service",
      "Auto-renewal option",
      "DNS management"
    ],
    price: "From €12.99/year",
    link: "/digital-project"
  }
];

export default function CloudServices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Pledge and Cloud</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our cloud services provide reliable, secure, and scalable solutions for your online presence and infrastructure needs.
          </p>
        </div>
        
        {/* Mobile scrollable container */}
        <div className="lg:hidden overflow-x-auto pb-6 -mx-4 px-4" ref={scrollContainerRef}>
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px]"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="font-medium text-foreground">{service.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cloudServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="font-medium text-foreground">{service.price}</div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Looking for a custom cloud solution? We offer tailored packages to meet your specific requirements.
          </p>
          <Button asChild>
            <Link href="/contact">
              Contact for Custom Cloud Solutions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, Languages, Scale, Users } from "lucide-react";

interface ServiceRegion {
  id: string;
  name: string;
  description: string;
  services: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  image: string;
}

export default function InternationalServices() {
  const regions: ServiceRegion[] = [
    {
      id: "europe",
      name: "Europe",
      description: "Our European services focus on digital transformation for enterprises, GDPR compliance, and multilingual solutions tailored to the diverse European market.",
      services: [
        {
          title: "GDPR Compliance Solutions",
          description: "Comprehensive services to ensure your digital products comply with European data protection regulations.",
          icon: <Scale className="h-5 w-5" />
        },
        {
          title: "Multilingual Platform Development",
          description: "Custom web and mobile applications supporting multiple European languages and regional requirements.",
          icon: <Languages className="h-5 w-5" />
        },
        {
          title: "EU Digital Market Entry Strategy",
          description: "Strategic consulting for companies looking to enter or expand within the European digital marketplace.",
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: "Cross-Border E-commerce Solutions",
          description: "Integrated platforms supporting multiple currencies, tax systems, and shipping methods across European countries.",
          icon: <Users className="h-5 w-5" />
        }
      ],
      image: "/images/international/europe-services.jpg"
    },
    {
      id: "northamerica",
      name: "North America",
      description: "Our North American services emphasize scalable cloud solutions, enterprise integrations, and innovative technologies for startups and established businesses.",
      services: [
        {
          title: "Enterprise Cloud Migration",
          description: "End-to-end migration services to AWS, Azure, or Google Cloud with optimized architecture for North American operations.",
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: "AI & Machine Learning Solutions",
          description: "Custom AI implementations for business process automation, predictive analytics, and customer experience enhancement.",
          icon: <Scale className="h-5 w-5" />
        },
        {
          title: "Startup Technology Acceleration",
          description: "Rapid development services for startups, including MVP development, scaling strategies, and investor-ready technology stacks.",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Compliance & Security Solutions",
          description: "Specialized services addressing SOC 2, HIPAA, and industry-specific compliance requirements for North American businesses.",
          icon: <Languages className="h-5 w-5" />
        }
      ],
      image: "/images/international/northamerica-services.jpg"
    },
    {
      id: "asia",
      name: "Asia-Pacific",
      description: "Our Asia-Pacific services address the region's diverse markets with mobile-first strategies, localization expertise, and solutions for emerging markets.",
      services: [
        {
          title: "Mobile-First Digital Solutions",
          description: "Specialized mobile application development optimized for the diverse device landscape across Asian markets.",
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: "Localization & Cultural Adaptation",
          description: "Comprehensive localization services ensuring your digital products resonate with local cultures and preferences.",
          icon: <Languages className="h-5 w-5" />
        },
        {
          title: "WeChat & Super App Integration",
          description: "Specialized services for integrating with popular Asian platforms and developing mini-programs for super apps.",
          icon: <Users className="h-5 w-5" />
        },
        {
          title: "Emerging Market Digital Strategy",
          description: "Tailored approaches for businesses entering high-growth Asian markets with unique technological considerations.",
          icon: <Scale className="h-5 w-5" />
        }
      ],
      image: "/images/international/asia-services.jpg"
    },
    {
      id: "middleeast",
      name: "Middle East",
      description: "Our Middle Eastern services combine cutting-edge technology with cultural sensitivity, focusing on Arabic language support and regional compliance.",
      services: [
        {
          title: "Arabic-First Digital Experiences",
          description: "Specialized development for right-to-left interfaces with proper Arabic language support and cultural considerations.",
          icon: <Languages className="h-5 w-5" />
        },
        {
          title: "Smart City & Government Solutions",
          description: "Digital transformation services for government entities and smart city initiatives across the Middle East.",
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: "Regional Payment Integration",
          description: "Implementation of payment solutions supporting regional payment methods and compliance requirements.",
          icon: <Scale className="h-5 w-5" />
        },
        {
          title: "Digital Banking & Fintech",
          description: "Specialized solutions for the rapidly growing Middle Eastern financial technology sector.",
          icon: <Users className="h-5 w-5" />
        }
      ],
      image: "/images/international/middleeast-services.jpg"
    },
    {
      id: "latinamerica",
      name: "Latin America",
      description: "Our Latin American services focus on accessible solutions, mobile optimization for diverse connectivity, and regional payment integrations.",
      services: [
        {
          title: "Low-Bandwidth Optimized Solutions",
          description: "Digital products optimized for varying internet connectivity conditions across Latin American regions.",
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: "Spanish & Portuguese Localization",
          description: "Comprehensive localization services with regional dialect considerations for Latin American markets.",
          icon: <Languages className="h-5 w-5" />
        },
        {
          title: "Regional Payment Methods",
          description: "Integration with local payment systems and alternative payment methods popular in Latin American countries.",
          icon: <Scale className="h-5 w-5" />
        },
        {
          title: "Cross-Border E-commerce",
          description: "Solutions addressing the unique challenges of e-commerce operations across Latin American countries.",
          icon: <Users className="h-5 w-5" />
        }
      ],
      image: "/images/international/latinamerica-services.jpg"
    }
  ];

  return (
    <section id="international-services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Regional Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer specialized services tailored to the unique needs and requirements of different regions around the world.
            Our local expertise ensures solutions that resonate with regional markets.
          </p>
        </motion.div>

        <Tabs defaultValue="europe" className="w-full">
          <TabsList className="flex flex-wrap justify-center h-auto p-1 mb-8">
            {regions.map((region) => (
              <TabsTrigger 
                key={region.id} 
                value={region.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {region.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {regions.map((region) => (
            <TabsContent key={region.id} value={region.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">{region.name} Services</h3>
                  <p className="text-muted-foreground mb-6">{region.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {region.services.map((service, index) => (
                      <Card key={index} className="border border-border">
                        <CardHeader className="pb-2">
                          <div className="bg-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                            <div className="text-primary">
                              {service.icon}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{service.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact?subject=International Services Inquiry" className="flex items-center gap-2">
                        Contact Our {region.name} Team
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={region.image}
                    alt={`${region.name} Services`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

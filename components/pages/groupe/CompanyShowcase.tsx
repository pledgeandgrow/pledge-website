"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, MapPin, Users, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Company {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  longDescription: string;
  founded: string;
  location: string;
  team: string;
  website: string;
  services: string[];
  achievements: string[];
}

export default function CompanyShowcase() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  
  const companies: Company[] = [
    {
      id: "pledge-and-grow",
      name: "Pledge & Grow",
      logo: "/images/groupe/logo-pledge.png",
      category: "Digital Services",
      description: "Digital transformation consultancy specializing in web development, mobile applications, and digital strategy.",
      longDescription: "Pledge & Grow is the flagship company of our group, offering comprehensive digital transformation services to businesses across various sectors. Our team of experts combines technical expertise with strategic thinking to help organizations leverage technology for sustainable growth. From custom software development to digital marketing strategies, we provide end-to-end solutions tailored to each client's unique needs.",
      founded: "2018",
      location: "Paris, France",
      team: "45+ professionals",
      website: "https://pledgeandgrow.com",
      services: [
        "Custom Web Development",
        "Mobile App Development",
        "Digital Strategy Consulting",
        "UX/UI Design",
        "E-commerce Solutions"
      ],
      achievements: [
        "Delivered 100+ successful digital projects",
        "Recognized as a top digital agency in France",
        "Achieved 98% client satisfaction rate",
        "Developed award-winning mobile applications"
      ]
    },
    {
      id: "taskmate",
      name: "TaskMate",
      logo: "/images/groupe/logo-taskmate.png",
      category: "Productivity",
      description: "AI-powered task management and productivity platform for teams and individuals.",
      longDescription: "TaskMate is our innovative productivity solution that leverages artificial intelligence to help teams and individuals manage tasks more efficiently. The platform intelligently prioritizes tasks, automates routine work, and provides insights to optimize productivity. With features like smart scheduling, collaborative workspaces, and performance analytics, TaskMate transforms how teams organize their work and achieve their goals.",
      founded: "2021",
      location: "Paris, France",
      team: "18 productivity experts",
      website: "https://taskmate.pledgeandgrow.com",
      services: [
        "AI Task Prioritization",
        "Team Collaboration Tools",
        "Productivity Analytics",
        "Smart Scheduling",
        "Workflow Automation"
      ],
      achievements: [
        "Used by 50,000+ professionals worldwide",
        "Increased team productivity by an average of 32%",
        "Featured in top productivity app rankings",
        "Processes over 1 million tasks daily"
      ]
    },
    {
      id: "verdalize",
      name: "Verdalize",
      logo: "/images/groupe/logo-verdalize.png",
      category: "Sustainability",
      description: "Sustainability platform helping businesses measure, reduce, and report their environmental impact.",
      longDescription: "Verdalize provides organizations with the tools and expertise to measure, manage, and communicate their environmental impact. Our platform combines data analytics with sustainability expertise to help businesses track their carbon footprint, identify reduction opportunities, and report on their progress. We enable companies to transform sustainability challenges into competitive advantages while contributing to global environmental goals.",
      founded: "2020",
      location: "Lyon, France",
      team: "22 sustainability specialists",
      website: "https://verdalize.pledgeandgrow.com",
      services: [
        "Carbon Footprint Measurement",
        "Sustainability Reporting",
        "ESG Data Management",
        "Green Transition Consulting",
        "Sustainability Communication"
      ],
      achievements: [
        "Helped reduce over 100,000 tons of CO2 emissions",
        "Partnered with 75+ companies on sustainability initiatives",
        "Developed industry-leading carbon accounting methodology",
        "Recognized for innovation in climate tech"
      ]
    }
  ];

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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Companies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse companies that make up the Pledge & Grow Group, each contributing unique expertise to our collective mission.
          </p>
        </motion.div>

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
                              <span>Founded: {company.founded}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{company.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{company.team}</span>
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
                                Learn More
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
                                      <h3 className="text-lg font-semibold mb-2">About</h3>
                                      <p className="text-muted-foreground">
                                        {selectedCompany.longDescription}
                                      </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Founded</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <Calendar className="h-4 w-4 text-primary" />
                                          {selectedCompany.founded}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Location</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <MapPin className="h-4 w-4 text-primary" />
                                          {selectedCompany.location}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Team</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <Users className="h-4 w-4 text-primary" />
                                          {selectedCompany.team}
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Services & Solutions</h3>
                                        <ul className="space-y-2">
                                          {selectedCompany.services.map((service, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <span className="text-primary mt-1">•</span>
                                              <span>{service}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                                        <ul className="space-y-2">
                                          {selectedCompany.achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <span className="text-primary mt-1">•</span>
                                              <span>{achievement}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    
                                    <div className="pt-4">
                                      <Button asChild className="w-full sm:w-auto">
                                        <Link href={selectedCompany.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                          Visit Website <ExternalLink className="h-4 w-4" />
                                        </Link>
                                      </Button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button variant="outline" size="icon" asChild>
                            <Link href={company.website} target="_blank" rel="noopener noreferrer">
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      id: "tech-ventures",
      name: "Tech Ventures",
      logo: "/images/groupe/logo-techventures.png",
      category: "Investment",
      description: "Venture capital arm focusing on early-stage technology startups with innovative solutions.",
      longDescription: "Tech Ventures is our investment division dedicated to identifying and supporting promising technology startups. We provide not just capital, but also strategic guidance, industry connections, and operational support to help early-stage companies scale effectively. Our investment philosophy centers on backing visionary founders who are solving meaningful problems with scalable technology solutions.",
      founded: "2020",
      location: "Paris, France & London, UK",
      team: "12 investment professionals",
      website: "https://techventures.pledgeandgrow.com",
      services: [
        "Seed and Series A Investments",
        "Strategic Advisory",
        "Startup Mentorship",
        "Growth Acceleration",
        "Corporate Innovation Partnerships"
      ],
      achievements: [
        "Invested in 15+ technology startups",
        "3 successful exits within 3 years",
        "Portfolio companies raised €75M+ in follow-on funding",
        "Created 200+ tech jobs through portfolio companies"
      ]
    },
    {
      id: "digital-academy",
      name: "Digital Academy",
      logo: "/images/groupe/logo-academy.png",
      category: "Education",
      description: "Educational institution offering specialized courses in digital skills and technology.",
      longDescription: "Digital Academy is our educational initiative aimed at addressing the digital skills gap. We offer comprehensive training programs in web development, data science, digital marketing, and other in-demand tech skills. Our curriculum is designed in collaboration with industry experts to ensure it remains relevant to current market needs. We combine theoretical knowledge with practical projects to prepare students for successful careers in the digital economy.",
      founded: "2021",
      location: "Paris, France",
      team: "25 instructors and staff",
      website: "https://academy.pledgeandgrow.com",
      services: [
        "Web Development Bootcamps",
        "Data Science Courses",
        "Digital Marketing Certification",
        "UX/UI Design Programs",
        "Corporate Training Solutions"
      ],
      achievements: [
        "Trained 500+ students in digital skills",
        "92% job placement rate within 6 months",
        "Partnerships with 30+ tech companies",
        "Launched online learning platform with 10,000+ users"
      ]
    },
    {
      id: "cloud-solutions",
      name: "Cloud Solutions",
      logo: "/images/groupe/logo-cloudsolutions.png",
      category: "Infrastructure",
      description: "Cloud infrastructure and DevOps services for businesses of all sizes.",
      longDescription: "Cloud Solutions specializes in helping organizations leverage cloud technologies to improve scalability, security, and operational efficiency. Our team of certified cloud architects and DevOps engineers designs and implements robust cloud infrastructures tailored to each client's specific requirements. We offer migration services, managed cloud solutions, and DevOps automation to help businesses focus on their core operations while we handle their technology infrastructure.",
      founded: "2019",
      location: "Lyon, France",
      team: "30+ cloud specialists",
      website: "https://cloud.pledgeandgrow.com",
      services: [
        "Cloud Migration & Strategy",
        "DevOps Automation",
        "Infrastructure as Code",
        "Managed Cloud Services",
        "Cloud Security & Compliance"
      ],
      achievements: [
        "Managed migration of 50+ enterprises to cloud platforms",
        "Reduced infrastructure costs by average of 35% for clients",
        "Achieved 99.99% uptime for managed services",
        "Implemented CI/CD pipelines for 100+ applications"
      ]
    },
    {
      id: "data-insights",
      name: "Data Insights",
      logo: "/images/groupe/logo-datainsights.png",
      category: "Analytics",
      description: "Data analytics and business intelligence solutions to drive informed decision-making.",
      longDescription: "Data Insights helps organizations harness the power of their data to gain valuable business intelligence. Our data scientists and analysts work closely with clients to identify key metrics, implement data collection systems, and develop custom analytics dashboards. We specialize in transforming raw data into actionable insights that drive strategic decision-making and business growth.",
      founded: "2020",
      location: "Bordeaux, France",
      team: "20+ data specialists",
      website: "https://data.pledgeandgrow.com",
      services: [
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
        "Big Data Solutions",
        "Machine Learning Implementation"
      ],
      achievements: [
        "Processed and analyzed 10+ petabytes of data",
        "Developed custom analytics platforms for 25+ enterprises",
        "Increased client revenue by average of 22% through data-driven strategies",
        "Built award-winning ML models for predictive maintenance"
      ]
    },
    {
      id: "creative-studio",
      name: "Creative Studio",
      logo: "/images/groupe/logo-creativestudio.png",
      category: "Design",
      description: "Creative agency specializing in brand identity, UX/UI design, and digital content creation.",
      longDescription: "Creative Studio is our design-focused agency that helps brands establish compelling visual identities and engaging digital experiences. Our team of designers, illustrators, and content creators combines artistic vision with strategic thinking to develop brand assets that resonate with target audiences. From logo design to comprehensive UX/UI systems, we create visual solutions that help businesses stand out in crowded markets.",
      founded: "2019",
      location: "Paris, France",
      team: "18 creative professionals",
      website: "https://creative.pledgeandgrow.com",
      services: [
        "Brand Identity Design",
        "UX/UI Design",
        "Digital Content Creation",
        "Motion Graphics",
        "Interactive Experiences"
      ],
      achievements: [
        "Created brand identities for 40+ companies",
        "Won 5 international design awards",
        "Designed interfaces used by 1M+ users daily",
        "Increased client conversion rates by average of 40% through UX improvements"
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Companies" },
    { id: "Digital Services", name: "Digital Services" },
    { id: "Investment", name: "Investment" },
    { id: "Education", name: "Education" },
    { id: "Infrastructure", name: "Infrastructure" },
    { id: "Analytics", name: "Analytics" },
    { id: "Design", name: "Design" }
  ];

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

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies
                  .filter(company => category.id === "all" || company.category === category.id)
                  .map((company) => (
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
                            <div className="w-16 h-16 relative mb-2">
                              <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
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
                                    <div className="flex items-center gap-4">
                                      <div className="w-16 h-16 relative">
                                        <Image
                                          src={selectedCompany.logo}
                                          alt={`${selectedCompany.name} logo`}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                      <div>
                                        <DialogTitle className="text-2xl">{selectedCompany.name}</DialogTitle>
                                        <DialogDescription className="text-primary">
                                          {selectedCompany.category}
                                        </DialogDescription>
                                      </div>
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

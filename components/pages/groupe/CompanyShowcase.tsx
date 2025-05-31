"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, MapPin, Users, Calendar } from "lucide-react";
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
  
  const companies: Company[] = [
    {
      id: "pledge-and-grow",
      name: "Pledge & Grow",
      logo: "/images/groupe/logo-pledge.png",
      category: "Digital Services",
      description: "Digital transformation consultancy specializing in web development, mobile applications, and digital strategy.",
      longDescription: "Pledge & Grow is the flagship company of our group, offering comprehensive digital transformation services to businesses across various sectors. Our team of experts combines technical expertise with strategic thinking to help organizations leverage technology for sustainable growth. From custom software development to digital marketing strategies, we provide end-to-end solutions tailored to each client's unique needs.",
      founded: "2022",
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
        "Partnered with leading technology providers"
      ]
    },
    {
      id: "taskmate",
      name: "Taskmate",
      logo: "/images/groupe/logo-fintech.png",
      category: "Automation Services",
      description: "Advanced automation solutions to streamline business processes and increase operational efficiency.",
      longDescription: "Taskmate specializes in developing intelligent automation solutions that help businesses streamline their operations and reduce manual workload. Our team combines expertise in process optimization, AI, and workflow automation to create custom solutions that address complex business challenges and drive productivity improvements across various industries.",
      founded: "2025",
      location: "Paris, France",
      team: "30+ specialists",
      website: "https://taskmate-ia.vercel.app/",
      services: [
        "Workflow Automation",
        "Business Process Optimization",
        "AI-Powered Task Management",
        "Custom Automation Solutions",
        "Robotic Process Automation (RPA)"
      ],
      achievements: [
        "Reduced manual workload by 75% for clients",
        "Implemented solutions in 20+ industries",
        "Received innovation award in automation sector",
        "Improved operational efficiency by 40%"
      ]
    },
    {
      id: "verdalize",
      name: "Verdalize",
      logo: "/images/groupe/logo-greentech.png",
      category: "Financial Technology",
      description: "Innovative financial technology solutions for banks, insurance companies, and financial service providers.",
      longDescription: "Verdalize develops cutting-edge financial technology products that help traditional financial institutions modernize their operations and improve customer experiences. Our team combines deep financial industry knowledge with technical expertise to create secure, compliant, and user-friendly solutions that address the evolving needs of the financial sector.",
      founded: "2025",
      location: "London, UK",
      team: "25+ environmental experts",
      website: "https://greentechinnovations.com",
      services: [
        "Digital Banking Platforms",
        "Payment Processing Solutions",
        "Wealth Management Software",
        "Regulatory Compliance Tools",
        "Financial Data Analytics"
      ],
      achievements: [
        "Processed over €2 billion in transactions",
        "Reduced operational costs by 30% for clients",
        "Received innovation award in fintech sector",
        "Expanded to 5 European markets"
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

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mb-10">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {companies.map((company) => (
                  <div key={company.id} className="w-[85vw] max-w-[300px] flex-shrink-0">
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
                        <Link href={company.website} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {companies.map((_, index) => (
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
                    <Link href={company.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

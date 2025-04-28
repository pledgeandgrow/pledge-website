"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Lightbulb, Users, Rocket, BarChart, Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface IncubatorBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IncubatorProgram {
  id: string;
  title: string;
  description: string;
  stage: string;
  duration: string;
  discountRate: string;
  services: string[];
  eligibility: string[];
  applicationProcess: string[];
}

interface IncubatorSuccess {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  foundedYear: string;
  website: string;
  achievements: string[];
}

export default function StartupIncubator() {
  const [selectedProgram, setSelectedProgram] = useState<IncubatorProgram | null>(null);
  
  const benefits: IncubatorBenefit[] = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Discounted Services",
      description: "Access our full range of digital services at significantly reduced rates, making professional development accessible for early-stage startups."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Mentorship",
      description: "Receive guidance from our team of experienced professionals in technology, design, marketing, and business strategy."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Growth Acceleration",
      description: "Leverage our resources and network to accelerate your startup's growth and reach key milestones faster."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Investor Connections",
      description: "Gain introductions to our network of investors and potential partners once your product reaches the appropriate stage."
    }
  ];

  const programs: IncubatorProgram[] = [
    {
      id: "idea-stage",
      title: "Idea Stage Program",
      description: "For entrepreneurs with innovative ideas who need help validating concepts and developing initial prototypes.",
      stage: "Pre-seed",
      duration: "3 months",
      discountRate: "Up to 70% off standard rates",
      services: [
        "Idea validation workshops",
        "Market research assistance",
        "Concept prototyping",
        "Business model development",
        "MVP planning"
      ],
      eligibility: [
        "Early-stage concept with clear innovation potential",
        "Committed founding team (at least 1-2 people)",
        "Willingness to participate in program activities",
        "Alignment with our areas of expertise"
      ],
      applicationProcess: [
        "Submit initial application form",
        "Initial screening call",
        "Pitch your idea to our selection committee",
        "Final selection and program enrollment"
      ]
    },
    {
      id: "mvp-stage",
      title: "MVP Development Program",
      description: "For startups ready to build their minimum viable product and prepare for market entry.",
      stage: "Seed",
      duration: "6 months",
      discountRate: "Up to 50% off standard rates",
      services: [
        "Full MVP development",
        "UX/UI design",
        "Technical architecture planning",
        "Quality assurance",
        "Launch strategy",
        "Initial marketing support"
      ],
      eligibility: [
        "Validated business concept",
        "Completed market research",
        "Established founding team",
        "Some initial funding or bootstrap capacity",
        "Clear target market identified"
      ],
      applicationProcess: [
        "Submit detailed application with business plan",
        "Technical assessment meeting",
        "Formal proposal and scope definition",
        "Contract signing and kickoff"
      ]
    },
    {
      id: "growth-stage",
      title: "Growth Acceleration Program",
      description: "For startups with an existing product looking to scale their user base, improve their platform, and prepare for funding rounds.",
      stage: "Series A",
      duration: "12 months",
      discountRate: "Up to 30% off standard rates",
      services: [
        "Product optimization and scaling",
        "Performance improvements",
        "Advanced feature development",
        "Data analytics implementation",
        "Marketing automation",
        "Investor pitch preparation"
      ],
      eligibility: [
        "Functional MVP or product in market",
        "Initial user traction",
        "Dedicated technical and business team",
        "Clear growth metrics and goals",
        "Potential for significant market impact"
      ],
      applicationProcess: [
        "Submit growth plan and current metrics",
        "Technical audit of existing product",
        "Strategic planning workshop",
        "Customized program development",
        "Partnership agreement"
      ]
    }
  ];

  const successStories: IncubatorSuccess[] = [
    {
      id: "fintech1",
      name: "PayEase",
      logo: "/images/innovation/incubator/logo-payease.png",
      industry: "FinTech",
      description: "A payment processing platform that simplifies international transactions for small businesses. We helped PayEase develop their secure payment infrastructure and user-friendly dashboard.",
      foundedYear: "2023",
      website: "https://payease.tech",
      achievements: [
        "Processed over €5M in transactions within first year",
        "Secured €1.2M in seed funding",
        "Expanded to 12 European countries",
        "Built a team of 15 employees"
      ]
    },
    {
      id: "healthtech1",
      name: "MediConnect",
      logo: "/images/innovation/incubator/logo-mediconnect.png",
      industry: "HealthTech",
      description: "A telehealth platform connecting patients with healthcare providers for virtual consultations. We supported MediConnect with their HIPAA-compliant video platform and appointment system.",
      foundedYear: "2022",
      website: "https://mediconnect.health",
      achievements: [
        "Facilitated 50,000+ virtual consultations",
        "Partnered with 200+ healthcare providers",
        "Raised €3M in Series A funding",
        "Won Healthcare Innovation Award 2024"
      ]
    },
    {
      id: "edtech1",
      name: "LearnLoop",
      logo: "/images/innovation/incubator/logo-learnloop.png",
      industry: "EdTech",
      description: "An adaptive learning platform that personalizes educational content based on student performance. We helped LearnLoop build their AI-powered recommendation engine and interactive learning modules.",
      foundedYear: "2023",
      website: "https://learnloop.edu",
      achievements: [
        "Reached 25,000 active student users",
        "Implemented in 50+ schools across Europe",
        "Secured €800K in angel investment",
        "Demonstrated 32% improvement in learning outcomes"
      ]
    },
    {
      id: "retailtech1",
      name: "ShopSmart",
      logo: "/images/innovation/incubator/logo-shopsmart.png",
      industry: "RetailTech",
      description: "An inventory management system for small retailers that integrates with e-commerce platforms. We supported ShopSmart with their cross-platform integration and real-time analytics dashboard.",
      foundedYear: "2022",
      website: "https://shopsmart.retail",
      achievements: [
        "Onboarded 500+ retail businesses",
        "Integrated with 15 major e-commerce platforms",
        "Raised €1.5M in seed funding",
        "Expanded to 8 countries"
      ]
    }
  ];

  return (
    <section id="incubator" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Startup Incubator Program</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're passionate about supporting the next generation of digital innovators. Our incubator program offers discounted services, mentorship, and resources to help startups bring their ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4">Our Programs</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer tailored programs for startups at different stages of development, each with specific benefits and support structures.
            </p>
          </motion.div>

          <Tabs defaultValue="idea-stage" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {programs.map((program) => (
                <TabsTrigger key={program.id} value={program.id}>
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {program.stage} Stage
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Discounted Services</h4>
                        <p className="text-lg text-primary font-medium">{program.discountRate}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Included Services</h4>
                        <ul className="space-y-2">
                          {program.services.map((service, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setSelectedProgram(program)}
                          >
                            Learn More & Apply
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                          {selectedProgram && (
                            <>
                              <DialogHeader>
                                <DialogTitle className="text-2xl">{selectedProgram.title}</DialogTitle>
                                <DialogDescription className="text-base">
                                  {selectedProgram.description}
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="mt-6 space-y-6">
                                <div className="flex flex-wrap gap-4">
                                  <div className="bg-muted p-3 rounded-lg flex items-center gap-2">
                                    <Badge variant="outline" className="bg-primary/10 text-primary">
                                      {selectedProgram.stage} Stage
                                    </Badge>
                                  </div>
                                  <div className="bg-muted p-3 rounded-lg flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span>{selectedProgram.duration}</span>
                                  </div>
                                  <div className="bg-muted p-3 rounded-lg flex items-center gap-2">
                                    <span className="font-medium text-primary">{selectedProgram.discountRate}</span>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Included Services</h3>
                                    <ul className="space-y-2">
                                      {selectedProgram.services.map((service, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                          <span>{service}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h3 className="text-lg font-semibold mb-3">Eligibility Criteria</h3>
                                    <ul className="space-y-2">
                                      {selectedProgram.eligibility.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-3">Application Process</h3>
                                  <ol className="space-y-4">
                                    {selectedProgram.applicationProcess.map((step, index) => (
                                      <li key={index} className="flex items-start gap-3">
                                        <div className="bg-primary/10 rounded-full h-6 w-6 flex items-center justify-center text-primary font-medium flex-shrink-0">
                                          {index + 1}
                                        </div>
                                        <span>{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                                
                                <div className="pt-4">
                                  <Button asChild size="lg">
                                    <Link href="/contact?subject=Incubator Application" className="flex items-center gap-2">
                                      Apply Now <ArrowRight className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                  
                  <div className="hidden lg:block">
                    <Card className="h-full bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-xl">Eligibility Criteria</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {program.eligibility.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4">Success Stories</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Meet some of the innovative startups that have flourished with support from our incubator program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={story.logo}
                            alt={`${story.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{story.name}</CardTitle>
                          <CardDescription>{story.industry}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">Founded {story.foundedYear}</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {story.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {story.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href={story.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Visit Website <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

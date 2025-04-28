"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink, Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ProBonoProject {
  id: string;
  name: string;
  organization: string;
  logo: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  location: string;
  year: string;
  duration: string;
  impact: string[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  website?: string;
}

export default function ProBonoInitiatives() {
  const [selectedProject, setSelectedProject] = useState<ProBonoProject | null>(null);
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "education", name: "Education" },
    { id: "healthcare", name: "Healthcare" },
    { id: "environment", name: "Environment" },
    { id: "community", name: "Community" }
  ];

  const projects: ProBonoProject[] = [
    {
      id: "digital-literacy",
      name: "Digital Literacy Program",
      organization: "Education For All",
      logo: "/images/impact/logos/education-for-all.svg",
      category: "education",
      image: "/images/impact/projects/digital-literacy.jpg",
      description: "A comprehensive digital education platform providing free technology training to underserved communities.",
      longDescription: "The Digital Literacy Program is a collaborative initiative with Education For All that aims to bridge the digital divide by providing accessible technology education to underserved communities. We developed a comprehensive learning platform with interactive courses covering basic computer skills, internet safety, and digital citizenship. The platform is designed to be accessible on low-bandwidth connections and older devices, ensuring that technological barriers don't prevent access to digital education. Additionally, we created offline-compatible content that can be downloaded and used in areas with limited internet connectivity.",
      location: "Multiple locations across Europe",
      year: "2024",
      duration: "6 months",
      impact: [
        "Trained over 5,000 individuals in essential digital skills",
        "Deployed in 25 community centers across 5 countries",
        "90% of participants reported increased confidence in using technology",
        "65% of adult learners reported improved employment prospects"
      ],
      services: [
        "Custom learning platform development",
        "Interactive course content creation",
        "Offline-compatible educational resources",
        "Training program for local facilitators",
        "Ongoing technical support and maintenance"
      ],
      testimonial: {
        quote: "The digital literacy platform developed by Pledge & Grow has transformed our ability to deliver technology education to those who need it most. Their team understood our constraints and created a solution that works brilliantly even in our most resource-limited locations.",
        author: "Marie Dupont",
        role: "Executive Director, Education For All"
      },
      website: "https://education-for-all.org/digital-literacy"
    },
    {
      id: "health-connect",
      name: "Health Connect App",
      organization: "Global Health Initiative",
      logo: "/images/impact/logos/global-health.svg",
      category: "healthcare",
      image: "/images/impact/projects/health-connect.jpg",
      description: "A mobile application connecting remote communities with healthcare professionals for virtual consultations.",
      longDescription: "Health Connect is a mobile application we developed for the Global Health Initiative to address healthcare accessibility challenges in remote and underserved areas. The app enables virtual consultations between patients and healthcare professionals, overcoming geographical barriers to medical care. We designed the application with a focus on low-bandwidth optimization, offline functionality for medical reference materials, and a user interface that prioritizes simplicity and accessibility for users with varying levels of digital literacy. The platform includes features for appointment scheduling, secure video consultations, medical history tracking, and prescription management.",
      location: "Rural communities in Eastern Europe",
      year: "2023",
      duration: "8 months",
      impact: [
        "Connected over 12,000 patients with healthcare providers",
        "Reduced average travel time to medical consultations by 85%",
        "Facilitated more than 30,000 virtual consultations",
        "Improved medication adherence rates by 40% through reminder system"
      ],
      services: [
        "Mobile application development (iOS & Android)",
        "Telemedicine platform implementation",
        "GDPR-compliant data security protocols",
        "Training for healthcare providers and community health workers",
        "Ongoing technical support and feature enhancements"
      ],
      testimonial: {
        quote: "The Health Connect app has revolutionized how we deliver healthcare to remote communities. Pledge & Grow understood the unique challenges we face and created a solution that works reliably even in areas with poor connectivity.",
        author: "Dr. Thomas Laurent",
        role: "Medical Director, Global Health Initiative"
      },
      website: "https://globalhealthinitiative.org/health-connect"
    },
    {
      id: "eco-tracker",
      name: "EcoTracker Platform",
      organization: "Green Earth Alliance",
      logo: "/images/impact/logos/green-earth.svg",
      category: "environment",
      image: "/images/impact/projects/eco-tracker.jpg",
      description: "A data collection and visualization platform for monitoring environmental conservation efforts and impact.",
      longDescription: "EcoTracker is a comprehensive data platform we developed for the Green Earth Alliance to enhance their environmental conservation efforts. The system enables efficient collection, analysis, and visualization of ecological data from multiple conservation projects. We created both web and mobile interfaces for field researchers to record observations, track wildlife populations, monitor habitat changes, and measure pollution levels. The platform includes advanced analytics capabilities, interactive maps, and automated reporting features that help the organization make data-driven decisions and demonstrate the impact of their conservation initiatives to stakeholders and donors.",
      location: "Conservation sites across Europe",
      year: "2023",
      duration: "10 months",
      impact: [
        "Deployed across 15 conservation projects in 8 countries",
        "Reduced data collection and processing time by 70%",
        "Improved accuracy of environmental monitoring by 45%",
        "Helped secure €2.5M in additional conservation funding through data-backed proposals"
      ],
      services: [
        "Custom data collection platform development",
        "Mobile app for field researchers",
        "GIS mapping and spatial analysis tools",
        "Data visualization dashboards",
        "API integrations with environmental monitoring devices",
        "Training program for conservation staff"
      ],
      testimonial: {
        quote: "EcoTracker has transformed our ability to monitor and protect vulnerable ecosystems. The data insights we now have access to have made our conservation efforts significantly more effective and helped us secure vital funding.",
        author: "Lucas Bernard",
        role: "Conservation Director, Green Earth Alliance"
      },
      website: "https://greenearthalliance.org/eco-tracker"
    },
    {
      id: "community-hub",
      name: "Community Resource Hub",
      organization: "United Community Network",
      logo: "/images/impact/logos/community-network.svg",
      category: "community",
      image: "/images/impact/projects/community-hub.jpg",
      description: "A digital platform connecting community members with local resources, services, and volunteer opportunities.",
      longDescription: "The Community Resource Hub is a comprehensive digital platform we created for the United Community Network to strengthen community connections and improve access to local resources. The platform serves as a centralized directory of community services, events, and volunteer opportunities, making it easier for residents to find and access the support they need. We developed both web and mobile interfaces with features for resource discovery, event management, volunteer coordination, and community forums. The system includes multilingual support, accessibility features, and integration with social services databases to ensure it serves all community members effectively.",
      location: "Urban communities in France",
      year: "2024",
      duration: "7 months",
      impact: [
        "Connected over 20,000 community members with essential services",
        "Facilitated more than 5,000 volunteer placements",
        "Increased awareness and utilization of community resources by 60%",
        "Improved coordination between 75+ community organizations"
      ],
      services: [
        "Web platform and mobile app development",
        "Resource directory implementation",
        "Volunteer management system",
        "Event calendar and registration system",
        "Community forum moderation tools",
        "Training for community organization staff"
      ],
      testimonial: {
        quote: "The Community Resource Hub has become an essential digital infrastructure for our neighborhoods. It's bridged gaps between services and those who need them, while fostering a stronger sense of community connection.",
        author: "Sophie Martin",
        role: "Director, United Community Network"
      },
      website: "https://unitedcommunity.net/resource-hub"
    },
    {
      id: "youth-code",
      name: "Youth Code Academy",
      organization: "Future Builders Foundation",
      logo: "/images/impact/logos/future-builders.svg",
      category: "education",
      image: "/images/impact/projects/youth-code.jpg",
      description: "An interactive coding education platform designed specifically for disadvantaged youth.",
      longDescription: "Youth Code Academy is an interactive learning platform we developed for the Future Builders Foundation to introduce coding and digital skills to disadvantaged youth. The platform features age-appropriate, gamified learning paths that teach programming concepts, computational thinking, and digital creation skills. We designed the curriculum to be engaging and accessible for beginners, with a progression from visual block-based coding to text-based languages. The platform includes project-based learning modules, coding challenges, and a showcase feature where students can display their creations. We also implemented a mentor matching system that connects students with volunteer technology professionals for guidance and encouragement.",
      location: "Urban schools in underserved areas",
      year: "2023",
      duration: "9 months",
      impact: [
        "Reached over 3,500 students across 40 schools",
        "95% of participants completed at least one coding project",
        "70% of students expressed increased interest in STEM careers",
        "Created pathways to internships for 120 high-performing students"
      ],
      services: [
        "Interactive learning platform development",
        "Curriculum design and content creation",
        "Gamified coding challenges",
        "Mentor matching system",
        "Progress tracking and achievement badges",
        "Teacher dashboard and resources"
      ],
      testimonial: {
        quote: "Youth Code Academy has opened doors for students who previously had no access to technology education. The platform's engaging approach has sparked genuine enthusiasm for coding among our youth.",
        author: "Jean Moreau",
        role: "Program Director, Future Builders Foundation"
      },
      website: "https://futurebuilders.org/youth-code"
    },
    {
      id: "clean-water",
      name: "Clean Water Monitoring System",
      organization: "Water Access Initiative",
      logo: "/images/impact/logos/water-access.svg",
      category: "environment",
      image: "/images/impact/projects/clean-water.jpg",
      description: "IoT-based water quality monitoring system for communities with limited access to clean water.",
      longDescription: "The Clean Water Monitoring System is an innovative solution we developed for the Water Access Initiative to address water quality challenges in communities with limited infrastructure. The system combines low-cost IoT sensors with a cloud-based analytics platform to continuously monitor water quality parameters in community water sources. We designed custom sensors that can operate with minimal power requirements and in harsh environmental conditions, transmitting data via cellular networks to a central platform. The analytics system processes this data to identify contamination risks, track water availability, and trigger alerts when quality parameters fall below safe thresholds. A public-facing dashboard provides community members with real-time information about their water sources.",
      location: "Rural communities in Southern Europe",
      year: "2022",
      duration: "12 months",
      impact: [
        "Monitoring 150+ community water sources serving 75,000+ people",
        "Reduced waterborne illness incidence by 65% in participating communities",
        "Decreased water collection time by 40% through source availability tracking",
        "Improved maintenance response time for water infrastructure by 70%"
      ],
      services: [
        "Custom IoT sensor development",
        "Cloud-based data analytics platform",
        "Mobile alerts and notification system",
        "Public information dashboard",
        "Training for local water committees",
        "Ongoing technical support and maintenance"
      ],
      testimonial: {
        quote: "This monitoring system has transformed water management in our communities. For the first time, we have reliable, real-time data about our water sources, allowing us to address problems before they affect public health.",
        author: "Claire Dubois",
        role: "Executive Director, Water Access Initiative"
      },
      website: "https://wateraccess.org/monitoring"
    },
    {
      id: "elder-connect",
      name: "Elder Connect Platform",
      organization: "Silver Years Association",
      logo: "/images/impact/logos/silver-years.svg",
      category: "community",
      image: "/images/impact/projects/elder-connect.jpg",
      description: "A digital platform designed to reduce social isolation among elderly individuals through community connections.",
      longDescription: "Elder Connect is a specialized digital platform we created for the Silver Years Association to address social isolation among elderly individuals. The platform is designed with an age-friendly interface that prioritizes simplicity, readability, and accessibility. It facilitates virtual social gatherings, interest-based group activities, and one-on-one companionship connections. We implemented features such as simplified video calling, digital event calendars, skill-sharing marketplaces, and community forums. The platform also includes a volunteer coordination system that matches elderly users with community volunteers for both digital and in-person social activities. Special attention was given to privacy, security, and ease of use to ensure the platform serves its vulnerable user base effectively.",
      location: "Urban and suburban communities",
      year: "2023",
      duration: "8 months",
      impact: [
        "Connected 4,500+ elderly individuals with community support",
        "Facilitated over 25,000 hours of social interaction",
        "85% of users reported decreased feelings of loneliness",
        "Coordinated 3,000+ in-person volunteer visits to isolated seniors"
      ],
      services: [
        "Age-friendly web platform development",
        "Simplified video calling system",
        "Interest group and activity coordination",
        "Volunteer matching and management",
        "Accessibility-focused design and testing",
        "Training for elderly users and volunteers"
      ],
      testimonial: {
        quote: "Elder Connect has brought joy and companionship to thousands of seniors who were previously isolated. The thoughtful design makes technology accessible to our members, many of whom are using digital platforms for the first time.",
        author: "Pierre Lefevre",
        role: "President, Silver Years Association"
      },
      website: "https://silveryears.org/connect"
    },
    {
      id: "mental-health",
      name: "Mental Health Support App",
      organization: "Mind Wellness Foundation",
      logo: "/images/impact/logos/mind-wellness.svg",
      category: "healthcare",
      image: "/images/impact/projects/mental-health.jpg",
      description: "A mobile application providing accessible mental health resources, self-help tools, and crisis support.",
      longDescription: "The Mental Health Support App is a comprehensive mobile solution we developed for the Mind Wellness Foundation to improve access to mental health resources. The application combines evidence-based self-help tools, guided meditation and mindfulness exercises, mood tracking, and crisis support resources. We designed the app with input from mental health professionals to ensure clinical relevance while maintaining a supportive, non-clinical feel that reduces stigma. The platform includes anonymous community support forums moderated by trained professionals, personalized wellness plans, and direct connections to crisis helplines. Privacy and data security were paramount in the development process, with all sensitive information protected through advanced encryption and anonymous usage options.",
      location: "Available nationwide",
      year: "2024",
      duration: "10 months",
      impact: [
        "Downloaded by 35,000+ users within the first six months",
        "78% of regular users reported improved mental wellbeing",
        "Connected 5,000+ individuals to professional support services",
        "Provided critical intervention in 800+ crisis situations"
      ],
      services: [
        "Mobile application development (iOS & Android)",
        "Evidence-based self-help content creation",
        "Mood tracking and analytics features",
        "Moderated community support forums",
        "Crisis support integration",
        "Ongoing maintenance and content updates"
      ],
      testimonial: {
        quote: "This app has made mental health support accessible to thousands who would otherwise have nowhere to turn. The thoughtful design balances clinical effectiveness with approachability, helping us reach people who might avoid traditional mental health services.",
        author: "Dr. Marie Laurent",
        role: "Clinical Director, Mind Wellness Foundation"
      },
      website: "https://mindwellness.org/app"
    }
  ];

  return (
    <section id="initiatives" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Pro Bono Initiatives</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're proud to offer our expertise and services to organizations making a positive difference in the world. 
            Through our pro bono program, we help nonprofits and social enterprises leverage technology to amplify their impact.
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
                {projects
                  .filter(project => category.id === "all" || project.category === category.id)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 relative">
                                <Image
                                  src={project.logo}
                                  alt={`${project.organization} logo`}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div>
                                <CardDescription>{project.organization}</CardDescription>
                              </div>
                            </div>
                            <Badge variant="outline">
                              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{project.name}</CardTitle>
                          <CardDescription className="line-clamp-2 mt-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span>{project.duration}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                onClick={() => setSelectedProject(project)}
                              >
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              {selectedProject && (
                                <>
                                  <DialogHeader>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 relative">
                                          <Image
                                            src={selectedProject.logo}
                                            alt={`${selectedProject.organization} logo`}
                                            fill
                                            className="object-contain"
                                          />
                                        </div>
                                        <DialogTitle className="text-2xl">{selectedProject.name}</DialogTitle>
                                      </div>
                                      <Badge variant="outline">
                                        {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                                      </Badge>
                                    </div>
                                    <DialogDescription className="text-base mt-2">
                                      {selectedProject.organization}
                                    </DialogDescription>
                                  </DialogHeader>
                                  
                                  <div className="mt-6 space-y-6">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                      <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-lg font-semibold mb-3">About This Initiative</h3>
                                      <p className="text-muted-foreground">
                                        {selectedProject.longDescription}
                                      </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Location</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <MapPin className="h-4 w-4 text-primary" />
                                          {selectedProject.location}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Year</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <Calendar className="h-4 w-4 text-primary" />
                                          {selectedProject.year}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Duration</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <Clock className="h-4 w-4 text-primary" />
                                          {selectedProject.duration}
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Impact</h3>
                                        <ul className="space-y-2">
                                          {selectedProject.impact.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                              <span>{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Services Provided</h3>
                                        <ul className="space-y-2">
                                          {selectedProject.services.map((service, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                              <span>{service}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    
                                    {selectedProject.testimonial && (
                                      <div className="bg-muted/50 p-6 rounded-lg border border-border">
                                        <blockquote className="text-lg italic mb-4">
                                          "{selectedProject.testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-2">
                                          <div>
                                            <div className="font-medium">{selectedProject.testimonial.author}</div>
                                            <div className="text-sm text-muted-foreground">{selectedProject.testimonial.role}</div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {selectedProject.website && (
                                      <div className="pt-4">
                                        <Button asChild>
                                          <Link href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            Visit Project Website <ExternalLink className="h-4 w-4" />
                                          </Link>
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          {project.website && (
                            <Button variant="outline" size="icon" asChild>
                              <Link href={project.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
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

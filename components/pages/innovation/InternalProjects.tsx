"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechStack, TechItem } from "@/components/ui/tech-stack";
import { ArrowRight, ExternalLink, Github, Calendar, Users, Trophy } from "lucide-react";
import Link from "next/link";

interface ProjectTechnology {
  name: string;
  icon: string;
  color?: string;
}

interface ProjectTeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  status: "active" | "completed" | "experimental";
  launchDate: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: ProjectTechnology[];
  features: string[];
  team: ProjectTeamMember[];
  achievements?: string[];
}

export default function InternalProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "productivity", name: "Productivity" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "developer", name: "Developer Tools" },
    { id: "experimental", name: "Experimental" }
  ];

  const projects: Project[] = [
    {
      id: "codeflow",
      name: "CodeFlow",
      description: "An AI-powered code review and optimization tool that helps developers write cleaner, more efficient code.",
      longDescription: "CodeFlow is an internal tool we developed to streamline our code review process and improve code quality across projects. It uses machine learning to analyze code patterns, identify potential bugs, suggest optimizations, and enforce coding standards. The tool integrates with our CI/CD pipeline and provides real-time feedback during development. What started as an internal project has evolved into a powerful developer tool that we're preparing to release as a standalone product.",
      category: "developer",
      image: "/images/innovation/projects/codeflow.jpg",
      status: "active",
      launchDate: "January 2024",
      demoUrl: "https://codeflow.pledgeandgrow.com",
      githubUrl: "https://github.com/pledgeandgrow/codeflow",
      technologies: [
        { name: "Python", icon: "SiPython", color: "text-blue-500" },
        { name: "TensorFlow", icon: "SiTensorflow", color: "text-orange-500" },
        { name: "React", icon: "SiReact", color: "text-blue-400" },
        { name: "Node.js", icon: "SiNodedotjs", color: "text-green-600" },
        { name: "Docker", icon: "SiDocker", color: "text-blue-500" }
      ],
      features: [
        "Automated code review and quality analysis",
        "Performance optimization suggestions",
        "Security vulnerability detection",
        "Code style enforcement",
        "Integration with GitHub, GitLab, and Bitbucket",
        "Customizable rule sets and configurations"
      ],
      team: [
        { name: "Thomas Leroy", role: "Project Lead", avatar: "/images/team/thomas.jpg" },
        { name: "Sophie Martin", role: "ML Engineer", avatar: "/images/team/sophie.jpg" },
        { name: "Lucas Bernard", role: "Frontend Developer", avatar: "/images/team/lucas.jpg" },
        { name: "Marie Laurent", role: "Backend Developer", avatar: "/images/team/marie.jpg" }
      ],
      achievements: [
        "Reduced code review time by 40% across our development teams",
        "Decreased bug rate in production by 35%",
        "Winner of internal innovation award 2024",
        "Beta testing with 5 partner companies"
      ]
    },
    {
      id: "datainsight",
      name: "DataInsight",
      description: "A business intelligence dashboard that transforms complex data into actionable insights through interactive visualizations.",
      longDescription: "DataInsight was born from our need to better understand client project metrics and business performance. We built a powerful analytics platform that aggregates data from multiple sources, processes it through custom algorithms, and presents it in intuitive dashboards. The tool helps identify trends, forecast outcomes, and make data-driven decisions. After seeing its impact on our operations, we've expanded it to help our clients leverage their own data more effectively.",
      category: "productivity",
      image: "/images/innovation/projects/datainsight.jpg",
      status: "active",
      launchDate: "March 2024",
      demoUrl: "https://datainsight.pledgeandgrow.com",
      technologies: [
        { name: "React", icon: "SiReact", color: "text-blue-400" },
        { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },
        { name: "D3.js", icon: "SiD3Dotjs", color: "text-orange-500" },
        { name: "Python", icon: "SiPython", color: "text-blue-500" },
        { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-700" }
      ],
      features: [
        "Interactive data visualizations and dashboards",
        "Real-time data processing and analysis",
        "Customizable KPI tracking",
        "Automated reporting and alerts",
        "Data integration from multiple sources",
        "Export capabilities in multiple formats"
      ],
      team: [
        { name: "Claire Dubois", role: "Project Lead", avatar: "/images/team/claire.jpg" },
        { name: "Jean Dupont", role: "Data Scientist", avatar: "/images/team/jean.jpg" },
        { name: "Pierre Moreau", role: "UX Designer", avatar: "/images/team/pierre.jpg" },
        { name: "Sophie Martin", role: "Backend Developer", avatar: "/images/team/sophie.jpg" }
      ],
      achievements: [
        "Improved business decision-making speed by 60%",
        "Implemented for 3 enterprise clients as custom solution",
        "Featured in Tech Business Magazine",
        "Processing over 10 million data points daily"
      ]
    },
    {
      id: "aiwriter",
      name: "AI Writer",
      description: "An AI-powered content generation tool that helps create high-quality marketing copy, blog posts, and product descriptions.",
      longDescription: "AI Writer was developed to streamline our content creation process for client projects. It uses advanced natural language processing to generate contextually relevant, engaging content based on minimal input. The tool includes specialized modes for different content types, tone adjustment capabilities, and multilingual support. What began as an internal efficiency tool has evolved into a comprehensive content solution that we're now offering to select clients.",
      category: "ai",
      image: "/images/innovation/projects/aiwriter.jpg",
      status: "active",
      launchDate: "February 2024",
      demoUrl: "https://aiwriter.pledgeandgrow.com",
      technologies: [
        { name: "Python", icon: "SiPython", color: "text-blue-500" },
        { name: "TensorFlow", icon: "SiTensorflow", color: "text-orange-500" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "MongoDB", icon: "SiMongodb", color: "text-green-600" },
        { name: "AWS", icon: "SiAmazon", color: "text-orange-500" }
      ],
      features: [
        "AI-powered content generation",
        "Tone and style customization",
        "SEO optimization suggestions",
        "Multilingual support (8 languages)",
        "Content templates for various formats",
        "Plagiarism checking and originality verification"
      ],
      team: [
        { name: "Lucas Bernard", role: "Project Lead", avatar: "/images/team/lucas.jpg" },
        { name: "Marie Laurent", role: "AI Specialist", avatar: "/images/team/marie.jpg" },
        { name: "Thomas Leroy", role: "Full-stack Developer", avatar: "/images/team/thomas.jpg" },
        { name: "Claire Dubois", role: "UX Designer", avatar: "/images/team/claire.jpg" }
      ],
      achievements: [
        "Reduced content creation time by 70%",
        "Used to create over 500 pieces of content for clients",
        "Supports 8 European languages",
        "Achieved 92% user satisfaction rating"
      ]
    },
    {
      id: "devops-dashboard",
      name: "DevOps Dashboard",
      description: "A unified monitoring and management platform for our development and deployment infrastructure.",
      longDescription: "DevOps Dashboard was created to solve our challenge of monitoring multiple projects, servers, and services across different environments. It provides a centralized view of system health, deployment status, performance metrics, and security alerts. The dashboard integrates with our CI/CD pipelines and infrastructure providers to offer real-time insights and control. This tool has significantly improved our operational efficiency and incident response time.",
      category: "developer",
      image: "/images/innovation/projects/devops-dashboard.jpg",
      status: "active",
      launchDate: "December 2023",
      githubUrl: "https://github.com/pledgeandgrow/devops-dashboard",
      technologies: [
        { name: "Vue.js", icon: "SiVuedotjs", color: "text-green-500" },
        { name: "Node.js", icon: "SiNodedotjs", color: "text-green-600" },
        { name: "Prometheus", icon: "SiPrometheus", color: "text-orange-600" },
        { name: "Grafana", icon: "SiGrafana", color: "text-orange-500" },
        { name: "Docker", icon: "SiDocker", color: "text-blue-500" }
      ],
      features: [
        "Real-time system monitoring and alerts",
        "Deployment tracking and management",
        "Performance metrics and analytics",
        "Log aggregation and analysis",
        "Infrastructure visualization",
        "Security and compliance monitoring"
      ],
      team: [
        { name: "Pierre Moreau", role: "Project Lead", avatar: "/images/team/pierre.jpg" },
        { name: "Sophie Martin", role: "DevOps Engineer", avatar: "/images/team/sophie.jpg" },
        { name: "Jean Dupont", role: "Backend Developer", avatar: "/images/team/jean.jpg" },
        { name: "Lucas Bernard", role: "Frontend Developer", avatar: "/images/team/lucas.jpg" }
      ],
      achievements: [
        "Reduced incident response time by 65%",
        "Improved deployment success rate to 99.5%",
        "Monitoring 50+ services across 3 cloud providers",
        "Saved approximately 20 hours per week in operational overhead"
      ]
    },
    {
      id: "ar-prototyping",
      name: "AR Prototyping Tool",
      description: "An augmented reality application that allows designers to visualize and test digital products in real-world environments.",
      longDescription: "Our AR Prototyping Tool emerged from our design team's need to better visualize how digital interfaces would appear in physical contexts. It enables designers to place UI mockups in augmented reality, allowing them to test usability and visual impact in various environments. This experimental project has transformed our approach to designing context-aware applications, particularly for retail, industrial, and IoT interfaces.",
      category: "experimental",
      image: "/images/innovation/projects/ar-prototyping.jpg",
      status: "experimental",
      launchDate: "April 2024",
      technologies: [
        { name: "Unity", icon: "SiUnity", color: "text-gray-700" },
        { name: "ARKit", icon: "SiApple", color: "text-gray-700" },
        { name: "ARCore", icon: "SiGoogle", color: "text-blue-500" },
        { name: "C#", icon: "SiCsharp", color: "text-purple-600" },
        { name: "Figma", icon: "SiFigma", color: "text-purple-500" }
      ],
      features: [
        "AR visualization of UI designs",
        "Environmental context testing",
        "Real-time design adjustments",
        "Collaborative review capabilities",
        "Integration with design tools (Figma, Sketch)",
        "User testing recording and analytics"
      ],
      team: [
        { name: "Claire Dubois", role: "Project Lead", avatar: "/images/team/claire.jpg" },
        { name: "Marie Laurent", role: "AR Developer", avatar: "/images/team/marie.jpg" },
        { name: "Thomas Leroy", role: "UX Designer", avatar: "/images/team/thomas.jpg" },
        { name: "Pierre Moreau", role: "3D Artist", avatar: "/images/team/pierre.jpg" }
      ]
    },
    {
      id: "blockchain-auth",
      name: "Blockchain Auth",
      description: "A decentralized authentication system using blockchain technology for secure, privacy-focused identity verification.",
      longDescription: "Blockchain Auth is our exploration into decentralized identity management. It leverages blockchain technology to create a secure, user-controlled authentication system that eliminates central points of failure and gives users full ownership of their identity data. The system uses zero-knowledge proofs to verify identity claims without revealing unnecessary personal information. This experimental project represents our commitment to exploring privacy-preserving technologies and decentralized systems.",
      category: "experimental",
      image: "/images/innovation/projects/blockchain-auth.jpg",
      status: "experimental",
      launchDate: "March 2024",
      githubUrl: "https://github.com/pledgeandgrow/blockchain-auth",
      technologies: [
        { name: "Solidity", icon: "SiSolidity", color: "text-gray-700" },
        { name: "Ethereum", icon: "SiEthereum", color: "text-purple-500" },
        { name: "React", icon: "SiReact", color: "text-blue-400" },
        { name: "Node.js", icon: "SiNodedotjs", color: "text-green-600" },
        { name: "Web3.js", icon: "SiWeb3Dotjs", color: "text-orange-500" }
      ],
      features: [
        "Decentralized identity verification",
        "Self-sovereign identity management",
        "Zero-knowledge proof authentication",
        "Cross-platform compatibility",
        "Integration with existing authentication systems",
        "Privacy-preserving credential verification"
      ],
      team: [
        { name: "Jean Dupont", role: "Project Lead", avatar: "/images/team/jean.jpg" },
        { name: "Sophie Martin", role: "Blockchain Developer", avatar: "/images/team/sophie.jpg" },
        { name: "Lucas Bernard", role: "Security Specialist", avatar: "/images/team/lucas.jpg" },
        { name: "Marie Laurent", role: "Frontend Developer", avatar: "/images/team/marie.jpg" }
      ]
    }
  ];

  // Function to convert ProjectTechnology to TechItem for the TechStack component
  const convertToTechItem = (tech: ProjectTechnology): TechItem => {
    return {
      name: tech.name,
      icon: tech.icon as any,
      color: tech.color
    };
  };

  return (
    <section id="internal-projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Internal Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative projects we've built in-house to solve real-world problems, explore new technologies, and enhance our service offerings.
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
                          <div className="absolute top-4 left-4">
                            <Badge 
                              variant="outline" 
                              className={`
                                ${project.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                                  project.status === 'completed' ? 'bg-blue-500/10 text-blue-500' : 
                                  'bg-yellow-500/10 text-yellow-500'}
                              `}
                            >
                              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl">{project.name}</CardTitle>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{project.launchDate}</span>
                            </div>
                          </div>
                          <CardDescription className="line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="mb-4">
                            <TechStack 
                              technologies={project.technologies.map(convertToTechItem)} 
                              size="sm" 
                              className="justify-start"
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between gap-4">
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
                                      <DialogTitle className="text-2xl">{selectedProject.name}</DialogTitle>
                                      <Badge 
                                        variant="outline" 
                                        className={`
                                          ${selectedProject.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                                            selectedProject.status === 'completed' ? 'bg-blue-500/10 text-blue-500' : 
                                            'bg-yellow-500/10 text-yellow-500'}
                                        `}
                                      >
                                        {selectedProject.status.charAt(0).toUpperCase() + selectedProject.status.slice(1)}
                                      </Badge>
                                    </div>
                                    <DialogDescription className="text-base">
                                      {selectedProject.description}
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
                                      <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                                      <p className="text-muted-foreground">
                                        {selectedProject.longDescription}
                                      </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Launch Date</span>
                                        <span className="font-medium flex items-center gap-2">
                                          <Calendar className="h-4 w-4 text-primary" />
                                          {selectedProject.launchDate}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Category</span>
                                        <span className="font-medium capitalize">
                                          {selectedProject.category}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-1">
                                        <span className="text-sm text-muted-foreground">Status</span>
                                        <span className="font-medium capitalize">
                                          {selectedProject.status}
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                                      <TechStack 
                                        technologies={selectedProject.technologies.map(convertToTechItem)} 
                                        size="md"
                                        showLabels
                                        className="justify-start"
                                      />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                          {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <span className="text-primary mt-1">•</span>
                                              <span>{feature}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Project Team</h3>
                                        <div className="space-y-3">
                                          {selectedProject.team.map((member, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                  src={member.avatar}
                                                  alt={member.name}
                                                  fill
                                                  className="object-cover"
                                                />
                                              </div>
                                              <div>
                                                <div className="font-medium">{member.name}</div>
                                                <div className="text-sm text-muted-foreground">{member.role}</div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {selectedProject.achievements && (
                                      <div>
                                        <h3 className="text-lg font-semibold mb-3">Achievements</h3>
                                        <ul className="space-y-2">
                                          {selectedProject.achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                              <Trophy className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                              <span>{achievement}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    
                                    <div className="flex flex-wrap gap-4 pt-4">
                                      {selectedProject.demoUrl && (
                                        <Button asChild>
                                          <Link href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            View Demo <ExternalLink className="h-4 w-4" />
                                          </Link>
                                        </Button>
                                      )}
                                      
                                      {selectedProject.githubUrl && (
                                        <Button variant="outline" asChild>
                                          <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            <Github className="h-4 w-4" /> View on GitHub
                                          </Link>
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <div className="flex gap-2">
                            {project.demoUrl && (
                              <Button variant="outline" size="icon" asChild>
                                <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                            
                            {project.githubUrl && (
                              <Button variant="outline" size="icon" asChild>
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                          </div>
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

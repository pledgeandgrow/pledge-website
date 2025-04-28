"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Video, Download, Clock } from "lucide-react";
import Link from "next/link";

interface DocumentItem {
  id: string;
  title: string;
  description: string;
  type: "guide" | "tutorial" | "reference";
  format: "text" | "video" | "pdf";
  thumbnail: string;
  readTime?: string;
  videoLength?: string;
  lastUpdated: string;
  url: string;
}

export default function Documentation() {
  const [selectedTab, setSelectedTab] = useState("all");
  
  const documentItems: DocumentItem[] = [
    {
      id: "getting-started",
      title: "Getting Started with Pledge & Grow",
      description: "A comprehensive guide to help you understand our services and how to get the most out of them.",
      type: "guide",
      format: "text",
      thumbnail: "/images/help-center/docs/getting-started.jpg",
      readTime: "10 min read",
      lastUpdated: "April 15, 2025",
      url: "/help-center/docs/getting-started"
    },
    {
      id: "project-management",
      title: "Project Management Platform Tutorial",
      description: "Learn how to use our project management platform to track progress and collaborate with our team.",
      type: "tutorial",
      format: "video",
      thumbnail: "/images/help-center/docs/project-management.jpg",
      videoLength: "15:23",
      lastUpdated: "March 28, 2025",
      url: "/help-center/docs/project-management"
    },
    {
      id: "api-reference",
      title: "API Documentation",
      description: "Complete reference for our API endpoints, authentication, and integration options.",
      type: "reference",
      format: "text",
      thumbnail: "/images/help-center/docs/api-reference.jpg",
      readTime: "30 min read",
      lastUpdated: "April 22, 2025",
      url: "/help-center/docs/api-reference"
    },
    {
      id: "design-guidelines",
      title: "Design Guidelines & Best Practices",
      description: "Understand our design philosophy and best practices for creating effective digital experiences.",
      type: "guide",
      format: "pdf",
      thumbnail: "/images/help-center/docs/design-guidelines.jpg",
      readTime: "25 min read",
      lastUpdated: "April 10, 2025",
      url: "/help-center/docs/design-guidelines"
    },
    {
      id: "deployment-process",
      title: "Deployment Process Walkthrough",
      description: "Step-by-step tutorial on how we deploy your projects and what to expect during the process.",
      type: "tutorial",
      format: "video",
      thumbnail: "/images/help-center/docs/deployment-process.jpg",
      videoLength: "12:45",
      lastUpdated: "April 5, 2025",
      url: "/help-center/docs/deployment-process"
    },
    {
      id: "security-practices",
      title: "Security Practices & Compliance",
      description: "Detailed information about our security measures, data protection, and compliance standards.",
      type: "reference",
      format: "text",
      thumbnail: "/images/help-center/docs/security-practices.jpg",
      readTime: "15 min read",
      lastUpdated: "April 18, 2025",
      url: "/help-center/docs/security-practices"
    },
    {
      id: "content-management",
      title: "Content Management System Guide",
      description: "Learn how to use our CMS to update and manage your website content efficiently.",
      type: "tutorial",
      format: "video",
      thumbnail: "/images/help-center/docs/content-management.jpg",
      videoLength: "18:30",
      lastUpdated: "March 25, 2025",
      url: "/help-center/docs/content-management"
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting Dashboard",
      description: "Get the most out of your analytics dashboard with this comprehensive guide.",
      type: "guide",
      format: "text",
      thumbnail: "/images/help-center/docs/analytics-reporting.jpg",
      readTime: "12 min read",
      lastUpdated: "April 20, 2025",
      url: "/help-center/docs/analytics-reporting"
    }
  ];

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "text":
        return <FileText className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "pdf":
        return <Download className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getFormatLabel = (format: string) => {
    switch (format) {
      case "text":
        return "Article";
      case "video":
        return "Video";
      case "pdf":
        return "PDF";
      default:
        return "Document";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "guide":
        return "bg-blue-500/10 text-blue-500";
      case "tutorial":
        return "bg-green-500/10 text-green-500";
      case "reference":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  const filteredItems = selectedTab === "all" 
    ? documentItems 
    : documentItems.filter(item => item.type === selectedTab);

  return (
    <section id="documentation" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Documentation & Resources</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse our collection of guides, tutorials, and reference materials to help you make the most of our services.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="flex flex-wrap justify-center mb-8">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
            <TabsTrigger value="reference">Reference</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge 
                          variant="outline" 
                          className={getTypeColor(item.type)}
                        >
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {getFormatIcon(item.format)}
                          <span>{getFormatLabel(item.format)}</span>
                        </div>
                        {item.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{item.readTime}</span>
                          </div>
                        )}
                        {item.videoLength && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{item.videoLength}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Updated: {item.lastUpdated}
                      </span>
                      <Button variant="ghost" asChild size="sm">
                        <Link href={item.url} className="flex items-center gap-1">
                          View <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Check our FAQs or contact our support team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="#faqs">
                Browse FAQs
              </Link>
            </Button>
            <Button asChild>
              <Link href="#contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

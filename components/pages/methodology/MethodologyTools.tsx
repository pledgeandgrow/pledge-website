"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ToolCategory {
  title: string;
  description: string;
  tools: string[];
}

export default function MethodologyTools() {
  const toolCategories: ToolCategory[] = [
    {
      title: "Project Management",
      description: "Tools we use to plan, track, and manage digital projects efficiently.",
      tools: ["Jira", "Asana", "Trello", "Monday.com", "ClickUp", "Notion"]
    },
    {
      title: "Design & Prototyping",
      description: "Software we use to create intuitive and visually appealing user experiences.",
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Framer"]
    },
    {
      title: "Development",
      description: "Technologies and environments we use to build robust digital solutions.",
      tools: ["VS Code", "GitHub", "GitLab", "Docker", "Vercel", "Netlify"]
    },
    {
      title: "Testing & QA",
      description: "Tools we employ to ensure quality, performance, and security.",
      tools: ["Jest", "Cypress", "Selenium", "Postman", "Lighthouse", "BrowserStack"]
    },
    {
      title: "Communication",
      description: "Platforms we use to maintain clear and effective communication.",
      tools: ["Slack", "Microsoft Teams", "Zoom", "Google Meet", "Discord", "Loom"]
    },
    {
      title: "Analytics & Monitoring",
      description: "Tools we use to measure performance and gather insights.",
      tools: ["Google Analytics", "Hotjar", "Mixpanel", "Sentry", "New Relic", "Datadog"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Toolkit
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage industry-leading tools and technologies to deliver exceptional results efficiently and effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="bg-primary/5">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

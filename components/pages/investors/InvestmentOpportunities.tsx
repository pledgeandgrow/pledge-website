"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Lightbulb, TrendingUp, Zap } from "lucide-react";

export default function InvestmentOpportunities() {
  const opportunities = [
    {
      title: "Series B Funding",
      status: "Active",
      description: "Join our Series B funding round to accelerate global expansion and product development.",
      details: [
        "Target: $25M",
        "Minimum investment: $500K",
        "Use of funds: Global expansion, R&D, talent acquisition"
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Strategic Partnerships",
      status: "Ongoing",
      description: "Explore strategic investment opportunities aligned with our technology roadmap.",
      details: [
        "Joint ventures",
        "Technology integration",
        "Market expansion collaborations"
      ],
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Growth Equity",
      status: "Upcoming",
      description: "Participate in our growth equity round focused on scaling our AI and cloud solutions.",
      details: [
        "Target: $40M",
        "Expected launch: Q3 2025",
        "Focus: AI capabilities, cloud infrastructure"
      ],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Innovation Fund",
      status: "Active",
      description: "Invest in our innovation fund supporting emerging technologies and R&D initiatives.",
      details: [
        "Target: $10M",
        "Minimum investment: $250K",
        "Focus: Emerging tech, R&D, incubation"
      ],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <section id="investment-opportunities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investment Opportunities
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover current and upcoming investment opportunities with Pledge & Grow. 
            We offer various ways to invest in our growth and innovation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      {opportunity.icon}
                    </div>
                    <Badge 
                      variant={opportunity.status === "Active" ? "default" : 
                              opportunity.status === "Upcoming" ? "secondary" : "outline"}
                    >
                      {opportunity.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {opportunity.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full" size="sm">
                    <Link href="/contact?subject=Investment Inquiry: {opportunity.title}" className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact?subject=Investment Inquiry">
              Contact Our Investment Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

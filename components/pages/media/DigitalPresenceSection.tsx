"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, BookOpen, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

interface DigitalFeature {
  id: string;
  title: string;
  publication: string;
  publicationLogo: string;
  category: "article" | "interview" | "feature" | "award" | "ranking";
  description: string;
  date: string;
  image: string;
  url: string;
  topics: string[];
  featuring?: string;
}

export default function DigitalPresenceSection() {
  const digitalFeatures: DigitalFeature[] = [
    {
      id: "digital1",
      title: "How Pledge & Grow is Revolutionizing Digital Transformation for SMEs",
      publication: "Tech Insider",
      publicationLogo: "/images/media/digital/logo-techinsider.png",
      category: "feature",
      description: "This in-depth feature explores how Pledge & Grow has developed a unique approach to helping small and medium enterprises navigate digital transformation. The article highlights our methodology, success stories, and the impact of our work on client businesses.",
      date: "April 12, 2025",
      image: "/images/media/digital/techinsider-feature.jpg",
      url: "https://techinsider.com/pledge-and-grow-digital-transformation",
      topics: ["Digital Transformation", "SME", "Case Study"],
      featuring: "Jean Dupont, CEO"
    },
    {
      id: "digital2",
      title: "The Future of UX Design: Interview with Pledge & Grow's Design Lead",
      publication: "UX Collective",
      publicationLogo: "/images/media/digital/logo-uxcollective.png",
      category: "interview",
      description: "In this exclusive interview, our Head of UX discusses emerging trends in user experience design, the impact of AI on design processes, and how Pledge & Grow incorporates user research into every project to create more effective digital products.",
      date: "March 28, 2025",
      image: "/images/media/digital/uxcollective-interview.jpg",
      url: "https://uxcollective.com/interviews/pledge-and-grow-design-lead",
      topics: ["UX Design", "Design Trends", "AI in Design"],
      featuring: "Claire Dubois, Head of UX"
    },
    {
      id: "digital3",
      title: "Pledge & Grow Named in Top 50 Digital Agencies of 2025",
      publication: "Digital Agency Network",
      publicationLogo: "/images/media/digital/logo-dan.png",
      category: "ranking",
      description: "Pledge & Grow has been recognized as one of the top 50 digital agencies in Europe for 2025. The ranking, compiled by Digital Agency Network, evaluates agencies based on client satisfaction, innovation, growth, and impact of delivered projects.",
      date: "February 15, 2025",
      image: "/images/media/digital/dan-ranking.jpg",
      url: "https://digitalagencynetwork.com/top-agencies-2025",
      topics: ["Agency Ranking", "Industry Recognition", "Digital Excellence"]
    },
    {
      id: "digital4",
      title: "Building Sustainable Digital Products: The Pledge & Grow Approach",
      publication: "Sustainable Tech",
      publicationLogo: "/images/media/digital/logo-sustainabletech.png",
      category: "article",
      description: "This article explores how Pledge & Grow incorporates sustainability principles into digital product development. From energy-efficient code to environmentally conscious design choices, the piece highlights our commitment to reducing the environmental impact of digital solutions.",
      date: "April 5, 2025",
      image: "/images/media/digital/sustainabletech-article.jpg",
      url: "https://sustainabletech.org/pledge-and-grow-sustainable-approach",
      topics: ["Sustainability", "Green Tech", "Responsible Design"],
      featuring: "Marie Laurent, Director of Innovation"
    },
    {
      id: "digital5",
      title: "Innovation Excellence Award for Pledge & Grow's Healthcare Solution",
      publication: "Digital Innovation Awards",
      publicationLogo: "/images/media/digital/logo-dia.png",
      category: "award",
      description: "Pledge & Grow has received the Innovation Excellence Award for our work on a revolutionary healthcare platform that improves patient access to medical services. The judges praised the solution's user-centered design and innovative use of AI to enhance healthcare delivery.",
      date: "March 10, 2025",
      image: "/images/media/digital/dia-award.jpg",
      url: "https://digitalinnovationawards.com/winners-2025",
      topics: ["Awards", "Healthcare Tech", "AI Innovation"]
    },
    {
      id: "digital6",
      title: "How to Build a Successful E-commerce Strategy in 2025",
      publication: "E-commerce Today",
      publicationLogo: "/images/media/digital/logo-ecommercetoday.png",
      category: "article",
      description: "Our Head of E-commerce shares expert insights on building effective e-commerce strategies in today's competitive market. The article covers essential elements of successful online stores, from personalization to omnichannel integration and emerging technologies.",
      date: "April 18, 2025",
      image: "/images/media/digital/ecommerce-article.jpg",
      url: "https://ecommercetoday.com/successful-strategy-2025",
      topics: ["E-commerce", "Digital Strategy", "Online Retail"],
      featuring: "Thomas Leroy, Head of E-commerce"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'article':
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'interview':
        return <BookOpen className="h-5 w-5 text-purple-500" />;
      case 'feature':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'award':
        return <Award className="h-5 w-5 text-yellow-500" />;
      case 'ranking':
        return <TrendingUp className="h-5 w-5 text-red-500" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'article':
        return 'Article';
      case 'interview':
        return 'Interview';
      case 'feature':
        return 'Feature';
      case 'award':
        return 'Award';
      case 'ranking':
        return 'Ranking';
      default:
        return category;
    }
  };

  return (
    <section id="digital-presence" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Digital Presence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our features in leading digital publications, industry recognitions, and thought leadership articles across the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {getCategoryIcon(feature.category)}
                    <span>{getCategoryLabel(feature.category)}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 relative">
                      <Image
                        src={feature.publicationLogo}
                        alt={feature.publication}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-sm">{feature.publication}</span>
                    <span className="text-sm text-muted-foreground ml-auto flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {feature.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{feature.title}</CardTitle>
                  {feature.featuring && (
                    <CardDescription>
                      Featuring {feature.featuring}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {feature.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={feature.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Read Full {getCategoryLabel(feature.category)}
                      <ExternalLink className="h-4 w-4" />
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, Tv, ExternalLink } from "lucide-react";
import Link from "next/link";

interface TVAppearance {
  id: string;
  title: string;
  channel: string;
  program: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  externalUrl: string;
  topics: string[];
  featuring: string;
}

export default function TVAppearancesSection() {
  const [selectedAppearance, setSelectedAppearance] = useState<TVAppearance | null>(null);

  const tvAppearances: TVAppearance[] = [
    {
      id: "tv1",
      title: "The Future of Digital Transformation",
      channel: "Tech TV",
      program: "Future Forward",
      description: "Our CEO discusses how businesses can navigate digital transformation challenges and leverage emerging technologies to gain competitive advantage. The interview covers AI implementation, cloud migration strategies, and the importance of user-centered design in digital products.",
      date: "March 15, 2025",
      duration: "18 minutes",
      thumbnail: "/images/media/tv/tech-tv-interview.jpg",
      videoUrl: "https://youtube.com/watch?v=example1",
      externalUrl: "https://techtv.com/future-forward/episodes/digital-transformation",
      topics: ["Digital Transformation", "AI", "Cloud Computing"],
      featuring: "Jean Dupont, CEO"
    },
    {
      id: "tv2",
      title: "Startup Success Stories",
      channel: "Business Network",
      program: "Entrepreneur Today",
      description: "Our CTO shares Pledge & Grow's journey from startup to established digital agency, highlighting key milestones, challenges overcome, and lessons learned along the way. The segment also features insights on how we help other startups build scalable digital products.",
      date: "February 8, 2025",
      duration: "22 minutes",
      thumbnail: "/images/media/tv/business-network-startup.jpg",
      videoUrl: "https://youtube.com/watch?v=example2",
      externalUrl: "https://businessnetwork.com/entrepreneur-today/startup-success",
      topics: ["Startup Growth", "Digital Agency", "Entrepreneurship"],
      featuring: "Sophie Martin, CTO"
    },
    {
      id: "tv3",
      title: "E-commerce Trends 2025",
      channel: "Retail Insights",
      program: "Market Watch",
      description: "Our Head of E-commerce discusses the latest trends shaping online retail, from AI-powered personalization to immersive shopping experiences. The interview includes case studies of successful e-commerce transformations we've led for retail clients.",
      date: "April 2, 2025",
      duration: "15 minutes",
      thumbnail: "/images/media/tv/retail-insights-ecommerce.jpg",
      externalUrl: "https://retailinsights.com/market-watch/ecommerce-trends-2025",
      topics: ["E-commerce", "Retail Technology", "Customer Experience"],
      featuring: "Thomas Leroy, Head of E-commerce"
    },
    {
      id: "tv4",
      title: "Women in Tech Leadership",
      channel: "Global News",
      program: "Tech Perspectives",
      description: "Our Director of Innovation discusses her journey in the tech industry and Pledge & Grow's initiatives to promote diversity and inclusion in technology roles. The interview highlights the importance of diverse perspectives in creating inclusive digital products.",
      date: "March 22, 2025",
      duration: "25 minutes",
      thumbnail: "/images/media/tv/global-news-women-tech.jpg",
      videoUrl: "https://youtube.com/watch?v=example4",
      externalUrl: "https://globalnews.com/tech-perspectives/women-in-tech-leadership",
      topics: ["Women in Tech", "Diversity", "Leadership"],
      featuring: "Marie Laurent, Director of Innovation"
    }
  ];

  return (
    <section id="tv-appearances" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">TV Appearances</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our experts regularly appear on television programs to share insights on digital transformation, technology trends, and business innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tvAppearances.map((appearance) => (
            <motion.div
              key={appearance.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden group">
                  <Image
                    src={appearance.thumbnail}
                    alt={appearance.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {appearance.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary rounded-full p-3">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Tv className="h-4 w-4" />
                    <span>{appearance.channel}</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {appearance.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{appearance.title}</CardTitle>
                  <CardDescription>
                    {appearance.program} • Featuring {appearance.featuring}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{appearance.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{appearance.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {appearance.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        onClick={() => setSelectedAppearance(appearance)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                      {selectedAppearance && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{selectedAppearance.title}</DialogTitle>
                            <DialogDescription className="flex items-center gap-2">
                              <Tv className="h-4 w-4" />
                              {selectedAppearance.channel} • {selectedAppearance.program}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-6 space-y-6">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                              <Image
                                src={selectedAppearance.thumbnail}
                                alt={selectedAppearance.title}
                                fill
                                className="object-cover"
                              />
                              {selectedAppearance.videoUrl && (
                                <Link 
                                  href={selectedAppearance.videoUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                                >
                                  <div className="bg-primary rounded-full p-3">
                                    <Play className="h-8 w-8 text-white" />
                                  </div>
                                </Link>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedAppearance.topics.map((topic, index) => (
                                <Badge key={index} variant="secondary">{topic}</Badge>
                              ))}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                              <div className="flex flex-col gap-1">
                                <span className="text-sm text-muted-foreground">Air Date</span>
                                <span className="font-medium flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  {selectedAppearance.date}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm text-muted-foreground">Duration</span>
                                <span className="font-medium flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-primary" />
                                  {selectedAppearance.duration}
                                </span>
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm text-muted-foreground">Featuring</span>
                                <span className="font-medium">
                                  {selectedAppearance.featuring}
                                </span>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">About This Appearance</h3>
                              <p className="text-muted-foreground">
                                {selectedAppearance.description}
                              </p>
                            </div>
                            
                            <div className="pt-4">
                              <Button asChild className="w-full sm:w-auto">
                                <Link href={selectedAppearance.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                  Visit Original Source <ExternalLink className="h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link href={appearance.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Source
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

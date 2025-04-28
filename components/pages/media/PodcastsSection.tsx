"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, Headphones, ExternalLink, Mic } from "lucide-react";
import { SiSpotify, SiApplepodcasts, SiGoogleplay, SiYoutube } from "react-icons/si";
import Link from "next/link";

interface Podcast {
  id: string;
  title: string;
  podcastName: string;
  host: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  platforms: {
    spotify?: string;
    apple?: string;
    google?: string;
    youtube?: string;
  };
  topics: string[];
  featuring: string;
}

export default function PodcastsSection() {
  const podcasts: Podcast[] = [
    {
      id: "pod1",
      title: "Building Digital Products That Users Love",
      podcastName: "The Product Design Show",
      host: "Alex Johnson",
      description: "In this episode, our Head of UX discusses the principles of user-centered design and how Pledge & Grow approaches product development. The conversation covers research methodologies, prototyping techniques, and measuring design success through user feedback and analytics.",
      date: "April 5, 2025",
      duration: "45 minutes",
      image: "/images/media/podcasts/product-design-show.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example1",
        apple: "https://podcasts.apple.com/podcast/example1",
        google: "https://podcasts.google.com/feed/example1",
        youtube: "https://youtube.com/watch?v=example1"
      },
      topics: ["UX Design", "Product Development", "User Research"],
      featuring: "Claire Dubois, Head of UX"
    },
    {
      id: "pod2",
      title: "The Future of Work: Remote Teams and Digital Collaboration",
      podcastName: "Future of Work",
      host: "Sarah Miller",
      description: "Our COO shares insights on managing remote teams and fostering collaboration in distributed work environments. The discussion includes practical tips on digital tools, communication strategies, and building company culture when teams are spread across different locations.",
      date: "March 12, 2025",
      duration: "52 minutes",
      image: "/images/media/podcasts/future-of-work.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example2",
        apple: "https://podcasts.apple.com/podcast/example2",
        google: "https://podcasts.google.com/feed/example2"
      },
      topics: ["Remote Work", "Team Management", "Digital Collaboration"],
      featuring: "Pierre Moreau, COO"
    },
    {
      id: "pod3",
      title: "Scaling Startups Through Digital Innovation",
      podcastName: "Startup Growth Lab",
      host: "Michael Chen",
      description: "Our CEO discusses how startups can leverage digital technologies to scale efficiently. The episode covers strategic approaches to digital transformation, common pitfalls to avoid, and case studies of successful startups we've helped grow through innovative digital solutions.",
      date: "February 28, 2025",
      duration: "38 minutes",
      image: "/images/media/podcasts/startup-growth-lab.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example3",
        apple: "https://podcasts.apple.com/podcast/example3",
        youtube: "https://youtube.com/watch?v=example3"
      },
      topics: ["Startup Growth", "Digital Strategy", "Innovation"],
      featuring: "Jean Dupont, CEO"
    },
    {
      id: "pod4",
      title: "The Role of AI in Modern Marketing",
      podcastName: "Digital Marketing Insights",
      host: "Emma Wilson",
      description: "Our Marketing Director explores how artificial intelligence is transforming digital marketing strategies. From predictive analytics to personalized content creation, the conversation highlights practical applications of AI that businesses can implement to enhance their marketing efforts.",
      date: "April 18, 2025",
      duration: "41 minutes",
      image: "/images/media/podcasts/digital-marketing-insights.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example4",
        apple: "https://podcasts.apple.com/podcast/example4",
        google: "https://podcasts.google.com/feed/example4",
        youtube: "https://youtube.com/watch?v=example4"
      },
      topics: ["AI in Marketing", "Digital Marketing", "Marketing Automation"],
      featuring: "Lucas Bernard, Marketing Director"
    },
    {
      id: "pod5",
      title: "Cybersecurity Best Practices for Digital Businesses",
      podcastName: "Tech Security Today",
      host: "David Park",
      description: "Our Head of Security discusses essential cybersecurity measures for businesses operating in the digital space. The episode covers threat assessment, data protection strategies, compliance requirements, and building a security-first culture within organizations.",
      date: "March 25, 2025",
      duration: "49 minutes",
      image: "/images/media/podcasts/tech-security-today.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example5",
        apple: "https://podcasts.apple.com/podcast/example5",
        google: "https://podcasts.google.com/feed/example5"
      },
      topics: ["Cybersecurity", "Data Protection", "Risk Management"],
      featuring: "Antoine Lefèvre, Head of Security"
    },
    {
      id: "pod6",
      title: "Web3 and the Future of Digital Experiences",
      podcastName: "Next Web Frontiers",
      host: "Lisa Rodriguez",
      description: "Our Director of Innovation explores the potential of Web3 technologies and their impact on digital experiences. The discussion covers blockchain applications, decentralized apps, NFTs, and how businesses can prepare for the next evolution of the internet.",
      date: "April 10, 2025",
      duration: "55 minutes",
      image: "/images/media/podcasts/next-web-frontiers.jpg",
      platforms: {
        spotify: "https://open.spotify.com/episode/example6",
        apple: "https://podcasts.apple.com/podcast/example6",
        google: "https://podcasts.google.com/feed/example6",
        youtube: "https://youtube.com/watch?v=example6"
      },
      topics: ["Web3", "Blockchain", "Future Tech"],
      featuring: "Marie Laurent, Director of Innovation"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'spotify':
        return <SiSpotify className="h-5 w-5 text-green-500" />;
      case 'apple':
        return <SiApplepodcasts className="h-5 w-5 text-purple-600" />;
      case 'google':
        return <SiGoogleplay className="h-5 w-5 text-blue-500" />;
      case 'youtube':
        return <SiYoutube className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="podcasts" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Podcast Appearances</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Listen to our team members share their expertise and insights on various industry podcasts covering technology, business, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((podcast) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={podcast.image}
                    alt={podcast.podcastName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{podcast.podcastName}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <Mic className="h-3 w-3" /> {podcast.host}
                    </p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {podcast.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary">{topic}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{podcast.title}</CardTitle>
                  <CardDescription>
                    Featuring {podcast.featuring}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{podcast.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {podcast.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 w-full">
                    {Object.entries(podcast.platforms).map(([platform, url]) => (
                      <Button 
                        key={platform} 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="flex-1"
                      >
                        <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          {getPlatformIcon(platform)}
                          <span className="sr-only md:not-sr-only md:inline-block">
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          </span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

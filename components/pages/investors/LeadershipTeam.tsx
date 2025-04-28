"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

interface LeaderProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export default function LeadershipTeam() {
  const leaders: LeaderProfile[] = [
    {
      name: "Alexandre Martin",
      role: "Chief Executive Officer",
      image: "/images/team/ceo.jpg",
      bio: "Alexandre brings over 20 years of experience in technology leadership and entrepreneurship. Prior to founding Pledge & Grow, he led digital transformation initiatives at Fortune 500 companies.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "/images/team/cto.jpg",
      bio: "Sarah is a technology visionary with expertise in AI, cloud architecture, and software development. She previously held senior engineering roles at leading tech companies.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Financial Officer",
      image: "/images/team/cfo.jpg",
      bio: "Michael has 15+ years of financial leadership experience in the technology sector. He specializes in financial strategy, investment management, and scaling operations.",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      image: "/images/team/coo.jpg",
      bio: "Priya excels in optimizing business operations and scaling global teams. Her background includes operational leadership at high-growth technology companies.",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the experienced leadership team driving our vision and growth strategy.
            Our executives bring decades of combined experience in technology, finance, and business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription>{leader.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {leader.bio}
                  </p>
                </CardContent>
                {leader.linkedin && (
                  <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Linkedin size={16} />
                        LinkedIn Profile
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

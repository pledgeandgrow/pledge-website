"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Users, 
  BookOpen, 
  Code, 
  Share2, 
  Zap 
} from "lucide-react";

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function InnovationApproach() {
  const approachItems: ApproachItem[] = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Continuous Learning",
      description: "Our team dedicates time each week to learning new technologies, frameworks, and methodologies through structured learning programs and self-directed exploration."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Cross-Functional Collaboration",
      description: "We foster collaboration between different disciplines, bringing together designers, developers, and business strategists to create innovative solutions from diverse perspectives."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Research & Development",
      description: "We invest in dedicated R&D initiatives to explore emerging technologies like AI, blockchain, and extended reality before implementing them in client projects."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Rapid Prototyping",
      description: "We embrace rapid prototyping and MVP development to quickly test ideas, gather feedback, and iterate on solutions before full-scale implementation."
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Open Source Contribution",
      description: "We actively contribute to open source projects, sharing our expertise with the global developer community while staying connected to cutting-edge developments."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation Sprints",
      description: "Regular innovation sprints allow our team to step away from client work and focus on creative problem-solving, exploring new ideas without constraints."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Approach to Innovation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Pledge & Grow, innovation isn&apos;t just a buzzword—it&apos;s embedded in our culture and processes. 
              We&apos;ve developed a systematic approach to staying at the forefront of technology while delivering 
              practical, value-driven solutions for our clients.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our commitment to innovation enables us to anticipate industry trends, solve complex problems 
              with creative solutions, and continuously improve our service offerings to meet evolving digital needs.
            </p>
            <div className="relative h-80 w-full rounded-lg overflow-hidden mt-8 lg:hidden">
              <Image
                src="/images/innovation/innovation-approach.jpg"
                alt="Innovation at Pledge & Grow"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/innovation/innovation-approach.jpg"
                alt="Innovation at Pledge & Grow"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

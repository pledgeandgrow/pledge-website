"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
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
              Our commitment to innovation enables us to anticipate industry trends, solve complex problems 
              with creative solutions, and continuously improve our service offerings to meet evolving digital needs.
            </p>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden mt-8 lg:hidden shadow-lg border border-border">
              <Image
                src="/images/innovation/innovation.png"
                alt="Innovation at Pledge & Grow"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background/10 rounded-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/innovation/innovation.png"
                alt="Innovation at Pledge & Grow"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background/10 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mt-16">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-4 w-max px-4">
                {approachItems.map((item, index) => (
                  <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {approachItems.map((_, index) => (
                    <div 
                      key={index} 
                      className={`h-2 w-2 rounded-full bg-primary/30`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Grid View */}
        {!isMobile && (
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
        )}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Target, 
  Users, 
  Repeat, 
  Layers, 
  Shield, 
  Zap 
} from "lucide-react";

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function MethodologyPrinciples() {
  const principles: Principle[] = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Goal-Oriented",
      description: "Every decision and action is aligned with your business objectives and desired outcomes."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User-Centered",
      description: "We prioritize the needs and experiences of your users throughout the entire development process."
    },
    {
      icon: <Repeat className="h-10 w-10 text-primary" />,
      title: "Iterative Approach",
      description: "We embrace continuous improvement through regular feedback cycles and incremental enhancements."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Scalable Architecture",
      description: "Our solutions are built on robust foundations that can grow and evolve with your business needs."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security-First",
      description: "We integrate security considerations from the start, not as an afterthought or add-on."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Performance Optimized",
      description: "Speed and efficiency are core considerations in every solution we deliver."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/images/methodology/principles.jpg"
                alt="Pledge & Grow methodology principles"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg hidden md:block">
              <div className="text-4xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Core Principles</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              These core principles inform our methodology and ensure we consistently deliver exceptional results for our clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

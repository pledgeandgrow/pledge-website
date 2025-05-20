"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Shield, 
  Users, 
  Sparkles, 
  Lightbulb 
} from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CompanyValues() {
  const values: Value[] = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all our interactions with clients, partners, and team members."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment where diverse perspectives and skills come together to create exceptional solutions."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, constantly pushing boundaries and exceeding expectations to deliver outstanding results."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking, continuously exploring new ideas and technologies to stay at the forefront of our industry."
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
                src="/images/careers/team-culture.jpg"
                alt="Pledge & Grow team culture"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg hidden md:block">
              <div className="text-4xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Core Values</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our values define who we are and guide how we work. They&apos;re the foundation of our culture and the principles that drive our success.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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

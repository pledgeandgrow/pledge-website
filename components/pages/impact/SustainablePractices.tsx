"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Zap, Cloud, Droplets, Users } from "lucide-react";

interface PracticeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PracticeCard({ icon, title, description }: PracticeProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4 text-green-500">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function SustainablePractices() {
  const practices = [
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Carbon-Neutral Cloud",
      description: "We prioritize cloud providers with carbon-neutral operations and optimize our applications for energy efficiency."
    },
    {
      icon: <Recycle className="h-10 w-10" />,
      title: "Circular IT Practices",
      description: "We extend device lifecycles, refurbish equipment, and ensure responsible recycling of electronic waste."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Energy Efficiency",
      description: "Our development practices emphasize code optimization to reduce computational resources and energy consumption."
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Sustainable Office",
      description: "Our workspaces are designed with sustainability in mind, from renewable energy to waste reduction initiatives."
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Water Conservation",
      description: "We implement water-saving technologies and practices in our facilities to minimize our water footprint."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Employee Engagement",
      description: "We encourage and support our team in adopting sustainable practices both at work and in their personal lives."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Sustainable Practices</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Pledge & Grow, we recognize that technology has both environmental costs and the potential to drive sustainability. We&apos;re committed to minimizing our ecological footprint while developing solutions that help our clients and communities do the same.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our approach to sustainability encompasses everything from our development practices and infrastructure choices to our office operations and supply chain management. We continuously measure, report, and improve our environmental performance.
            </p>
            <p className="text-lg text-muted-foreground">
              Beyond our own operations, we actively seek opportunities to develop technology solutions that address environmental challenges and promote sustainable practices across industries.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden aspect-square"
          >
            <Image
              src="/images/impact/sustainability.jpg"
              alt="Sustainable technology practices"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PracticeCard {...practice} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-primary/10 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Environmental Commitment</h3>
          <p className="text-lg mb-2">
            We&apos;re committed to achieving carbon neutrality in our operations by 2026 and helping our clients reduce their environmental impact through thoughtful technology solutions.
          </p>
          <p className="text-muted-foreground">
            Each year, we publish a sustainability report detailing our progress and setting new targets for improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

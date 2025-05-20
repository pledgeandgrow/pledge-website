"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users, Lightbulb } from "lucide-react";

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ImpactMission() {
  const values = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Compassion",
      description: "We approach every social initiative with empathy and a genuine desire to improve lives through technology."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Sustainability",
      description: "We're committed to developing solutions that are environmentally responsible and promote long-term social well-being."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Inclusivity",
      description: "We believe technology should be accessible to all, regardless of background, ability, or socioeconomic status."
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology to solve complex social challenges in creative and effective ways."
    }
  ];

  return (
    <section id="mission" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Pledge & Grow, we believe that technology has the power to address some of the world&apos;s most pressing challenges. Our mission is to leverage our expertise to create positive social impact and contribute to a more equitable and sustainable future.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We&apos;re committed to using our skills, resources, and influence to support causes that align with our values. Through pro bono work, charitable initiatives, and sustainable practices, we strive to be a force for good in the communities we serve.
            </p>
            <p className="text-lg text-muted-foreground">
              Our approach is guided by a simple principle: technology should serve humanity, not the other way around. We&apos;re dedicated to developing solutions that empower people, protect our planet, and promote social justice.
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
              src="/images/impact/mission.jpg"
              alt="Pledge & Grow team volunteering"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-4">Our Core Values</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These principles guide our approach to social impact and ensure that our work creates meaningful, lasting change.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueCard {...value} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket, 
  Users, 
  Globe, 
  Lightbulb, 
  Heart, 
  TrendingUp 
} from "lucide-react";

export default function WhyJoinUs() {
  const benefits = [
    {
      title: "Innovation Culture",
      description: "Work with cutting-edge technologies and contribute to innovative projects that shape the digital landscape.",
      icon: <Rocket className="h-6 w-6 text-primary" />
    },
    {
      title: "Collaborative Environment",
      description: "Join a supportive team that values collaboration, knowledge sharing, and mutual growth.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Global Opportunities",
      description: "Work with clients and teams from around the world, gaining international experience and perspective.",
      icon: <Globe className="h-6 w-6 text-primary" />
    },
    {
      title: "Continuous Learning",
      description: "Access to ongoing training, workshops, conferences, and resources to keep your skills sharp.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working arrangements and policies designed to support your wellbeing and personal life.",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Career Growth",
      description: "Clear career paths and opportunities for advancement based on your skills and ambitions.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="why-join-us" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Join Pledge & Grow
          </h2>
          <p className="text-lg text-muted-foreground">
            We're more than just a workplace. We're a community of passionate professionals dedicated to growth, innovation, and making a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

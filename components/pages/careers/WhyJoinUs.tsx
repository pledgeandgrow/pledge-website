"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { 
  Users, 
  Globe, 
  TrendingUp 
} from "lucide-react";

export default function WhyJoinUs() {
  // Mobile detection will be handled by CSS media queries instead of JS
  const benefits = [
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
            We&apos;re more than just a workplace. We&apos;re a community of passionate professionals dedicated to growth, innovation, and making a difference.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/careers/careers.png" 
                alt="Careers at Pledge & Grow" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
                <p className="text-white/90">Be part of something extraordinary</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
              <p className="text-lg text-muted-foreground">
                At Pledge & Grow, we believe in creating an environment where talent thrives. Our team members enjoy competitive benefits, flexible work arrangements, and opportunities to work on cutting-edge projects that make a real difference.
              </p>
              {/* Removed additional paragraph as requested */}
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Key Benefits</h3>
        
        {/* Mobile Scroll View (visible only on mobile) */}
        <div className="md:hidden overflow-x-auto pb-6">
          <div className="flex space-x-4 w-max px-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
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
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-2">
              {benefits.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full bg-primary/30`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop Grid (visible only on desktop) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

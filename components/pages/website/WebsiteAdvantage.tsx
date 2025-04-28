"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Headphones, 
  LineChart, 
  Smartphone, 
  Code, 
  Clock, 
  CheckCircle 
} from "lucide-react";

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WebsiteAdvantage() {
  const advantages: Advantage[] = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Optimization",
      description: "We build websites that load in under 2 seconds, optimizing every aspect from code to images to ensure lightning-fast performance that keeps visitors engaged."
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Advanced Security",
      description: "Our websites include enterprise-grade security measures, regular updates, and compliance with the latest security standards to protect your data and your users."
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "Dedicated Support",
      description: "We provide ongoing support and maintenance with rapid response times, ensuring your website remains up-to-date and functions perfectly at all times."
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "Conversion-Focused Design",
      description: "Our designs aren't just beautiful—they're strategically crafted to guide visitors toward specific actions, increasing conversion rates and achieving your business goals."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "True Responsive Experience",
      description: "Beyond basic responsiveness, we create tailored experiences for each device type, ensuring optimal usability whether on desktop, tablet, or mobile."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Clean, Efficient Code",
      description: "Our developers write clean, well-documented code that's easy to maintain and extend, following best practices and the latest web standards."
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Timely Delivery",
      description: "We adhere to strict project timelines and transparent communication, ensuring your website launches on schedule without compromising quality."
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Comprehensive Testing",
      description: "Every website undergoes rigorous testing across devices, browsers, and user scenarios to ensure a flawless experience for all visitors."
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
            className="order-2 lg:order-1"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/website/advantage.jpg"
                alt="Our Website Development Advantage"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">The Pledge & Grow Advantage</h2>
            <p className="text-lg text-muted-foreground mb-6">
              What sets our website development services apart is our commitment to excellence in every aspect of the process. We don't just build websites—we create digital experiences that drive real business results.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combines technical expertise with strategic thinking to deliver websites that not only look great but also perform exceptionally well, helping you stand out in a crowded digital landscape.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <span className="text-sm font-medium">Our websites are built with TypeScript, Next.js, and Tailwind CSS for optimal performance and maintainability</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

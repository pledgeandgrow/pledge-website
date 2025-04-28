"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Zap, 
  PenTool, 
  Code, 
  BarChart,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TechStack } from "@/components/ui/tech-stack";

export default function WebsiteHero() {
  const features = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones."
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Built-in search engine optimization to help your website rank higher and attract more visitors."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Security First",
      description: "Robust security measures to protect your website and user data from threats."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Focused",
      description: "Lightning-fast loading times and smooth interactions for an exceptional user experience."
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Custom Design",
      description: "Unique, brand-aligned designs that stand out from template-based websites."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Analytics Integration",
      description: "Built-in analytics to track performance and user behavior for data-driven improvements."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and requirements to create a comprehensive project plan."
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and visual mockups that align with your brand identity and user experience goals."
    },
    {
      number: 3,
      title: "Development",
      description: "Our development team brings the designs to life using modern technologies and best practices for performance and security."
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices and browsers ensures your website functions flawlessly for all users."
    },
    {
      number: 5,
      title: "Launch & Optimization",
      description: "We handle the deployment process and provide post-launch support to ensure your website performs optimally."
    }
  ];

  const technologies = [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Netlify", icon: "SiNetlify" },
    { name: "WordPress", icon: "SiWordpress" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0" />
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Professional Website <span className="text-primary">Development</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                We create custom, high-performance websites that deliver exceptional user experiences and drive business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact?subject=Website Development Inquiry" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                
                <Button variant="outline" asChild size="lg">
                  <Link href="/portfolio">
                    View Our Portfolio
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/expertise/website/hero.jpg"
                alt="Website Development"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Website Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive website development services tailored to your specific business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Website Development Process</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We follow a structured, collaborative approach to ensure your website meets your business objectives and exceeds user expectations.
              </p>
              
              <div className="space-y-8">
                {processSteps.map((step) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: step.number * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <Image
                src="/images/expertise/website/process.jpg"
                alt="Website Development Process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage modern, industry-standard technologies to build websites that are fast, secure, and scalable.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-xl p-8 md:p-12"
          >
            <TechStack 
              technologies={technologies} 
              size="lg" 
              showLabels 
              className="justify-center flex-wrap"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Build Your Professional Website?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can create a website that drives results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact?subject=Website Development Inquiry" className="flex items-center gap-2">
                    Contact Us
                  </Link>
                </Button>
                
                <Button variant="outline" asChild size="lg">
                  <Link href="/portfolio">
                    View Our Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

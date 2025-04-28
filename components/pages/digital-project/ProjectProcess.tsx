"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Code, 
  Rocket, 
  Zap, 
  Shield 
} from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements. This phase includes detailed discussions, research, and creating a comprehensive project roadmap.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />
  },
  {
    id: "design-development",
    title: "Design & Development",
    description: "Our team creates wireframes, designs, and prototypes before moving to development. We follow industry best practices and use the latest technologies to build robust, scalable solutions.",
    icon: <Code className="h-8 w-8 text-primary" />
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description: "We conduct thorough testing across different devices and platforms to ensure your project is bug-free, secure, and performs optimally under various conditions.",
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    id: "deployment",
    title: "Deployment & Launch",
    description: "Once approved, we deploy your project to production environments, ensuring a smooth transition. We handle all technical aspects of the launch process to minimize downtime.",
    icon: <Rocket className="h-8 w-8 text-primary" />
  },
  {
    id: "support",
    title: "Ongoing Support & Optimization",
    description: "Our relationship doesn't end at launch. We provide ongoing maintenance, support, and continuous improvements to keep your digital solution running smoothly and effectively.",
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

export default function ProjectProcess() {
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven 5-step process to ensure your project is delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative mb-16 last:mb-0 md:flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number for mobile */}
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold md:hidden">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Center icon for desktop */}
              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary/20 absolute left-1/2 top-0 -translate-x-1/2 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

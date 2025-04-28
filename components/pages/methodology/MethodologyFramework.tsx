"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  Zap, 
  Shield, 
  BarChart 
} from "lucide-react";

interface MethodologyStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function MethodologyFramework() {
  const steps: MethodologyStep[] = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Discovery",
      description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
      color: "bg-yellow-500/10"
    },
    {
      icon: <PenTool className="h-8 w-8 text-blue-500" />,
      title: "Design",
      description: "Our design phase focuses on creating intuitive user experiences and visually appealing interfaces that align with your brand identity.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Code className="h-8 w-8 text-violet-500" />,
      title: "Development",
      description: "We build your solution using modern technologies and best practices, with regular check-ins to ensure alignment with your vision.",
      color: "bg-violet-500/10"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Testing",
      description: "Rigorous testing across devices and scenarios ensures your product is robust, secure, and delivers an exceptional user experience.",
      color: "bg-orange-500/10"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Deployment",
      description: "We carefully launch your product with minimal disruption, ensuring a smooth transition and immediate value delivery.",
      color: "bg-green-500/10"
    },
    {
      icon: <BarChart className="h-8 w-8 text-red-500" />,
      title: "Optimization",
      description: "Post-launch, we continuously monitor performance and gather feedback to identify opportunities for enhancement and growth.",
      color: "bg-red-500/10"
    }
  ];

  return (
    <section id="methodology-framework" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a structured yet flexible methodology that adapts to your unique needs while ensuring consistent quality and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-t-4" style={{ borderTopColor: step.color.replace(/\/10$/, "") }}>
                <CardHeader>
                  <div className={`${step.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, CheckCircle, Clock, Users, MessageSquare } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const customSolutionSteps: ProcessStep[] = [
  {
    id: "consultation",
    title: "Initial Consultation",
    description: "We start with a thorough consultation to understand your business needs, challenges, and goals. This helps us identify the right approach for your custom solution.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  },
  {
    id: "requirements",
    title: "Requirements Analysis",
    description: "Our team conducts a detailed analysis of your requirements, documenting functional and technical specifications to ensure we capture all aspects of your project.",
    icon: <FileText className="h-8 w-8 text-primary" />
  },
  {
    id: "proposal",
    title: "Custom Proposal & Quotation",
    description: "Based on your requirements, we develop a comprehensive proposal with detailed pricing, timeline, and deliverables tailored specifically to your project.",
    icon: <CheckCircle className="h-8 w-8 text-primary" />
  },
  {
    id: "development",
    title: "Agile Development Process",
    description: "We follow an agile development methodology, breaking down the project into manageable sprints with regular reviews and feedback sessions to ensure alignment.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    id: "support",
    title: "Ongoing Partnership",
    description: "Our relationship continues after launch with dedicated support, maintenance, and strategic guidance to help your solution evolve with your business.",
    icon: <Users className="h-8 w-8 text-primary" />
  }
];

export default function CustomSolutions() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Custom Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For large-scale projects and complex requirements, we offer custom solutions with detailed estimates and personalized service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise-Grade Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Our custom solutions are designed for businesses with complex requirements that go beyond standard packages. We work closely with you to develop tailored solutions that address your specific challenges and objectives.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you need a complex enterprise system, a custom software solution, or a large-scale digital transformation project, our team of experts has the experience and expertise to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Tailored solutions for your unique business needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Detailed project planning and management</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Transparent pricing and milestone-based billing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <p className="text-muted-foreground">Dedicated project team and account manager</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Request a Custom Quotation</h3>
            <p className="text-muted-foreground mb-6">
              Fill out our detailed project questionnaire to receive a comprehensive proposal tailored to your specific needs.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">1</span>
                </div>
                <p className="text-foreground">Complete our project questionnaire</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">2</span>
                </div>
                <p className="text-foreground">Schedule a consultation call</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">3</span>
                </div>
                <p className="text-foreground">Receive your detailed proposal</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-medium">4</span>
                </div>
                <p className="text-foreground">Begin your custom project</p>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact">
                Request a Custom Quote
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Custom Solution Process</h3>
          
          <div className="space-y-8">
            {customSolutionSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

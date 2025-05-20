"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Crown, Clock, Shield, HeartHandshake, Zap, ArrowRight } from "lucide-react";

interface VipBenefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const vipBenefits: VipBenefit[] = [
  {
    id: "priority",
    title: "Priority Support",
    description: "Get immediate attention with our dedicated VIP support line and guaranteed response times within 2 hours.",
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    id: "dedicated",
    title: "Dedicated Account Manager",
    description: "Work with a dedicated account manager who understands your business and can coordinate all your needs.",
    icon: <HeartHandshake className="h-8 w-8 text-primary" />
  },
  {
    id: "expedited",
    title: "Expedited Delivery",
    description: "Your projects are prioritized in our workflow, ensuring faster turnaround times without compromising quality.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    id: "enhanced",
    title: "Enhanced Security",
    description: "Benefit from advanced security measures, regular security audits, and proactive monitoring for your digital assets.",
    icon: <Shield className="h-8 w-8 text-primary" />
  }
];

export default function VipServices() {
  return (
    <section className="py-16 bg-background dark:bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 p-4 rounded-full mb-4"
          >
            <Crown className="h-10 w-10 text-primary" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-foreground mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client VIP Experience
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our exclusive VIP program for premium service, priority support, and enhanced benefits tailored to your business needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full border-primary/50 shadow-md">
              <CardHeader className="bg-primary/5 border-b border-primary/20">
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 text-primary mr-2" />
                  VIP Membership Benefits
                </CardTitle>
                <CardDescription>
                  Exclusive advantages for our most valued clients
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {vipBenefits.map((benefit) => (
                    <div key={benefit.id} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-primary/20 pt-6">
                <Button asChild className="w-full">
                  <Link href="/contact?subject=VIP%20Membership">
                    Apply for VIP Membership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Elevate Your Experience</h3>
            
            <p className="text-muted-foreground mb-6">
              Our VIP program is designed for clients who demand the highest level of service and attention. As a VIP client, you&apos;ll enjoy a range of exclusive benefits that enhance your experience and ensure your projects receive the priority they deserve.
            </p>
            
            <div className="bg-card rounded-lg p-6 border border-border mb-6">
              <h4 className="font-bold text-foreground mb-3">VIP Membership Includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Quarterly strategy sessions with our senior team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Exclusive access to beta features and new services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Preferential pricing on all services and packages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Extended support hours including weekends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Complimentary annual security and performance audit</span>
                </li>
              </ul>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              VIP membership is available by application and is subject to approval. Contact us to discuss your eligibility and how we can tailor our VIP services to your specific needs.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to experience the difference? Contact our team today to learn more about our VIP program and how it can benefit your business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact?subject=VIP%20Membership%20Inquiry">
              Schedule a VIP Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

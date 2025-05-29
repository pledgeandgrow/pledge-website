"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Euro, 
  TrendingUp, 
  Clock, 
  Users, 
  CheckCircle 
} from "lucide-react";

export default function GrantsOverview() {
  const benefits = [
    {
      icon: <Euro className="h-10 w-10 text-primary" />,
      title: "Financial Support",
      description: "Access non-repayable funding to reduce the cost of your digital projects and innovation initiatives."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Accelerated Growth",
      description: "Fast-track your business development with resources that might otherwise be out of reach."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Faster Implementation",
      description: "Implement digital solutions more quickly with dedicated funding for technology adoption."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Guidance",
      description: "Benefit from our experience in navigating complex application processes and requirements."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Higher Approval Rates",
      description: "Increase your chances of success with professionally prepared applications and documentation."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock Your Business Potential
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Navigating the complex landscape of grants and subsidies can be challenging. Our expertise helps you identify, apply for, and secure the funding opportunities that align with your business goals.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="bg-primary/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/grants-subsidies/grants.png"
                alt="Grants and subsidies overview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary/10 p-8 rounded-lg hidden md:block">
              <div className="text-4xl font-bold text-primary">€5M+</div>
              <div className="text-sm text-muted-foreground">Funding Secured</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

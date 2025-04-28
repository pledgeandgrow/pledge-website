"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  Code, 
  FileText, 
  MessageSquare, 
  Lightbulb 
} from "lucide-react";

export default function MembershipBenefits() {
  const benefits = [
    {
      title: "Exclusive Resources",
      description: "Access our library of premium guides, templates, and tools to accelerate your projects.",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      title: "Community Access",
      description: "Connect with like-minded professionals and industry experts in our private community.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Priority Events",
      description: "Early access and reserved spots at our workshops, webinars, and conferences.",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Certification Pathways",
      description: "Exclusive certification programs to validate your expertise and enhance your credentials.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Code Repository",
      description: "Access to our curated code libraries, components, and development resources.",
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: "Documentation Access",
      description: "Comprehensive documentation and best practices for implementing our solutions.",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Priority Support",
      description: "Dedicated support channels with faster response times for your technical questions.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />
    },
    {
      title: "Innovation Insights",
      description: "Early access to research papers, technology trends, and innovation briefings.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="membership-benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Membership Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Our membership program offers a wide range of exclusive benefits designed to support your professional growth and business success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

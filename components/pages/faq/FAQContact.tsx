"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQContact() {
  const contactOptions = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for immediate assistance.",
      action: "Start Chat",
      url: "/help-center#chat"
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our team for more complex inquiries.",
      action: "Call Support",
      url: "tel:+33123456789"
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours.",
      action: "Email Us",
      url: "mailto:support@pledgeandgrow.com"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            If you couldn't find the answer you were looking for, our support team is here to help.
            Get in touch with us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">{option.icon}</div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={option.url} className="flex items-center justify-center gap-2">
                      {option.action} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            For more detailed support resources, visit our comprehensive Help Center.
          </p>
          <Button asChild>
            <Link href="/help-center" className="flex items-center gap-2">
              Visit Help Center <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ExpertiseFAQ } from "@/data/expertise-data";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpertiseFAQProps {
  faqs: ExpertiseFAQ[];
  title?: string;
  subtitle?: string;
}

export default function ExpertiseFAQSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know" 
}: ExpertiseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow text-left"
              >
                <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-muted/30 rounded-b-lg border-x border-b border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

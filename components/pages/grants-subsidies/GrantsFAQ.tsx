"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GrantsFAQ() {
  const faqs = [
    {
      question: "What types of businesses are eligible for grants and subsidies?",
      answer: "Eligibility varies by program, but most grants are available to registered businesses of all sizes. Some programs target specific sectors, business sizes, or regions. Our initial assessment will determine which opportunities align with your specific circumstances."
    },
    {
      question: "How long does the grant application process typically take?",
      answer: "The timeline varies depending on the funding program. Simple applications may take 2-4 weeks, while more complex grants can take 2-3 months from application to decision. We'll provide you with a realistic timeline based on the specific opportunities we identify for your business."
    },
    {
      question: "Do I need to pay back the grant funding?",
      answer: "Unlike loans, grants and subsidies typically don't require repayment as long as you fulfill the terms and conditions of the funding agreement. However, you'll need to use the funds for their intended purpose and comply with any reporting requirements."
    },
    {
      question: "What costs can be covered by digital transformation grants?",
      answer: "Most digital grants can cover costs such as software development, technology implementation, hardware purchases, digital marketing initiatives, e-commerce development, cybersecurity improvements, and training related to digital skills. Each program has specific eligible expenses that we'll clarify during the application process."
    },
    {
      question: "What are the success rates for grant applications you prepare?",
      answer: "Our clients experience a significantly higher approval rate than the industry average. While success rates vary by program, our thorough preparation and expertise in aligning projects with funding criteria result in approximately 70-80% of our applications being approved, compared to the typical 30-40% success rate."
    },
    {
      question: "How do you charge for your grant application services?",
      answer: "We offer flexible fee structures based on your needs. Options include a fixed fee for the entire application process, a success-based fee where we receive a percentage of approved funding, or a hybrid model. We'll discuss these options during our initial consultation to find the approach that works best for you."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about grants, subsidies, and our application assistance services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

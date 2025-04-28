"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MethodologyFAQ() {
  const faqs = [
    {
      question: "How do you adapt your methodology to different project types?",
      answer: "We tailor our approach based on project scope, complexity, and client needs. For smaller projects, we might use a streamlined version of our methodology, while enterprise-level solutions may require a more comprehensive approach with additional checkpoints and validation stages."
    },
    {
      question: "How do you involve clients in the development process?",
      answer: "Client collaboration is central to our methodology. We establish regular check-ins, demos, and feedback sessions throughout the project lifecycle. Our project management tools provide transparency into progress, and we encourage active participation in key decision points."
    },
    {
      question: "What makes your methodology different from traditional approaches?",
      answer: "Our methodology combines the best aspects of agile and traditional approaches, emphasizing flexibility, transparency, and continuous improvement while maintaining clear structure and predictability. We focus on business outcomes rather than rigid processes, adapting our methods to serve your goals."
    },
    {
      question: "How do you handle changes in project requirements?",
      answer: "We build flexibility into our process through iterative development cycles. When requirements change, we assess the impact, discuss options with stakeholders, and integrate changes in a controlled manner that minimizes disruption while ensuring the final product meets evolving needs."
    },
    {
      question: "How do you ensure quality throughout the development process?",
      answer: "Quality assurance is integrated at every stage, not just at the end. We implement automated testing, code reviews, performance monitoring, and regular security assessments. Our cross-functional teams apply quality checks throughout development, catching issues early when they're easier to resolve."
    },
    {
      question: "What happens after the project is launched?",
      answer: "Our relationship continues post-launch with dedicated support and maintenance. We monitor performance, gather user feedback, and identify optimization opportunities. Depending on your needs, we can provide ongoing enhancements, feature additions, and strategic guidance for future development."
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
            Common questions about our methodology and how we approach digital projects.
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

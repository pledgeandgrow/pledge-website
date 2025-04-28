"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InvestorFAQ() {
  const faqs = [
    {
      question: "What is Pledge & Grow's business model?",
      answer: "Pledge & Grow operates on a multi-faceted business model that includes service-based revenue from digital transformation projects, subscription revenue from our SaaS products, licensing fees from our technology solutions, and strategic partnerships. This diversified approach ensures stable revenue streams while allowing for scalable growth opportunities."
    },
    {
      question: "What are your growth projections for the next 5 years?",
      answer: "We project a compound annual growth rate (CAGR) of 30-35% over the next five years, driven by expansion into new markets, continued innovation in our product offerings, and strategic acquisitions. Our financial models indicate revenue reaching $50-60M by 2030, with increasing profit margins as we scale our operations and product-based revenue streams."
    },
    {
      question: "How do you plan to use investment capital?",
      answer: "Investment capital is strategically allocated across several key areas: 40% toward global market expansion and sales infrastructure, 30% for R&D and product development (particularly in AI and cloud solutions), 20% for strategic acquisitions to enhance our technology stack or market presence, and 10% for talent acquisition and operational improvements."
    },
    {
      question: "What is your competitive advantage in the market?",
      answer: "Our competitive advantage stems from three core strengths: 1) Our proprietary technology platform that accelerates digital transformation projects, 2) Our unique methodology that combines technical expertise with business strategy, and 3) Our global talent network that allows us to deliver high-quality solutions at competitive rates. Additionally, our focus on emerging technologies like AI and blockchain positions us ahead of traditional service providers."
    },
    {
      question: "What exit strategies are you considering for investors?",
      answer: "We're building Pledge & Grow with multiple potential exit pathways for investors, including a potential IPO within 5-7 years, strategic acquisition by a larger technology firm, or continued private growth with dividend distributions. Our focus is on creating sustainable long-term value while maintaining flexibility to capitalize on favorable market conditions when they arise."
    },
    {
      question: "How is your company structured for international operations?",
      answer: "Pledge & Grow operates through a parent company with regional subsidiaries in key markets to optimize for local operations, tax efficiency, and regulatory compliance. We maintain centralized intellectual property management while enabling localized service delivery and market adaptation. This structure supports our global expansion strategy while minimizing operational complexity and risk."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investor FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions from our investors and potential investment partners.
            If you don't find the answer you're looking for, please contact our investor relations team.
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

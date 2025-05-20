"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MembershipFAQ() {
  const faqs = [
    {
      question: "How do I join the membership program?",
      answer: "You can join our membership program by selecting a plan that best suits your needs and completing the registration process. Simply click on the 'Get Started' or 'Upgrade Now' button on your preferred plan, and you'll be guided through the signup process."
    },
    {
      question: "Can I upgrade or downgrade my membership plan?",
      answer: "Yes, you can upgrade your membership plan at any time. The price difference will be prorated for the remainder of your billing cycle. Downgrades will take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "No, there is no minimum commitment period for our monthly plans. You can cancel at any time. Annual plans are paid upfront for the year but come with a 30-day money-back guarantee if you're not satisfied."
    },
    {
      question: "How do I access membership benefits?",
      answer: "Once you've joined, you'll receive login credentials to access our membership portal. All resources, community access, and other benefits will be available through this portal. You'll also receive regular emails with updates and new content."
    },
    {
      question: "Are there discounts for teams or organizations?",
      answer: "Yes, we offer special pricing for teams and organizations. Our Enterprise plan includes options for multiple users, and we can create custom plans for larger teams. Contact our sales team for more information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. For Enterprise plans, we can also arrange invoicing and bank transfers."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee for all new memberships. If you're not completely satisfied with your membership within the first 30 days, contact our support team for a full refund."
    },
    {
      question: "How often is new content added to the resource library?",
      answer: "We add new content to our resource library on a weekly basis. This includes new guides, templates, code snippets, and other resources. Enterprise members also receive exclusive monthly deep-dive content."
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
            Find answers to common questions about our membership program.
            If you don&apos;t see your question here, feel free to contact us.
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

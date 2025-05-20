"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DiscordFAQ() {
  const faqs = [
    {
      question: "How do I join the Discord server?",
      answer: "You can join our Discord server by clicking the 'Join Discord' button at the top of this page. This will take you to our invite link where you can create a Discord account if you don't already have one, or log in to your existing account."
    },
    {
      question: "Is the Discord server free to join?",
      answer: "Yes, our Discord server is completely free to join. There are no membership fees or subscription costs associated with being part of our community."
    },
    {
      question: "Do I need to download anything to use Discord?",
      answer: "While Discord offers desktop and mobile applications for an enhanced experience, you can also use Discord directly in your web browser without downloading anything. We recommend the app for the best experience, but it's not required."
    },
    {
      question: "Are there rules I need to follow in the Discord server?",
      answer: "Yes, we have community guidelines to ensure a positive experience for everyone. These include being respectful to others, not sharing spam or inappropriate content, and following channel-specific rules. You can find our complete guidelines in the #rules channel once you join."
    },
    {
      question: "How can I get help if I'm having technical issues?",
      answer: "If you're experiencing technical issues with our services or products, you can post in the #support channel where our team and community members can assist you. For Discord-specific issues, the #discord-help channel is available."
    },
    {
      question: "Can I promote my business or services in the Discord?",
      answer: "We have specific channels designated for appropriate self-promotion and networking. Please refrain from promotional activities outside of these designated areas. Check the #networking channel for opportunities to share your work in a respectful manner."
    },
    {
      question: "How active is the Discord community?",
      answer: "Our Discord community is very active with regular discussions, events, and support interactions. We have members from around the world, so there's usually someone online at any time of day."
    },
    {
      question: "Can I become a moderator or contribute to the community?",
      answer: "We're always looking for active community members who want to help. After being an active and positive member for some time, you can apply for moderator positions when they open up. You can also contribute by helping others, sharing resources, and participating in events."
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
            Find answers to common questions about our Discord community.
            If you don&apos;t see your question here, feel free to ask in our server.
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

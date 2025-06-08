"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@/hooks/useTranslations";

export default function Faq() {
  const { t } = useTranslations('contact');
  
  // Use t function with returnObjects to get the FAQ array from translations
  const faqs = t('faq.questions', { 
    returnObjects: true, 
    defaultValue: [
    {
      question: "What services does Pledge offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, backend development, custom software solutions, and analytics & optimization services. Each service is tailored to meet the specific needs of our clients."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing options including project-based pricing, hourly rates, and retainer agreements. The cost depends on the project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements during the initial consultation."
    },
    {
      question: "Do you offer maintenance and support after project completion?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital products continue to perform optimally. Our support packages include regular updates, security patches, performance monitoring, and technical support."
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We use an agile project management approach with regular check-ins and updates. Communication is maintained through your preferred channels (email, Slack, etc.), and you'll have access to a dedicated project manager throughout the development process."
    }
  ]});
  
  // If faqs is not an array (e.g., translation is missing), use default values
  const faqItems = Array.isArray(faqs) ? faqs : [];

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('faq.title', { defaultValue: 'Frequently Asked Questions' })}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {t('faq.description', { defaultValue: 'Find answers to common questions about our services and process.' })}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="animate-fade-in">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

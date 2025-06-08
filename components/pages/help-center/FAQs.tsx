"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQs() {
  const { t } = useTranslations("help-center");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const categories = [
    { id: "all", name: t('faqs.categories.all') },
    { id: "services", name: t('faqs.categories.services') },
    { id: "projects", name: t('faqs.categories.projects') },
    { id: "technical", name: t('faqs.categories.technical') },
    { id: "billing", name: t('faqs.categories.billing') }
  ];

  // Load the hardcoded FAQs but use translations for the content
  const faqs: FAQ[] = [
    {
      id: "service-offerings",
      question: t('faqs.questions.0.question'),
      answer: t('faqs.questions.0.answer'),
      category: "services"
    },
    {
      id: "service-timeline",
      question: t('faqs.questions.1.question'),
      answer: t('faqs.questions.1.answer'),
      category: "services"
    },
    {
      id: "service-cost",
      question: t('faqs.questions.2.question'),
      answer: t('faqs.questions.2.answer'),
      category: "services"
    },
    {
      id: "project-process",
      question: t('faqs.questions.3.question'),
      answer: t('faqs.questions.3.answer'),
      category: "projects"
    },
    {
      id: "project-communication",
      question: t('faqs.questions.4.question'),
      answer: t('faqs.questions.4.answer'),
      category: "projects"
    },
    {
      id: "project-changes",
      question: t('faqs.questions.5.question'),
      answer: t('faqs.questions.5.answer'),
      category: "projects"
    },
    {
      id: "technical-hosting",
      question: t('faqs.questions.6.question'),
      answer: t('faqs.questions.6.answer'),
      category: "technical"
    },
    {
      id: "technical-maintenance",
      question: t('faqs.questions.7.question'),
      answer: t('faqs.questions.7.answer'),
      category: "technical"
    },
    {
      id: "technical-compatibility",
      question: t('faqs.questions.8.question'),
      answer: t('faqs.questions.8.answer'),
      category: "technical"
    },
    {
      id: "billing-payment",
      question: t('faqs.questions.9.question'),
      answer: t('faqs.questions.9.answer'),
      category: "billing"
    },
    {
      id: "billing-refund",
      question: t('faqs.questions.10.question'),
      answer: t('faqs.questions.10.answer'),
      category: "billing"
    },
    {
      id: "billing-additional",
      question: t('faqs.questions.11.question'),
      answer: t('faqs.questions.11.answer'),
      category: "billing"
    }
  ];

  // Filter FAQs based on search query and selected category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the filteredFAQs logic above
  };

  return (
    <section id="faqs" className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">{t('faqs.title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8">
            {t('faqs.description')}
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-8 md:mb-12">
            <Input
              type="text"
              placeholder={t('faqs.searchPlaceholder')}
              className="pr-12 h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className={`flex ${isMobile ? 'flex-nowrap overflow-x-auto pb-2 justify-start' : 'flex-wrap justify-center'} mb-6 md:mb-8`}>
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className={isMobile ? 'flex-shrink-0' : ''}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            {filteredFAQs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border-b">
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base">
                        <p className="pb-2">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <div className="text-center py-8 md:py-12">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{t('faqs.noResults')}</p>
                <Button variant="outline" size={isMobile ? "sm" : "default"} onClick={() => setSearchQuery("")}>
                  {t('faqs.clearSearch')}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-background border border-border rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4">{t('faqs.stillHaveQuestions.title')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('faqs.stillHaveQuestions.description')}
          </p>
          <Button asChild>
            <Link href="#contact">
              {t('faqs.stillHaveQuestions.contactButton')}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

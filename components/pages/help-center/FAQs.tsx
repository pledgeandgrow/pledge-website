"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import Link from "next/link";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "services", name: "Our Services" },
    { id: "projects", name: "Projects & Process" },
    { id: "technical", name: "Technical Support" },
    { id: "billing", name: "Billing & Payments" }
  ];

  const faqs: FAQ[] = [
    {
      id: "service-offerings",
      question: "What services does Pledge & Grow offer?",
      answer: "Pledge & Grow offers a comprehensive range of digital services including web and mobile app development, UI/UX design, digital strategy consulting, e-commerce solutions, content management systems, custom software development, and ongoing maintenance and support. We work with businesses of all sizes to create tailored digital solutions that meet their specific needs and objectives.",
      category: "services"
    },
    {
      id: "service-timeline",
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your project specifications. We pride ourselves on transparent communication throughout the process and will keep you updated on progress and any timeline adjustments needed.",
      category: "services"
    },
    {
      id: "service-cost",
      question: "How much do your services cost?",
      answer: "Our pricing is customized based on the specific requirements of each project. Factors that influence cost include project complexity, features needed, design requirements, timeline, and ongoing support needs. We offer flexible engagement models including fixed-price projects, retainer arrangements, and time and materials billing. We're happy to provide a detailed quote after understanding your project requirements during an initial consultation.",
      category: "services"
    },
    {
      id: "project-process",
      question: "What is your project development process?",
      answer: "Our development process follows these key phases: 1) Discovery & Planning - We gather requirements, conduct research, and create a project roadmap. 2) Design - We develop wireframes, mockups, and prototypes for approval. 3) Development - Our engineers build the solution according to specifications. 4) Testing & QA - We conduct thorough testing to ensure quality and performance. 5) Deployment - We launch your solution to the appropriate platforms. 6) Post-Launch Support - We provide ongoing maintenance and support as needed. Throughout this process, we maintain regular communication and involve you in key decision points.",
      category: "projects"
    },
    {
      id: "project-communication",
      question: "How will we communicate during the project?",
      answer: "We believe in transparent and regular communication. You'll be assigned a dedicated project manager who will be your main point of contact. We use a combination of tools including project management software, regular video calls, email updates, and collaborative platforms like Slack for day-to-day communication. We schedule weekly progress meetings and provide detailed reports at key milestones. Our goal is to keep you informed and involved throughout the entire process.",
      category: "projects"
    },
    {
      id: "project-changes",
      question: "What if I want to make changes during the project?",
      answer: "We understand that requirements can evolve during a project. We have a structured change request process to handle modifications to the original scope. Your project manager will document the requested changes, assess the impact on timeline and budget, and provide you with options before proceeding. For minor changes, we try to accommodate within the existing scope, while more significant changes may require adjustments to the project timeline or budget. We're flexible and will work with you to find the best solution.",
      category: "projects"
    },
    {
      id: "technical-hosting",
      question: "Do you provide hosting services?",
      answer: "Yes, we offer hosting solutions tailored to your project's needs. We can set up and manage hosting on leading cloud platforms like AWS, Google Cloud, or Microsoft Azure. Our hosting services include server configuration, security setup, performance optimization, regular backups, and ongoing monitoring. If you prefer to use your own hosting provider, we're happy to deploy your project there and provide guidance on optimal configuration. We can discuss hosting options and recommendations during our project planning phase.",
      category: "technical"
    },
    {
      id: "technical-maintenance",
      question: "What kind of support and maintenance do you offer after launch?",
      answer: "We offer several post-launch support and maintenance options to ensure your digital product continues to perform optimally. Our standard support includes bug fixes, security updates, and minor adjustments for 30 days after launch. For ongoing needs, we offer maintenance packages that can include regular updates, performance monitoring, security patches, content updates, feature enhancements, and technical support. We can customize a maintenance plan based on your specific requirements and budget.",
      category: "technical"
    },
    {
      id: "technical-compatibility",
      question: "Will my website/app work on all devices and browsers?",
      answer: "Yes, we design and develop with cross-platform compatibility as a priority. Our websites are responsive and adapt to different screen sizes, from desktop to mobile devices. We test on all major browsers (Chrome, Firefox, Safari, Edge) and ensure compatibility with recent versions. For mobile apps, we can develop native apps for iOS and Android or cross-platform solutions depending on your requirements. During the planning phase, we'll discuss target platforms and browsers to ensure we meet your specific compatibility needs.",
      category: "technical"
    },
    {
      id: "billing-payment",
      question: "What are your payment terms?",
      answer: "Our standard payment schedule typically includes an initial deposit (usually 30-50% of the project total) to begin work, followed by milestone payments throughout the project, and a final payment upon completion. For larger projects, we can create a customized payment schedule aligned with major deliverables. We accept various payment methods including bank transfers, credit cards, and in some cases, installment plans. All payment terms are clearly outlined in our project proposal and contract.",
      category: "billing"
    },
    {
      id: "billing-refund",
      question: "What is your refund policy?",
      answer: "Our refund policy is designed to be fair to all parties. If you need to cancel a project after work has begun, payment for completed work is non-refundable. For the remaining balance, we may offer a partial refund depending on the stage of the project and resources already allocated. If we fail to deliver according to the agreed specifications and cannot rectify the issues, we will work with you on an appropriate refund or compensation. Specific refund terms are included in our service agreement, which we'll review together before project commencement.",
      category: "billing"
    },
    {
      id: "billing-additional",
      question: "Are there any additional costs I should be aware of?",
      answer: "Our project quotes include all development and design costs, but there may be additional expenses depending on your project requirements. These could include third-party services or tools (e.g., payment gateways, API subscriptions, premium plugins), stock photography or custom illustrations, domain registration, hosting fees, SSL certificates, and ongoing maintenance. We clearly identify these potential additional costs in our proposals so you can budget accordingly. We're committed to transparency and won't surprise you with unexpected charges.",
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
    <section id="faqs" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Find quick answers to common questions about our services, process, and policies.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
            <Input
              type="text"
              placeholder="Search for questions or keywords..."
              className="pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
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
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No results found for your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
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
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            If you couldn&apos;t find the answer you were looking for, our support team is here to help.
          </p>
          <Button asChild>
            <Link href="#contact">
              Contact Support
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

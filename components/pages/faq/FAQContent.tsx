"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, boolean>>({});
  
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "services", name: "Our Services" },
    { id: "process", name: "Our Process" },
    { id: "technical", name: "Technical" },
    { id: "billing", name: "Billing & Payments" }
  ];

  const faqs: FAQItem[] = [
    // General Questions
    {
      id: "about-company",
      question: "What is Pledge & Grow?",
      answer: "Pledge & Grow is a digital agency specializing in web development, mobile app development, UI/UX design, and digital strategy. We help businesses of all sizes transform their digital presence and create exceptional user experiences. Founded in 2018, we've worked with clients across various industries to deliver innovative digital solutions that drive growth and engagement.",
      category: "general"
    },
    {
      id: "company-location",
      question: "Where is Pledge & Grow located?",
      answer: "Our headquarters is located in Paris, France, but we operate globally with team members and clients across Europe, North America, and Asia. Our distributed team allows us to provide support across different time zones and bring diverse perspectives to our projects.",
      category: "general"
    },
    {
      id: "company-experience",
      question: "How experienced is your team?",
      answer: "Our team consists of seasoned professionals with an average of 8+ years of experience in their respective fields. Our developers, designers, and strategists have worked with companies ranging from startups to Fortune 500 enterprises. We continuously invest in professional development to stay at the forefront of industry trends and technologies.",
      category: "general"
    },
    
    // Services Questions
    {
      id: "service-offerings",
      question: "What services does Pledge & Grow offer?",
      answer: "We offer a comprehensive range of digital services including: Web Development (responsive websites, web applications, e-commerce), Mobile App Development (iOS, Android, cross-platform), UI/UX Design (user research, wireframing, prototyping), Digital Strategy (market analysis, roadmapping, growth planning), Content Management Systems (custom CMS, WordPress, Shopify), and Ongoing Support & Maintenance (updates, security, performance optimization).",
      category: "services"
    },
    {
      id: "service-industries",
      question: "What industries do you work with?",
      answer: "We work with clients across various industries including e-commerce, healthcare, finance, education, technology, hospitality, and non-profit. Our diverse experience allows us to understand the unique challenges and opportunities in different sectors. We tailor our approach to meet the specific needs and regulatory requirements of each industry.",
      category: "services"
    },
    {
      id: "service-timeline",
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary depending on scope, complexity, and specific requirements. As a general guideline: Simple websites: 4-6 weeks, Complex web applications: 3-6 months, Mobile apps: 3-6 months, E-commerce platforms: 2-4 months, UI/UX design projects: 4-8 weeks. During our initial consultation, we'll provide a detailed timeline based on your project specifications.",
      category: "services"
    },
    {
      id: "service-cost",
      question: "How much do your services cost?",
      answer: "Our pricing is customized based on the specific requirements of each project. Factors that influence cost include project complexity, features needed, design requirements, timeline, and ongoing support needs. We offer flexible engagement models including fixed-price projects, retainer arrangements, and time and materials billing. We're happy to provide a detailed quote after understanding your project requirements during an initial consultation.",
      category: "services"
    },
    
    // Process Questions
    {
      id: "process-steps",
      question: "What is your project development process?",
      answer: "Our development process follows these key phases: 1) Discovery & Planning - We gather requirements, conduct research, and create a project roadmap. 2) Design - We develop wireframes, mockups, and prototypes for approval. 3) Development - Our engineers build the solution according to specifications. 4) Testing & QA - We conduct thorough testing to ensure quality and performance. 5) Deployment - We launch your solution to the appropriate platforms. 6) Post-Launch Support - We provide ongoing maintenance and support as needed. Throughout this process, we maintain regular communication and involve you in key decision points.",
      category: "process"
    },
    {
      id: "process-communication",
      question: "How will we communicate during the project?",
      answer: "We believe in transparent and regular communication. You'll be assigned a dedicated project manager who will be your main point of contact. We use a combination of tools including project management software, regular video calls, email updates, and collaborative platforms like Slack for day-to-day communication. We schedule weekly progress meetings and provide detailed reports at key milestones. Our goal is to keep you informed and involved throughout the entire process.",
      category: "process"
    },
    {
      id: "process-changes",
      question: "What if I want to make changes during the project?",
      answer: "We understand that requirements can evolve during a project. We have a structured change request process to handle modifications to the original scope. Your project manager will document the requested changes, assess the impact on timeline and budget, and provide you with options before proceeding. For minor changes, we try to accommodate within the existing scope, while more significant changes may require adjustments to the project timeline or budget. We're flexible and will work with you to find the best solution.",
      category: "process"
    },
    {
      id: "process-involvement",
      question: "How involved do I need to be in the project?",
      answer: "Client involvement is crucial for project success. We typically require your active participation during the discovery phase, regular feedback on designs and prototypes, and availability for progress meetings and milestone approvals. However, we understand that you have a business to run, so we structure our process to make efficient use of your time. We'll work with you to establish a communication and approval schedule that fits your availability while ensuring the project moves forward smoothly.",
      category: "process"
    },
    
    // Technical Questions
    {
      id: "technical-technologies",
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies that provide the best balance of performance, security, and maintainability. For frontend development, we work with React, Next.js, Vue.js, and Angular. For backend development, we use Node.js, Python, PHP, and Ruby on Rails. For mobile apps, we develop with React Native, Swift, and Kotlin. Our technology choices are always guided by your specific project requirements rather than a one-size-fits-all approach.",
      category: "technical"
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
    
    // Billing Questions
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
    },
    {
      id: "billing-ongoing",
      question: "How much should I budget for ongoing maintenance?",
      answer: "Ongoing maintenance costs vary depending on the complexity of your digital product and the level of support you need. As a general guideline, we recommend budgeting approximately 15-20% of the initial development cost annually for maintenance and updates. This ensures your product remains secure, performs well, and continues to evolve with your business needs and technological advancements. We offer flexible maintenance packages that can be tailored to your specific requirements and budget constraints.",
      category: "billing"
    }
  ];

  // Filter FAQs based on selected category
  const filteredFAQs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const handleFeedback = (id: string, isHelpful: boolean) => {
    console.log(`FAQ ${id} was ${isHelpful ? 'helpful' : 'not helpful'}`);
    setFeedbackGiven(prev => ({ ...prev, [id]: true }));
    // In a real implementation, this would send feedback data to a backend API
  };

  return (
    <section id="faq-content" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
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
                  className="max-w-4xl mx-auto"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
                        <AccordionTrigger className="text-left text-lg font-medium py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          <div className="space-y-4">
                            <p className="text-base">{faq.answer}</p>
                            <div className="flex items-center gap-4 pt-2">
                              <span className="text-sm text-muted-foreground">Was this helpful?</span>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="h-8 px-3"
                                  onClick={() => handleFeedback(faq.id, true)}
                                  disabled={feedbackGiven[faq.id]}
                                >
                                  <ThumbsUp className="h-4 w-4 mr-1" /> Yes
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="h-8 px-3"
                                  onClick={() => handleFeedback(faq.id, false)}
                                  disabled={feedbackGiven[faq.id]}
                                >
                                  <ThumbsDown className="h-4 w-4 mr-1" /> No
                                </Button>
                              </div>
                              {feedbackGiven[faq.id] && (
                                <span className="text-sm text-primary">Thank you for your feedback!</span>
                              )}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No FAQs found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

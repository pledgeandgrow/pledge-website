"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Check, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CollaborationRequirement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const collaborationRequirements: CollaborationRequirement[] = [
  {
    id: "clear-goals",
    title: "Clear Project Goals",
    description: "Provide a clear description of your project goals, target audience, and expected outcomes. The more specific you are, the better we can tailor our solutions to your needs.",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "timeline",
    title: "Realistic Timeline",
    description: "Understand that quality digital projects take time. We work efficiently but won't compromise on quality. Typical projects take 2-6 months depending on complexity.",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "budget",
    title: "Appropriate Budget",
    description: "Have a realistic budget that aligns with your project scope. Quality development requires investment. We'll help you prioritize features to match your budget constraints.",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "feedback",
    title: "Timely Feedback",
    description: "Commit to providing timely feedback during the development process. This ensures we stay on track and can make adjustments quickly without delaying the project.",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "content",
    title: "Content Preparation",
    description: "Be prepared to provide necessary content (text, images, videos) in a timely manner. Content delays are a common cause of project timeline extensions.",
    icon: <Check className="h-5 w-5 text-primary" />
  },
  {
    id: "decision-maker",
    title: "Designated Decision Maker",
    description: "Assign a primary point of contact who has authority to make decisions. Too many stakeholders without clear leadership can lead to confusion and delays.",
    icon: <Check className="h-5 w-5 text-primary" />
  }
];

const clientProvisions = [
  {
    id: "brand-assets",
    title: "Brand Assets",
    items: [
      "Logo files in vector format (SVG, AI, EPS)",
      "Brand color palette with hex codes",
      "Typography information (font names, weights)",
      "Brand guidelines if available"
    ]
  },
  {
    id: "content-materials",
    title: "Content Materials",
    items: [
      "Text content for all pages",
      "High-quality images (minimum 1920px width)",
      "Videos in MP4 format (if applicable)",
      "Documents for download (if applicable)"
    ]
  },
  {
    id: "technical-access",
    title: "Technical Access",
    items: [
      "Domain registrar access (or ability to update DNS)",
      "Hosting account credentials (if using existing hosting)",
      "Third-party service credentials (analytics, marketing tools, etc.)",
      "Existing database backups (for migrations)"
    ]
  },
  {
    id: "legal-requirements",
    title: "Legal Requirements",
    items: [
      "Privacy policy content",
      "Terms of service content",
      "Cookie policy content",
      "GDPR compliance requirements"
    ]
  }
];

export default function ProjectRequirements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(collaborationRequirements.length - 1, prev + 1));
  };
  return (
    <section className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Collaboration Requirements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For a successful partnership, we&apos;ve established these key requirements to ensure smooth collaboration and exceptional results.
          </p>
        </div>
        
        {/* Desktop Grid View */}
        <div className={`${!isMobile ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16`}>
          {collaborationRequirements.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {req.icon}
                  </div>
                  <CardTitle className="text-xl">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{req.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative max-w-md mx-auto mb-16">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-background shadow-md"
                onClick={handleNext}
                disabled={currentIndex >= collaborationRequirements.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            {/* Single card display */}
            <div className="px-4 transition-all duration-300">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {collaborationRequirements[currentIndex].icon}
                  </div>
                  <CardTitle className="text-xl">{collaborationRequirements[currentIndex].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{collaborationRequirements[currentIndex].description}</p>
                  <div className="mt-4 text-center text-primary font-medium">
                    {currentIndex + 1} of {collaborationRequirements.length}
                  </div>
                </CardContent>
              </Card>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {collaborationRequirements.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Info className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">What You Should Provide</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            To ensure a faster and more efficient development process, please prepare the following materials before we begin:
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {clientProvisions.map((provision) => (
              <AccordionItem key={provision.id} value={provision.id}>
                <AccordionTrigger className="text-lg font-medium">
                  {provision.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                    {provision.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

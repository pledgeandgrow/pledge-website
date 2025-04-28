"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SuccessStory {
  id: string;
  company: string;
  logo: string;
  industry: string;
  grantType: string;
  amountSecured: string;
  projectType: string;
  outcome: string;
  quote: string;
  spokesperson: string;
  position: string;
}

export default function SuccessStories() {
  const stories: SuccessStory[] = [
    {
      id: "story1",
      company: "EcoTech Solutions",
      logo: "/images/grants-subsidies/logo-ecotech.jpg",
      industry: "Renewable Energy",
      grantType: "Green Technology Adoption",
      amountSecured: "€65,000",
      projectType: "Solar Monitoring Platform",
      outcome: "Reduced development costs by 40% and accelerated market entry by 6 months",
      quote: "The grant funding was transformative for our business. Pledge & Grow's expertise made the complex application process straightforward, allowing us to focus on our core innovation.",
      spokesperson: "Marie Dupont",
      position: "CEO"
    },
    {
      id: "story2",
      company: "RetailNow",
      logo: "/images/grants-subsidies/logo-retailnow.jpg",
      industry: "Retail",
      grantType: "E-commerce Acceleration",
      amountSecured: "€28,000",
      projectType: "Omnichannel Platform",
      outcome: "Increased online sales by 150% within 3 months of implementation",
      quote: "Without the grant funding and Pledge & Grow's guidance, we would have taken years to achieve the digital transformation that we completed in just months.",
      spokesperson: "Thomas Laurent",
      position: "Founder"
    },
    {
      id: "story3",
      company: "MedInnovate",
      logo: "/images/grants-subsidies/logo-medinnovate.jpg",
      industry: "Healthcare",
      grantType: "Digital Innovation Fund",
      amountSecured: "€45,000",
      projectType: "Patient Management System",
      outcome: "Improved patient care efficiency by 35% and reduced administrative costs",
      quote: "The funding we secured with Pledge & Grow's help allowed us to develop a solution that has genuinely improved healthcare delivery for thousands of patients.",
      spokesperson: "Dr. Sophie Moreau",
      position: "Medical Director"
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
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses like yours secure funding and achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-md">
                <div className="relative h-48 bg-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-32 h-32">
                      <Image
                        src={story.logo}
                        alt={`${story.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">{story.company}</h3>
                    <p className="text-muted-foreground text-sm">{story.industry}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Grant Type:</span>
                      <span className="text-sm text-right">{story.grantType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Amount Secured:</span>
                      <span className="text-sm text-right font-bold text-primary">{story.amountSecured}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Project:</span>
                      <span className="text-sm text-right">{story.projectType}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="w-full justify-center py-1">
                      {story.outcome}
                    </Badge>
                  </div>
                  
                  <blockquote className="italic text-sm mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="text-right">
                    <p className="font-medium text-sm">{story.spokesperson}</p>
                    <p className="text-xs text-muted-foreground">{story.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

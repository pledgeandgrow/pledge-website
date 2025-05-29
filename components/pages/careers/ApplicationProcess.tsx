"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  Briefcase 
} from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ApplicationProcess() {
  const steps: ProcessStep[] = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Application Submission",
      description: "Submit your application through our careers portal with your resume, cover letter, and any relevant portfolio links."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Initial Screening",
      description: "Our recruitment team will review your application and conduct an initial phone or video screening to discuss your experience and aspirations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Interviews",
      description: "Meet with potential team members and managers for in-depth discussions about your skills, experience, and fit with our culture."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Assessment & Decision",
      description: "Complete any relevant technical assessments or case studies, after which we'll make a final decision based on all interview feedback."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Offer & Onboarding",
      description: "If selected, you'll receive an offer and, upon acceptance, begin our comprehensive onboarding process to set you up for success."
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
            Our Application Process
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve designed a straightforward and transparent hiring process to help us find the right talent and give you clarity every step of the way.
          </p>
        </motion.div>

        {/* Mobile Scroll View (visible only on mobile) */}
        <div className="md:hidden overflow-x-auto pb-6">
          <div className="flex space-x-4 w-max px-4">
            {steps.map((step, index) => (
              <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                <div className="bg-white border border-border rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-3">
                      {step.icon}
                    </div>
                    <div className="bg-primary/10 h-6 w-6 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full bg-primary/30`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop Timeline View (visible only on desktop) */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6 relative">
                <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center z-10 relative">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

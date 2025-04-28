"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Search, 
  FileText, 
  CheckSquare, 
  Award, 
  BarChart 
} from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function ApplicationProcess() {
  const steps: ProcessStep[] = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Eligibility Assessment",
      description: "We evaluate your business against available funding criteria to identify the best opportunities.",
      color: "border-blue-500"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-green-500" />,
      title: "Strategic Planning",
      description: "Together, we develop a compelling project plan that aligns with funding objectives and your business goals.",
      color: "border-green-500"
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Application Preparation",
      description: "Our experts prepare comprehensive documentation, ensuring all requirements are met with precision.",
      color: "border-purple-500"
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-amber-500" />,
      title: "Submission & Follow-up",
      description: "We handle the submission process and manage any follow-up inquiries from funding bodies.",
      color: "border-amber-500"
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Approval & Implementation",
      description: "Upon approval, we help you implement the funded project according to requirements and timelines.",
      color: "border-red-500"
    },
    {
      icon: <BarChart className="h-8 w-8 text-cyan-500" />,
      title: "Reporting & Compliance",
      description: "We ensure ongoing compliance with funding terms and prepare necessary progress reports.",
      color: "border-cyan-500"
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
            We simplify the complex grant application journey with our proven six-step process, maximizing your chances of success.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step number and icon */}
                <div className="flex-1 text-center md:text-right md:pr-8 order-2 md:order-1">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : null}
                </div>
                
                {/* Center icon */}
                <div className="mx-4 my-4 md:my-0 order-1 md:order-2 z-10">
                  <div className={`bg-white dark:bg-gray-800 p-4 rounded-full border-4 ${step.color} flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Step description */}
                <div className="flex-1 text-center md:text-left md:pl-8 order-3">
                  {index % 2 !== 0 ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

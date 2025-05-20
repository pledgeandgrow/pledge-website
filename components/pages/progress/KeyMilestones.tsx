"use client";

import { motion } from "framer-motion";
import { 
  Flag, 
  Award, 
  Users, 
  Building, 
  TrendingUp 
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function KeyMilestones() {
  const milestones: Milestone[] = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Originally started by a small team with a big vision. We wanted to be a digital agency that offered every service possible aimed at entrepreneurs, and started working on our vision.",
      icon: <Flag className="h-8 w-8 text-blue-500" />,
      color: "border-blue-500"
    },
    {
      year: "2023",
      title: "Finding Our Focus",
      description: "Had our first clients and started seeing demand in marketing and IT where we excelled the most. We made the strategic decision to cut off other services except those two core areas.",
      icon: <TrendingUp className="h-8 w-8 text-cyan-500" />,
      color: "border-cyan-500"
    },
    {
      year: "Early 2024",
      title: "IT Specialization",
      description: "Our team got bigger and we switched fully to IT services with huge demands and most opportunities coming from that field, allowing us to focus our expertise.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      color: "border-purple-500"
    },
    {
      year: "Late 2024",
      title: "French Establishment",
      description: "Established our company in France, started to get our first clients, and our team evolved with time, building a solid foundation for future growth.",
      icon: <Building className="h-8 w-8 text-amber-500" />,
      color: "border-amber-500"
    },
    {
      year: "2025",
      title: "Innovation Focus",
      description: "Worked on our vision and R&D to add more value to what we can offer. Pledge & Grow is not only your digital IT agency but also building the innovations of tomorrow.",
      icon: <Award className="h-8 w-8 text-emerald-500" />,
      color: "border-emerald-500"
    }
  ];

  return (
    <section id="key-milestones" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key Milestones
          </h2>
          <p className="text-lg text-muted-foreground">
            Our journey of growth and achievement over the years as we&apos;ve built Pledge & Grow into a leading digital solutions provider.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex mb-12 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`mr-6 ${index % 2 !== 0 ? 'md:mr-0 md:ml-6' : ''} relative`}>
                <div className={`bg-white dark:bg-gray-800 p-4 rounded-full border-4 ${milestone.color} flex items-center justify-center z-10 relative`}>
                  {milestone.icon}
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute top-16 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
                )}
              </div>
              <div className={`pt-2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                <div className="text-sm font-bold text-primary mb-1">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

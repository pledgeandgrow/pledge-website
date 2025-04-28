"use client";

import { motion } from "framer-motion";
import { 
  Flag, 
  Award, 
  Users, 
  Globe, 
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
      year: "2018",
      title: "Company Founded",
      description: "Pledge & Grow was established with a vision to help businesses leverage digital technologies for growth and innovation.",
      icon: <Flag className="h-8 w-8 text-blue-500" />,
      color: "border-blue-500"
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first enterprise client and successfully delivered a transformative digital solution that set the foundation for our reputation.",
      icon: <Award className="h-8 w-8 text-green-500" />,
      color: "border-green-500"
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 25 talented professionals across development, design, and strategy to meet increasing client demand.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      color: "border-purple-500"
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Opened our first international office and began serving clients across Europe, marking the beginning of our global presence.",
      icon: <Globe className="h-8 w-8 text-red-500" />,
      color: "border-red-500"
    },
    {
      year: "2022",
      title: "New Headquarters",
      description: "Moved into our new headquarters in Paris, designed to foster collaboration, innovation, and employee wellbeing.",
      icon: <Building className="h-8 w-8 text-amber-500" />,
      color: "border-amber-500"
    },
    {
      year: "2023",
      title: "100th Client Milestone",
      description: "Celebrated our 100th client partnership, with a client retention rate of over 90% - a testament to our quality and service.",
      icon: <TrendingUp className="h-8 w-8 text-cyan-500" />,
      color: "border-cyan-500"
    },
    {
      year: "2024",
      title: "Technology Innovation Award",
      description: "Received industry recognition for our innovative approach to digital solutions and positive client outcomes.",
      icon: <Award className="h-8 w-8 text-emerald-500" />,
      color: "border-emerald-500"
    },
    {
      year: "2025",
      title: "Sustainability Initiative",
      description: "Launched our sustainability program, committing to carbon-neutral operations and environmentally responsible practices.",
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      color: "border-teal-500"
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
            Our journey of growth and achievement over the years as we've built Pledge & Grow into a leading digital solutions provider.
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

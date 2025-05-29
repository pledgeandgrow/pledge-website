"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Network, Code, Users, Workflow, Zap, Database } from "lucide-react";

interface ApproachCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ApproachCard({ title, description, icon, delay }: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-md bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="mb-4 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function EcosystemeApproach() {
  const approaches = [
    {
      title: "Interconnected Systems",
      description: "We design digital ecosystems where all components communicate seamlessly, creating a unified experience for users and administrators.",
      icon: <Network className="w-6 h-6" />,
    },
    {
      title: "Human-Centered Design",
      description: "People are at the core of our ecosystem approach, ensuring technology serves human needs rather than forcing adaptation.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Optimized Workflows",
      description: "We map and enhance business processes within the ecosystem, eliminating bottlenecks and creating efficient operational flows.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Scalable Architecture",
      description: "Our ecosystems are built to grow with your business, accommodating increased demands without requiring complete redesigns.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Data Integration",
      description: "We connect data sources across your organization, providing a unified view and enabling better decision-making.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Continuous Innovation",
      description: "Our ecosystems evolve over time, incorporating new technologies and approaches to keep you ahead of the competition.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Ecosystem Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We view digital transformation as an ecosystem of interconnected elements that must work in harmony to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <ApproachCard
              key={index}
              title={approach.title}
              description={approach.description}
              icon={approach.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

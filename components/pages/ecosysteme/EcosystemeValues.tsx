"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Recycle, Scale, Globe } from "lucide-react";

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function Value({ title, description, icon, index }: ValueProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default function EcosystemeValues() {
  const values = [
    {
      title: "Ethical Technology",
      description: "We build digital ecosystems with ethical considerations at their core, ensuring privacy, security, and responsible data usage.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Collaborative Innovation",
      description: "Our ecosystem approach brings together diverse perspectives and expertise to create innovative solutions to complex problems.",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      title: "Sustainable Development",
      description: "We design ecosystems that minimize environmental impact while maximizing business value and longevity.",
      icon: <Recycle className="w-5 h-5" />,
    },
    {
      title: "Human-Centered",
      description: "People are at the heart of our ecosystem approach, ensuring technology serves human needs rather than forcing adaptation.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: "Balanced Integration",
      description: "We carefully balance technological innovation with practical business needs to create ecosystems that deliver real value.",
      icon: <Scale className="w-5 h-5" />,
    },
    {
      title: "Global Perspective",
      description: "Our ecosystem approach considers global best practices while respecting local contexts and cultural nuances.",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500 to-emerald-700 p-1">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                <div className="w-full h-full p-6 grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4 flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="rounded-lg bg-teal-50 dark:bg-teal-900/20 p-4 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-green-200 dark:bg-green-900/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-70"></div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Ecosystem Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These core values guide our approach to building digital ecosystems that are sustainable, ethical, and effective.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <Value
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

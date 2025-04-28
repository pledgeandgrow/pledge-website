"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  Calendar, 
  MessageSquare 
} from "lucide-react";

export default function AmbassadorImpact() {
  const stats = [
    { 
      icon: <Users className="h-8 w-8 text-primary" />, 
      value: "50+", 
      label: "Global Ambassadors", 
      description: "Representing our brand across 30 countries" 
    },
    { 
      icon: <Globe className="h-8 w-8 text-primary" />, 
      value: "200+", 
      label: "Community Events", 
      description: "Organized by our ambassadors annually" 
    },
    { 
      icon: <Calendar className="h-8 w-8 text-primary" />, 
      value: "5,000+", 
      label: "Workshop Attendees", 
      description: "Learning about our technologies" 
    },
    { 
      icon: <MessageSquare className="h-8 w-8 text-primary" />, 
      value: "25+", 
      label: "Speaking Engagements", 
      description: "At major industry conferences" 
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ambassador Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our ambassadors are making a significant impact worldwide, 
              spreading knowledge and building communities around our technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
              <p className="font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

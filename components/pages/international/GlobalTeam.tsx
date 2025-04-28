"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GlobalTeam() {
  const teamStats = [
    { value: "15+", label: "Countries" },
    { value: "25+", label: "Languages" },
    { value: "200+", label: "Team Members" },
    { value: "24/7", label: "Global Coverage" }
  ];

  const teamValues = [
    {
      title: "Cultural Intelligence",
      description: "We embrace cultural diversity and develop solutions with global perspectives in mind.",
      image: "/images/international/cultural-intelligence.jpg"
    },
    {
      title: "Local Expertise",
      description: "Our teams bring deep understanding of regional markets, regulations, and user behaviors.",
      image: "/images/international/local-expertise.jpg"
    },
    {
      title: "Global Standards",
      description: "We maintain consistent quality and methodologies across all our international operations.",
      image: "/images/international/global-standards.jpg"
    },
    {
      title: "Collaborative Approach",
      description: "Our global teams work seamlessly together, sharing knowledge and best practices.",
      image: "/images/international/collaborative-approach.jpg"
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
            Our Global Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Our diverse international team brings together talent from around the world,
            offering unique perspectives and expertise to deliver exceptional solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <Badge className="bg-primary text-primary-foreground border-none">
                      {value.title}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

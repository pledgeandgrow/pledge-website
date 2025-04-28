"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Clock } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function Metric({ icon, value, label, prefix = "", suffix = "", duration = 2000 }: MetricProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = duration / end;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);
      
      return () => clearInterval(counter);
    }
  }, [isInView, value, duration]);

  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-primary">{icon}</div>
          <h3 ref={ref} className="text-4xl font-bold mb-2">
            {prefix}{isInView ? count : 0}{suffix}
          </h3>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: <Heart className="h-10 w-10" />,
      value: 25,
      label: "Pro Bono Projects Completed",
      prefix: "",
      suffix: "+",
      duration: 2000
    },
    {
      icon: <Users className="h-10 w-10" />,
      value: 150000,
      label: "People Positively Impacted",
      prefix: "",
      suffix: "+",
      duration: 3000
    },
    {
      icon: <Globe className="h-10 w-10" />,
      value: 12,
      label: "Countries Reached",
      prefix: "",
      suffix: "",
      duration: 1500
    },
    {
      icon: <Clock className="h-10 w-10" />,
      value: 5000,
      label: "Volunteer Hours Contributed",
      prefix: "",
      suffix: "+",
      duration: 2500
    }
  ];

  const impactAreas = [
    {
      title: "Digital Inclusion",
      percentage: 35,
      description: "Bridging the digital divide and ensuring technology is accessible to all."
    },
    {
      title: "Education",
      percentage: 25,
      description: "Empowering learners through innovative educational technology solutions."
    },
    {
      title: "Healthcare",
      percentage: 20,
      description: "Improving access to quality healthcare through digital innovation."
    },
    {
      title: "Environment",
      percentage: 15,
      description: "Leveraging technology to address environmental challenges and promote sustainability."
    },
    {
      title: "Community Development",
      percentage: 5,
      description: "Strengthening communities through digital tools and platforms."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We measure our success not just by business metrics, but by the positive difference we make in the world. 
            Here's a snapshot of our social impact over the past three years.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Metric {...metric} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold tracking-tight mb-4">Impact Distribution by Area</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our social impact initiatives span multiple areas, with a focus on addressing the most pressing challenges through technology.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{area.title}</span>
                <span className="text-primary font-medium">{area.percentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${area.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary h-2.5 rounded-full"
                ></motion.div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{area.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground italic">
            "We believe that the true measure of our success lies not in the technology we create, 
            but in the positive impact that technology has on people's lives."
          </p>
          <p className="font-medium mt-2">— Pledge & Grow Leadership Team</p>
        </motion.div>
      </div>
    </section>
  );
}

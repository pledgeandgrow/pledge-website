"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  membershipType: string;
}

export default function MembershipTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Joining the Pledge membership program has been transformative for our team. The resources and community access have accelerated our development process by at least 30%.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechInnovate",
      image: "/images/membership/testimonial-1.jpg",
      membershipType: "Enterprise"
    },
    {
      quote: "The certification pathways have helped me advance my career significantly. The structured learning and recognition have opened new opportunities I wouldn't have had otherwise.",
      author: "Michael Chen",
      role: "Senior Developer",
      company: "CodeCraft Solutions",
      image: "/images/membership/testimonial-2.jpg",
      membershipType: "Professional"
    },
    {
      quote: "As a freelancer, the code repository and documentation access have been invaluable. I can deliver higher quality work in less time, which has directly impacted my bottom line.",
      author: "Emma Rodriguez",
      role: "Independent Consultant",
      company: "Digital Nomad LLC",
      image: "/images/membership/testimonial-3.jpg",
      membershipType: "Basic"
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
            Member Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our members about how Pledge membership has helped them achieve their goals and transform their businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6 text-primary">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="text-xs text-primary mt-1">
                        {testimonial.membershipType} Member
                      </p>
                    </div>
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

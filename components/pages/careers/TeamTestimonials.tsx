"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  yearsAtCompany: string;
}

export default function TeamTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Working at Pledge & Grow has been transformative for my career. The collaborative environment and focus on continuous learning have helped me grow both professionally and personally.",
      author: "Thomas Laurent",
      role: "Senior Frontend Developer",
      image: "/images/careers/team-member-1.jpg",
      yearsAtCompany: "3 years"
    },
    {
      quote: "What I love most about working here is the culture of innovation. We're encouraged to explore new ideas and technologies, which keeps the work exciting and meaningful.",
      author: "Sophie Martin",
      role: "UX/UI Designer",
      image: "/images/careers/team-member-2.jpg",
      yearsAtCompany: "2 years"
    },
    {
      quote: "The leadership team truly values work-life balance. They understand that happy, well-rested employees produce the best work, and it shows in our company culture.",
      author: "Alexandre Dubois",
      role: "Project Manager",
      image: "/images/careers/team-member-3.jpg",
      yearsAtCompany: "4 years"
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
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the people who make Pledge & Grow a great place to work and grow your career.
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
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary mt-1">
                        With us for {testimonial.yearsAtCompany}
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

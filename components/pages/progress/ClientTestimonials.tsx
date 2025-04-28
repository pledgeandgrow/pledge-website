"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star 
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export default function ClientTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie Martin",
      position: "CEO",
      company: "TechInnovate",
      image: "/images/progress/testimonial-1.jpg",
      quote: "Pledge & Grow transformed our digital presence completely. Their strategic approach and technical expertise helped us achieve our business goals faster than expected.",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Dubois",
      position: "Marketing Director",
      company: "GlobalRetail",
      image: "/images/progress/testimonial-2.jpg",
      quote: "Working with Pledge & Grow has been a game-changer for our e-commerce operations. Their solutions have directly contributed to a 45% increase in our online sales.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Leroy",
      position: "CTO",
      company: "FinTech Solutions",
      image: "/images/progress/testimonial-3.jpg",
      quote: "The technical excellence and attention to detail from the Pledge & Grow team is outstanding. They delivered a complex system that exceeded our expectations.",
      rating: 5
    },
    {
      id: 4,
      name: "Antoine Bernard",
      position: "Operations Manager",
      company: "LogisticsPro",
      image: "/images/progress/testimonial-4.jpg",
      quote: "Their methodology and communication made the entire process smooth and transparent. We always knew where we stood and what to expect next.",
      rating: 4
    },
    {
      id: 5,
      name: "Claire Moreau",
      position: "Founder",
      company: "EcoStartup",
      image: "/images/progress/testimonial-5.jpg",
      quote: "As a startup, we needed a partner who understood our constraints and vision. Pledge & Grow delivered exactly what we needed within our budget and timeline.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear directly from our clients about their experiences and the impact of our partnership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm" 
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm" 
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-muted-foreground text-sm">{testimonial.position}, {testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Lightbulb, 
  Users, 
  Heart,
  Leaf,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VisionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function FutureVision() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile detection is handled by CSS media queries instead

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === visionItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? visionItems.length - 1 : prevIndex - 1
    );
  };
  
  const visionItems: VisionItem[] = [
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Global Expansion",
      description: "Expanding our presence to new markets across Asia and the Americas, bringing our expertise to clients worldwide.",
      color: "bg-blue-500/10"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      title: "Innovation Hub",
      description: "Establishing a dedicated innovation center to explore emerging technologies and develop groundbreaking solutions.",
      color: "bg-amber-500/10"
    },
    {
      icon: <Users className="h-10 w-10 text-violet-500" />,
      title: "Talent Development",
      description: "Investing in our team through advanced training programs and partnerships with educational institutions.",
      color: "bg-violet-500/10"
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Community Impact",
      description: "Expanding our social responsibility initiatives to make a meaningful difference in the communities we serve.",
      color: "bg-red-500/10"
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Sustainability Leadership",
      description: "Setting new industry standards for environmentally responsible digital solutions and business practices.",
      color: "bg-green-500/10"
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
            Our Vision for the Future
          </h2>
          <p className="text-lg text-muted-foreground">
            As we look ahead, these are the key areas of focus that will drive our continued growth and impact.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === visionItems.length - 1 && visionItems.length % 3 === 1 ? "lg:col-span-3 lg:max-w-md lg:mx-auto" : ""}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`${item.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                  <p className="text-muted-foreground text-center">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="h-full border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className={`${visionItems[currentIndex].color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                      {visionItems[currentIndex].icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">{visionItems[currentIndex].title}</h3>
                    <p className="text-muted-foreground text-center">
                      {visionItems[currentIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {visionItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

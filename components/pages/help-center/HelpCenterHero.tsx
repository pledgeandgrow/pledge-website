"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, LifeBuoy, BookOpen, MessageSquare, FileQuestion } from "lucide-react";

export default function HelpCenterHero() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search through the help content
    console.log("Searching for:", searchQuery);
    // Navigate to search results or filter content
  };

  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      href: "#documentation"
    },
    {
      icon: <FileQuestion className="h-6 w-6" />,
      title: "FAQs",
      description: "Answers to common questions",
      href: "#faqs"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Contact Support",
      description: "Get in touch with our team",
      href: "#contact"
    },
    {
      icon: <LifeBuoy className="h-6 w-6" />,
      title: "Troubleshooting",
      description: "Solve common issues",
      href: "#troubleshooting"
    }
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <LifeBuoy className="h-4 w-4" />
            <span className="text-sm font-medium">Help & Support</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How can we <span className="text-primary">help you</span> today?
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Find answers, resources, and support for all your questions about Pledge & Grow services and products.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search for help articles, tutorials, FAQs..."
              className="pr-12 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

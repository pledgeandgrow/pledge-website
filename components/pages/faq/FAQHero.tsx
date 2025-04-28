"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileQuestion } from "lucide-react";

export default function FAQHero() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search through the FAQs
    console.log("Searching for:", searchQuery);
    // Navigate to search results or filter content
    const searchElement = document.getElementById("faq-content");
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <FileQuestion className="h-4 w-4" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Got <span className="text-primary">Questions?</span> We've Got Answers.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to the most common questions about our services, process, and policies.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search for questions..."
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
      </div>
    </section>
  );
}

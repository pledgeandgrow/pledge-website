"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PartnerCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function PartnerCategories({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}: PartnerCategoriesProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setActiveCategory("all")}
        >
          All Partners
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

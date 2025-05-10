"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Import existing service components
import CreationServices from "./CreationServices";
import IntegrationServices from "./IntegrationServices";
import ComplementaryServices from "./ComplementaryServices";

export default function ServicesTabbed() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="creation" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-12 w-full max-w-md mx-auto">
            <TabsTrigger value="creation">Creation</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="complementary">Complementary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creation" className="animate-fade-in py-8">
            <CreationServices />
          </TabsContent>
          
          <TabsContent value="integration" className="animate-fade-in py-8">
            <IntegrationServices />
          </TabsContent>
          
          <TabsContent value="complementary" className="animate-fade-in py-8">
            <ComplementaryServices />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

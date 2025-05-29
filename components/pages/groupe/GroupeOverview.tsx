"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GroupeOverview() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const overviewItems = [
    {
      title: "Our Vision",
      description: "To create an ecosystem where innovative companies can thrive together, sharing resources, knowledge, and opportunities to deliver exceptional value to clients across various industries and markets."
    },
    {
      title: "Our Approach",
      description: "We foster collaboration between our companies, encouraging cross-pollination of ideas and expertise. This synergistic approach allows us to tackle complex challenges and deliver comprehensive solutions that drive meaningful results."
    },
    {
      title: "Strategic Investments",
      description: "We strategically invest in promising ventures that align with our values and vision. By providing capital, mentorship, and access to our network, we help these companies scale and succeed in competitive markets."
    },
    {
      title: "Global Presence",
      description: "With operations across multiple countries, our group leverages global perspectives while maintaining deep local expertise. This international footprint enables us to serve clients worldwide with culturally relevant solutions."
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Group Ecosystem</h2>
            <p className="text-lg text-muted-foreground">
              The Pledge & Grow Group brings together specialized companies that share a common vision of innovation, 
              quality, and sustainable growth. Each entity contributes unique expertise to our collective mission.
            </p>
          </div>
          
          {/* Mobile Carousel View */}
          {isMobile && (
            <div className="mt-12">
              <div className="overflow-x-auto pb-6">
                <div className="flex space-x-4 w-max px-4">
                  {overviewItems.map((item, index) => (
                    <div key={index} className="w-[85vw] max-w-[300px] flex-shrink-0">
                      <div className="bg-card p-8 rounded-lg border shadow-sm h-full">
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {overviewItems.map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-2 w-2 rounded-full bg-primary/30`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Desktop Grid View */}
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {overviewItems.map((item, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

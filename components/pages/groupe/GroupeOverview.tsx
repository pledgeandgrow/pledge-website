"use client";

import { motion } from "framer-motion";

export default function GroupeOverview() {
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To create an ecosystem where innovative companies can thrive together, 
                sharing resources, knowledge, and opportunities to deliver exceptional 
                value to clients across various industries and markets.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
              <p className="text-muted-foreground">
                We foster collaboration between our companies, encouraging cross-pollination 
                of ideas and expertise. This synergistic approach allows us to tackle complex 
                challenges and deliver comprehensive solutions that drive meaningful results.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Strategic Investments</h3>
              <p className="text-muted-foreground">
                We strategically invest in promising ventures that align with our values 
                and vision. By providing capital, mentorship, and access to our network, 
                we help these companies scale and succeed in competitive markets.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Global Presence</h3>
              <p className="text-muted-foreground">
                With operations across multiple countries, our group leverages global 
                perspectives while maintaining deep local expertise. This international 
                footprint enables us to serve clients worldwide with culturally relevant solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

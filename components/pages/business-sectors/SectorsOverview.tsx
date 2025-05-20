"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SectorsOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/business-sectors/overview.jpg"
                alt="Business sectors overview"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary/10 p-8 rounded-lg hidden md:block">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Pledge & Grow, we understand that each industry faces unique challenges and opportunities in the digital landscape. Our specialized teams combine deep sector knowledge with technical expertise to deliver solutions that address your specific business needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              From retail and healthcare to finance and manufacturing, we&apos;ve helped organizations across diverse sectors leverage technology to enhance efficiency, improve customer experiences, and drive growth.
            </p>
            <p className="text-lg text-muted-foreground">
              Our industry-focused approach ensures that we not only understand your technical requirements but also the regulatory considerations, market dynamics, and competitive pressures that shape your business environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Handshake, Rocket, Shield, Users } from "lucide-react";

export default function BecomePartner() {
  return (
    <section id="become-partner" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become Our Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and collaborate on innovative solutions. 
              We're always looking for strategic partnerships that create value for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-sm border border-border"
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Handshake className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategic Alliances</h3>
            <p className="text-muted-foreground">
              Form strategic partnerships to expand market reach and create innovative solutions together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-sm border border-border"
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Rocket className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
            <p className="text-muted-foreground">
              Integrate your technology with our solutions to deliver enhanced value to our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-sm border border-border"
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Solution Partners</h3>
            <p className="text-muted-foreground">
              Collaborate on comprehensive solutions that address complex business challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-sm border border-border"
          >
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Channel Partners</h3>
            <p className="text-muted-foreground">
              Resell or refer our solutions to your clients and earn competitive commissions.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact?subject=Partnership Inquiry">
              Contact Us About Partnership
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

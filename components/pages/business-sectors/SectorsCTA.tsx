"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function SectorsCTA() {
  const { t } = useTranslations('business-sectors');
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact?subject=Industry Solutions" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> {t('cta.button')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="/services" className="flex items-center gap-2">
                {t('cta.contactInfo')} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

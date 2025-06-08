"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function GroupeCTA() {
  const { t } = useTranslations('groupe');
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact?subject=Groupe Inquiry" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> {t('cta.buttons.contact')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/careers" className="flex items-center gap-2">
                {t('cta.buttons.careers')} <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export default function MediaCTA() {
  const { t } = useTranslations('media');

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
          <div className="flex justify-center">
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact?subject=Media Inquiry" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> {t('cta.button')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

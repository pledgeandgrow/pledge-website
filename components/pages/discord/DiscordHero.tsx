"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function DiscordHero() {
  const { t } = useTranslations("discord");
  
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              {t("hero.description")}
            </p>
            {/* Buttons removed as requested */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/discord/discord.png"
                alt={t("hero.imageAlt")}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background/80 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

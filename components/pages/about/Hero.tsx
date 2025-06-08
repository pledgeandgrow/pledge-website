"use client";

import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function Hero() {
  const { t } = useTranslations('about');
  
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                {t('hero.title') || "About Pledge & Grow"}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
              {t('hero.description') || "We are a team of passionate designers and developers committed to creating exceptional digital experiences that help businesses thrive in the digital world."}
            </p>
          </div>
          <div className="lg:col-span-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur rounded-lg"></div>
              <Image
                src={t('hero.image') || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
                alt={t('hero.imageAlt') || "Our team collaborating"}
                width={600}
                height={400}
                className="relative rounded-lg w-full h-auto object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

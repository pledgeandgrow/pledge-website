"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function BlogNewsletter() {
  const { t } = useTranslations('blog');
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError(t('newsletter.error'));
      return;
    }

    setIsSubmitting(true);
    setError("");
    
    // Simulate API call
    try {
      // In a real implementation, this would be an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      // Log error but don't use the variable
      console.error(error);
      setError(t('newsletter.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('newsletter.title')}</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            {t('newsletter.description')}
          </p>
          
          {isSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
              <p>{t('newsletter.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
                aria-label="Email address"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('newsletter.subscribing', { defaultValue: 'Subscribing...' }) : t('newsletter.button')}
              </Button>
            </form>
          )}
          
          {error && (
            <p className="mt-2 text-red-600 dark:text-red-400 text-sm">{error}</p>
          )}
          
          <p className="mt-4 text-sm text-muted-foreground">
            {t('newsletter.privacyNotice', { defaultValue: 'We respect your privacy. Unsubscribe at any time.' })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

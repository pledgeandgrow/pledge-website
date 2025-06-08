"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Badge import removed as it was unused
import { MessageSquare, Phone, Clock, Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactSupport() {
  const { t } = useTranslations('help-center');
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the form data to a backend API
    console.log("Form submitted:", formState);
    // Simulate successful submission
    setFormState({ ...formState, submitted: true });
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
        submitted: false
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormState({ ...formState, category: value });
  };

  return (
    <section id="contact-support" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            {t('contactSupport.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t('contactSupport.description')}
          </p>
        </motion.div>

        {isMobile && (
          <div className="mb-8">
            <Card className="mb-6 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{t('contactSupport.quickContactOptions')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{t('contactSupport.contactMethods.technicalSupport')}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="tel:+33766580835">{t('contactSupport.contactMethods.callButton')}</Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{t('contactSupport.contactMethods.emailSupport')}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="mailto:support@pledgeandgrow.com">{t('contactSupport.contactMethods.emailButton')}</Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium">{t('contactSupport.contactMethods.liveChat')}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                    <Link href="https://wa.me/33753695840" target="_blank" rel="noopener noreferrer">{t('contactSupport.contactMethods.chatButton')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="h-full shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{t('contactSupport.form.ticketTitle')}</CardTitle>
                <CardDescription>
                  {t('contactSupport.form.ticketDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formState.submitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mb-4" />
                    <h3 className="text-lg md:text-xl font-medium mb-2">{t('contactSupport.form.successTitle')}</h3>
                    <p className="text-center text-muted-foreground text-sm md:text-base">
                      {t('contactSupport.form.successMessage')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          {t('contactSupport.form.nameLabel')}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t('contactSupport.form.namePlaceholder')}
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t('contactSupport.form.emailLabel')}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t('contactSupport.form.emailPlaceholder')}
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          {t('contactSupport.form.subjectLabel')}
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder={t('contactSupport.form.subjectPlaceholder')}
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="h-10"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          {t('contactSupport.form.categoryLabel')}
                        </label>
                        <Select
                          value={formState.category}
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger id="category" className="h-10">
                            <SelectValue placeholder={t('contactSupport.form.categoryPlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t('contactSupport.form.categories.general')}</SelectItem>
                            <SelectItem value="technical">{t('contactSupport.form.categories.technical')}</SelectItem>
                            <SelectItem value="billing">{t('contactSupport.form.categories.billing')}</SelectItem>
                            <SelectItem value="feedback">{t('contactSupport.form.categories.feedback')}</SelectItem>
                            <SelectItem value="other">{t('contactSupport.form.categories.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t('contactSupport.form.messageLabel')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t('contactSupport.form.messagePlaceholder')}
                        rows={isMobile ? 4 : 5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto">
                      {t('contactSupport.form.submitButton')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {!isMobile && (
            <div className="order-1 lg:order-2">
              <Card className="h-full shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{t('contactSupport.otherWays.title')}</CardTitle>
                  <CardDescription>
                    {t('contactSupport.otherWays.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contactSupport.otherWays.liveChat.title')}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('contactSupport.otherWays.liveChat.description')}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://wa.me/33753695840" target="_blank" rel="noopener noreferrer">
                          {t('contactSupport.otherWays.liveChat.button')} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contactSupport.otherWays.phone.title')}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('contactSupport.otherWays.phone.description')}
                      </p>
                      <p className="text-sm font-medium">+33 76 658 0835</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contactSupport.otherWays.email.title')}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('contactSupport.otherWays.email.description')}
                      </p>
                      <p className="text-sm font-medium">support@pledgeandgrow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contactSupport.otherWays.hours.title')}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t('contactSupport.otherWays.hours.weekdays')}<br />
                        {t('contactSupport.otherWays.hours.saturday')}<br />
                        {t('contactSupport.otherWays.hours.sunday')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

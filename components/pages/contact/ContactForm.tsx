"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventCategory, EventAction } from "@/lib/analytics";

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string({
    required_error: "Please select a subject",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Component to handle form parameters from URL
function ContactFormWithParams({ 
  onSubjectFound: setUrlSubject 
}: { 
  onSubjectFound: (subject: string | null) => void 
}) {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get subject from URL if available
    const subject = searchParams.get('subject');
    setUrlSubject(subject);
  }, [searchParams, setUrlSubject]);
  
  return null;
}

export default function ContactForm() {
  const [urlSubject, setUrlSubject] = useState<string | null>(null);
  
  return (
    <>
      <Suspense fallback={null}>
        <ContactFormWithParams onSubjectFound={setUrlSubject} />
      </Suspense>
      <ContactFormContent initialSubject={urlSubject} />
    </>
  );
}

function ContactFormContent({ initialSubject }: { initialSubject: string | null }) {
  const { t } = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Initialize analytics tracking
  const { trackEvent, trackFormSubmission } = useAnalytics();
  
  // List of valid subjects for validation
  const validSubjects = [
    "Support", 
    "Commercial", 
    "Partnership", 
    "Investment", 
    "Ambassadors", 
    "Feedback", 
    "Careers", 
    "VIP",
    "Grants"
  ];
  
  // Format the URL subject to match our options (capitalize first letter, handle URL encoding)
  const formattedUrlSubject = initialSubject ? 
    decodeURIComponent(initialSubject.replace(/%20/g, ' '))
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ') : "";
      
  // Map common inquiry types to our valid subjects
  const subjectMapping: Record<string, string> = {
    // Subject mappings
    "partnership inquiry": "Partnership",
    "partnership": "Partnership",
    "commercial": "Commercial",
    "support": "Support",
    "investment": "Investment",
    "ambassadors": "Ambassadors",
    "feedback": "Feedback",
    "careers": "Careers",
    "vip": "VIP",
    "grants": "Grants",
    "grant inquiry": "Grants"
  };
  
  // Handle dynamic subjects that contain variable parts
  if (formattedUrlSubject.toLowerCase().includes('grant inquiry:')) {
    subjectMapping[formattedUrlSubject.toLowerCase()] = "Grant Inquiry";
  }
  
  if (formattedUrlSubject.toLowerCase().includes('solutions') && 
      !formattedUrlSubject.toLowerCase().includes('industry solutions')) {
    subjectMapping[formattedUrlSubject.toLowerCase()] = "Industry Solutions";
  }
  
  // Check if the formatted subject is in our mapping or valid subjects list
  const mappedSubject = subjectMapping[formattedUrlSubject.toLowerCase()] || "";
  const derivedSubject = mappedSubject || (validSubjects.includes(formattedUrlSubject) ? formattedUrlSubject : "");
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: derivedSubject,
      message: "",
    },
  });
  
  // Update form values when URL parameters change
  useEffect(() => {
    if (derivedSubject && !form.getValues('subject')) {
      form.setValue('subject', derivedSubject);
    }
  }, [derivedSubject, form]);

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Track form submission attempt
    trackEvent(EventCategory.FORM, EventAction.FORM_SUBMIT, 'contact_form', {
      subject: values.subject
    });
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject || 'General Inquiry',
          message: values.message,
          company: values.company || '',
          phone: values.phone || '',
          emailSubject: `New Contact Form Submission: ${values.subject || 'General Inquiry'}`
        }),
      });
      
      // Only try to parse JSON if the response is ok
      if (!response.ok) {
        // Get status text as fallback error message
        const errorMessage = `Error ${response.status}: ${response.statusText}`;
        console.error('API error:', errorMessage);
        throw new Error('Failed to send message. Server returned an error.');
      }
      
      // Now safely parse the JSON
      const data = await response.json();
      
      // Success - track successful submission
      trackFormSubmission('contact_form', true);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      // Track failed submission
      trackFormSubmission('contact_form', false, (error as Error).message);
      // You could add toast notifications here for error handling
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm animate-fade-in">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-300" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">{t('form.successMessage', { defaultValue: 'Thank you!' })}</h2>
          <p className="mt-2 text-muted-foreground">
            {t('form.successDescription', { defaultValue: 'Your message has been received. We\'ll get back to you as soon as possible.' })}
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              // Track button click
              trackEvent(EventCategory.ENGAGEMENT, EventAction.CLICK, 'send_another_message');
            }}
            className="mt-6"
          >
            {t('form.sendAnother', { defaultValue: 'Send another message' })}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{t('form.title', { defaultValue: 'Get in Touch' })}</h2>
      <p className="text-muted-foreground mb-6">{t('form.description', { defaultValue: 'Fill out the form below and we\'ll get back to you as soon as possible.' })}</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.nameLabel', { defaultValue: 'Your Name' })}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.namePlaceholder', { defaultValue: 'Enter your full name' })} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.emailLabel', { defaultValue: 'Email Address' })}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.emailPlaceholder', { defaultValue: 'Enter your email address' })} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.companyLabel', { defaultValue: 'Company (Optional)' })}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.companyPlaceholder', { defaultValue: 'Enter your company name' })} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.phoneLabel', { defaultValue: 'Phone Number (Optional)' })}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.phonePlaceholder', { defaultValue: 'Enter your phone number' })} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.subjectLabel', { defaultValue: 'Subject' })}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || derivedSubject}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('form.subjectPlaceholder', { defaultValue: 'What is this regarding?' })} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Support">Support</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="Investment">Investment</SelectItem>
                    <SelectItem value="Ambassadors">Ambassadors</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                    <SelectItem value="Careers">Careers</SelectItem>
                    <SelectItem value="VIP">VIP</SelectItem>
                    <SelectItem value="Grants">Grants</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.messageLabel', { defaultValue: 'Your Message' })}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t('form.messagePlaceholder', { defaultValue: 'Tell us about your project or inquiry' })} 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t('form.sending', { defaultValue: 'Sending...' }) : t('form.submitButton', { defaultValue: 'Send Message' })}
          </Button>
        </form>
      </Form>
    </div>
  );
}

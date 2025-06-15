"use client";

// Imports
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventCategory, EventAction } from "@/lib/analytics";
import { useTranslations } from "@/hooks/useTranslations";

// UI Components
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Progress } from "@/components/ui/progress";

// Icons
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Loader2, 
  Send,
  Briefcase,
  Users,
  Target,
  Clock,
  CreditCard
} from "lucide-react";

// Define type for translation function
type TranslationFunction = (key: string, params?: Record<string, unknown>) => string;

// Email sending interface
interface EmailData {
  to: string;
  subject: string;
  body: string;
}

// Form Validation Schemas - using function to access translations
export const getProjectTypeSchema = (t: TranslationFunction) => z.object({
  projectType: z.string().min(1, {
    message: t('form.projectType.validation.required'),
  }),
});

export const getProjectDetailsSchema = (t: TranslationFunction) => z.object({
  projectName: z.string().min(2, {
    message: t('form.projectDetails.projectName.validation.minLength'),
  }),
  projectDescription: z.string().min(10, {
    message: t('form.projectDetails.projectDescription.validation.minLength'),
  }),
  targetAudience: z.string().min(5, {
    message: t('form.projectDetails.targetAudience.validation.minLength'),
  }),
});

export const getTimelineSchema = (t: TranslationFunction) => z.object({
  startDate: z.string().min(1, {
    message: t('form.timeline.startDate.validation.required'),
  }),
  deadline: z.string().optional(),
  flexibility: z.enum(["strict", "moderate", "flexible"]),
});

export const getBudgetSchema = (t: TranslationFunction) => z.object({
  budgetRange: z.string().min(1, {
    message: t('form.budget.budgetRange.validation.required'),
  }),
  budgetAmount: z.coerce.number().min(0, {
    message: t('form.budget.budgetAmount.validation.positive')
  }).optional(),
  paymentPreference: z.enum(["milestone", "monthly", "completion"], {
    required_error: t('form.budget.paymentPreference.validation.required'),
  }),
});

export const getContactSchema = (t: TranslationFunction) => z.object({
  name: z.string().min(2, {
    message: t('form.contact.name.validation.minLength'),
  }),
  email: z.string().email({
    message: t('form.contact.email.validation.format'),
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
});

// Define the form step interface
interface FormStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Define the steps function that uses translations
const getFormSteps = (t: TranslationFunction): FormStep[] => [
  { 
    id: "project-type", 
    title: t('form.steps.0.title'), 
    description: t('form.steps.0.description'),
    icon: <Briefcase className="h-5 w-5" />
  },
  { 
    id: "project-details", 
    title: t('form.steps.1.title'), 
    description: t('form.steps.1.description'),
    icon: <Target className="h-5 w-5" />
  },
  { 
    id: "timeline", 
    title: t('form.steps.2.title'), 
    description: t('form.steps.2.description'),
    icon: <Clock className="h-5 w-5" />
  },
  { 
    id: "budget", 
    title: t('form.steps.3.title'), 
    description: t('form.steps.3.description'),
    icon: <CreditCard className="h-5 w-5" />
  },
  { 
    id: "contact", 
    title: t('form.steps.4.title'), 
    description: t('form.steps.4.description'),
    icon: <Users className="h-5 w-5" />
  },
  { 
    id: "summary", 
    title: t('form.steps.5.title'), 
    description: t('form.steps.5.description'),
    icon: <Check className="h-5 w-5" />
  }
];

// Define an interface for the form data
interface FormData {
  projectType: string;
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  startDate: string;
  deadline: string;
  flexibility: "strict" | "moderate" | "flexible";
  budgetRange: string;
  budgetAmount?: number; // Optional, as per schema
  paymentPreference: "milestone" | "monthly" | "completion";
  name: string;
  email: string;
  company?: string; // Optional
  phone?: string;   // Optional
}

export default function ProjectForm() {
  const { t } = useTranslations('digital-project');
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { trackEvent, trackFormSubmission } = useAnalytics();
  const formSteps = getFormSteps(t);
  const [formData, setFormData] = useState<FormData>({
    // Initial form data state using the FormData interface
    projectType: "",
    projectName: "",
    projectDescription: "",
    targetAudience: "",
    startDate: "",
    deadline: "",
    flexibility: "moderate",
    budgetRange: "",
    paymentPreference: "milestone",
    name: "",
    email: "",
    company: "",
    phone: "",
    budgetAmount: undefined // Ensure optional fields are explicitly handled if needed
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Create schema instances with translations
  const projectTypeSchema = getProjectTypeSchema(t);
  const projectDetailsSchema = getProjectDetailsSchema(t);
  const timelineSchema = getTimelineSchema(t);
  const budgetSchema = getBudgetSchema(t);
  const contactSchema = getContactSchema(t);

  // Create form instances for each step
  const projectTypeForm = useForm<z.infer<typeof projectTypeSchema>>({
    resolver: zodResolver(projectTypeSchema),
    defaultValues: {
      projectType: formData.projectType,
    },
  });

  const projectDetailsForm = useForm<z.infer<typeof projectDetailsSchema>>({
    resolver: zodResolver(projectDetailsSchema),
    defaultValues: {
      projectName: formData.projectName,
      projectDescription: formData.projectDescription,
      targetAudience: formData.targetAudience,
    },
  });

  const timelineForm = useForm<z.infer<typeof timelineSchema>>({
    resolver: zodResolver(timelineSchema),
    defaultValues: {
      startDate: formData.startDate,
      deadline: formData.deadline,
      flexibility: formData.flexibility,
    },
  });

  const budgetForm = useForm<z.infer<typeof budgetSchema>>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      budgetRange: formData.budgetRange,
      budgetAmount: formData.budgetAmount,
      paymentPreference: formData.paymentPreference,
    },
  });

  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    },
  });
  
  // Initialize forms with formData values
  useEffect(() => {
    console.log('FormData changed, resetting forms:', formData);
    
    // Only reset the form if we're not on the summary step
    if (currentStep < 5) {
      projectTypeForm.reset({ projectType: formData.projectType });
      projectDetailsForm.reset({
        projectName: formData.projectName,
        projectDescription: formData.projectDescription,
        targetAudience: formData.targetAudience,
      });
      timelineForm.reset({
        startDate: formData.startDate,
        deadline: formData.deadline,
        flexibility: formData.flexibility as "strict" | "moderate" | "flexible",
      });
      budgetForm.reset({
        budgetRange: formData.budgetRange,
        paymentPreference: formData.paymentPreference as "milestone" | "monthly" | "completion",
        budgetAmount: formData.budgetAmount,
      });
      contactForm.reset({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
      });
    }
  }, [currentStep]);  // Only reset forms when step changes, not when formData changes

  // Helper function to update form data and return a promise that resolves when state is updated
  const handleFormDataUpdate = (newData: Partial<FormData>): Promise<void> => {
    return new Promise((resolve) => {
      setFormData((prevState: FormData) => {
        const updatedData = { ...prevState, ...newData };
        console.log('Form data updated:', updatedData);
        // Use setTimeout to ensure the state update completes before resolving
        setTimeout(() => resolve(), 0);
        return updatedData;
      });
    });
  };

  const handleProjectTypeSubmit = async (data: z.infer<typeof projectTypeSchema>) => {
    await handleFormDataUpdate({ projectType: data.projectType });
    trackEvent(EventCategory.FORM, EventAction.FORM_FIELD_CHANGE, 'project_type_selection', { project_type: data.projectType });
    nextStep();
  };
  
  const handleProjectDetailsSubmit = async (data: z.infer<typeof projectDetailsSchema>) => {
    await handleFormDataUpdate({
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      targetAudience: data.targetAudience
    });
    nextStep();
  };

  const onTimelineSubmit = async (data: z.infer<typeof timelineSchema>) => {
    await handleFormDataUpdate({
      startDate: data.startDate,
      deadline: data.deadline || '',
      flexibility: data.flexibility
    });
    nextStep();
  };
  
  const onBudgetSubmit = async (data: z.infer<typeof budgetSchema>) => {
    await handleFormDataUpdate({
      budgetRange: data.budgetRange,
      paymentPreference: data.paymentPreference,
      budgetAmount: data.budgetAmount
    });
    nextStep();
  };

  const onContactSubmit = async (data: z.infer<typeof contactSchema>) => {
    await handleFormDataUpdate({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone
    });
    nextStep();
  };
  
  // Helper to get the current form based on the step
  const getCurrentForm = () => {
    switch (currentStep) {
      case 0:
        return projectTypeForm;
      case 1:
        return projectDetailsForm;
      case 2:
        return timelineForm;
      case 3:
        return budgetForm;
      case 4:
        return contactForm;
      default:
        return null;
    }
  };
  
  // Handle navigation between steps
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };
  
  // Validate the current step before proceeding
  const nextStep = async () => {
    // Trigger validation on the current step's form
    const currentForm = getCurrentForm();
    if (currentForm) {
      const isValid = await currentForm.trigger();
      console.log(`Step ${currentStep} validation:`, isValid);
      
      if (isValid) {
        // Only proceed if validation passes
        if (currentStep === 0) {
          const data = projectTypeForm.getValues();
          await handleFormDataUpdate({
            projectType: data.projectType
          });
        } else if (currentStep === 1) {
          const data = projectDetailsForm.getValues();
          await handleFormDataUpdate({
            projectName: data.projectName,
            projectDescription: data.projectDescription,
            targetAudience: data.targetAudience
          });
        } else if (currentStep === 2) {
          const data = timelineForm.getValues();
          await handleFormDataUpdate({
            startDate: data.startDate,
            deadline: data.deadline || '',
            flexibility: data.flexibility
          });
        } else if (currentStep === 3) {
          const data = budgetForm.getValues();
          await handleFormDataUpdate({
            budgetRange: data.budgetRange,
            budgetAmount: data.budgetAmount,
            paymentPreference: data.paymentPreference
          });
        } else if (currentStep === 4) {
          const data = contactForm.getValues();
          await handleFormDataUpdate({
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone
          });
        }
        
        // Move to next step after data is updated
        setCurrentStep(prev => Math.min(prev + 1, formSteps.length - 1));
        
        // Track step progression
        trackEvent(EventCategory.FORM, EventAction.CLICK, `form_step_completed_${formSteps[currentStep]?.id || currentStep + 1}`);
        
        // Log current formData state for debugging
        console.log('Current formData after moving to next step:', formData);
      } else {
        console.log('Validation failed, staying on current step');
      }
    } else {
      // If no form to validate, just proceed
      setCurrentStep(prev => Math.min(prev + 1, formSteps.length - 1));
    }
  };
  
  // Format form data for email
  const formatEmailBody = (data: FormData): string => {
    return `
      <h2>Nouveau projet digital</h2>
      
      <h3>Informations du projet</h3>
      <p><strong>Type de projet:</strong> ${data.projectType === 'web' ? 'Site web' : 
                                      data.projectType === 'mobile' ? 'Application mobile' : 
                                      data.projectType === 'design' ? 'Design' : 
                                      data.projectType === 'consulting' ? 'Consulting' : 
                                      data.projectType || 'Non spécifié'}</p>
      <p><strong>Nom du projet:</strong> ${data.projectName || 'Non spécifié'}</p>
      <p><strong>Description:</strong> ${data.projectDescription || 'Non spécifié'}</p>
      <p><strong>Public cible:</strong> ${data.targetAudience || 'Non spécifié'}</p>
      
      <h3>Calendrier</h3>
      <p><strong>Date de début:</strong> ${data.startDate || 'Non spécifié'}</p>
      <p><strong>Date limite:</strong> ${data.deadline || 'Non spécifié'}</p>
      <p><strong>Flexibilité:</strong> ${data.flexibility === 'strict' ? 'Stricte' : 
                                     data.flexibility === 'moderate' ? 'Modérée' : 
                                     data.flexibility === 'flexible' ? 'Flexible' : 
                                     data.flexibility || 'Non spécifié'}</p>
      
      <h3>Budget</h3>
      <p><strong>Fourchette de budget:</strong> ${data.budgetRange === '0-1000' ? '0-1000€' : 
                                            data.budgetRange === '1000-5000' ? '1000-5000€' : 
                                            data.budgetRange === '5000-10000' ? '5000-10000€' : 
                                            data.budgetRange === '10000+' ? '10000€+' : 
                                            data.budgetRange || 'Non spécifié'}</p>
      <p><strong>Montant du budget:</strong> ${data.budgetAmount ? `${data.budgetAmount}€` : 'Non spécifié'}</p>
      <p><strong>Préférence de paiement:</strong> ${data.paymentPreference === 'milestone' ? 'Par étape' : 
                                              data.paymentPreference === 'monthly' ? 'Mensuel' : 
                                              data.paymentPreference === 'completion' ? 'À la fin du projet' : 
                                              data.paymentPreference || 'Non spécifié'}</p>
      
      <h3>Informations de contact</h3>
      <p><strong>Nom:</strong> ${data.name || 'Non spécifié'}</p>
      <p><strong>Email:</strong> ${data.email || 'Non spécifié'}</p>
      <p><strong>Entreprise:</strong> ${data.company || 'Non spécifié'}</p>
      <p><strong>Téléphone:</strong> ${data.phone || 'Non spécifié'}</p>
    `;
  };

  // Send email function
  const sendEmail = async (emailData: EmailData): Promise<boolean> => {
    try {
      // Convert our EmailData to the format expected by the send-email API
      const emailPayload = {
        name: formData.name,
        email: formData.email,
        subject: emailData.subject,
        message: emailData.body,
        phone: formData.phone || '',
        company: formData.company || '',
        service: formData.projectType || ''
      };
      
      console.log('Sending project form email:', emailPayload);
      
      // Use the existing send-email API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailPayload)
      });
      
      // Only try to parse JSON if the response is ok
      if (!response.ok) {
        // Get status text as fallback error message
        const errorMessage = `Error ${response.status}: ${response.statusText}`;
        console.error('API error:', errorMessage);
        throw new Error('Failed to send email. Server returned an error.');
      }
      
      // Now safely parse the JSON
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  // Submit the final form
  const submitForm = async () => {
    setIsSubmitting(true);
    
    // Track form submission attempt
    trackEvent(EventCategory.FORM, EventAction.FORM_SUBMIT, 'project_form', {
      project_type: formData.projectType,
      step_count: formSteps.length
    });
    
    try {
      // Prepare email data
      const emailData: EmailData = {
        to: 'commercial@pledgeandgrow.com',
        subject: `Nouveau projet digital: ${formData.projectName || 'Sans nom'}`,
        body: formatEmailBody(formData)
      };
      
      // Send email
      const success = await sendEmail(emailData);
      
      if (success) {
        setIsSubmitted(true);
        toast({
          title: t('form.submission.success.title'),
          description: t('form.submission.success.description'),
          action: (
            <ToastAction altText="OK">
              OK
            </ToastAction>
          ),
        });
        
        // Track successful submission
        trackEvent(EventCategory.FORM, EventAction.FORM_SUCCESS, 'project_form_success', {
          project_type: formData.projectType
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        variant: "destructive",
        title: t('form.submission.error.title'),
        description: t('form.submission.error.description'),
        action: (
          <ToastAction altText="Réessayer">
            Réessayer
          </ToastAction>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the form steps
  const renderFormStep = () => {
    switch (currentStep) {
      case 0: // Project Type
        return (
          <FormProvider {...projectTypeForm}>
            <form className="space-y-6">
              <FormField
                control={projectTypeForm.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.projectType.label')}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="web" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.projectType.options.web')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mobile" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.projectType.options.mobile')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="design" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.projectType.options.design')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="consulting" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.projectType.options.consulting')}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        );
      
      case 1: // Project Details
        return (
          <FormProvider {...projectDetailsForm}>
            <form className="space-y-6">
              <FormField
                control={projectDetailsForm.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.projectDetails.projectName.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('form.projectDetails.projectName.placeholder')} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={projectDetailsForm.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.projectDetails.projectDescription.label')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('form.projectDetails.projectDescription.placeholder')} 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={projectDetailsForm.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.projectDetails.targetAudience.label')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('form.projectDetails.targetAudience.placeholder')} 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        );
      
      case 2: // Timeline
        return (
          <FormProvider {...timelineForm}>
            <form className="space-y-6">
              <FormField
                control={timelineForm.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.timeline.startDate.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={timelineForm.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.timeline.deadline.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={timelineForm.control}
                name="flexibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.timeline.flexibility.label')}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="strict" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.timeline.flexibility.options.strict')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="moderate" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.timeline.flexibility.options.moderate')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="flexible" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.timeline.flexibility.options.flexible')}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        );
      
      case 3: // Budget
        return (
          <FormProvider {...budgetForm}>
            <form className="space-y-6">
              <FormField
                control={budgetForm.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.budget.budgetRange.label')}</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('form.budget.budgetRange.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1000">0 - 1,000€</SelectItem>
                          <SelectItem value="1000-5000">1,000€ - 5,000€</SelectItem>
                          <SelectItem value="5000-10000">5,000€ - 10,000€</SelectItem>
                          <SelectItem value="10000+">10,000€+</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={budgetForm.control}
                name="budgetAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.budget.budgetAmount.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder={t('form.budget.budgetAmount.placeholder')} 
                        {...field} 
                        value={field.value || ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? undefined : Number(e.target.value);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={budgetForm.control}
                name="paymentPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.budget.paymentPreference.label')}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="milestone" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.budget.paymentPreference.options.milestone')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="monthly" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.budget.paymentPreference.options.monthly')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="completion" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {t('form.budget.paymentPreference.options.completion')}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        );
      
      case 4: // Contact
        return (
          <FormProvider {...contactForm}>
            <form className="space-y-6">
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.contact.name.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('form.contact.name.placeholder')} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.contact.email.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder={t('form.contact.email.placeholder')} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={contactForm.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.contact.company.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('form.contact.company.placeholder')} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={contactForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">{t('form.contact.phone.label')}</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder={t('form.contact.phone.placeholder')} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </FormProvider>
        );
      
      case 5: // Summary
        return (
          <>
            <div className="flex justify-between mt-8">
              {!isSubmitted && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t('form.navigation.back')}
                </Button>
              )}
              
              {!isSubmitted ? (
                <Button
                  type="button"
                  onClick={submitForm}
                  className="flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('form.navigation.submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t('form.navigation.submit')}
                    </>
                  )}
                </Button>
              ) : (
                <div className="w-full flex flex-col items-center justify-center space-y-4">
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg w-full text-center">
                    <div className="flex justify-center mb-2">
                      <Check className="h-8 w-8 text-green-500 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                      {t('form.submission.success.title')}
                    </h3>
                    <p className="text-green-700 dark:text-green-300 mt-1">
                      {t('form.submission.success.description')}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="flex items-center gap-2"
                  >
                    {t('form.navigation.returnHome')}
                  </Button>
                </div>
              )}
            </div>
      
            <div className="space-y-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">{t('form.summary.projectInformation.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.projectInformation.projectType')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.projectType === 'web' ? t('form.projectType.options.web') : 
                       formData.projectType === 'mobile' ? t('form.projectType.options.mobile') : 
                       formData.projectType === 'design' ? t('form.projectType.options.design') : 
                       formData.projectType === 'consulting' ? t('form.projectType.options.consulting') : 
                       formData.projectType || t('form.summary.notSpecified')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.projectInformation.projectName')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{formData.projectName || t('form.summary.notSpecified')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.projectInformation.projectDescription')}</h4>
                    <p className="text-base text-gray-900 dark:text-white">{formData.projectDescription || t('form.summary.notSpecified')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.projectInformation.targetAudience')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{formData.targetAudience || t('form.summary.notSpecified')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">{t('form.summary.timeline.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.timeline.startDate')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{formData.startDate || t('form.summary.notSpecified')}</p>
                  </div>
                  {formData.deadline && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.timeline.deadline')}</h4>
                      <p className="text-base font-medium text-gray-900 dark:text-white">{formData.deadline}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.timeline.flexibility')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.flexibility === 'strict' ? t('form.timeline.flexibility.options.strict') :
                       formData.flexibility === 'moderate' ? t('form.timeline.flexibility.options.moderate') :
                       formData.flexibility === 'flexible' ? t('form.timeline.flexibility.options.flexible') :
                       formData.flexibility || t('form.summary.notSpecified')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">{t('form.summary.budget.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.budget.budgetRange')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.budgetRange === '0-1000' ? t('form.budget.budgetRange.options.small') :
                       formData.budgetRange === '1000-5000' ? t('form.budget.budgetRange.options.medium') :
                       formData.budgetRange === '5000-10000' ? t('form.budget.budgetRange.options.large') :
                       formData.budgetRange === '10000+' ? t('form.budget.budgetRange.options.enterprise') :
                       formData.budgetRange || t('form.summary.notSpecified')}
                    </p>
                  </div>
                  {formData.budgetAmount && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.budget.budgetAmount')}</h4>
                      <p className="text-base font-medium text-gray-900 dark:text-white">${formData.budgetAmount}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.budget.paymentPreference')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      {formData.paymentPreference === 'milestone' ? t('form.budget.paymentPreference.options.milestone') :
                       formData.paymentPreference === 'monthly' ? t('form.budget.paymentPreference.options.monthly') :
                       formData.paymentPreference === 'completion' ? t('form.budget.paymentPreference.options.completion') :
                       formData.paymentPreference || t('form.summary.notSpecified')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">{t('form.summary.contactInformation.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.contactInformation.name')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{formData.name || t('form.summary.notSpecified')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.contactInformation.email')}</h4>
                    <p className="text-base font-medium text-gray-900 dark:text-white">{formData.email || t('form.summary.notSpecified')}</p>
                  </div>
                  {formData.company && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.contactInformation.company')}</h4>
                      <p className="text-base font-medium text-gray-900 dark:text-white">{formData.company}</p>
                    </div>
                  )}
                  {formData.phone && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('form.summary.contactInformation.phone')}</h4>
                      <p className="text-base font-medium text-gray-900 dark:text-white">{formData.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {t('title')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t('description')}
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="mb-8">
        <Progress value={(currentStep / (formSteps.length - 1)) * 100} />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t('form.progress.step')} {currentStep + 1} {t('form.progress.of')} {formSteps.length}
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {formSteps[currentStep]?.title}
          </span>
        </div>
      </div>
      
      {/* Current step */}
      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderFormStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

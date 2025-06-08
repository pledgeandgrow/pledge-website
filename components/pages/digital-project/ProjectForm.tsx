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
  
  // Reset forms when formData changes
  useEffect(() => {
    console.log('FormData changed, resetting forms:', formData);
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
  }, [formData, projectTypeForm, projectDetailsForm, timelineForm, budgetForm, contactForm]);

  const handleProjectTypeSubmit = (data: z.infer<typeof projectTypeSchema>) => {
    setFormData((prevState: FormData) => ({ 
      ...prevState, 
      projectType: data.projectType 
    }));
    trackEvent(EventCategory.FORM, EventAction.FORM_FIELD_CHANGE, 'project_type_selection', { project_type: data.projectType });
    console.log('Project Type submitted:', data.projectType, formData);
    nextStep();
  };
  
  const handleProjectDetailsSubmit = (data: z.infer<typeof projectDetailsSchema>) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      targetAudience: data.targetAudience
    }));
    console.log('Project Details submitted:', data, formData);
    nextStep();
  };

  const onTimelineSubmit = (data: z.infer<typeof timelineSchema>) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      startDate: data.startDate,
      deadline: data.deadline || '',
      flexibility: data.flexibility
    }));
    console.log('Timeline submitted:', data, formData);
    nextStep();
  };
  
  const onBudgetSubmit = (data: z.infer<typeof budgetSchema>) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      budgetRange: data.budgetRange,
      paymentPreference: data.paymentPreference,
      budgetAmount: data.budgetAmount
    }));
    console.log('Budget submitted:', data, formData);
    nextStep();
  };

  const onContactSubmit = (data: z.infer<typeof contactSchema>) => {
    setFormData((prevState: FormData) => ({
      ...prevState,
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone
    }));
    console.log('Contact submitted:', data, formData);
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
        setCurrentStep(prev => Math.min(prev + 1, formSteps.length - 1));
        // Track step progression
        trackEvent(EventCategory.FORM, EventAction.CLICK, `form_step_completed_${formSteps[currentStep]?.id || currentStep + 1}`);
        
        // Log current formData state for debugging
        console.log('Current formData after validation:', formData);
      } else {
        console.log('Validation failed, staying on current step');
      }
    } else {
      // If no form to validate, just proceed
      setCurrentStep(prev => Math.min(prev + 1, formSteps.length - 1));
    }
  };
  
  const submitForm = async () => {
    setIsSubmitting(true);
    
    // Track form submission attempt
    trackEvent(EventCategory.FORM, EventAction.FORM_SUBMIT, 'project_form', {
      project_type: formData.projectType,
      step_count: formSteps.length
    });
    
    try {
      // Send email via API route
      const response = await fetch('/api/send-project-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Track successful submission
        trackFormSubmission('project_form', true);
        toast({
          title: t('form.toast.success.title'),
          description: t('form.toast.success.description'),
          variant: 'default',
        });
      } else {
        // Track failed submission
        trackFormSubmission('project_form', false, 'API returned error');
        toast({
          title: t('form.toast.error.title'),
          description: t('form.toast.error.description'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Track error
      trackFormSubmission('project_form', false, (error as Error).message || 'Unknown error');
      toast({
        title: t('form.toast.error.title'),
        description: t('form.toast.error.unexpectedDescription'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Calculate progress percentage
  const progress = ((currentStep) / (formSteps.length - 1)) * 100;
  
  return (
    <section id="project-form" className="py-10 md:py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">{t('form.heading')}</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t('form.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-6 md:mb-8">
            <Progress value={progress} className="h-2" />
            {isMobile ? (
              <div className="flex justify-between mt-2">
                <div className="flex items-center text-primary">
                  {formSteps[currentStep].icon}
                  <span className="text-xs ml-1">{formSteps[currentStep].title}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t('form.progress', { current: currentStep + 1, total: formSteps.length })}
                </span>
              </div>
            ) : (
              <div className="flex justify-between mt-2">
                {formSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}
                  >
                    {step.icon}
                    <span className="text-xs mt-1">{step.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Card className="w-full">
            <CardHeader className="px-4 md:px-6 py-4 md:py-6">
              <CardTitle className="text-xl md:text-2xl">{formSteps[currentStep].title}</CardTitle>
              <CardDescription className="text-sm md:text-base">{formSteps[currentStep].description}</CardDescription>
            </CardHeader>

            <CardContent className="px-4 md:px-6 py-2 md:py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 0 && (
                    <FormProvider {...projectTypeForm}>
                      <form 
                        onSubmit={projectTypeForm.handleSubmit(handleProjectTypeSubmit)} 
                        className="space-y-6"
                        onFocus={() => trackEvent(EventCategory.FORM, EventAction.FORM_START, 'project_form')}
                      >
                        <FormField
                          control={projectTypeForm.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm md:text-base">{t('form.projectType.label')}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={t('form.projectType.placeholder')} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web">{t('form.projectType.options.web')}</SelectItem>
                                  <SelectItem value="mobile">{t('form.projectType.options.mobile')}</SelectItem>
                                  <SelectItem value="design">{t('form.projectType.options.design')}</SelectItem>
                                  <SelectItem value="consulting">{t('form.projectType.options.consulting')}</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </FormProvider>
                  )}

                  {currentStep === 1 && (
                    <FormProvider {...projectDetailsForm}>
                      <form onSubmit={projectDetailsForm.handleSubmit(handleProjectDetailsSubmit)} className="space-y-6">
                        <div className="grid gap-4">
                          <FormField
                            control={projectDetailsForm.control}
                            name="projectName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base">{t('form.projectDetails.projectName.label')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('form.projectDetails.projectName.placeholder')} {...field} />
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
                                  <Textarea placeholder={t('form.projectDetails.projectDescription.placeholder')} {...field} />
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
                                  <Input placeholder={t('form.projectDetails.targetAudience.placeholder')} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                      </form>
                    </FormProvider>
                  )}

                  {currentStep === 2 && (
                    <FormProvider {...timelineForm}>
                      <form onSubmit={timelineForm.handleSubmit(onTimelineSubmit)} className="space-y-6">
                        <div className="grid gap-4">
                          <FormField
                            control={timelineForm.control}
                            name="startDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base">{t('form.timeline.startDate.label')}</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} className="w-full" />
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
                                  <Input type="date" {...field} className="w-full" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={timelineForm.control}
                            name="flexibility"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-sm md:text-base">{t('form.timeline.flexibility.label')}</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="strict" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.timeline.flexibility.options.strict')}
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="moderate" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.timeline.flexibility.options.moderate')}
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="flexible" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.timeline.flexibility.options.flexible')}
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                      </form>
                    </FormProvider>
                  )}

                  {currentStep === 3 && (
                    <FormProvider {...budgetForm}>
                      <form onSubmit={budgetForm.handleSubmit(onBudgetSubmit)} className="space-y-6">
                        <div className="grid gap-4">
                          <FormField
                            control={budgetForm.control}
                            name="budgetRange"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base">{t('form.budget.budgetRange.label')}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder={t('form.budget.budgetRange.placeholder')} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0-1000">{t('form.budget.budgetRange.options.small')}</SelectItem>
                                    <SelectItem value="1000-5000">{t('form.budget.budgetRange.options.medium')}</SelectItem>
                                    <SelectItem value="5000-10000">{t('form.budget.budgetRange.options.large')}</SelectItem>
                                    <SelectItem value="10000+">{t('form.budget.budgetRange.options.enterprise')}</SelectItem>
                                  </SelectContent>
                                </Select>
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
                                    min="0" 
                                    step="100" 
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
                              <FormItem className="space-y-3">
                                <FormLabel className="text-sm md:text-base">{t('form.budget.paymentPreference.label')}</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="milestone" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.budget.paymentPreference.options.milestone')}
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="monthly" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.budget.paymentPreference.options.monthly')}
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="completion" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {t('form.budget.paymentPreference.options.completion')}
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </form>
                    </FormProvider>
                  )}

                  {currentStep === 4 && (
                    <FormProvider {...contactForm}>
                      <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                        <div className="grid gap-4">
                          <FormField
                            control={contactForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm md:text-base">{t('form.contact.name.label')}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t('form.contact.name.placeholder')} {...field} />
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
                        </div>
                      </form>
                    </FormProvider>
                  )}

                  {currentStep === 5 && (
  <div className="space-y-6">
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
)}
                </motion.div>
              </AnimatePresence>
            </CardContent>

            <CardFooter className="flex justify-between px-4 md:px-6 py-4 md:py-6 flex-wrap gap-2">
              {currentStep > 0 && (
                <Button
                  type="button"
                  onClick={() => {
                    trackEvent(EventCategory.NAVIGATION, EventAction.CLICK, 'project_form_previous');
                    prevStep();
                  }} 
                  className={isMobile ? "text-sm py-2 h-9" : ""}
                  size={isMobile ? "sm" : "default"}
                >
                  <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" /> {isMobile ? t('form.buttons.back') : t('form.buttons.previous')}
                </Button>
              )}

              {currentStep < formSteps.length - 1 ? (
                <Button 
                  type="button" 
                  onClick={() => {
                    trackEvent(EventCategory.NAVIGATION, EventAction.CLICK, 'project_form_next', {
                      current_step: formSteps[currentStep].id
                    });
                    nextStep();
                  }} 
                  className={`${currentStep > 0 ? "ml-auto" : "w-full md:w-auto"} ${isMobile ? "text-sm py-2 h-9" : ""}`}
                  size={isMobile ? "sm" : "default"}
                >
                  {t('form.buttons.next')} <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={() => {
                    trackEvent(EventCategory.CONVERSION, EventAction.CLICK, 'project_form_submit');
                    submitForm();
                  }} 
                  disabled={isSubmitting} 
                  className={`${currentStep > 0 ? "ml-auto" : "w-full md:w-auto"} ${isMobile ? "text-sm py-2 h-9" : ""}`}
                  size={isMobile ? "sm" : "default"}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                      {isMobile ? t('form.buttons.sending') : t('form.buttons.submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      {isMobile ? t('form.buttons.submit') : t('form.buttons.submitProject')}
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

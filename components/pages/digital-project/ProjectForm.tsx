"use client";

// Imports
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventCategory, EventAction } from "@/lib/analytics";

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

// Form Validation Schemas
export const projectTypeSchema = z.object({
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
});

export const projectDetailsSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  projectDescription: z.string().min(10, {
    message: "Project description must be at least 10 characters.",
  }),
  targetAudience: z.string().min(5, {
    message: "Target audience must be at least 5 characters.",
  }),
});

export const timelineSchema = z.object({
  startDate: z.string().min(1, {
    message: "Please select a start date.",
  }),
  deadline: z.string().optional(),
  flexibility: z.enum(["strict", "moderate", "flexible"]),
});

export const budgetSchema = z.object({
  budgetRange: z.string().min(1, {
    message: "Please select a budget range.",
  }),
  budgetAmount: z.coerce.number().min(0, {
    message: "Budget amount must be a positive number."
  }).optional(),
  paymentPreference: z.enum(["milestone", "monthly", "completion"], {
    required_error: "Please select a payment preference.",
  }),
});

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
});

// Define the steps
const formSteps = [
  { 
    id: "project-type", 
    title: "Project Type", 
    description: "Select the type of project you want to create",
    icon: <Briefcase className="h-5 w-5" />
  },
  { 
    id: "project-details", 
    title: "Project Details", 
    description: "Tell us more about your project",
    icon: <Target className="h-5 w-5" />
  },
  { 
    id: "timeline", 
    title: "Timeline", 
    description: "When do you need your project completed?",
    icon: <Clock className="h-5 w-5" />
  },
  { 
    id: "budget", 
    title: "Budget", 
    description: "What's your budget for this project?",
    icon: <CreditCard className="h-5 w-5" />
  },
  { 
    id: "contact", 
    title: "Contact Information", 
    description: "How can we reach you?",
    icon: <Users className="h-5 w-5" />
  },
  { 
    id: "summary", 
    title: "Summary", 
    description: "Review your project details",
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
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { trackEvent, trackFormSubmission } = useAnalytics();
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
      flexibility: formData.flexibility as "strict" | "moderate" | "flexible",
    },
  });
  
  const budgetForm = useForm<z.infer<typeof budgetSchema>>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      budgetRange: formData.budgetRange,
      paymentPreference: formData.paymentPreference as "milestone" | "monthly" | "completion",
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
          title: 'Project Submitted',
          description: 'Your project details have been received and sent to our team.',
          variant: 'default',
        });
      } else {
        // Track failed submission
        trackFormSubmission('project_form', false, 'API returned error');
        toast({
          title: 'Submission Error',
          description: 'There was an issue submitting your project. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Track error
      trackFormSubmission('project_form', false, (error as Error).message || 'Unknown error');
      toast({
        title: 'Submission Error',
        description: 'An unexpected error occurred. Please try again.',
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Start Your Project</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Fill out this form to help us understand your project needs and provide you with an accurate estimate.
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
                  Step {currentStep + 1} of {formSteps.length}
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
                              <FormLabel className="text-sm md:text-base">Project Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="web">Web Development</SelectItem>
                                  <SelectItem value="mobile">Mobile App</SelectItem>
                                  <SelectItem value="design">Design Project</SelectItem>
                                  <SelectItem value="consulting">Consulting</SelectItem>
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
                                <FormLabel className="text-sm md:text-base">Project Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter project name" {...field} />
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
                                <FormLabel className="text-sm md:text-base">Project Description</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Describe your project in detail" {...field} />
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
                                <FormLabel className="text-sm md:text-base">Target Audience</FormLabel>
                                <FormControl>
                                  <Input placeholder="Who is this project for?" {...field} />
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
                                <FormLabel className="text-sm md:text-base">Start Date</FormLabel>
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
                                <FormLabel className="text-sm md:text-base">Deadline (Optional)</FormLabel>
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
                                <FormLabel className="text-sm md:text-base">Timeline Flexibility</FormLabel>
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
                                        Strict - Must be completed by deadline
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="moderate" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Moderate - Some flexibility allowed
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="flexible" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Flexible - Open to adjusting timeline
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
                                <FormLabel className="text-sm md:text-base">Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                    <SelectItem value="10000+">$10,000+</SelectItem>
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
                                <FormLabel className="text-sm md:text-base">Specific Budget Amount (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    placeholder="Enter your exact budget" 
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
                                <FormLabel className="text-sm md:text-base">Payment Preference</FormLabel>
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
                                        Milestone - Payment upon completing specific project stages
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="monthly" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Monthly - Consistent monthly payments
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="completion" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Completion - Full payment upon project completion
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
                                <FormLabel className="text-sm md:text-base">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your full name" {...field} />
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
                                <FormLabel className="text-sm md:text-base">Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="Enter your email address" 
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
                                <FormLabel className="text-sm md:text-base">Company (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Enter your company name" 
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
                                <FormLabel className="text-sm md:text-base">Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="tel" 
                                    placeholder="Enter your phone number" 
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
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Project Information</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Type</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">
            {formData.projectType === 'web' ? 'Web Development' : 
             formData.projectType === 'mobile' ? 'Mobile App' : 
             formData.projectType === 'design' ? 'Design Project' : 
             formData.projectType === 'consulting' ? 'Consulting' : 
             formData.projectType || 'Not specified'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Name</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">{formData.projectName || 'Not specified'}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Description</h4>
          <p className="text-base text-gray-900 dark:text-white">{formData.projectDescription || 'Not specified'}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Target Audience</h4>
          <p className="text-base text-gray-900 dark:text-white">{formData.targetAudience || 'Not specified'}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Timeline</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Start Date</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">{formData.startDate || 'Not specified'}</p>
        </div>
        {formData.deadline && (
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Deadline</h4>
            <p className="text-base font-medium text-gray-900 dark:text-white">{formData.deadline}</p>
          </div>
        )}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Flexibility</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">
            {formData.flexibility === 'strict' ? 'Strict - Must be completed by deadline' :
             formData.flexibility === 'moderate' ? 'Moderate - Some flexibility allowed' :
             formData.flexibility === 'flexible' ? 'Flexible - Open to adjusting timeline' :
             formData.flexibility || 'Not specified'}
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Budget</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget Range</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">
            {formData.budgetRange === '0-1000' ? '$0 - $1,000' :
             formData.budgetRange === '1000-5000' ? '$1,000 - $5,000' :
             formData.budgetRange === '5000-10000' ? '$5,000 - $10,000' :
             formData.budgetRange === '10000+' ? '$10,000+' :
             formData.budgetRange || 'Not specified'}
          </p>
        </div>
        {formData.budgetAmount && (
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Specific Budget Amount</h4>
            <p className="text-base font-medium text-gray-900 dark:text-white">${formData.budgetAmount}</p>
          </div>
        )}
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Payment Preference</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">
            {formData.paymentPreference === 'milestone' ? 'Milestone - Payment upon completing specific project stages' :
             formData.paymentPreference === 'monthly' ? 'Monthly - Consistent monthly payments' :
             formData.paymentPreference === 'completion' ? 'Completion - Full payment upon project completion' :
             formData.paymentPreference || 'Not specified'}
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Contact Information</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">{formData.name || 'Not specified'}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
          <p className="text-base font-medium text-gray-900 dark:text-white">{formData.email || 'Not specified'}</p>
        </div>
        {formData.company && (
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</h4>
            <p className="text-base font-medium text-gray-900 dark:text-white">{formData.company}</p>
          </div>
        )}
        {formData.phone && (
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
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
                  <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" /> {isMobile ? "Back" : "Previous"}
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
                  Next <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
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
                      {isMobile ? "Sending..." : "Submitting..."}
                    </>
                  ) : (
                    <>
                      <Send className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      {isMobile ? "Submit" : "Submit Project"}
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

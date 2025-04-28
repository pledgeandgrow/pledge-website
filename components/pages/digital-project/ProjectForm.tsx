"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Loader2, 
  Send,
  Calendar,
  Briefcase,
  Users,
  Target,
  Clock,
  CreditCard
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Form schemas for each step
const projectTypeSchema = z.object({
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
});

const projectDetailsSchema = z.object({
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

const timelineSchema = z.object({
  startDate: z.string().min(1, {
    message: "Please select a start date.",
  }),
  deadline: z.string().optional(),
  flexibility: z.enum(["strict", "moderate", "flexible"]),
});

const budgetSchema = z.object({
  budgetRange: z.string().min(1, {
    message: "Please select a budget range.",
  }),
  paymentPreference: z.enum(["milestone", "monthly", "completion"]),
});

const contactSchema = z.object({
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
    icon: <Calendar className="h-5 w-5" />
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

export default function ProjectForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
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
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const updateFormData = (data: any) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  
  const handleProjectTypeSubmit = (data: z.infer<typeof projectTypeSchema>) => {
    updateFormData(data);
    nextStep();
  };
  
  const handleProjectDetailsSubmit = (data: z.infer<typeof projectDetailsSchema>) => {
    updateFormData(data);
    nextStep();
  };
  
  const handleTimelineSubmit = (data: z.infer<typeof timelineSchema>) => {
    updateFormData(data);
    nextStep();
  };
  
  const handleBudgetSubmit = (data: z.infer<typeof budgetSchema>) => {
    updateFormData(data);
    nextStep();
  };
  
  const handleContactSubmit = (data: z.infer<typeof contactSchema>) => {
    updateFormData(data);
    nextStep();
  };
  
  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend
      console.log(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Project request submitted!",
        description: "We'll contact you soon to discuss your project.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your project request couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Calculate progress percentage
  const progress = ((currentStep) / (formSteps.length - 1)) * 100;
  
  return (
    <section id="project-form" className="py-16 bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out this form to help us understand your project needs and provide you with an accurate estimate.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {formSteps.length}</span>
              <span className="text-sm font-medium">{formSteps[currentStep].title}</span>
            </div>
          </div>
          
          {/* Step indicators */}
          <div className="hidden md:flex justify-between mb-8">
            {formSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center ${
                  index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index < currentStep ? 'bg-primary border-primary text-primary-foreground' :
                  index === currentStep ? 'border-primary text-primary' :
                  'border-muted-foreground text-muted-foreground'
                }`}>
                  {index < currentStep ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                <span className="text-xs mt-1 hidden lg:block">{step.title}</span>
              </div>
            ))}
          </div>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{formSteps[currentStep].title}</CardTitle>
              <CardDescription>{formSteps[currentStep].description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 0 && (
                    <Form {...projectTypeForm}>
                      <form onSubmit={projectTypeForm.handleSubmit(handleProjectTypeSubmit)} className="space-y-6">
                        <FormField
                          control={projectTypeForm.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What type of project are you looking to create?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2"
                                >
                                  {[
                                    "Website", 
                                    "Web Application", 
                                    "Mobile App", 
                                    "E-commerce", 
                                    "SaaS Platform", 
                                    "UI/UX Design", 
                                    "Digital Marketing", 
                                    "Other"
                                  ].map((type) => (
                                    <div key={type} className="flex items-center space-x-2">
                                      <RadioGroupItem value={type.toLowerCase().replace(/\s+/g, '-')} id={type} />
                                      <Label htmlFor={type} className="cursor-pointer">{type}</Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  )}
                  
                  {currentStep === 1 && (
                    <Form {...projectDetailsForm}>
                      <form onSubmit={projectDetailsForm.handleSubmit(handleProjectDetailsSubmit)} className="space-y-6">
                        <FormField
                          control={projectDetailsForm.control}
                          name="projectName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Name</FormLabel>
                              <FormControl>
                                <Input placeholder="My Awesome Project" {...field} />
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
                              <FormLabel>Project Description</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Describe your project in detail..." 
                                  className="min-h-32" 
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
                              <FormLabel>Target Audience</FormLabel>
                              <FormControl>
                                <Input placeholder="Who is this project for?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {currentStep < formSteps.length - 1 ? (
                <Button 
                  onClick={() => {
                    switch (currentStep) {
                      case 0:
                        projectTypeForm.handleSubmit(handleProjectTypeSubmit)();
                        break;
                      case 1:
                        projectDetailsForm.handleSubmit(handleProjectDetailsSubmit)();
                        break;
                      case 2:
                        timelineForm.handleSubmit(handleTimelineSubmit)();
                        break;
                      case 3:
                        budgetForm.handleSubmit(handleBudgetSubmit)();
                        break;
                      case 4:
                        contactForm.handleSubmit(handleContactSubmit)();
                        break;
                    }
                  }}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={submitForm} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Project
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

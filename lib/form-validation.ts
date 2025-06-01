import { z } from "zod";

/**
 * Common form validation schemas for use throughout the application
 * Centralizes validation logic and ensures consistency
 */

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  projectType: z
    .enum(["web", "mobile", "ai", "blockchain", "other"])
    .optional(),
  budget: z
    .enum(["small", "medium", "large", "enterprise"])
    .optional(),
  newsletter: z
    .boolean()
    .default(false),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .optional(),
  interests: z
    .array(z.string())
    .optional(),
});

// Job application schema
export const jobApplicationSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  resumeUrl: z
    .string()
    .url({ message: "Please provide a valid URL to your resume" })
    .optional(),
  portfolioUrl: z
    .string()
    .url({ message: "Please provide a valid URL to your portfolio" })
    .optional()
    .or(z.literal("")),
  linkedInUrl: z
    .string()
    .url({ message: "Please provide a valid LinkedIn URL" })
    .optional()
    .or(z.literal("")),
  coverLetter: z
    .string()
    .max(5000, { message: "Cover letter must be less than 5000 characters" })
    .optional(),
  yearsOfExperience: z
    .number()
    .min(0, { message: "Years of experience must be a positive number" })
    .max(50, { message: "Years of experience must be less than 50" })
    .optional(),
  availableFrom: z
    .date()
    .optional(),
});

// Utility function to validate form data against a schema
export function validateFormData<T extends z.ZodTypeAny>(
  formData: unknown,
  schema: T
): { success: true; data: z.infer<T> } | { success: false; errors: z.ZodError } {
  try {
    const data = schema.parse(formData);
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}

import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().optional(),
  product: z.string().min(1, "Product is required"),
  quantity: z.string().min(1, "Quantity is required"),
  specifications: z.string().optional(),
  message: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

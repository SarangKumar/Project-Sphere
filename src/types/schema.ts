import { z } from "zod";

export const SigninSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email required!" })
    .email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(1, { message: "Password required!" })
    .min(6, { message: "Password must have at least 6 characters!" }),
});

// Define the zod schema for form data
export const SignupSchema = z
  .object({
    name: z.string().min(3, "Username must be at least 3 characters long"),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email required!" })
      .email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(1, { message: "Password required!" })
      .min(6, { message: "Password must have at least 6 characters!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const FormSchema = z.object({
  topics: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

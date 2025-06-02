import { z } from "zod";

const fullNameRegex = /^[A-Za-z\s'.-]+$/; //only contain letters, spaces, apostrophes, hyphens, and dots


export const updateProfileSchema = z.object({
  name: z
    .string({
      required_error: "Full Name is required",
    })
    .min(1, "Full Name is required")
    .trim()
    .regex(fullNameRegex, {
      message:
        "Full Name can only contain letters, spaces, apostrophes, hyphens, and dots.",
    }),
  phone_number: z
    .string({
      required_error: "Phone number is required",
    })
    .trim()
    .min(1, "Phone Number is required"),
});
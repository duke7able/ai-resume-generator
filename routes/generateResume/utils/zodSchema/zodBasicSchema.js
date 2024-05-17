import { z } from "zod";
import zodLocationSchema from "./zodLocationSchema.js";
import zodProfileSchema from "./zodProfileSchema.js";

const zodBasicsSchema = z
  .object({
    name: z.string().nullable().describe("Full name of the user."),
    label: z.string().describe("Professional title or label of the user."),
    // image: z
    //   .string()
    //   .nullable()
    //   .describe("URL of the user's profile image."),
    email: z.string().email().nullable().describe("Email address of the user."),
    phone: z.string().nullable().describe("Phone number of the user."),
    url: z
      .string()
      .url()
      .nullable()
      .describe("Personal website URL of the user"),
    summary: z
      .string()
      .nullable()
      .describe("Brief professional summary of the user."),
    location: zodLocationSchema,
    profiles: z.array(zodProfileSchema),
  })
  .describe("Basic information section of the resume.");

export default zodBasicsSchema;

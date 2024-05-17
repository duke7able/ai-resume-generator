import { z } from "zod";

const zodProjectsSchema = z
  .object({
    name: z.string().describe("Name of the project."),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .describe("Start date of the project in YYYY-MM-DD format."),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .describe("End date of the project in YYYY-MM-DD format."),
    description: z.string().describe("Detailed description of the project."),
    highlights: z
      .array(z.string())
      .describe("Key achievements or highlights of the project."),
    url: z
      .string()
      .url()
      .describe("URL to more information about the project."),
  })
  .describe("Projects section of the resume.");

export default zodProjectsSchema;

import z from "zod";

const zodWorkSchema = z
  .object({
    name: z.string().optional().describe("Name of the company."),
    position: z.string().optional().describe("Job title or position."),
    url: z.string().url().nullable().describe("URL of the company."),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("Start date of the position in YYYY-MM-DD format."),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional()
      .describe("End date of the position in YYYY-MM-DD format."),
    summary: z
      .string()
      .describe("Brief description of the role and responsibilities."),
    highlights: z
      .array(z.string())
      .optional()
      .describe("List of achievements or key highlights."),
  })
  .describe("Work experience section of the resume.");

export default zodWorkSchema;

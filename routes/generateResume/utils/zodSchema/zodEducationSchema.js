import { z } from "zod";

const zodEducationSchema = z
  .object({
    institution: z
      .string()
      .nullable()
      .describe("Name of the educational institution."),
    url: z
      .string()
      .url()
      .nullable()
      .describe("Website URL of the educational institution."),
    area: z.string().nullable().describe("Field of study or major."),
    studyType: z.string().nullable().describe("Type of degree or certificate."),
    startDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .nullable()
      .describe("Start date of the education in YYYY-MM-DD format."),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .nullable()
      .describe("End date of the education in YYYY-MM-DD format."),
    score: z.string().nullable().describe("GPA or score achieved."),
    courses: z
      .array(z.string())
      .nullable()
      .describe("List of relevant courses taken."),
  })
  .describe("Education section of the resume.");

export default zodEducationSchema;

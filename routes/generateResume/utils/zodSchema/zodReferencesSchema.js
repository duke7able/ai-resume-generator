import z from "zod";

const zodReferencesSchema = z
  .object({
    name: z.string().describe("Name of the reference."),
    reference: z
      .string()
      .optional()
      .describe("Details of the professional reference."),
  })
  .describe("Languages, interests, and references section of the resume.");

export default zodReferencesSchema;

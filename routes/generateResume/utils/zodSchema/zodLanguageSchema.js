import z from "zod";

const zodLanguageSchema = z
  .object({
    name: z.string().describe("Name of the language."),
    fluency: z.string().optional().describe("Fluency level for languages."),
  })
  .describe("Languages section of the resume.");

export default zodLanguageSchema;

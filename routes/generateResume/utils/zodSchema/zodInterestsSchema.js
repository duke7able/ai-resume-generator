import z from "zod";

const zodInterestsSchema = z
  .object({
    name: z.string().describe("Name of the interest."),
    keywords: z
      .array(z.string())
      .optional()
      .describe("Keywords associated with interests."),
  })
  .describe("Interests section of the resume.");

export default zodInterestsSchema;

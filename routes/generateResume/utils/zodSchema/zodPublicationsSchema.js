import z from "zod";

const zodPublicationsSchema = z
  .object({
    name: z.string().describe("Name of the publication."),
    publisher: z.string().optional().describe("Publisher of the publication."),
    releaseDate: z
      .string()
      .optional()
      .describe("Release date of the publication in YYYY-MM-DD format."),
    url: z
      .string()
      .url()
      .describe("URL to the document or publication online."),
    summary: z
      .string()
      .optional()
      .describe("Brief description of the publication."),
  })
  .describe("Publications section of the resume.");

export default zodPublicationsSchema;

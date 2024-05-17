import z from "zod";

const zodCertificatesSchema = z
  .object({
    name: z.string().describe("Name of the certificate."),
    date: z
      .string()
      .optional()
      .describe("Date received or published in YYYY-MM-DD format."),
    issuer: z
      .string()
      .optional()
      .describe("Entity that issued the certificate."),
    url: z.string().url().optional().describe("URL to the document online."),
  })
  .nullable()
  .describe("Certificates section of the resume.");
export default zodCertificatesSchema;

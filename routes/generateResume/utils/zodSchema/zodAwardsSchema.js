import z from "zod";

const zodAwardsSchema = z
  .object({
    name: z.string().describe("Name of the award."),
    date: z.string().optional().describe("Date received in YYYY-MM-DD format."),
    awarder: z.string().optional().describe("Entity that issued the award."),
    summary: z.string().optional().describe("Brief description of the award."),
  })
  .describe("Awards section of the resume.");
export default zodAwardsSchema;

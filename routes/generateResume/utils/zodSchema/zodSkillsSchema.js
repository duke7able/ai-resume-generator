import { z } from "zod";

const zodSkillsSchema = z
  .object({
    name: z.string().describe("Name of the skill."),
    level: z.string().nullable().describe("Proficiency level of the skill."),
    keywords: z.array(z.string()).describe("Related keywords or technologies."),
  })
  .describe("Skills section of the resume.");

export default zodSkillsSchema;

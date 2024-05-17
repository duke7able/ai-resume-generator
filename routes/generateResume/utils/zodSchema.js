import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import zodBasicsSchema from "./zodSchema/zodBasicSchema.js";
import zodWorkSchema from "./zodSchema/zodWorkSchema.js";
import zodVolunteerSchema from "./zodSchema/zodVolunteerSchema.js";
import zodEducationSchema from "./zodSchema/zodEducationSchema.js";
import zodAwardsSchema from "./zodSchema/zodAwardsSchema.js";
import zodCertificatesSchema from "./zodSchema/zodCertificatesSchema.js";
import zodPublicationsSchema from "./zodSchema/zodPublicationsSchema.js";
import zodSkillsSchema from "./zodSchema/zodSkillsSchema.js";
import zodLanguageSchema from "./zodSchema/zodLanguageSchema.js";
import zodInterestsSchema from "./zodSchema/zodInterestsSchema.js";
import zodReferencesSchema from "./zodSchema/zodReferencesSchema.js";
import zodProjectsSchema from "./zodSchema/zodProjectsSchema.js";

const resumeSchema = z
  .object({
    basics: zodBasicsSchema,
    work: z.array(zodWorkSchema),
    volunteer: z.array(zodVolunteerSchema),
    education: z.array(zodEducationSchema),
    awards: z.array(zodAwardsSchema),
    certificates: z.array(zodCertificatesSchema),
    publications: z.array(zodPublicationsSchema),
    skills: z.array(zodSkillsSchema),
    languages: z.array(zodLanguageSchema),
    interests: z.array(zodInterestsSchema),
    references: z.array(zodReferencesSchema),
    projects: z.array(zodProjectsSchema),
  })
  .describe("Complete resume structure.");

// Use the schema
const outputParser = StructuredOutputParser.fromZodSchema(resumeSchema);

export default outputParser;

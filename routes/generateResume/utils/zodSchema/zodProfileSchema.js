import { z } from "zod";

const zodProfileSchema = z
  .object({
    network: z
      .string()
      .optional()
      .describe("The social media network or platform name."),
    username: z
      .string()
      .optional()
      .describe("The user's username on the social network."),
    url: z
      .string()
      .url()
      .optional()
      .describe("URL to the user's social media profile."),
  })
  .describe("Social profiles of the user.");

export default zodProfileSchema;

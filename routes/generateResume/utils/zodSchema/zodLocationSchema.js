import { z } from "zod";

const zodLocationSchema = z
  .object({
    address: z.string().nullable().describe("Street address of the user."),
    postalCode: z
      .string()
      .nullable()
      .describe("Postal code of the user's location."),
    city: z.string().nullable().describe("City of the user."),
    countryCode: z
      .string()
      .nullable()
      .describe("Country code of the user's location."),
    region: z
      .string()
      .nullable()
      .describe("State or region of the user's location."),
  })
  .describe("Geographic location of the user. Else empty string");

export default zodLocationSchema;

import { config } from "dotenv";
config();

const configEnv = {
  PORT: process.env.PORT,
  WEBSITE_BASE_URL: process.env.WEBSITE_BASE_URL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  LINKEDIN_API_BASE_URL: process.env.LINKEDIN_API_BASE_URL,
  LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
  LINKEDIN_CALLBACK: process.env.LINKEDIN_CALLBACK,
  LINKEDIN_STATE: process.env.LINKEDIN_STATE,
  URL_HOSTED: process.env.URL_HOSTED,
};

export default configEnv;

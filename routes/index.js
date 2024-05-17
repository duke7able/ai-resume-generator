import { Router } from "express";
import ResumeController from "./generateResume/index.js";
import LinkedInOauthController from "./oauth/index.js";

const router = Router();

ResumeController(router);
LinkedInOauthController(router);

export default router;

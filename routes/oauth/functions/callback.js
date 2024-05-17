import configEnv from "../../../env.js";

const callback = (passport) =>
  passport.authenticate("linkedin", {
    successRedirect: configEnv.WEBSITE_BASE_URL + "/auth/linkedin/redirect",
    failureRedirect: "/login/failed",
    passReqToCallback: true,
  });

export default callback;

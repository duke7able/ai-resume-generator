import passport from "passport";
import configEnv from "../../env.js";
import successLogin from "./functions/successLogin.js";
import callback from "./functions/callback.js";
import failedLogin from "./functions/failedLogin.js";
import logout from "./functions/logout.js";

const LinkedInOauthController = (router) => {
  router.get(
    "/auth/linkedin",
    passport.authenticate("linkedin", { state: configEnv.LINKEDIN_STATE })
  );

  // for jwt
  //   router.get("/auth/linkedin/callback", (req, res, next) => {
  //     passport.authenticate("linkedin", (err, { user, token }) => {
  //       if (err || !user) {
  //         return res.redirect("http://localhost:5173/login");
  //       }
  //       // Redirect user with the token in the query string
  //       res.redirect(
  //         `http://localhost:5173/auth/linkedin/redirect?token=${token}`
  //       );
  //     })(req, res, next);
  //   });

  router.get("/auth/linkedin/callback", callback(passport));

  router.get("/login/success", successLogin);

  router.get("/login/failed", failedLogin);

  router.get("/logout", logout);
};

export default LinkedInOauthController;

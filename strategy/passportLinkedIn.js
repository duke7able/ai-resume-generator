import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2";
import passport from "passport";
import prisma from "../prisma/prismaClient.js";
import configEnv from "../env.js";

// Serialize user into session
passport.serializeUser((user, done) => {
  console.log("User in serializer:", user);
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser(async (serializedUser, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: serializedUser.id },
    });
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, null);
  }
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: configEnv.LINKEDIN_CLIENT_ID,
      clientSecret: configEnv.LINKEDIN_CLIENT_SECRET,
      callbackURL: configEnv.LINKEDIN_CALLBACK,
      scope: [
        "email",
        "r_organization_admin",
        "w_member_social",
        "r_basicprofile",
        "w_organization_social",
      ],
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(async function () {
        const user = await prisma.user.upsert({
          where: { linkedInId: profile.id },
          update: { accessToken, refreshToken, name: profile.displayName },
          create: {
            linkedInId: profile.id,
            accessToken,
            refreshToken,
            name: profile.displayName,
          },
        });
        // if (user) {
        // const jwtPayload = { user };
        // const token = jwt.sign(
        //   jwtPayload,
        //   "your_secret_key"
        //   // , {
        //   //   expiresIn: "1h",
        //   // }
        // );
        // }
        return done(null, { id: user.id, linkedInId: user.linkedInId });
      });
    }
  )
);

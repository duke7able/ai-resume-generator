import express from "express";
import bp from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";
import passport from "passport";
import session from "express-session";
import "./strategy/passportLinkedIn.js";
import configEnv from "./env.js";

const app = express();

app.use(
  cors({
    origin: configEnv.WEBSITE_BASE_URL,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

app.use(
  session({
    name: "session",
    secret: "session",
    resave: true,
    saveUninitialized: true,
    // proxy:true,
    cookie: {
      // sameSite: "none",
      secure: false,
    },
  })
);

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", routes);

app.listen(configEnv.PORT, function () {
  console.log("Server running on http://localhost:" + configEnv.PORT);
});

export default app;

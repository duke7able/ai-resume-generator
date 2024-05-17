import configEnv from "../../../env.js";

const failedLogin = (req, res) => {
  res
    .status(401)
    .json({
      success: false,
      message: "failure",
    })
    .redirect(configEnv.WEBSITE_BASE_URL);
};

export default failedLogin;

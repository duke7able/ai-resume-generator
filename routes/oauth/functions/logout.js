import configEnv from "../../../env.js";

const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    return res.status(204).end();
  });
};

export default logout;

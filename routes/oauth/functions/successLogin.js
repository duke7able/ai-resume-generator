const successLogin = (req, res) => {
  try {
    console.log("Is Authenticated:", req.isAuthenticated());
    const user = req.user;
    console.log("User in success:", user);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized", user: null });
    }

    return res.status(200).json({
      success: true,
      message: "Successful",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

export default successLogin;

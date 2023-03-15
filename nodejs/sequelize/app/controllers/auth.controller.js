const db = require("../models");
const bcrypt = require("bcrypt");

const User = db.users;

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the user.",
    });
  }
};
// export const signup = (req, res) => {};

exports.signin = async (req, res) => {
  // console.log("req :>> ", req);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    console.log("User :>> ", User);
    const user = await User.findOne({ where: { email } });
    console.log("user :>> ", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

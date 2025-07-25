const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");

async function handleUserCreation(req, res) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const saltRounds = 1;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hashedPassword;

  usersSchema
    .create(data)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await usersSchema.findOne({ email });

    if (!user) {
      return res.json("you are not an existing user");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      res.json("success");
    } else {
      res.json("password incorrect");
    }
  } catch (error) {
    res.status(500).json("An error occurred during login");
  }
}

module.exports = {
  handleUserCreation,
  handleLogin,
};

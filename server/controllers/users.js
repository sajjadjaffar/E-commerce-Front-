const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserCreation(req, res) {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    image: req.file ? req.file.filename : null,
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
      const token = setUser(user);
      res.cookie("uid", token);
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

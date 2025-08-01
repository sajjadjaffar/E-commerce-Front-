const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");

async function handleUserCreation(req, res) {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    image: req.file?.path,
    email: req.body.email,
    password: req.body.password,
  };

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  data.password = hashedPassword;

  usersSchema
    .create(data)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
async function handleUserupdate(req, res) {
  try {
    const { uniqueId } = req.body;

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      image: req.file?.path || req.body.image,
      email: req.body.email,
      password: req.body.password,
    };
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPassword;

    const updatedUser = await usersSchema.findOneAndUpdate(
      { uniqueId: uniqueId },
      { $set: newUser },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during user update" });
  }
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
      res.json(["success", user.uniqueId, user.firstName, user.image]);
    } else {
      res.json("password incorrect");
    }
  } catch (error) {
    res.status(500).json("An error occurred during login");
  }
}

async function handleGetInfo(req, res) {
  // const { uniqueId } = req.body;
  const email = "fahad@gmail.com";
  const user = await usersSchema.findOne({ email: email });
  console.log(user);
  res.json([
    "success",
    user.firstName,
    user.lastName,
    user.gender,
    user.address,
    user.password,
    user.email,
    user.phoneNumber,
    user.image,
    user.uniqueId,
  ]);
}

module.exports = {
  handleUserCreation,
  handleLogin,
  handleUserupdate,
  handleGetInfo,
};

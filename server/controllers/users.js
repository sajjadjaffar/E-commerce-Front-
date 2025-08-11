const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");
const ItemsSchema = require("../models/items");

//user handlers
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
    };

    const updatedUser = await usersSchema.findOneAndUpdate(
      { uniqueId: uniqueId },
      { $set: newUser },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      imagePath: updatedUser.image,
      name: updatedUser.firstName,
    });
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
      res.json([
        "success",
        user.uniqueId,
        user.firstName,
        user.image,
        user.role,
      ]);
    } else {
      res.json("password incorrect");
    }
  } catch (error) {
    res.status(500).json("An error occurred during login");
  }
}

async function handleGetInfo(req, res) {
  const { uniqueId } = req.body;

  const user = await usersSchema.findOne({ uniqueId: uniqueId });
  res.json([
    "success",
    user.firstName,
    user.lastName,
    user.gender,
    user.address,
    user.email,
    user.phoneNumber,
    user.image,
    user.uniqueId,
  ]);
}
async function handleUserData(req, res) {
  try {
    const users = await usersSchema.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
}
async function handleDelete(req, res) {
  const { uniqueId } = req.body;

  const user = await usersSchema.findOneAndDelete({ uniqueId: uniqueId });
  res.json("User deleted success");
}

//items handlers
async function handleGetItems(req, res) {
  try {
    const items = await ItemsSchema.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items." });
  }
}
async function handleAddItems(req, res) {
  try {
    const { itemName, price, colors, quantity } = req.body;

    const colorsArray = colors.split(",").map((color) => color.trim());

    const imagePaths =
      req.files && req.files.length > 0
        ? req.files.map((file) => file.path)
        : ["uploads/default.png"];

    const newItem = await ItemsSchema.create({
      itemName,
      price,
      quantity,
      image: imagePaths,
      colors: colorsArray,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error adding item." });
  }
}
async function handleDeleteItem(req, res) {
  const { uniqueId } = req.body;
  const user = await ItemsSchema.findOneAndDelete({ uniqueId: uniqueId });
  res.json("User deleted success");
}

module.exports = {
  handleUserCreation,
  handleLogin,
  handleUserupdate,
  handleGetInfo,
  handleUserData,
  handleDelete,
  handleGetItems,
  handleAddItems,
  handleDeleteItem,
};

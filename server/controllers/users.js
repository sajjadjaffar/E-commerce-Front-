const usersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");
const ItemsSchema = require("../models/items");
const Orderschema = require("../models/order");
const { v4: uuidv4 } = require("uuid");
const CartSchema = require("../models/cart");

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
        : ["uploads/default.png", "uploads/default.png", "uploads/default.png"];

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
async function handleGetItemInfo(req, res) {
  const { uniqueId } = req.body;

  const item = await ItemsSchema.findOne({ uniqueId: uniqueId });
  res.json(item);
}
async function handleItemupdate(req, res) {
  try {
    const { uniqueId, itemName, quantity, price, colors } = req.body;
    const imagePaths = req.files.map((file) => file.path);

    if (!uniqueId) {
      return res.status(400).json({ message: "uniqueId is required" });
    }
    const colorsArray = colors.split(",").map((color) => color.trim());

    const newItem = {
      itemName,
      quantity,
      price,
      colors: colorsArray,
      image: imagePaths,
    };

    const updatedItem = await ItemsSchema.findOneAndUpdate(
      { uniqueId },
      { $set: newItem },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res
      .status(200)
      .json({ message: "Item updated successfully", data: updatedItem });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "An error occurred during item update" });
  }
}

//order handlers
async function handleOrder(req, res) {
  try {
    const { filteredCart, userId, orderId } = req.body;
    console.log(filteredCart);
    console.log(userId);
    console.log(orderId);

    if (!filteredCart || !userId || !orderId) {
      return res
        .status(400)
        .json({ message: "Missing cart or userId or orderId" });
    }

    const newOrder = await Orderschema.create({
      OrderDetail: filteredCart,
      userId: userId,
      OrderId: orderId,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ message: "Failed to create order", error });
  }
}
async function handleCart(req, res) {
  const { userId, item } = req.body;

  if (!userId || !item) {
    return res.status(400).json({ success: false, message: "Missing data" });
  }

  try {
    let cart = await CartSchema.findOne({ userId });
    if (!cart) {
      cart = new CartSchema({
        userId,
        orderId: uuidv4(),
        items: [item],
      });
    } else {
      const existingItem = cart.items.find(
        (cartItem) =>
          cartItem.uniqueId === item.uniqueId &&
          cartItem.selectedColor === item.selectedColor
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        cart.items.push(item);
      }
    }

    await cart.save();

    res.status(200).json({ success: true, cart });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ success: false, message: "Failed to add item" });
  }
}
async function handleCartInfo(req, res) {
  try {
    const { userId } = req.body;
    const order = await CartSchema.find({ userId: userId });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  }
}
async function handlequantityupdate(req, res) {
  const { userId, uniqueId, quantity } = req.body;

  try {
    const cart = await CartSchema.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find((item) => item.uniqueId === uniqueId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Quantity updated successfully" });
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function handleDeleteCart(req, res) {
  const { uniqueId } = req.body;
  await CartSchema.findOneAndDelete({ uniqueId: uniqueId });
  res.json("success");
}
async function handleUsersOrders(req, res) {
  const orders = await Orderschema.find({});
  res.json(orders);
}
async function handleOrdersStatus(req, res) {
  const orderId = req.params.id;
  const { OrderStatus } = req.body;

  try {
    const updatedOrder = await Orderschema.findByIdAndUpdate(
      orderId,
      { OrderStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
async function handleShowOrderStatus(req, res) {
  const userId = req.params.userId;

  try {
    const orders = await Orderschema.find({ userId });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching user orders:", err);
    res.status(500).json({ error: "Internal server error" });
  }
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
  handleGetItemInfo,
  handleItemupdate,
  handleCart,
  handleOrder,
  handleCartInfo,
  handlequantityupdate,
  handleDeleteCart,
  handleUsersOrders,
  handleOrdersStatus,
  handleShowOrderStatus,
};

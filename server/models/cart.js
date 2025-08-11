const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  uniqueId: String,
  itemName: String,
  price: Number,
  selectedColor: String,
  selectedImage: String,
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  userId: String,
  orderId: String,
  items: [cartItemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);

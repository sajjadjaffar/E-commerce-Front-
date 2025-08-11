const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const ItemSchema = new mongoose.Schema({
  itemName: String,
  price: Number,
  selectedColor: String,
  quantity: Number,
});

const OrderSchema = new mongoose.Schema({
  OrderDetail: [ItemSchema],
  userId: String,
  OrderStatus: {
    type: String,
    enum: ["pending", "accepted", "cancel", "delivered"],
    default: "pending",
  },
  OrderId: {
    type: String,
    // default: () => nanoid(7),
    // index: { unique: true },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);

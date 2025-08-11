// itemModel.js
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const itemSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    default: () => nanoid(7),
    index: { unique: true },
  },
  itemName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: [String],
    default: ["uploads/default.png"],
  },
  colors: {
    type: [String],
    default: [],
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;

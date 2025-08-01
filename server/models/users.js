const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const urlSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    default: () => nanoid(7),
    index: { unique: true },
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },

  address: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    default: "uploads/default.png",
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  //   visitHistory: [
  //     {
  //       timestamp: { type: Number },
  //     },
  //     { timestamp: true },
  //   ],
});

const usersSchema = mongoose.model("users", urlSchema);

module.exports = usersSchema;

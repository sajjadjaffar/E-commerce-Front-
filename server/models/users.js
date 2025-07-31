const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
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

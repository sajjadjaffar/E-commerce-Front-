const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  name: {
    type: String,
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

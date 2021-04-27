const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  gender: String,
  password: Number,
  country: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

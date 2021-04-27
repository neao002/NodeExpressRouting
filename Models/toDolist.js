const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  add: String,
  completed: String,
  number: Number,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

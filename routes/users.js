const express = require("express");

const router = express.Router();

// controlers

const userController = require("../Controllers/userController");

// links with something similar in one

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

router.get("/checkout", (req, res) => {
  res.render("checkout");
});

// adding contact form + post, to get information

router.get("/contactForm", (req, res) => {
  res.render("contactForm");
});

// display array in ur browser

// router.post("/formData", (req, res) => {
//   console.log("data from user", req.body);
//   res.end(JSON.stringify(req.body));
// });

// getting controllers

// display data into the form from contactFormm input

router.post("/formData", (req, res) => {
  console.log("Data is received from user:", req.body);
  res.render("formData", {
    tittle: "Thank you for your Information",
    form: req.body,
  });
});

//log in to be desplay

router.get("/login", (req, res) => {
  res.render("login");
});

//import my model User

const User = require("../Models/User");

router.post("/login", (req, res) => {
  console.log("Data is received from user:", req.body);
  const newUser = new User(req.body);
  console.log(newUser);
  newUser.save();
  //res.end(JSON.stringify(req.body));
  res.render("loginInfo", {
    tittle1: "Your information is now stored, thank you",
  });
});

// reset password

router.get("/resetPassword", (req, res) => {
  res.render("resetPassword");
});

router.post("/resetPassword", (req, res) => {
  console.log("Data is received from user:", req.body);
  // res.end(JSON.stringify(req.body));
});

// todoList

const Todo = require("../Models/toDolist");

router.get("/todoList", (req, res) => {
  console.log("getting todo list", req.body);
  res.render("todoList");
});

router.post("/todoList", (req, res) => {
  const newTodo = new Todo(req.body);
  console.log(newTodo);
  newTodo.save().then((data) => {
    res.render("todoList", {
      tittle: "Todo List",
      secondTittle: "Task Added, and stored- Add another one",
      todo: data,
    });
  });
});

// router.get("/todoList", (req, res) => {
//   Todo.find({}, (err, tasks) => {
//     res.render("todoList", { todoTasks: tasks });
//   });
//   res.render("todoList");
// });

// router.post("todoList", async (req, res) => {
//   const todoTask = new TodoTask({
//     content: req.body.content,
//   });
//   try {
//     await todoTask.save();
//     res.redirect("/todoList");
//   } catch (err) {
//     res.redirect("/todoList");
//   }
// });

// api

router.get("/api", userController.getUsers);

//404 error

router.get("*", (req, res) => {
  res.render("404");
});

// exportarlo

module.exports = router;

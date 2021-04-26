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

router.post("/login", (req, res) => {
  console.log("Data is received from user:", req.body);
  //res.end(JSON.stringify(req.body));
  res.render("login", {
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

// api

router.get("/api", userController.getUsers);

//404 error

router.get("*", (req, res) => {
  res.render("404");
});

// exportarlo

module.exports = router;

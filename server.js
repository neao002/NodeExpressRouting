const express = require("express");

const app = express();

const axios = require("axios");

const port = 8080;

app.use(express.static(__dirname + "/"));

app.set("view engine", "hbs");

app.listen(port),
  () => {
    console.log("on port 3000");
  };

app.get("/", (req, res) => {
  res.render("home", {
    pageTittle: "Welcome to my Website",
    foods: ["apple", "orange", "pineapple"],
    users: [
      {
        id: 1,
        name: "nico",
      },
      {
        id: 2,
        name: "murat",
      },
      {
        id: 3,
        name: "rodrigo",
      },
    ],
  });
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/api", (req, res) => {
  const apiLink = "https://jsonplaceholder.typicode.com/users/";

  axios.get(apiLink).then((result) => {
    //test data in browser
    // res.json(result.data);
    res.render("api", {
      users: result.data,
    });
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

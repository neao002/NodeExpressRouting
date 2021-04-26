const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
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

// exportarlo

module.exports = router;

const express = require("express");

const app = express();

const axios = require("axios");

const port = 8080;

app.get("/user/:userID", (req, res) => {
  const { userID } = req.params;
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then((response) => {
      res.send(`Name${response.data.name} Email:${response.data.email}`);
    });
});

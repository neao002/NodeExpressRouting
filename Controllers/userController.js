const axios = require("axios");

exports.getUsers = (req, res) => {
  const apiLink = "https://jsonplaceholder.typicode.com/users/";

  axios.get(apiLink).then((result) => {
    //test data in browser
    // res.json(result.data);
    res.render("api", {
      users: result.data,
    });
  });
};

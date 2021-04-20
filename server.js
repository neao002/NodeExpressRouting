// app.use((req, res) => {
//   console.log("we got a request");
//   res.send("hello");
// });

// app.listen(port),
//   () => {
//     console.log("on port 3000");
//   };

// app.get("/cats", (req, res) => {
//   res.send("meohsss");
// });

// app.get("/dogs", (req, res) => {
//   res.send("dog");
// });

// app.get("/", (req, res) => {
//   res.send("this is my home page");
// });

// // generic padern

// app.get("/r/:subreddit/:postId", (req, res) => {
//   const { subreddit, postId } = req.params;
//   res.send(
//     `<h1>hello Browsing the ID number ${postId} with the browsing /  ${subreddit} <h1/>`
//   );
// });

// //query strings

// app.get("/search", (req, res) => {
//   const { q } = req.query;
//   if (!q) {
//     res.send("nothing found in this link");
//   }
//   console.log(`search results for  ${q}`);
//   res.send(`search results for >>>  ${q}`);
// });

// // put it an the end of the code and is for 404

// app.get("*", (req, res) => {
//   res - send("wrong path");
// });

const express = require("express");

const app = express();

const axios = require("axios");

const port = 8080;

app.use(express.static(__dirname + "/"));

app.listen(port),
  () => {
    console.log("on port 3000");
  };

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/index.html");
});

app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/profile.html");
});

app.get("/aboutme", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/aboutme.html");
});

app.get("/checkout", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/checkout.html");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/api.html");
});

// app.get("/user/Profilepic/:userID/details/:name", (req, res) => {
//   const { userID, name } = req.params;
//   res.send(
//     `<h1>hello Browsings theee  user with the ID ${userID} and with the following name ${name}  <h1/>`
//   );
// });

app.get("/user/list", (req, res) => {
  res.send("User list");
});

app.get("/user/:userId", (req, res) => {
  const apiLink = "https://jsonplaceholder.typicode.com/users/";

  axios.get(apiLink + req.params.userId).then((result) => {
    const { name, username, email, address, phone } = result.data;
    res.send(`
      <h1>User Info:</h1>
      <h2>Name: ${name}</h2>
      <h2>User Name: ${username}</h2>
      <h2>Email: ${email}</h2>
      <h2>Address: ${address.street}, ${address.city}</h2>
      <h2>Phone Number: ${phone}</h2>
      `);
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/htmlfiles/404.html");
});

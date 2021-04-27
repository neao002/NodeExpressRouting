const express = require("express");

const app = express();

//body parser

const bodyParser = require("body-parser");
// my port store number

//adding moongose
const mongoose = require("mongoose");
const DBname = "fbw41";
const DataBaseLink = `mongodb+srv://user:Nicolas19891.@cluster0.mpkuw.mongodb.net/${DBname}`;

mongoose
  .connect(DataBaseLink)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(() => console.log("Database connection is failed"));

const port = 8080;

// routers

const userRouter = require("./routes/users");
const indexRouter = require("./routes/indexRouter");

// build a middle ware

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// using express statics folders

app.use(express.static(__dirname + "/"));

// handlebars

app.set("view engine", "hbs");

// routing from my routes folder

app.use("/", indexRouter);

app.use("/", userRouter);

// application middleware

app.use((res, req, next) => {});

app.listen(port),
  () => {
    console.log("on port 3000");
  };

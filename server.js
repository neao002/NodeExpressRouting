const express = require("express");

const app = express();

//body parser

const bodyParser = require("body-parser");
// my port store number

const port = 8080;

// routers

const userRouter = require("./routes/users");
const indexRouter = require("./routes/indexRouter");

// build a middle ware

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

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

/*
============================================
; Title:  app.js
; Author: Adam Luna
; Date:   21 Mar 2021
; Description: app.js file for api gateway project
;===========================================
*/

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var apiCatalog = require("./routes/api-catalog");
var index = require("./routes/index");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:thisisapassword@buwebdev-cluster-1.j3npe.mongodb.net/api-gateway?retryWrites=true&w=majority",
    {
      promiseLibrary: require("bluebird"),
    }
  )
  .then(() => console.log("Connection to the database was successful"))
  .catch((err) => console.error(err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/api", apiCatalog);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

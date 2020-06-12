var express = require("express");
var app = express();
var router = require("./router.js");

app.use("/api", router);

app.listen(5000, function () {
  console.log(5000);
})
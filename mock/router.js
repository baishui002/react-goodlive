var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")


router.get(config.homehot1, function (req, res) {
  const city = url.parse(req.url, true).query.city
  console.log(city)
  res.send(homehot.hot1)
})

router.get(config.homehot2, function (req, res) {
  const city = url.parse(req.url, true).query.city
  console.log(city)
  res.send(homehot.hot2)
})

module.exports = router;
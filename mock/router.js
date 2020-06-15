var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")
var searchData = require('./data/search')

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

router.get(config.search, function (req, res) {
  const city = url.parse(req.url, true).query.city
  const content = url.parse(req.url, true).query.content
  const page = url.parse(req.url, true).query.page
  console.log(city, content, page)
  res.send(searchData)
})

module.exports = router
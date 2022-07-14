const express = require("express");
const items = require("./routes/items");
const routes = express.Router();

routes.get("/", function (res) {
  res.status(200);
});

routes.use("/items", items);

module.exports = routes;

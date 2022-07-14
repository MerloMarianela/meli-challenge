require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (res) => {
  res.redirect("/api");
});
app.use("/api/", routes);

app.use(function (res) {
  res.status(404);
  res.send({ error: "No se ha encontrado la página" });
});

module.exports = app;

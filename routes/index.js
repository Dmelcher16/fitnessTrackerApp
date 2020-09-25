const app = require("express").Router();

app.use("/api", require("./api"));

module.exports = app;
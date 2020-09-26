const app = require("express").Router();
const path = require("path");
const publicDir = path.resolve(__dirname, "../public");

app.use("/api", require("./api/api-routes"));

app.get("/stats", function(req, res){
 res.sendFile(path.resolve(publicDir, "stats.html"))
});

app.get("/exercise", function(req, res){
 res.sendFile(path.resolve(publicDir, "exercise.html"))
});

module.exports = app;
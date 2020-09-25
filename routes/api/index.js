const app = require("express").Router();

app.get("/", function(req, res){
    res.send("hello");
});

module.exports = app;
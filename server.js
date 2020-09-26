const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

// connect to mongodb
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));

// register routes
app.use(require("./routes/routes"));

// server listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
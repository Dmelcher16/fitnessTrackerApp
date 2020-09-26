const mongoose = require("mongoose");

// connect to mongodb
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = require("./models");

db.Workout.find().then(dbWorkouts => {
    // for loop
    const workout = dbWorkouts[0].toJSON();
    // console.log(workout);
})
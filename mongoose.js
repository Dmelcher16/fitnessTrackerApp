const mongoose = require("mongoose");

// connect to mongodb
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = require("./models");

db.Workout.find().then(dbWorkouts => {
    // for loop
    for (let i = 0; i < dbWorkouts.length; i++) {
        const workout = dbWorkouts[i];
        workout.toJSON();
        
    }
    // console.log(workout);
})
app.get("/workouts", async function(req, res){
    try{
        res.json(await db.Workout.find());
    }catch(err){
        console.error(err)
    }
});

app.get("/workouts/range", async function(req, res){
    try{
        res.json(await db.Workout.find().limit(7));
    }catch(err){
        console.error(err)
    }
});

app.post("/workouts", async function(req, res){
    try{
        res.json(await db.Workout.create(req.body));
    }catch(err){
        console.error(err)
    }
})

app.put("/workouts/:id", async function(req, res){
    try{
        res.json(db.Workout.findByIdAndUpdate(req.params.id, {
             $push: {exercises: req.body}, 
            })
        );
    }catch(err){
        console.error(err)
    }
})
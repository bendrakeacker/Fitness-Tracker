const db = require("../models");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


module.exports = function(app) {
    //Return last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort({_id: -1}).limit(1).populate("exercises").then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            res.json(err);
          });
    })

    //Receive id of workout and updated data and return json
    app.put("/api/workouts/:id", (req, res) => {
        db.Exercise.create(req.body).then(({ _id }) => db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: _id } }, { new: true })).then(data => {
            res.json(data);
        }).catch(err => {
            res.send(err);
          });
    })

    //Receive new workout and insert to DB
    app.post("/api/workouts", (req, res) => {
        console.log((req.body), "from post");
        const workout = new db.Workout(req.body);
        db.Workout.create(workout).then(response => {
            console.log(response);
            res.json(response);
        }).catch(err => {
            console.log(err);
          res.json(err);
        });
    })

    //Return all workouts 
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).populate("exercises").then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
          });
    })
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema([
        {
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
])

const Exercise = mongoose.model("Exercise", workoutSchema);

module.exports = Exercise;
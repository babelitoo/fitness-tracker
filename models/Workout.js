var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0,
        required: false
    },
    exercises: [
        {
          type: {
              type: String
          },
          name: {
              type: String
          },
          duration: Number,
          distance: Number,
          weight: Number,
          reps: Number,
          sets: Number
        }
    ]
  
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
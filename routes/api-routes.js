const db = require("../models");
const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/api/workouts/", (req,res) => {
    db.Workout.find({})
    .sort({ date: -1 })
    .limit(1)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    
})


router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        //filter by id parameter
        { 
            _id : req.params.id 
        },
        //update document by pushing and appending each body object
        { 
            $push: { exercises: [req.body] },
            $inc: { totalDuration: req.body.duration }
        },
    )
    .then(dbWorkout => {
        res.json(dbWorkout);       
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts/", (req,res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

router.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

module.exports = router;
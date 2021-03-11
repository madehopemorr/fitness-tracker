const router = require("express").Router();
const Fitness = require("../models/fitness.js");

router.post("/api/fitness", (req, res) => {
    Fitness.create({})
        .then(dbFitness => {
            res.json(dbFitness);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/fitness/:id", ({ body, params }, res) => {
    Fitness.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        {new: true, runValidators: true }
    )
        .then(dbFitness => {
            res.json(dbFitness);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/fitness", (req, res) => {
    Fitness.find()
        .then(dbFitness => {
            res.json(dbFitness);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/fitness", ({ body }, res) => {
    Fitness.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
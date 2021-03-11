const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fitnessSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date(),
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'Please enter type of exercise',
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'Please enter the name of the exercise',
                },
                duration: {
                    type: Number,
                    required: 'What is the total duration in minutes of this exercise?',
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

fitnessSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Fitness = mongoose.model('Fitness', fitnessSchema);

module.exports = Fitness;
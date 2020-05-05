export {};

const mongoose = require('mongoose');
const Exercise = require('./utils_exercise');

mongoose.Schema.Types.Exercise = Exercise;

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    age: {
        type: Number,
        required: [true, 'Please add an age']
    },
    weight: {
        type: Number,
        required: [true, 'Please add a weight']
    },
    height: {
        type: String,
        required: [true, 'Please add a height']
    },
    sex: {
        type: String,
        required: [true, 'Please add a sex']
    },
    email: {
        type: String,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add a valid email']
    },
    password: {
        type: String
    },
    exercises: {
        type: [Exercise],
    },
    accountCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);
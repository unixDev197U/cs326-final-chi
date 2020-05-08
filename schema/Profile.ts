import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Exercise = require('../utils/exercise');

mongoose.Schema.Types.Exercise = Exercise;

const ProfileSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email'],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please add a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please add a valid password with a minimum length of 6'],
        minlength: 6,
        select: false
    },
    dob: {
        type: String,
        required: [true, 'Please add your DOB']
    },
    weight: {
        type: Number,
        required: [false, 'Please add a weight']
    },
    height: {
        type: String,
        required: [false, 'Please add a height']
    },
    sex: {
        type: String,
        required: [true, 'Please add a sex'],
        enum: ['Male', 'Female', 'Other']
    },
    exercises: {
        type: [Exercise],
    },
    accountCreated: {
        type: Date,
        default: Date.now
    }
});

// Encrypt password using bcrypt
ProfileSchema.pre('save', async function (next): void {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
ProfileSchema.methods.getSignedJwtToken: Promise<void> = function () {
    return jwt.sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

// Match user entered password to hashed password in database
ProfileSchema.methods.matchPassword: Promise<void> = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('Profile', ProfileSchema);
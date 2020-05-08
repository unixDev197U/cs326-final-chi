import mongoose from "mongoose";
class Exercise extends mongoose.SchemaType {
    constructor(key, options) {
        super(key, options, 'Exercise');
    }

    cast(val) {
        let _val: Object[string, number, Date] = {
            // Add more exercise object fields here
            name: val.name,
            rep: val.rep,
            date: val.date
        }
        if (_val) {
            return _val;
        } else {
            throw new Error('Exercise: ' + val + 'is not a valid exercise object');
        }
    }
}

module.exports = Exercise;
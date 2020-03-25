const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    country: String,
    state: String,
    city: String,
    timeZone: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', UserSchema)

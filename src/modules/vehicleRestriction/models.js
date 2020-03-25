const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vehicle = new Schema({
    vehicleRegNumber: {
        type: String,
        required: true
    },
    personName: {
        type: String,
        required: true
    },
    personId: {
        type: Object
    },
    note: {
        type: String,
        required: true
    },
    timeStamp:{
        type: Object, 
        required: true
    },
    visitCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Vehicle', Vehicle)
const mongoose = require('mongoose')

// Make A Schema
const vegetabletSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})

// Make A Model From The Schema

const Vegetable = mongoose.model('Vegetable', vegetableSchema)


// Export The Model For Use In The App

module.exports = Vegetable

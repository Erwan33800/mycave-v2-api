const mongoose = require('mongoose');

const BouteillesModel = mongoose.model(
    "mycave",
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        cepage: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    "bouteilles"
);

module.exports = { BouteillesModel };
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saucerSchema = Schema({
    name: String,
    description: String,
    ingredients: String,
    price: Number,
    photoUrl: String
});

module.exports = mongoose.model('saucer', saucerSchema);

const express = require('express')

const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://?:?@cluster0-ywvxt.mongodb.net/react-estacionamento?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = app
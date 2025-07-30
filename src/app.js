const express = require('express')
const authroter = require('../src/router/auth.router')

const app = express()
app.use(express.json())

app.use('/auth',authroter)

module.exports = app
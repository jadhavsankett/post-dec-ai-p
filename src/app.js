const express = require('express')
const authroter = require('../src/router/auth.router')
const cookieparser = require('cookie-parser') // require the app.js 

const app = express()
app.use(cookieparser())  //imp step , calling the before the (express.json middlewere) 
app.use(express.json())



app.use('/api/auth',authroter)

module.exports = app
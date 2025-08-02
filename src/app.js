const express = require('express')
const authrouter = require('../src/router/auth.router')
const postrouter = require('../src/router/post.router')
const cookieparser = require('cookie-parser') // require the app.js 



const app = express()
app.use(cookieparser())  //imp step , calling the before the (express.json middlewere) 
app.use(express.json())


app.use('/api/auth',authrouter)
app.use('/api/post',postrouter)

module.exports = app
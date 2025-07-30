//auth routes file use for routes kon konse hay isaliya kam aato hay  
const express = require('express')
const {registerController , loginController} = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)

module.exports = router
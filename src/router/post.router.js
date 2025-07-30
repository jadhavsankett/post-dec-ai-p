const express = require('express')
const authmiddleware = require('../middlewares/auth.middlewares')
const router = express.Router()
const multer = require('multer')
const createPostController = require('../controllers/post.controller')


const upload = multer({storage:multer.memoryStorage()})

// api/post => protected api => fully protected post like user login nahi kar oo post nahi create kar sakta
router.post('/',
    authmiddleware,
    upload.single('image'),
    createPostController
)


module.exports = router
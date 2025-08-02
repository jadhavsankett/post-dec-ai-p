const express = require('express')
const authMiddleware = require('../middlewares/auth.middlewares')
const router = express.Router()
const { createPostController } = require('../controllers/post.controller')
const multer = require('multer')


const upload = multer({storage:multer.memoryStorage()})

// api/post => protected api => fully protected post like user login nahi kar oo post nahi create kar sakta
router.post('/',
    authMiddleware,
    upload.single('image'),
    createPostController
)


module.exports = router
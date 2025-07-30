const express = require('express')
const usermodel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/register',async(req , res)=>{
    const {username , password} = req.body

    const isuserexist = await usermodel.findOne({
        username
    })

    if(!isuserexist){
        return res.status(409).json({
            message:'user is the alredy exist'
        })
    }

    const user = await usermodel.create({
        username ,
        password
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie('idtoken',token)

    res.status(201).json({
        message:'user register successfully',
        user
    })

})




module.exports = router
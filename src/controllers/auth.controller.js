//api ke andar kay hoga or uske undar ka logic likhane keliya kam aata hay 
require('dotenv').config()
const usermodel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

async function registerController(req , res) {
    const {username , password} = req.body;

    const isuseralredyexist = await usermodel.findOne({
        username
    }) 

    if(isuseralredyexist){
        return res.status(400).json({
            message:'user is alredy exist'
        })
    }

    const user = await usermodel.create({
        username,
        password:await bcryptjs.hash(password,10) //this line denoted the bcrypt the password like this formate  (kshdhsdhfhsdfsd)
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie('idpass',token)

    res.status(201).json({
        message:'register user successfully'
    })
}

async function loginController(req , res) {
    const {username ,password} = req.body;

    const user = await usermodel.findOne({
        username
    })

    if(!user){
        return res.status(400).json({
            message:'use not found'
        })
    }

    const ispasswordvalid = await bcryptjs.compare(password , user.password)  //compare

    if(!ispasswordvalid){
        return res.status(400).json({
            message:'invalid password! enter the valid password'
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie('idpass',token)

    res.status(200).json({
        message:'login successfully',
        user:{
            username:user.username,
            id:user._id
        }
    })
}


module.exports = {
    registerController,
    loginController
}
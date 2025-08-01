const mongoose = require('mongoose')


const userschema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usermodel = new mongoose.model('user',userschema)


module.exports = usermodel
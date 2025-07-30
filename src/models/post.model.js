const mongoose = require('mongoose')


const postschema = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const postmodel = new mongoose.model('post',postschema)


module.exports = postmodel
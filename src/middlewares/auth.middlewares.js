const jwt = require('jsonwebtoken')
const usermodel = require('../models/user.model')


async function authmiddleware(req , res , next) {
    const token = req.cookies.token      

    if(!token){      //token nahi hay to this step run now 
        return res.status(401).json({
            message:'unauthorized access! please login first'
        })
    }

    //this step verified the token 
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)

        const user = await usermodel.findOne({
            _id:decoded.id
        })

        req.user = user;

        next()  //requst aage ja yegi 
    }
    catch(err){
     return res.status(401).json({
        message:'invalid token , please login again'
     })
    }
}


module.exports = authmiddleware
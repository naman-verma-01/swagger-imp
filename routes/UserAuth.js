const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require("../models/User");
const authen = require("../services/UserLoginJWT.js")


router.get("/",async (req,res)=>{

    const jwt_user = await authen(req.body.token)
    console.log(jwt_user)
    res.json(jwt_user)
})

//function authen(req,res,next){
//    const user_token = req.body.token;
//
//    jwt.verify(user_token,process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
//            if(err) return res.sendStatus(403)
//            req.user = user;
//            next()
//    })
//}


module.exports = router


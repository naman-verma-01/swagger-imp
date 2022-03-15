const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require('dotenv').config()

router.get("/", async (req, res) => {
    const usern = await req.body.username;
    const pas = req.body.password;
    const ne = await User.findAll({
                raw: true,
                where: {
                    username: usern
                }
            });
            
    jwt_user = {user: usern,pass: pas};
        
    const accesstoken = jwt.sign(jwt_user, process.env.ACCESS_TOKEN_SECRET)
    if (!ne[0]){
        res.json({"Status":"User Not Found"})
    }
    else{
        if(ne[0].password == pas){
            res.json({"Status" : "User Authenticated","acess_token": accesstoken})
        }
        else{
            res.json({"Status" : "Password Not matched"})
        }
    }
})


module.exports = router

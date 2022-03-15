const jwt = require("jsonwebtoken");
require('dotenv').config()


const authen = (user_token)=> {
    
    console.log("INside Jwt auths")
    jwt.verify(user_token,process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            console.log("INside Jwt auths1 ")
            if(err) return res.sendStatus(403)
            else{
                console.log("INside Jwt auths2")
                console.log(user)
                console.log("INside Jwt auths3")
                return user
                
            }
            
            
    })
}


module.exports = authen;
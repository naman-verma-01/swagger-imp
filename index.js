require('dotenv').config()
const express = require("express");
const User = require("./models/User");
const sequelize = require("./services/Connection");
const bodyParser = require('body-parser');
const app = express();
const jwt = require("jsonwebtoken");

const api_doc = require('./routes/UserRoute.js')
const login = require("./routes/UserLogin.js")
const signup = require("./routes/UserSignUp.js")
const authenticate = require("./routes/UserAuth.js")

app.use(bodyParser.json());
app.use(express.json());
app.use('/', api_doc)
app.use("/login",login)
app.use("/signup",signup)
app.use("/authenticate",authenticate)

const port = 8000;

app.listen(process.env.PORT || port, () => console.log("server started on port " + port));


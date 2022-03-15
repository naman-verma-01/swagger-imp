const express = require('express')
const router = express.Router()
const User = require("../models/User");

router.post("/:username/:password/:email", async (req, res) => {
    const username1 = req.params.username;
    const password1 = req.params.password;
    const email1 = req.params.email;
    await User.create({ username: username1, password: password1, email: email1 })

    res.json({ "Status": "DONE" })
})


module.exports = router

const express = require('express');
const router = express.Router();
const signupTemplates = require('../models/SignupModels.js');

router.post('/signup', (req,res) => {
    const signedupUser= new signupTemplates({
        fullname:req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    signedupUser.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
    res.status(200).send({msg: "Server is up and running"});
    console.log({msg: "Server up and running"})
})

module.exports = router;
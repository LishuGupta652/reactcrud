const express = require('express');
const router = express.Router();
const signupTemplates = require('../models/SignupModels.js');

router.get('/',(req, res) => {
    res.status(200).send({msg: "Hey there beautiful user!"});
})

router.get('/signin', (req, res) => {
    res.send({TODO: "YET TO IMPLEMENT"})
})
router.get('/signup',(req,res) => {
    res.send({msg: "YOu can be confused forever"})
})
router.post('/signup', (req,res) => {
    const signedupUser= new signupTemplates({
        fullName:req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    signedupUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({err: err})
        console.log(err)
    })
   
})

module.exports = router;
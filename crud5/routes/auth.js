const router = require('express').Router();


// route : /api/user/register
router.post('/register',  (req,res) => {
    res.send('Register');
})

// route : /api/user/login
router.get('/login', (req,res) => {
    res.send("login")
})

module.exports = router;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const signupRoutes = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("MONGO ATLAS LIVE !!🔥"));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/', (req,res) => {
    res.send({hitpont: '/api/'})
})
app.use('/api/', signupRoutes)
app.listen(PORT ,() => console.log(`Live on https://localhost:${PORT}`));
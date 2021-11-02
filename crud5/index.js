const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');

dotenv.config();

// import routes 
const authRoutes = require("./routes/auth");

 
// Middleware 
app.use('/api/user', authRoutes);
app.get('/', (req,res) => {
    res.status(200).send({msg: "Server is up and running!"});
})


app.listen(PORT, () => console.log(`App live on https://localhost:${PORT}`))
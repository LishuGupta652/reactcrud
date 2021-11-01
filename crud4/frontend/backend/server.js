const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connnect()


app.listen(PORT ,() => console.log(`Live on https://localhost:${PORT}`));
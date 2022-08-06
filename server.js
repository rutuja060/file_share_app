const express = require('express');
const app = express();
const dotenv = require("dotenv")
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;
dotenv.config();
connectDB();


//Routes

app.use('/api/files', require('./routes/files'));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
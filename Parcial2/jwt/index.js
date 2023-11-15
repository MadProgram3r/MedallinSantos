const jwt = require('jsonwebtoken');
const express = require('express');
const authRouter = require('./auth.routes');
const dotenv = require('dotenv');



const app = express()
app.use(express.json());
app.use('/auth',authRouter)

app.listen(8082,(req,res)=>{
    console.log("Servidor express escuchando")
});
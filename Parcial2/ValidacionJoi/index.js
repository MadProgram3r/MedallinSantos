const express = require('express');
const Validator = require('./validacion');
const {registroSchema} = require("./schemas/registro");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/alumno",Validator(registroSchema),(req,res)=>{
    res.send('Bienvenido '+req.body.email);
 });

app.listen(8080, (req,res)=>{ 
    console.log("Server is listen");
})

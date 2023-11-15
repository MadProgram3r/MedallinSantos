const express = require('express');
const fs     = require('fs');
const path   = require('path');
const https = require('https');
const app = express();
app.use(express.json());
app.use(express.urlencoded())

const opciones = {
    key : fs.readFileSync(path.join(__dirname,'Certificado/key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'Certificado/cert.pem'))
}

app.get("/prueba", (req, res) => {
    res.json({Mensaje:'Funcionando'})
});

/*app.listen(8082,(req,res)=>{
    console.log("Servidor express escuchando")
});*/

https.Server(opciones,app).listen(8082, (req,res) =>{
    console.log('Funcionando en 8082');
})
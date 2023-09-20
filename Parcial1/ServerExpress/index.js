const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/alumnos/:carrera",(req,res)=>{
    res.send("Hola alumno de "+req.params.carrera);
 });

app.post("/alumno",(req,res)=>{
    res.send('Bienvenido '+req.body['Nombre']);
 });

app.get("/materia",(req,res) => {
res.send('Bienvenido a '+req.query.materia);
});

app.get("/alumnos", (req,res)=>{
    res.send("Hola alumnos");
});

app.listen(8080, (req,res)=>{ 
    console.log("Server is listen");
})

const express = require('express');
const morgan = require('morgan');
const fs     = require('fs');
const path   = require('path');
const mysql = require('mysql2/promise');
const { json } = require('body-parser');
const { query } = require('express');
var cors = require('cors');
const app = express();

let objeto = {  Nombre : '',
                Precio : '',
                Existencias : '',
                Tipo: ''}

var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})
app.use(morgan('combined', {stream: accessLogStream}));

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/ServidorExpress",(req,res)=>{
    res.json({respuesta:"Contestando"})
});

app.get("/medicamentos", (req, res) => {
    mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'medicalsearch' })
        .then(conn => conn.query('SELECT * from medicamentos'))
        .then(([rows, fields]) => res.json(rows));
});

app.get("/farmacias", (req, res) => {
    mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'medicalsearch' })
        .then(conn => conn.query('SELECT * from farmacias'))
        .then(([rows, fields]) => res.json(rows));
});

app.get("/farmacias/:id", (req, res) => {
    mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'medicalsearch' })
        .then(conn => conn.query('SELECT * from farmacias where IdFarmacia = '+req.params.id))
        .then(([rows, fields]) => res.json(rows));
});

app.delete("/medicamentos", (req, res) => {
    mysql.createConnection({host:'localhost', user:'root', password:'', database:'medicalsearch'})
        .then(conn => conn.query('DELETE FROM medicamentos WHERE IdMedicamento = '+req.query.id))
        .then(([rows, fields]) => {
            if (rows.affectedRows) {
                res.json({Mensaje:"Registros borrados"});
            }else{
                res.json({Mensaje:"Nada se borro"})
            }
        })
});

app.post("/medicamentos", (req, res) => {
    const Nombre = req.body['Nombre'];
    const Precio = req.body['Precio'];
    const IdSucursal = req.body['IdSucursal'];
    const Tipo = req.body['Tipo'];
    const Existencias = req.body['Existencias'];

    // Verificar que los campos requeridos estén presentes
    if (!Nombre || !Precio || !IdSucursal || !Tipo || Existencias === undefined) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    // Verificar que Existencias sea un número válido
    if (isNaN(Existencias)) {
        return res.status(400).json({ error: "Existencias debe ser un número válido." });
    }

    // Conectar a la base de datos y realizar la inserción
    mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'medicalsearch' })
        .then(conn => conn.query("INSERT INTO Medicamentos (IdSucursal, Nombre, Precio, Existencias, Tipo) VALUES (?,?,?,?,?)", [IdSucursal, Nombre, Precio, Existencias, Tipo]))
        .then(([rows, fields]) => {
            if (rows.affectedRows) {
                res.status(201).json({message : "Medicamento agregado con exito"});
            } else {
                res.status(500).json({error : "No se pudo agregar el medicamento"});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Error interno del servidor." });
        });
});

app.patch("/medicamentos", (req,res) => {
    result = req.body;
    var query = 'UPDATE medicamentos SET ';
    var where = " WHERE IdMedicamento = "+req.query.id;
    var values = '';
    Object.keys(result).forEach(element => {
        if (!Number.isInteger(result[element])) {
            values = values + element + ' = "' + result[element] + '", ';
        }else{
            values = values + element + ' = ' + result[element] + ', ';
        }
        
    })
    console.log(values);
    query = query + values.substring(0 , values.length -2) + where;
    mysql.createConnection({host:'localhost', user:'root', password:'', database:'medicalsearch'})
        .then(conn => conn.query(query))
        .then(([rows, fields]) => {
            if (rows.affectedRows) {
                res.json({Mensaje:"Registros actualizados"});
            }else{
                res.json({Mensaje:"Nada se actualizo"})
            }
        })
})

app.post("/ServidorExpress",(req,res)=>
{res.send("Servidor express contestando a peticion GET")
});

app.listen(8080,(req,res)=>{
    console.log("Servidor express escuchando")
});
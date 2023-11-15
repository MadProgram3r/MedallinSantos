const express = require('express');
const { query, validationResult, checkSchema } = require('express-validator');
const validacion = require('./validacion');
const app = express();


app.post("/prueba",validacion,
    (req, res) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
            return res.send(`Hello, ${req.query.person}!`)
        }
        res.send({ errors: result.array() });
    })

app.listen(8080, () => {
    console.log('Servidor listo en el puerto 8080');
})
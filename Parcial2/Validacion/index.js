const express = require('express');
const { query, validationResult, check } = require('express-validator');
const app = express();

const validarUsuario = [
    check('person', "Falto el campo person").notEmpty(),
    check('email', "Falto el campo email").isEmail()
];

app.post("/prueba",
    query('person', "Falto el campo person").notEmpty(),
    check('email',"Falto el campo email").isEmail(),
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
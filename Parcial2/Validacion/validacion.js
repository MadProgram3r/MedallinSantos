const { checkSchema } = require("express-validator");

const validacionUsuario = checkSchema({
    'person': {notEmpty:true,errorMessage:'El campo person no puede ser vacio'},
    'email': {isEmail:true, errorMessage:'El campo no es un email'},
    'password': {notEmpty:true,errorMessage:'Minimo 8 caracteres',isLength:{options:{min:8, max:32}}}
    });

module.exports = validacionUsuario;
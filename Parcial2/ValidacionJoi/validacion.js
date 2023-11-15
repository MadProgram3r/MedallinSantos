const Validator = require("./schemas/registro");
const Joi = require('joi')
const createHttpError = require('http-errors')

const validation = (schema) => {
    let joiValidation = (req,res,next)=>{
        let {error} = schema.validate(req.body,{abortEarly:false});
        console.log(error);
        if (error) {
            let {details} = error;
            res.status(422).json({error:details});
        }else{
            next();
        }
    }
    return joiValidation;
};
module.exports = validation;
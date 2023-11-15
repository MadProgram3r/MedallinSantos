const Joi = require("joi");

module.exports = {
    registroSchema: Joi.object({
        email: Joi.string()
            .email()
            .required(),
        
    })
}
const Joi = require('joi');

exports.Currency = (body) => {
    const schema = Joi.object({
        Code: Joi.string().required(),
        Description: Joi.string().required(),
    });
    return schema.validate(body);
};

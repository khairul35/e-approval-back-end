const CustomError = require('../utils/error');

exports.valid = (validator) => {
    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) throw new CustomError(400, error.details[0].message);
        next();
    };
};
exports.errorMiddleware = (error, req, res, next) => {
    const status = error.status ?? 500;
    const message = status === 500 ? 'Kindly Contact our technical support.' : error.message;
    console.log({ message, stack: error.stack, user: req.user, body: req.body });
    return res.status(status).send({ message, stack: error.stack });
};

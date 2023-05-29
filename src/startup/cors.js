const option = (req, callback) => {
    corsOption = { origin: true, credentials: true };
    callback(null, corsOption);
};

exports.corsOption = option;

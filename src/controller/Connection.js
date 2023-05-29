const XeroServices = require('../services/Xero');
const AuthRepository = require('../repository/AuthenticationRepository');

exports.findAllConnection = async (req, res, next) => {
    try {
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const po = await XeroServices.findAllConnection(xeroRefreshToken);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};
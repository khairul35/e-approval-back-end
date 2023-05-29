const XeroServices = require('../services/Xero');
const AuthRepository = require('../repository/AuthenticationRepository');

exports.findCurrencies = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const currencies = await XeroServices.findCurrencies(xeroRefreshToken, tenantId);
        return res.send(currencies);
    } catch (err) {
        return next(err);
    }
};

exports.createCurrency = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const currencies = await XeroServices.addCurrency(xeroRefreshToken, tenantId, req.body);
        return res.send(currencies);
    } catch (err) {
        return next(err);
    }
};

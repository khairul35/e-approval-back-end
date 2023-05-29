const XeroServices = require('../services/Xero');
const AuthRepository = require('../repository/AuthenticationRepository');

exports.findAllContact = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const contacts = await XeroServices.findAllContact(xeroRefreshToken, tenantId);
        return res.send(contacts);
    } catch (err) {
        return next(err);
    }
};

exports.createContact = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const contacts = await XeroServices.createContact(xeroRefreshToken, tenantId, req.body);
        return res.send(contacts);
    } catch (err) {
        return next(err);
    }
};

exports.updateContact = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const { contactId } = req.params;
        const contacts = await XeroServices.updateContact(xeroRefreshToken, tenantId, contactId, req.body);
        return res.send(contacts);
    } catch (err) {
        return next(err);
    }
};

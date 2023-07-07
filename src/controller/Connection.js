const XeroServices = require('../services/Xero');
const AuthRepository = require('../repository/AuthenticationRepository');
const ConnectionRepository = require('../repository/ConnectionRepository');

exports.findAllConnection = async (req, res, next) => {
    try {
        const { xeroRefreshToken, username } = await AuthRepository.findCurrentUser(req);
        const connections = await ConnectionRepository.findAllTenantByUsername(username);
        const xeroConnections = await XeroServices.findAllConnection(xeroRefreshToken);
        const result = [];
        for (const connection of connections) {
            const exist = xeroConnections.filter(e => e.tenantId == connection.tenantId).length > 0 ? true : false;
            if (exist) {
                result.push(connection);
            }
        }
        return res.send(result);
    } catch (err) {
        return next(err);
    }
};

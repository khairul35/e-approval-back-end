const jwt = require('jsonwebtoken');
const jwtsk = 'secret key';
const bcrypt = require('bcrypt');
const XeroServices = require('../services/Xero');
const ConnectionRepository = require('../repository/ConnectionRepository');
const repository = require('../repository/AuthenticationRepository');
const CustomError = require('../utils/error');
const Xero = require('../services/Xero');

exports.signUp = async (req, res, next) => {
    try {
        const { username, password, name } = req.body;
        /** Check if username is exists */
        const user = await repository.findUserByUsername(username);
        if (user.id) throw new CustomError(409, 'Username has been exist');

        const hash = await bcrypt.hash(password, 10);
        await repository.signUp({ username, password: hash, name });
        return res.send('Account created successfully');
    } catch (err) {
        return next(err);
    }
}

exports.signIn = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        /** Check if username is exists */
        const user = await repository.findUserByUsername(username);
        if (!user.id) throw new CustomError(404, 'Username not exist');

        /** Check if password is match or not */
        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new CustomError(400, 'Password not match');
        
        const token = jwt.sign({ username }, jwtsk);
        return res.send({
            accessToken: token,
        });
    } catch (err) {
        return next(err);
    }
};

exports.registerXero = async (req, res, next) => {
    try {
        const { access_token, refresh_token } = await Xero.generateToken(req.query.code);
        const { id } =  await repository.findCurrentUser(req);

        const xeroConnections = await XeroServices.findAllConnection(refresh_token);
        const result = [];
        for (const connection of xeroConnections) {
            // check whether tenant has been registered previously or not
            const tenant = await ConnectionRepository.findTenantByTenantId(connection.tenantId);
            if (!tenant.tenantId) {
                await ConnectionRepository.registerTenant(connection.tenantId, connection.id, connection.tenantName, connection.tenantType, access_token, refresh_token, connection.createdDateUtc);
            }
            await ConnectionRepository.registerTenantUserAsAdmin(tenant.tenantId, id);
            result.push(tenant);
        }
        return res.send(result);
    } catch (err) {
        return next(err);
    }
};

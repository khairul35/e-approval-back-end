const Repository = require('../repository/UserRepository');
const AuthRepository = require('../repository/AuthenticationRepository')

exports.findAllUser = async (req, res, next) => {
    try {
        const { tenantId } = await AuthRepository.findCurrentUser(req);
        const  users = await Repository.findAllUserByTenantId(tenantId);
        return res.send(users);
    } catch (err) {
        return next(err);
    }
};

exports.findCurrentUser = async (req, res, next) => {
    try {
        const user = await AuthRepository.findCurrentUser(req);
        return res.send(user);
    } catch (err) {
        return next(err);
    }
}

exports.setActiveTenant = async (req, res, next) => {
    try {
        const { tenantId } = req.body;
        const { username } = await AuthRepository.findCurrentUser(req);
        return res.send(await Repository.setActiveTenant(tenantId, username));
    } catch (err) {
        return next(err);
    }
};

exports.updateRole = async (req, res, next) => {
    try {
        const { roleId, userId } = req.body;
        const { tenantId } = await AuthRepository.findCurrentUser(req);
        return res.send(await Repository.updateRole(roleId, userId, tenantId));
    } catch (err) {
        return next(err);
    }
};

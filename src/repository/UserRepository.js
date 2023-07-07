const query = require('./UserQuery');
const jwt = require('jsonwebtoken');
const { request } = require('./index');
const { User } = require('../mapper/User');

exports.findAllUserByTenantId = async (tenantId) => {
    return (await request(query.findAllUserByTenantId(tenantId))).map(User);
};

exports.setActiveTenant = async (tenantId, username) => {
    await request(query.setActiveTenant(tenantId, username));
    return 'Tenant succesfully set as active';
};

exports.updateRole = async (roleId, userId, tenantId) => {
    await request(query.updateRole(roleId, userId, tenantId));
    return 'Role successfully update';
}

const query = require('./ConnectionQuery');
const jwt = require('jsonwebtoken');
const { request } = require('./index');
const { Tenant } = require('../mapper/Tenant');

exports.findAllTenantByUsername = async (username) => {
    return (await request(query.findAllTenantByUsername(username))).map(Tenant);
};

exports.findTenantByTenantId = async (tenantId) => {
    return Tenant(await request(query.findTenantByTenantId(tenantId), true));
};

exports.registerTenant = async (tenantId, id, tenantName, tenantType, accessToken, refreshToken, createdDate) => {
    return await request(query.registerTenant(tenantId, id, tenantName, tenantType, accessToken, refreshToken, createdDate));
};

exports.registerTenantUserAsAdmin = async (tenantId, userId) => {
    return await request(query.registerTenantUserAsAdmin(tenantId, userId));
};

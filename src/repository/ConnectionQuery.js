const { qstring, qbit, qint } = require('./index');

exports.findAllTenantByUsername = (username) => {
    return `
        SELECT b.id, a.user_id, a.role_id, b.xero_id, b.tenant_id,
        b.tenant_name, b.tenant_type, b.xero_access_token, b.xero_refresh_token,
        b.modified_date, b.created_date
        FROM TenantUser a
        INNER JOIN Tenant b ON b.id = a.id
        INNER JOIN users c ON c.id = a.user_id
        WHERE c.username = ${qstring(username)}`;
};

exports.findTenantByTenantId = (tenantId) => {
    return `
        SELECT b.id, a.user_id, a.role_id, b.xero_id, b.tenant_id,
        b.tenant_name, b.tenant_type, b.xero_access_token, b.xero_refresh_token,
        b.modified_date, b.created_date
        FROM Tenant b
        LEFT JOIN TenantUser a ON b.id = a.id
        LEFT JOIN users c ON c.id = a.user_id
        WHERE b.tenant_id = ${qstring(tenantId)}`;
};


exports.registerTenant = (tenantId, id, tenantName, tenantType, accessToken, refreshToken, createdDate) => {
    return `
        INSERT INTO Tenant (tenant_id, xero_id, tenant_name, tenant_type,
        xero_access_token, xero_refresh_token, created_date) VALUES
        (${qstring(tenantId)}, ${qstring(id)}, ${qstring(tenantName)},
        ${qstring(tenantType)}, ${qstring(accessToken)}, ${qstring(refreshToken)},
        ${qstring(createdDate)})`;
};

exports.registerTenantUserAsAdmin = (tenantId, userId) => {
    return `
        INSERT INTO TenantUser (tenant_id, user_id, role_id) VALUES
        (${qstring(tenantId)}, ${qint(userId)}, 1)`
}

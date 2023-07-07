const { qstring, qbit, qint } = require('./index')

exports.signUp =  ({ username, password, name }) => {
    return `INSERT INTO users
        (username, password, name) VALUES
        (${qstring(username)}, ${qstring(password)}, ${qstring(name)})`;
};

exports.findUserByUsername = (username) => {
    return `
        SELECT a.id, a.username, a.password, a.name, b.role_id, c.tenant_id, c.tenant_name, c.xero_access_token, c.xero_refresh_token
        FROM users a
        LEFT JOIN TenantUser b ON b.user_id = a.id  AND a.active_tenant = b.tenant_id
        LEFT JOIN Tenant c ON c.tenant_id = b.tenant_id WHERE a.username=${qstring(username)}`;
};

exports.insertXeroToken = (tenantId, accessToken, refreshToken) => {
    return `UPDATE Tenant SET
        xeroAccessToken=${qstring(accessToken)},
        xeroRefreshToken=${qstring(refreshToken)}
        WHERE tenant_id=${qstring(tenantId)}`
};

exports.updateXeroRefreshToken = (oldToken, newToken, accessToken) => {
    return `UPDATE Tenant SET xero_refresh_token=${qstring(newToken)},
        xero_access_token = ${qstring(accessToken)}
        WHERE xero_refresh_token=${qstring(oldToken)}`;
};


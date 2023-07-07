const { qstring, qbit, qint } = require('./index');

exports.findAllUserByTenantId = (tenantId) => {
    return `
        SELECT a.id, a.username, a.name, b.role_id
        FROM users a
        INNER JOIN TenantUser b ON b.user_id = a.id
        WHERE b.tenant_id = ${qstring(tenantId)}`;
};

exports.setActiveTenant = (tenantId, username) => {
    return `UPDATE users
        SET active_tenant = ${qstring(tenantId)}
        WHERE username = ${qstring(username)}`;
};

exports.updateRole = (roleId, userId, tenantId) => {
    return `
        UPDATE TenantUser
        SET role_id = ${qint(roleId)}
        WHERE tenant_id = ${qstring(tenantId)}
        AND user_id = ${qint(userId)}`;
};

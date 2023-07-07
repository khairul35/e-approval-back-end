exports.User = (data) => {
    return {
        id: data.id || 0,
        username: data.username || null,
        password: data.password || null,
        name: data.name || null,
        roleId: data.role_id || 0,
        role: getRoles(data.role_id),
        tenantId: data.tenant_id || null,
        tenantName: data.tenant_name || null,
        xeroAccessToken: data.xero_access_token || null,
        xeroRefreshToken: data.xero_refresh_token || null,
    };
};

const getRoles = (id) => {
    if (!id) return null;
    if (id == 1) return 'Super Admin';
    if (id == 2) return 'Supervisor';
    if (id == 3) return 'Seller';
    return null;
};

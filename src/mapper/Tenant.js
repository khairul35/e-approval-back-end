exports.Tenant = (data) => {
    return {
        id: data.id || 0,
        userId: data.user_id || 0,
        roleId: data.role_id || 0,
        xeroId: data.xero_id || null,
        tenantId: data.tenant_id || null,
        tenantName: data.tenant_name || null,
        tenantType: data.tenant_type || null,
        xeroAccessToken: data.xero_access_token || null,
        xeroRefreshToken: data.xero_refresh_token || null,
        modifiedDate: data.modified_date || null,
        createdDate: data.created_date || null,
    };
};

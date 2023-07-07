exports.Product = (data) => {
    return {
        productId: data.ProductID || 0,
        description: data.Description || null,
        unitAmount: data.UnitAmount || 0.00,
        itemCode: data.ItemCode || null,
        category: data.Category || null,
        tenantId: data.tenant_id || 0,
    }
}
const { qstring, qbit, qint } = require('./index')

exports.findAllProducts = (tenantId) => {
    return `SELECT * FROM Products WHERE tenant_id = ${qstring(tenantId)}`;
};

exports.findProductById = (productId) => {
    return `SELECT * FROM Products WHERE ProductID=${qint(productId)}`;
};

exports.updateProduct = (productId, { description, unitAmount, itemCode, category }) => {
    return `UPDATE Products SET
        modified_date = NOW()
        ${description ? `, Description = ${qstring(description)}` : ''}
        ${unitAmount ? `, UnitAmount = ${unitAmount}` : ''}
        ${itemCode ? `, ItemCode = ${qstring(itemCode)}` : ''}
        ${category ? `, Category = ${qstring(category)}` : ''}
        WHERE ProductID = ${qint(productId)}
    `;
};

exports.createProduct = (tenantId, { description, unitAmount, itemCode, category }) => {
    return `INSERT INTO Products (Description, UnitAmount, ItemCode, Category, tenant_id, modified_date)
        VALUES (${qstring(description)}, ${qstring(unitAmount)}, ${qstring(itemCode)}, ${qstring(category)},
        ${qstring(tenantId)}, NOW())`;
};

exports.findCategory = (tenantId) => {
    return `SELECT * FROM Category WHERE tenant_id = ${qstring(tenantId)}`;
};

exports.createCategory = (tenantId, { category }) => {
    return `INSERT INTO Category (category, tenant_id) VALUES
        (${qstring(category)}, ${qstring(tenantId)})`;
};

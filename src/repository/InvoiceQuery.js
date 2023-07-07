const { qstring, qbit, qint } = require('./index')

exports.findAllInvoice = (tenantId, roleId, username) => {
    return `SELECT * FROM Invoices WHERE tenant_id = ${qstring(tenantId)}
        ${roleId == 1 ? '' : `AND created_by = ${username}`}`;
};

exports.findInvoiceById = (id) => {
    return `SELECT * FROM Invoices WHERE id = ${qint(id)}`;
};

exports.createInvoice = (tenantId, username, {
    type, contactId, date, dueDate, reference
}) => {
    return `
        INSERT INTO Invoices (type, contact_id, date, due_date, reference, status, created_by, tenant_id)
        VALUES (${qstring(type)}, ${qstring(contactId)}, ${qstring(date)}, ${qstring(dueDate)}, ${qstring(reference)}, 'AUTHORISED', ${qstring(username)}, ${qstring(tenantId)});
    `;
};

exports.outputInsertedID = () => {
    return 'SELECT LAST_INSERT_ID() AS id';
};

exports.deleteInvoiceLineItems = (invoiceId) => {
    return `DELETE FROM InvoiceLineItems WHERE invoice_id=${qint(invoiceId)}`;
};

exports.createInvoiceLineItem = (invoiceId, { description, quantity, unitAmount, lineAmount, category, discountRate }) => {
    return `INSERT INTO InvoiceLineItems (invoice_id, description, quantity, unit_amount, line_amount, category, discountRate)
        VALUES (${qint(invoiceId)}, ${qstring(description)}, ${qint(quantity)},
        ${qstring(unitAmount)}, ${qstring(lineAmount)}, ${qstring(category)},
        ${qstring(discountRate)});
    `;
};


exports.updateInvoice = (id, {
    type, contactId, date, dueDate, reference
}) => {
    return `
        UPDATE Invoices
        SET type = ${qstring(type)},
        contact_id = ${qstring(contactId)},
        date = ${qstring(date)},
        due_date = ${qstring(dueDate)},
        reference = ${qstring(reference)}
        WHERE id = ${qint(id)};
    `;
};

exports.updateXeroInvoiceId = (id, xeroInvoiceId) => {
    return `UPDATE Invoices SET xero_invoice_id=${qstring(xeroInvoiceId)} WHERE id=${qint(id)}`
};

exports.approveInvoice = (id, username) => {
    return `UPDATE PurchaseOrders
        SET IsApproved = 1,
        approved_by = ${qstring(username)},
        approved_date = CURRENT_TIMESTAMP()
        WHERE id = ${id}`;
};


exports.updateXeroInvoiceId = (id, invoiceId) => {
    return `UPDATE Invoices SET xero_invoice_id=${qstring(invoiceId)} WHERE id = ${qint(id)}`
};

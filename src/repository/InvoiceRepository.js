const { Invoice } = require('../mapper/Invoice');
const { InvoiceLineItem } = require('../mapper/InvoiceLineItem');
const query = require('./InvoiceQuery');
const { request } = require('./index');

const findAllInvoice = async (tenantId, roleId, username) => {
    const invoices = (await request(query.findAllInvoice(tenantId, roleId, username))).map(Invoice);
    for (let invoice of invoices) {
        let subTotal = 0;
        let total = 0;
        invoice.lineItems = await findAllLineItemsByInvoiceId(invoice.id);
        for (let item of invoice.lineItems) {
            subTotal += Number(item.unitAmount);
            total += Number(item.unitAmount - ((100 - item.discountRate) / 100));
        }
        invoice.subTotal = subTotal;
        invoice.total = total;
    }
    return invoices
};
exports.findAllInvoice = findAllInvoice;

const findInvoiceById = async (id) => {
    const invoice = Invoice(await request(query.findInvoiceById(id), true));
    let subTotal = 0;
    let total = 0;
    invoice.lineItems = await findAllLineItemsByInvoiceId(invoice.id);
    for (let item of invoice.lineItems) {
        subTotal += Number(item.unitAmount);
        total += Number(item.unitAmount - ((100 - item.discountRate) / 100));
    }
    invoice.subTotal = subTotal;
    invoice.total = total;
    return invoice
};
exports.findInvoiceById = findInvoiceById;

const findAllLineItemsByInvoiceId = async (invoiceId) => {
    return (await request(query.findAllLineItemsByInvoiceId(invoiceId))).map(InvoiceLineItem);
};

exports.createInvoice = async (tenantId, username, body) => {
    await request(query.createInvoice(tenantId, username, body));
    const { id } = await request(query.outputInsertedID(), true);
    for (const lineItem of body.lineItems) {
        await request(query.createInvoiceLineItem(id, lineItem));
    }
    return await findInvoiceById(id);
};

exports.updateInvoice = async (id, body) => {
    await request(query.updateInvoice(id, body));
    await request(query.deleteInvoiceLineItems(id));
    for (const lineItem of body.lineItems) {
        await request(query.createInvoiceLineItem(id, lineItem));
    }
    return await findInvoiceById(id);
};

exports.updateXeroInvoiceId = async (id, xeroInvoiceId) => {
    await request(query.updateXeroInvoiceId(id, xeroInvoiceId));
};

exports.approveInvoice = async (id, username) => {
    await request(query.approveInvoice(id, username));
    return await findInvoiceById(id);
};

const XeroServices = require('../services/Xero');
const Repository = require('../repository/InvoiceRepository');
const AuthRepository = require('../repository/AuthenticationRepository');

exports.findAllInvoice = async (req, res, next) => {
    try {
        const { tenantId, roleId, username } = await AuthRepository.findCurrentUser();
        const invoices = await Repository.findAllInvoice(tenantId, roleId, username);
        return res.send(invoices);
    } catch (err) {
        return next(err);
    }
};

exports.findInvoiceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const invoice = await Repository.findInvoiceById(id);
        return res.send(invoice);
    } catch (err) {
        return next(err);
    }
};

exports.createInvoice = async (req, res, next) => {
    try {
        const { username , tenantId } = await AuthRepository.findCurrentUser(req);
        const invoice = await Repository.createInvoice(tenantId, username, req.body);
        return res.send(invoice);
    } catch (err) {
        return next(err);
    }
};

exports.updateInvoice = async (req, res, next) => {
    try {
        const { xeroRefreshToken, tenantId } = await AuthRepository.findCurrentUser(req);
        const { id } = await req.params;
        const invoice = await Repository.updateInvoice(id, req.body);
        if (invoice.xeroInvoiceId) {
            let body = {};
            body.Type = invoice.type;
            body.Contact = { ContactID: invoice.contactId };
            body.Date = invoice.date;
            body.DueDate = invoice.dueDate;
            body.Reference = invoice.reference;
            body.Status = 'AUTHORISED';
            body.LineItems = invoice.lineItems.map((lineItem) => {
                return {
                    Description: lineItem.description,
                    Quantity: lineItem.quantity,
                    UnitAmount: lineItem.unitAmount,
                    TaxType: 'NONE',
                    LineAmount: lineItem.lineAmount,
                };
            });
            await XeroServices.updateInvoice(xeroRefreshToken, tenantId, body, invoice.xeroInvoiceId);
        }
        return res.send(invoice);
    } catch (err) {
        return next(err);
    }
};

exports.approveInvoice = async (req, res, next) => {
    try {
        const { xeroRefreshToken, username, tenantId } = await AuthRepository.findCurrentUser(req);
        const { id } = await req.params;
        const invoice = await Repository.approveInvoice(id, username);
        let body = {};
        body.Type = invoice.type;
        body.Contact = { ContactID: invoice.contactId };
        body.Date = invoice.date;
        body.DueDate = invoice.dueDate;
        body.Reference = invoice.reference;
        body.Status = 'AUTHORISED';
        body.LineItems = invoice.lineItems.map((lineItem) => {
            return {
                Description: lineItem.description,
                Quantity: lineItem.quantity,
                UnitAmount: lineItem.unitAmount,
                TaxType: 'NONE',
                LineAmount: lineItem.lineAmount,
            };
        });
        const xpo = await XeroServices.createInvoice(xeroRefreshToken, tenantId, body);
        await Repository.updateXeroInvoiceId(id, xpo.InvoiceID);
    } catch (err) {
        return next(err);
    }
};

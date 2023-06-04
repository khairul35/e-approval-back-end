const XeroServices = require('../services/Xero');
const Repository = require('../repository/PurchaseOrderRepository');
const AuthRepository = require('../repository/AuthenticationRepository');

exports.findAllPurchaseOrder = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const po = await Repository.findAllPurchaseOrder(tenantId);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};

exports.findPurchaseOrderByID = async (req, res, next) => {
    try {
        const { id } = await req.params;
        // const po = await XeroServices.findPurchaseOrderByID(id);
        const po = await Repository.findPurchaseOrderByID(id);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};

exports.createPurchaseOrder = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { username } = await AuthRepository.findCurrentUser(req);
        const po = await Repository.createPurchaseOrder(tenantId, username, req.body);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};

exports.updatePurchaseOrder = async (req, res, next) => {
    try {
        const { xeroRefreshToken } = await AuthRepository.findCurrentUser(req);
        const { id } = await req.params;
        const { tenantId } = req.query;
        const po = await Repository.updatePurchaseOrder(id, req.body);
        if (po.xeroPurchaseOrderID) {
            let body = {};
            body.PurchaseOrderNumber = po.PurchaseOrderNumber;
            body.DeliveryDate = po.DeliveryDate;
            body.LineAmountTypes = po.LineAmountTypes;
            body.Reference = po.Reference;
            body.BrandingThemeID = po.BrandingThemeID;
            body.CurrencyCode = po.CurrencyCode;
            body.Status = po.Status;
            body.DeliveryAddress = po.DeliveryAddress;
            body.AttentionTo = po.AttentionTo;
            body.Telephone = po.Telephone;
            body.DeliveryInstructions = po.DeliveryInstructions;
            body.ExpectedArrivalDate = po.ExpectedArrivalDate;
            body.Contact = { ContactID: po.ContactID }

            // Line Items
            body.LineItems = po.lineItems.map((lineItem) => {
                return {
                    ItemCode: lineItem.itemCode,
                    Description: lineItem.description,
                    UnitAmount: parseFloat(lineItem.unitAmount),
                    TaxType: lineItem.taxType,
                    AccountCode: lineItem.accountCode,
                    Tracking: lineItem.tracking,
                    Quantity: lineItem.quantity,
                    DiscountRate: parseFloat(lineItem.discountRate)
                };
            });
            await XeroServices.updatePurchaseOrder(xeroRefreshToken, tenantId, body, po.xeroPurchaseOrderID);
        }
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};

exports.approvePurchaseOrder = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const { xeroRefreshToken, username } = await AuthRepository.findCurrentUser(req);
        const { id } = await req.params;
        const po = await Repository.approvePurchaseOrder(id, username);
        let body = {};
        body.PurchaseOrderNumber = po.PurchaseOrderNumber;
        body.DeliveryDate = po.DeliveryDate;
        body.Date = po.CreatedDate;
        body.LineAmountTypes = po.LineAmountTypes;
        body.Reference = po.Reference;
        body.BrandingThemeID = po.BrandingThemeID;
        body.CurrencyCode = po.CurrencyCode;
        body.Status = po.Status;
        body.DeliveryAddress = po.DeliveryAddress;
        body.AttentionTo = po.AttentionTo;
        body.Telephone = po.Telephone;
        body.DeliveryInstructions = po.DeliveryInstructions;
        body.ExpectedArrivalDate = po.ExpectedArrivalDate;
        body.Contact = { ContactID: po.ContactID }

        // Line Items
        body.LineItems = po.lineItems.map((lineItem) => {
            return {
                ItemCode: lineItem.itemCode,
                Description: lineItem.description,
                UnitAmount: parseFloat(lineItem.unitAmount),
                TaxType: lineItem.taxType,
                AccountCode: lineItem.accountCode,
                Tracking: lineItem.tracking,
                Quantity: lineItem.quantity,
                DiscountRate: parseFloat(lineItem.discountRate)
            };
        });
        const xpo = await XeroServices.createPurchaseOrder(xeroRefreshToken, tenantId, body);
        await Repository.updateXeroPurchaseOrderID(id, xpo.PurchaseOrderID);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
};

exports.deletePurchaseOrder = async (req, res, next) => {
    try {
        const { id } = await req.params;
        const po = await XeroServices.deletePurchaseOrder(id, po);
        return res.send(po);
    } catch (err) {
        return next(err);
    }
}

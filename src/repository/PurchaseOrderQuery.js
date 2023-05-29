const { qstring, qbit, qint } = require('./index')

exports.findAllPurchaseOrder = (tenantId) => {
    return `SELECT * FROM PurchaseOrders WHERE tenantId = ${qstring(tenantId)}`;
};

exports.findPurchaseOrderByID = (id) => {
    return `SELECT * FROM PurchaseOrders WHERE PurchaseOrderID = ${qint(id)}`;
};

exports.createPurchaseOrder = (tenantId, username, {
        purchaseOrderNumber, deliveryDate, lineAmountTypes, reference,
        brandingThemeID, currencyCode, status, sentToContact, deliveryAddress,
        attentionTo, telephone, deliveryInstructions, expectedArrivalDate,
        currencyRate, subTotal, totalTax, total, totalDiscount, hasAttachments,
        contactID
    }) => {
    return `
        INSERT INTO highrule.PurchaseOrders
        (PurchaseOrderNumber, DeliveryDate, LineAmountTypes, Reference,
        BrandingThemeID, CurrencyCode, Status, SentToContact, DeliveryAddress,
        AttentionTo, Telephone, DeliveryInstructions, ExpectedArrivalDate,
        CurrencyRate, SubTotal, TotalTax, Total, TotalDiscount, HasAttachments,
        IsApproved, tenantId, ContactID, CreatedDate, CreatedBy)
        VALUES (${qstring(purchaseOrderNumber)}, ${qstring(deliveryDate)},
        ${qstring(lineAmountTypes)}, ${qstring(reference)}, ${qstring(brandingThemeID)},
        ${qstring(currencyCode)}, 'AUTHORISED', ${qint(sentToContact)}, ${qstring(deliveryAddress)},
        ${qstring(attentionTo)}, ${qstring(telephone)}, ${qstring(deliveryInstructions)},
        ${qstring(expectedArrivalDate)}, ${qint(currencyRate)}, ${qint(subTotal)},
        ${qint(totalTax)}, ${qint(total)}, ${qint(totalDiscount)}, ${qbit(hasAttachments)},
        0, ${qstring(tenantId)}, ${qstring(contactID)}, CURRENT_TIMESTAMP(), ${qstring(username)});
    `;
};

exports.outputInsertedID = () => {
    return 'SELECT LAST_INSERT_ID() AS id';
};

exports.findAllLineItemsByPOId = (POId) => {
    return `SELECT * FROM LineItems WHERE PurchaseOrderID = ${POId}`;
};

exports.insertLineItems = (poID, { description, quantity, unitAmount, itemCode,
    accountCode, taxType, discountRate, tracking, taxAmount, lineAmount }) => {
    return `INSERT INTO highrule.LineItems
        (PurchaseOrderID, Description, Quantity, UnitAmount, ItemCode,
        AccountCode, TaxType, DiscountRate, Tracking, TaxAmount, LineAmount)
        VALUES(${qint(poID)}, ${qstring(description)}, ${qint(quantity)},
        ${qint(unitAmount)}, ${qstring(itemCode)}, ${qstring(accountCode)},
        ${qstring(taxType)}, ${qint(discountRate)}, ${qstring(tracking)},
        ${qint(taxAmount)}, ${qint(lineAmount)});
    `;
};


exports.updatePurchaseOrder = (id, {
    purchaseOrderNumber, date, deliveryDate, lineAmountTypes, reference,
    brandingThemeID, currencyCode, status, sentToContact, deliveryAddress,
    attentionTo, telephone, deliveryInstructions, expectedArrivalDate,
    currencyRate, subTotal, totalTax, total, totalDiscount, hasAttachments,
}) => {
    return `
        UPDATE highrule.PurchaseOrders SET
            PurchaseOrderNumber = ${qstring(purchaseOrderNumber)},
            CreatedDate = ${qstring(date)},
            DeliveryDate = ${qstring(deliveryDate)},
            LineAmountTypes = ${qstring(lineAmountTypes)},
            Reference = ${qstring(reference)},
            BrandingThemeID = ${qstring(brandingThemeID)},
            CurrencyCode = ${qstring(currencyCode)},
            Status = 'AUTHORISED',
            SentToContact = ${qint(sentToContact)},
            DeliveryAddress = ${qstring(deliveryAddress)},
            AttentionTo = ${qstring(attentionTo)},
            Telephone = ${qstring(telephone)},
            DeliveryInstructions = ${qstring(deliveryInstructions)},
            ExpectedArrivalDate = ${qstring(expectedArrivalDate)},
            CurrencyRate = ${qint(currencyRate)},
            SubTotal = ${qint(subTotal)},
            TotalTax = ${qint(totalTax)},
            Total = ${qint(total)},
            TotalDiscount = ${qint(totalDiscount)},
            HasAttachments = ${qbit(hasAttachments)},
        WHERE PurchaseOrderID = ${qint(id)}`;
};

exports.approvePurchaseOrder = (id, username) => {
    return `UPDATE PurchaseOrders
        SET IsApproved = 1,
        ApprovedBy = ${qstring(username)},
        ApprovedDate = CURRENT_TIMESTAMP()
        WHERE PurchaseOrderID = ${id}`;
};


exports.updateXeroPurchaseOrderID = (id, xeroPurchaseOrderID) => {
    return `UPDATE PurchaseOrders SET xeroPurchaseOrderID=${qstring(xeroPurchaseOrderID)} WHERE PurchaseOrderID = ${qint(id)}`
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
class Element {
    static getAttributeTypeMap() {
        return Element.attributeTypeMap;
    }
}
exports.Element = Element;
Element.discriminator = undefined;
Element.attributeTypeMap = [
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    },
    {
        "name": "batchPaymentID",
        "baseName": "BatchPaymentID",
        "type": "string"
    },
    {
        "name": "bankTransactionID",
        "baseName": "BankTransactionID",
        "type": "string"
    },
    {
        "name": "creditNoteID",
        "baseName": "CreditNoteID",
        "type": "string"
    },
    {
        "name": "contactID",
        "baseName": "ContactID",
        "type": "string"
    },
    {
        "name": "invoiceID",
        "baseName": "InvoiceID",
        "type": "string"
    },
    {
        "name": "itemID",
        "baseName": "ItemID",
        "type": "string"
    },
    {
        "name": "purchaseOrderID",
        "baseName": "PurchaseOrderID",
        "type": "string"
    }
];
//# sourceMappingURL=element.js.map
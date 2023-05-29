"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceResponse = void 0;
class InvoiceResponse {
    static getAttributeTypeMap() {
        return InvoiceResponse.attributeTypeMap;
    }
}
exports.InvoiceResponse = InvoiceResponse;
InvoiceResponse.discriminator = undefined;
InvoiceResponse.attributeTypeMap = [
    {
        "name": "invoiceId",
        "baseName": "invoiceId",
        "type": "string"
    },
    {
        "name": "contact",
        "baseName": "contact",
        "type": "ContactResponse"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemResponse>"
    }
];
//# sourceMappingURL=invoiceResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditNoteResponse = void 0;
class CreditNoteResponse {
    static getAttributeTypeMap() {
        return CreditNoteResponse.attributeTypeMap;
    }
}
exports.CreditNoteResponse = CreditNoteResponse;
CreditNoteResponse.discriminator = undefined;
CreditNoteResponse.attributeTypeMap = [
    {
        "name": "creditNoteId",
        "baseName": "creditNoteId",
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
//# sourceMappingURL=creditNoteResponse.js.map
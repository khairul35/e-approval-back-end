"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrepaymentResponse = void 0;
class PrepaymentResponse {
    static getAttributeTypeMap() {
        return PrepaymentResponse.attributeTypeMap;
    }
}
exports.PrepaymentResponse = PrepaymentResponse;
PrepaymentResponse.discriminator = undefined;
PrepaymentResponse.attributeTypeMap = [
    {
        "name": "prepaymentId",
        "baseName": "prepaymentId",
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
//# sourceMappingURL=prepaymentResponse.js.map
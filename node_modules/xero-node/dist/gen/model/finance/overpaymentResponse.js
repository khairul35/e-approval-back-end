"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverpaymentResponse = void 0;
class OverpaymentResponse {
    static getAttributeTypeMap() {
        return OverpaymentResponse.attributeTypeMap;
    }
}
exports.OverpaymentResponse = OverpaymentResponse;
OverpaymentResponse.discriminator = undefined;
OverpaymentResponse.attributeTypeMap = [
    {
        "name": "overpaymentId",
        "baseName": "overpaymentId",
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
//# sourceMappingURL=overpaymentResponse.js.map
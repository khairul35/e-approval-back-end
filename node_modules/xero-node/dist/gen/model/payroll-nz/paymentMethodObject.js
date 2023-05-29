"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodObject = void 0;
class PaymentMethodObject {
    static getAttributeTypeMap() {
        return PaymentMethodObject.attributeTypeMap;
    }
}
exports.PaymentMethodObject = PaymentMethodObject;
PaymentMethodObject.discriminator = undefined;
PaymentMethodObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "PaymentMethod"
    }
];
//# sourceMappingURL=paymentMethodObject.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDelete = void 0;
class PaymentDelete {
    static getAttributeTypeMap() {
        return PaymentDelete.attributeTypeMap;
    }
}
exports.PaymentDelete = PaymentDelete;
PaymentDelete.discriminator = undefined;
PaymentDelete.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "Status",
        "type": "string"
    }
];
//# sourceMappingURL=paymentDelete.js.map
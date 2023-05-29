"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPayments = void 0;
class BatchPayments {
    static getAttributeTypeMap() {
        return BatchPayments.attributeTypeMap;
    }
}
exports.BatchPayments = BatchPayments;
BatchPayments.discriminator = undefined;
BatchPayments.attributeTypeMap = [
    {
        "name": "batchPayments",
        "baseName": "BatchPayments",
        "type": "Array<BatchPayment>"
    }
];
//# sourceMappingURL=batchPayments.js.map
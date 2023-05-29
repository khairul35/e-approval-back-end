"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPaymentDelete = void 0;
class BatchPaymentDelete {
    static getAttributeTypeMap() {
        return BatchPaymentDelete.attributeTypeMap;
    }
}
exports.BatchPaymentDelete = BatchPaymentDelete;
BatchPaymentDelete.discriminator = undefined;
BatchPaymentDelete.attributeTypeMap = [
    {
        "name": "batchPaymentID",
        "baseName": "BatchPaymentID",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "string"
    }
];
//# sourceMappingURL=batchPaymentDelete.js.map
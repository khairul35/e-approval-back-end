"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRecord = void 0;
class UsageRecord {
    static getAttributeTypeMap() {
        return UsageRecord.attributeTypeMap;
    }
}
exports.UsageRecord = UsageRecord;
UsageRecord.discriminator = undefined;
UsageRecord.attributeTypeMap = [
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "subscriptionId",
        "baseName": "subscriptionId",
        "type": "string"
    },
    {
        "name": "subscriptionItemId",
        "baseName": "subscriptionItemId",
        "type": "string"
    },
    {
        "name": "testMode",
        "baseName": "testMode",
        "type": "boolean"
    },
    {
        "name": "recordedAt",
        "baseName": "recordedAt",
        "type": "Date"
    },
    {
        "name": "usageRecordId",
        "baseName": "usageRecordId",
        "type": "string"
    },
    {
        "name": "pricePerUnit",
        "baseName": "pricePerUnit",
        "type": "number"
    },
    {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
    }
];
//# sourceMappingURL=usageRecord.js.map
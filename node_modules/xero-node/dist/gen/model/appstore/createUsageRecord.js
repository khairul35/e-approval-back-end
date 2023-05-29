"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsageRecord = void 0;
/**
* Data transfer object for public create usage end point
*/
class CreateUsageRecord {
    static getAttributeTypeMap() {
        return CreateUsageRecord.attributeTypeMap;
    }
}
exports.CreateUsageRecord = CreateUsageRecord;
CreateUsageRecord.discriminator = undefined;
CreateUsageRecord.attributeTypeMap = [
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Date"
    }
];
//# sourceMappingURL=createUsageRecord.js.map
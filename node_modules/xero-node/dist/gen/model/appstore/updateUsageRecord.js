"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsageRecord = void 0;
/**
* Data transfer object for public update usage end point
*/
class UpdateUsageRecord {
    static getAttributeTypeMap() {
        return UpdateUsageRecord.attributeTypeMap;
    }
}
exports.UpdateUsageRecord = UpdateUsageRecord;
UpdateUsageRecord.discriminator = undefined;
UpdateUsageRecord.attributeTypeMap = [
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    }
];
//# sourceMappingURL=updateUsageRecord.js.map
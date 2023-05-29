"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRecordsList = void 0;
/**
* Response to get usage record
*/
class UsageRecordsList {
    static getAttributeTypeMap() {
        return UsageRecordsList.attributeTypeMap;
    }
}
exports.UsageRecordsList = UsageRecordsList;
UsageRecordsList.discriminator = undefined;
UsageRecordsList.attributeTypeMap = [
    {
        "name": "usageRecords",
        "baseName": "usageRecords",
        "type": "Array<UsageRecord>"
    }
];
//# sourceMappingURL=usageRecordsList.js.map
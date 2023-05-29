"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockHistoryModel = void 0;
class LockHistoryModel {
    static getAttributeTypeMap() {
        return LockHistoryModel.attributeTypeMap;
    }
}
exports.LockHistoryModel = LockHistoryModel;
LockHistoryModel.discriminator = undefined;
LockHistoryModel.attributeTypeMap = [
    {
        "name": "hardLockDate",
        "baseName": "hardLockDate",
        "type": "string"
    },
    {
        "name": "softLockDate",
        "baseName": "softLockDate",
        "type": "string"
    },
    {
        "name": "updatedDateUtc",
        "baseName": "updatedDateUtc",
        "type": "Date"
    }
];
//# sourceMappingURL=lockHistoryModel.js.map
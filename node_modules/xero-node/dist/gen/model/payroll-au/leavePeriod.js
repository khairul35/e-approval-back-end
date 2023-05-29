"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavePeriod = void 0;
class LeavePeriod {
    static getAttributeTypeMap() {
        return LeavePeriod.attributeTypeMap;
    }
}
exports.LeavePeriod = LeavePeriod;
LeavePeriod.discriminator = undefined;
LeavePeriod.attributeTypeMap = [
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    },
    {
        "name": "payPeriodEndDate",
        "baseName": "PayPeriodEndDate",
        "type": "string"
    },
    {
        "name": "payPeriodStartDate",
        "baseName": "PayPeriodStartDate",
        "type": "string"
    },
    {
        "name": "leavePeriodStatus",
        "baseName": "LeavePeriodStatus",
        "type": "LeavePeriodStatus"
    }
];
//# sourceMappingURL=leavePeriod.js.map
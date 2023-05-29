"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveEarningsLine = void 0;
class LeaveEarningsLine {
    static getAttributeTypeMap() {
        return LeaveEarningsLine.attributeTypeMap;
    }
}
exports.LeaveEarningsLine = LeaveEarningsLine;
LeaveEarningsLine.discriminator = undefined;
LeaveEarningsLine.attributeTypeMap = [
    {
        "name": "earningsRateID",
        "baseName": "EarningsRateID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "RatePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    },
    {
        "name": "payOutType",
        "baseName": "PayOutType",
        "type": "PayOutType"
    }
];
//# sourceMappingURL=leaveEarningsLine.js.map
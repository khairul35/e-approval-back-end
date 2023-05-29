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
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "isLinkedToTimesheet",
        "baseName": "isLinkedToTimesheet",
        "type": "boolean"
    }
];
//# sourceMappingURL=leaveEarningsLine.js.map
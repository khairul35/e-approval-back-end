"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaidLeaveEarningsLine = void 0;
class PaidLeaveEarningsLine {
    static getAttributeTypeMap() {
        return PaidLeaveEarningsLine.attributeTypeMap;
    }
}
exports.PaidLeaveEarningsLine = PaidLeaveEarningsLine;
PaidLeaveEarningsLine.discriminator = undefined;
PaidLeaveEarningsLine.attributeTypeMap = [
    {
        "name": "leaveTypeID",
        "baseName": "LeaveTypeID",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "sGCAppliedLeaveLoadingAmount",
        "baseName": "SGCAppliedLeaveLoadingAmount",
        "type": "number"
    },
    {
        "name": "sGCExemptedLeaveLoadingAmount",
        "baseName": "SGCExemptedLeaveLoadingAmount",
        "type": "number"
    },
    {
        "name": "resetSTPCategorisation",
        "baseName": "ResetSTPCategorisation",
        "type": "boolean"
    }
];
//# sourceMappingURL=paidLeaveEarningsLine.js.map
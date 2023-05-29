"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayItem = void 0;
class PayItem {
    static getAttributeTypeMap() {
        return PayItem.attributeTypeMap;
    }
}
exports.PayItem = PayItem;
PayItem.discriminator = undefined;
PayItem.attributeTypeMap = [
    {
        "name": "earningsRates",
        "baseName": "EarningsRates",
        "type": "Array<EarningsRate>"
    },
    {
        "name": "deductionTypes",
        "baseName": "DeductionTypes",
        "type": "Array<DeductionType>"
    },
    {
        "name": "leaveTypes",
        "baseName": "LeaveTypes",
        "type": "Array<LeaveType>"
    },
    {
        "name": "reimbursementTypes",
        "baseName": "ReimbursementTypes",
        "type": "Array<ReimbursementType>"
    }
];
//# sourceMappingURL=payItem.js.map
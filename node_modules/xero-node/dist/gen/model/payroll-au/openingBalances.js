"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpeningBalances = void 0;
class OpeningBalances {
    static getAttributeTypeMap() {
        return OpeningBalances.attributeTypeMap;
    }
}
exports.OpeningBalances = OpeningBalances;
OpeningBalances.discriminator = undefined;
OpeningBalances.attributeTypeMap = [
    {
        "name": "openingBalanceDate",
        "baseName": "OpeningBalanceDate",
        "type": "string"
    },
    {
        "name": "tax",
        "baseName": "Tax",
        "type": "string"
    },
    {
        "name": "earningsLines",
        "baseName": "EarningsLines",
        "type": "Array<EarningsLine>"
    },
    {
        "name": "deductionLines",
        "baseName": "DeductionLines",
        "type": "Array<DeductionLine>"
    },
    {
        "name": "superLines",
        "baseName": "SuperLines",
        "type": "Array<SuperLine>"
    },
    {
        "name": "reimbursementLines",
        "baseName": "ReimbursementLines",
        "type": "Array<ReimbursementLine>"
    },
    {
        "name": "leaveLines",
        "baseName": "LeaveLines",
        "type": "Array<LeaveLine>"
    },
    {
        "name": "paidLeaveEarningsLines",
        "baseName": "PaidLeaveEarningsLines",
        "type": "Array<PaidLeaveEarningsLine>"
    }
];
//# sourceMappingURL=openingBalances.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayslipLines = void 0;
class PayslipLines {
    static getAttributeTypeMap() {
        return PayslipLines.attributeTypeMap;
    }
}
exports.PayslipLines = PayslipLines;
PayslipLines.discriminator = undefined;
PayslipLines.attributeTypeMap = [
    {
        "name": "earningsLines",
        "baseName": "EarningsLines",
        "type": "Array<EarningsLine>"
    },
    {
        "name": "leaveEarningsLines",
        "baseName": "LeaveEarningsLines",
        "type": "Array<LeaveEarningsLine>"
    },
    {
        "name": "timesheetEarningsLines",
        "baseName": "TimesheetEarningsLines",
        "type": "Array<EarningsLine>"
    },
    {
        "name": "deductionLines",
        "baseName": "DeductionLines",
        "type": "Array<DeductionLine>"
    },
    {
        "name": "leaveAccrualLines",
        "baseName": "LeaveAccrualLines",
        "type": "Array<LeaveAccrualLine>"
    },
    {
        "name": "reimbursementLines",
        "baseName": "ReimbursementLines",
        "type": "Array<ReimbursementLine>"
    },
    {
        "name": "superannuationLines",
        "baseName": "SuperannuationLines",
        "type": "Array<SuperannuationLine>"
    },
    {
        "name": "taxLines",
        "baseName": "TaxLines",
        "type": "Array<TaxLine>"
    }
];
//# sourceMappingURL=payslipLines.js.map
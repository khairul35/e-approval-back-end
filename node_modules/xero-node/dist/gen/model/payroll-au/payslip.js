"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payslip = void 0;
class Payslip {
    static getAttributeTypeMap() {
        return Payslip.attributeTypeMap;
    }
}
exports.Payslip = Payslip;
Payslip.discriminator = undefined;
Payslip.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
        "type": "string"
    },
    {
        "name": "payslipID",
        "baseName": "PayslipID",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "FirstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "LastName",
        "type": "string"
    },
    {
        "name": "wages",
        "baseName": "Wages",
        "type": "number"
    },
    {
        "name": "deductions",
        "baseName": "Deductions",
        "type": "number"
    },
    {
        "name": "tax",
        "baseName": "Tax",
        "type": "number"
    },
    {
        "name": "_super",
        "baseName": "Super",
        "type": "number"
    },
    {
        "name": "reimbursements",
        "baseName": "Reimbursements",
        "type": "number"
    },
    {
        "name": "netPay",
        "baseName": "NetPay",
        "type": "number"
    },
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
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=payslip.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRun = void 0;
class PayRun {
    static getAttributeTypeMap() {
        return PayRun.attributeTypeMap;
    }
}
exports.PayRun = PayRun;
PayRun.discriminator = undefined;
PayRun.attributeTypeMap = [
    {
        "name": "payrollCalendarID",
        "baseName": "PayrollCalendarID",
        "type": "string"
    },
    {
        "name": "payRunID",
        "baseName": "PayRunID",
        "type": "string"
    },
    {
        "name": "payRunPeriodStartDate",
        "baseName": "PayRunPeriodStartDate",
        "type": "string"
    },
    {
        "name": "payRunPeriodEndDate",
        "baseName": "PayRunPeriodEndDate",
        "type": "string"
    },
    {
        "name": "payRunStatus",
        "baseName": "PayRunStatus",
        "type": "PayRunStatus"
    },
    {
        "name": "paymentDate",
        "baseName": "PaymentDate",
        "type": "string"
    },
    {
        "name": "payslipMessage",
        "baseName": "PayslipMessage",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "payslips",
        "baseName": "Payslips",
        "type": "Array<PayslipSummary>"
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
        "name": "reimbursement",
        "baseName": "Reimbursement",
        "type": "number"
    },
    {
        "name": "netPay",
        "baseName": "NetPay",
        "type": "number"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=payRun.js.map
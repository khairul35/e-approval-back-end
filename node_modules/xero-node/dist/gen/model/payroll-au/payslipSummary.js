"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayslipSummary = void 0;
class PayslipSummary {
    static getAttributeTypeMap() {
        return PayslipSummary.attributeTypeMap;
    }
}
exports.PayslipSummary = PayslipSummary;
PayslipSummary.discriminator = undefined;
PayslipSummary.attributeTypeMap = [
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
        "name": "employeeGroup",
        "baseName": "EmployeeGroup",
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
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=payslipSummary.js.map
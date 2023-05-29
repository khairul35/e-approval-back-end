"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaySlip = void 0;
class PaySlip {
    static getAttributeTypeMap() {
        return PaySlip.attributeTypeMap;
    }
}
exports.PaySlip = PaySlip;
PaySlip.discriminator = undefined;
PaySlip.attributeTypeMap = [
    {
        "name": "paySlipID",
        "baseName": "paySlipID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "payRunID",
        "baseName": "payRunID",
        "type": "string"
    },
    {
        "name": "lastEdited",
        "baseName": "lastEdited",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "totalEarnings",
        "baseName": "totalEarnings",
        "type": "number"
    },
    {
        "name": "grossEarnings",
        "baseName": "grossEarnings",
        "type": "number"
    },
    {
        "name": "totalPay",
        "baseName": "totalPay",
        "type": "number"
    },
    {
        "name": "totalEmployerTaxes",
        "baseName": "totalEmployerTaxes",
        "type": "number"
    },
    {
        "name": "totalEmployeeTaxes",
        "baseName": "totalEmployeeTaxes",
        "type": "number"
    },
    {
        "name": "totalDeductions",
        "baseName": "totalDeductions",
        "type": "number"
    },
    {
        "name": "totalReimbursements",
        "baseName": "totalReimbursements",
        "type": "number"
    },
    {
        "name": "totalStatutoryDeductions",
        "baseName": "totalStatutoryDeductions",
        "type": "number"
    },
    {
        "name": "totalSuperannuation",
        "baseName": "totalSuperannuation",
        "type": "number"
    },
    {
        "name": "bacsHash",
        "baseName": "bacsHash",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "PaySlip.PaymentMethodEnum"
    },
    {
        "name": "earningsLines",
        "baseName": "earningsLines",
        "type": "Array<EarningsLine>"
    },
    {
        "name": "leaveEarningsLines",
        "baseName": "leaveEarningsLines",
        "type": "Array<LeaveEarningsLine>"
    },
    {
        "name": "timesheetEarningsLines",
        "baseName": "timesheetEarningsLines",
        "type": "Array<TimesheetEarningsLine>"
    },
    {
        "name": "deductionLines",
        "baseName": "deductionLines",
        "type": "Array<DeductionLine>"
    },
    {
        "name": "reimbursementLines",
        "baseName": "reimbursementLines",
        "type": "Array<ReimbursementLine>"
    },
    {
        "name": "leaveAccrualLines",
        "baseName": "leaveAccrualLines",
        "type": "Array<LeaveAccrualLine>"
    },
    {
        "name": "superannuationLines",
        "baseName": "superannuationLines",
        "type": "Array<SuperannuationLine>"
    },
    {
        "name": "paymentLines",
        "baseName": "paymentLines",
        "type": "Array<PaymentLine>"
    },
    {
        "name": "employeeTaxLines",
        "baseName": "employeeTaxLines",
        "type": "Array<TaxLine>"
    },
    {
        "name": "employerTaxLines",
        "baseName": "employerTaxLines",
        "type": "Array<TaxLine>"
    },
    {
        "name": "statutoryDeductionLines",
        "baseName": "statutoryDeductionLines",
        "type": "Array<StatutoryDeductionLine>"
    },
    {
        "name": "taxSettings",
        "baseName": "taxSettings",
        "type": "TaxSettings"
    },
    {
        "name": "grossEarningsHistory",
        "baseName": "grossEarningsHistory",
        "type": "GrossEarningsHistory"
    }
];
(function (PaySlip) {
    let PaymentMethodEnum;
    (function (PaymentMethodEnum) {
        PaymentMethodEnum[PaymentMethodEnum["Cheque"] = 'Cheque'] = "Cheque";
        PaymentMethodEnum[PaymentMethodEnum["Electronically"] = 'Electronically'] = "Electronically";
        PaymentMethodEnum[PaymentMethodEnum["Manual"] = 'Manual'] = "Manual";
    })(PaymentMethodEnum = PaySlip.PaymentMethodEnum || (PaySlip.PaymentMethodEnum = {}));
})(PaySlip = exports.PaySlip || (exports.PaySlip = {}));
//# sourceMappingURL=paySlip.js.map
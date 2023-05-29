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
        "name": "totalCourtOrders",
        "baseName": "totalCourtOrders",
        "type": "number"
    },
    {
        "name": "totalBenefits",
        "baseName": "totalBenefits",
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
        "type": "Payslip.PaymentMethodEnum"
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
        "name": "benefitLines",
        "baseName": "benefitLines",
        "type": "Array<BenefitLine>"
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
        "name": "courtOrderLines",
        "baseName": "courtOrderLines",
        "type": "Array<CourtOrderLine>"
    }
];
(function (Payslip) {
    let PaymentMethodEnum;
    (function (PaymentMethodEnum) {
        PaymentMethodEnum[PaymentMethodEnum["Cheque"] = 'Cheque'] = "Cheque";
        PaymentMethodEnum[PaymentMethodEnum["Electronically"] = 'Electronically'] = "Electronically";
        PaymentMethodEnum[PaymentMethodEnum["Manual"] = 'Manual'] = "Manual";
    })(PaymentMethodEnum = Payslip.PaymentMethodEnum || (Payslip.PaymentMethodEnum = {}));
})(Payslip = exports.Payslip || (exports.Payslip = {}));
//# sourceMappingURL=payslip.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsRate = void 0;
class EarningsRate {
    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}
exports.EarningsRate = EarningsRate;
EarningsRate.discriminator = undefined;
EarningsRate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "accountCode",
        "baseName": "AccountCode",
        "type": "string"
    },
    {
        "name": "typeOfUnits",
        "baseName": "TypeOfUnits",
        "type": "string"
    },
    {
        "name": "isExemptFromTax",
        "baseName": "IsExemptFromTax",
        "type": "boolean"
    },
    {
        "name": "isExemptFromSuper",
        "baseName": "IsExemptFromSuper",
        "type": "boolean"
    },
    {
        "name": "isReportableAsW1",
        "baseName": "IsReportableAsW1",
        "type": "boolean"
    },
    {
        "name": "allowanceContributesToAnnualLeaveRate",
        "baseName": "AllowanceContributesToAnnualLeaveRate",
        "type": "boolean"
    },
    {
        "name": "allowanceContributesToOvertimeRate",
        "baseName": "AllowanceContributesToOvertimeRate",
        "type": "boolean"
    },
    {
        "name": "earningsType",
        "baseName": "EarningsType",
        "type": "EarningsType"
    },
    {
        "name": "earningsRateID",
        "baseName": "EarningsRateID",
        "type": "string"
    },
    {
        "name": "rateType",
        "baseName": "RateType",
        "type": "RateType"
    },
    {
        "name": "ratePerUnit",
        "baseName": "RatePerUnit",
        "type": "string"
    },
    {
        "name": "multiplier",
        "baseName": "Multiplier",
        "type": "number"
    },
    {
        "name": "accrueLeave",
        "baseName": "AccrueLeave",
        "type": "boolean"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "employmentTerminationPaymentType",
        "baseName": "EmploymentTerminationPaymentType",
        "type": "EmploymentTerminationPaymentType"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "currentRecord",
        "baseName": "CurrentRecord",
        "type": "boolean"
    },
    {
        "name": "allowanceType",
        "baseName": "AllowanceType",
        "type": "AllowanceType"
    },
    {
        "name": "allowanceCategory",
        "baseName": "AllowanceCategory",
        "type": "AllowanceCategory"
    }
];
//# sourceMappingURL=earningsRate.js.map
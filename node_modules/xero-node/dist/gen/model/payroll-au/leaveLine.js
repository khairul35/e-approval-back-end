"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveLine = void 0;
class LeaveLine {
    static getAttributeTypeMap() {
        return LeaveLine.attributeTypeMap;
    }
}
exports.LeaveLine = LeaveLine;
LeaveLine.discriminator = undefined;
LeaveLine.attributeTypeMap = [
    {
        "name": "leaveTypeID",
        "baseName": "LeaveTypeID",
        "type": "string"
    },
    {
        "name": "calculationType",
        "baseName": "CalculationType",
        "type": "LeaveLineCalculationType"
    },
    {
        "name": "entitlementFinalPayPayoutType",
        "baseName": "EntitlementFinalPayPayoutType",
        "type": "EntitlementFinalPayPayoutType"
    },
    {
        "name": "employmentTerminationPaymentType",
        "baseName": "EmploymentTerminationPaymentType",
        "type": "EmploymentTerminationPaymentType"
    },
    {
        "name": "includeSuperannuationGuaranteeContribution",
        "baseName": "IncludeSuperannuationGuaranteeContribution",
        "type": "boolean"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    },
    {
        "name": "annualNumberOfUnits",
        "baseName": "AnnualNumberOfUnits",
        "type": "number"
    },
    {
        "name": "fullTimeNumberOfUnitsPerPeriod",
        "baseName": "FullTimeNumberOfUnitsPerPeriod",
        "type": "number"
    }
];
//# sourceMappingURL=leaveLine.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deduction = void 0;
class Deduction {
    static getAttributeTypeMap() {
        return Deduction.attributeTypeMap;
    }
}
exports.Deduction = Deduction;
Deduction.discriminator = undefined;
Deduction.attributeTypeMap = [
    {
        "name": "deductionId",
        "baseName": "deductionId",
        "type": "string"
    },
    {
        "name": "deductionName",
        "baseName": "deductionName",
        "type": "string"
    },
    {
        "name": "deductionCategory",
        "baseName": "deductionCategory",
        "type": "Deduction.DeductionCategoryEnum"
    },
    {
        "name": "liabilityAccountId",
        "baseName": "liabilityAccountId",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    },
    {
        "name": "standardAmount",
        "baseName": "standardAmount",
        "type": "number"
    },
    {
        "name": "reducesSuperLiability",
        "baseName": "reducesSuperLiability",
        "type": "boolean"
    },
    {
        "name": "reducesTaxLiability",
        "baseName": "reducesTaxLiability",
        "type": "boolean"
    },
    {
        "name": "calculationType",
        "baseName": "calculationType",
        "type": "Deduction.CalculationTypeEnum"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "number"
    },
    {
        "name": "subjectToNIC",
        "baseName": "subjectToNIC",
        "type": "boolean"
    },
    {
        "name": "subjectToTax",
        "baseName": "subjectToTax",
        "type": "boolean"
    },
    {
        "name": "isReducedByBasicRate",
        "baseName": "isReducedByBasicRate",
        "type": "boolean"
    },
    {
        "name": "applyToPensionCalculations",
        "baseName": "applyToPensionCalculations",
        "type": "boolean"
    },
    {
        "name": "isCalculatingOnQualifyingEarnings",
        "baseName": "isCalculatingOnQualifyingEarnings",
        "type": "boolean"
    },
    {
        "name": "isPension",
        "baseName": "isPension",
        "type": "boolean"
    }
];
(function (Deduction) {
    let DeductionCategoryEnum;
    (function (DeductionCategoryEnum) {
        DeductionCategoryEnum[DeductionCategoryEnum["CapitalContributions"] = 'CapitalContributions'] = "CapitalContributions";
        DeductionCategoryEnum[DeductionCategoryEnum["ChildCareVoucher"] = 'ChildCareVoucher'] = "ChildCareVoucher";
        DeductionCategoryEnum[DeductionCategoryEnum["MakingGood"] = 'MakingGood'] = "MakingGood";
        DeductionCategoryEnum[DeductionCategoryEnum["PostgraduateLoanDeductions"] = 'PostgraduateLoanDeductions'] = "PostgraduateLoanDeductions";
        DeductionCategoryEnum[DeductionCategoryEnum["PrivateUsePayments"] = 'PrivateUsePayments'] = "PrivateUsePayments";
        DeductionCategoryEnum[DeductionCategoryEnum["SalarySacrifice"] = 'SalarySacrifice'] = "SalarySacrifice";
        DeductionCategoryEnum[DeductionCategoryEnum["StakeholderPension"] = 'StakeholderPension'] = "StakeholderPension";
        DeductionCategoryEnum[DeductionCategoryEnum["StakeholderPensionPostTax"] = 'StakeholderPensionPostTax'] = "StakeholderPensionPostTax";
        DeductionCategoryEnum[DeductionCategoryEnum["StudentLoanDeductions"] = 'StudentLoanDeductions'] = "StudentLoanDeductions";
        DeductionCategoryEnum[DeductionCategoryEnum["UkOther"] = 'UkOther'] = "UkOther";
    })(DeductionCategoryEnum = Deduction.DeductionCategoryEnum || (Deduction.DeductionCategoryEnum = {}));
    let CalculationTypeEnum;
    (function (CalculationTypeEnum) {
        CalculationTypeEnum[CalculationTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
        CalculationTypeEnum[CalculationTypeEnum["PercentageOfGross"] = 'PercentageOfGross'] = "PercentageOfGross";
    })(CalculationTypeEnum = Deduction.CalculationTypeEnum || (Deduction.CalculationTypeEnum = {}));
})(Deduction = exports.Deduction || (exports.Deduction = {}));
//# sourceMappingURL=deduction.js.map
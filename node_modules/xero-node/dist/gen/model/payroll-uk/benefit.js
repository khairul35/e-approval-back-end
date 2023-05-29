"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benefit = void 0;
class Benefit {
    static getAttributeTypeMap() {
        return Benefit.attributeTypeMap;
    }
}
exports.Benefit = Benefit;
Benefit.discriminator = undefined;
Benefit.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "Benefit.CategoryEnum"
    },
    {
        "name": "liabilityAccountId",
        "baseName": "liabilityAccountId",
        "type": "string"
    },
    {
        "name": "expenseAccountId",
        "baseName": "expenseAccountId",
        "type": "string"
    },
    {
        "name": "standardAmount",
        "baseName": "standardAmount",
        "type": "number"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "number"
    },
    {
        "name": "calculationType",
        "baseName": "calculationType",
        "type": "Benefit.CalculationTypeEnum"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    },
    {
        "name": "subjectToNIC",
        "baseName": "subjectToNIC",
        "type": "boolean"
    },
    {
        "name": "subjectToPension",
        "baseName": "subjectToPension",
        "type": "boolean"
    },
    {
        "name": "subjectToTax",
        "baseName": "subjectToTax",
        "type": "boolean"
    },
    {
        "name": "isCalculatingOnQualifyingEarnings",
        "baseName": "isCalculatingOnQualifyingEarnings",
        "type": "boolean"
    },
    {
        "name": "showBalanceToEmployee",
        "baseName": "showBalanceToEmployee",
        "type": "boolean"
    }
];
(function (Benefit) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["StakeholderPension"] = 'StakeholderPension'] = "StakeholderPension";
        CategoryEnum[CategoryEnum["Other"] = 'Other'] = "Other";
    })(CategoryEnum = Benefit.CategoryEnum || (Benefit.CategoryEnum = {}));
    let CalculationTypeEnum;
    (function (CalculationTypeEnum) {
        CalculationTypeEnum[CalculationTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
        CalculationTypeEnum[CalculationTypeEnum["PercentageOfGross"] = 'PercentageOfGross'] = "PercentageOfGross";
    })(CalculationTypeEnum = Benefit.CalculationTypeEnum || (Benefit.CalculationTypeEnum = {}));
})(Benefit = exports.Benefit || (exports.Benefit = {}));
//# sourceMappingURL=benefit.js.map
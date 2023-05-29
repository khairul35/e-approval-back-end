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
        "name": "calculationTypeNZ",
        "baseName": "calculationTypeNZ",
        "type": "Benefit.CalculationTypeNZEnum"
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
        "name": "companyMax",
        "baseName": "companyMax",
        "type": "number"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    }
];
(function (Benefit) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["KiwiSaver"] = 'KiwiSaver'] = "KiwiSaver";
        CategoryEnum[CategoryEnum["ComplyingFund"] = 'ComplyingFund'] = "ComplyingFund";
        CategoryEnum[CategoryEnum["Other"] = 'Other'] = "Other";
    })(CategoryEnum = Benefit.CategoryEnum || (Benefit.CategoryEnum = {}));
    let CalculationTypeNZEnum;
    (function (CalculationTypeNZEnum) {
        CalculationTypeNZEnum[CalculationTypeNZEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
        CalculationTypeNZEnum[CalculationTypeNZEnum["PercentageOfTaxableEarnings"] = 'PercentageOfTaxableEarnings'] = "PercentageOfTaxableEarnings";
    })(CalculationTypeNZEnum = Benefit.CalculationTypeNZEnum || (Benefit.CalculationTypeNZEnum = {}));
})(Benefit = exports.Benefit || (exports.Benefit = {}));
//# sourceMappingURL=benefit.js.map
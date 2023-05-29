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
    }
];
(function (Deduction) {
    let DeductionCategoryEnum;
    (function (DeductionCategoryEnum) {
        DeductionCategoryEnum[DeductionCategoryEnum["PayrollGiving"] = 'PayrollGiving'] = "PayrollGiving";
        DeductionCategoryEnum[DeductionCategoryEnum["KiwiSaverVoluntaryContributions"] = 'KiwiSaverVoluntaryContributions'] = "KiwiSaverVoluntaryContributions";
        DeductionCategoryEnum[DeductionCategoryEnum["Superannuation"] = 'Superannuation'] = "Superannuation";
        DeductionCategoryEnum[DeductionCategoryEnum["NzOther"] = 'NzOther'] = "NzOther";
    })(DeductionCategoryEnum = Deduction.DeductionCategoryEnum || (Deduction.DeductionCategoryEnum = {}));
})(Deduction = exports.Deduction || (exports.Deduction = {}));
//# sourceMappingURL=deduction.js.map
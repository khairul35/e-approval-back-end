"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsLine = void 0;
class EarningsLine {
    static getAttributeTypeMap() {
        return EarningsLine.attributeTypeMap;
    }
}
exports.EarningsLine = EarningsLine;
EarningsLine.discriminator = undefined;
EarningsLine.attributeTypeMap = [
    {
        "name": "earningsRateID",
        "baseName": "EarningsRateID",
        "type": "string"
    },
    {
        "name": "calculationType",
        "baseName": "CalculationType",
        "type": "EarningsRateCalculationType"
    },
    {
        "name": "annualSalary",
        "baseName": "AnnualSalary",
        "type": "number"
    },
    {
        "name": "numberOfUnitsPerWeek",
        "baseName": "NumberOfUnitsPerWeek",
        "type": "number"
    },
    {
        "name": "ratePerUnit",
        "baseName": "RatePerUnit",
        "type": "number"
    },
    {
        "name": "normalNumberOfUnits",
        "baseName": "NormalNumberOfUnits",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "FixedAmount",
        "type": "number"
    }
];
//# sourceMappingURL=earningsLine.js.map
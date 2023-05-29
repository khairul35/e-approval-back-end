"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatutoryDeductionLine = void 0;
class StatutoryDeductionLine {
    static getAttributeTypeMap() {
        return StatutoryDeductionLine.attributeTypeMap;
    }
}
exports.StatutoryDeductionLine = StatutoryDeductionLine;
StatutoryDeductionLine.discriminator = undefined;
StatutoryDeductionLine.attributeTypeMap = [
    {
        "name": "statutoryDeductionTypeID",
        "baseName": "statutoryDeductionTypeID",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "manualAdjustment",
        "baseName": "manualAdjustment",
        "type": "boolean"
    }
];
//# sourceMappingURL=statutoryDeductionLine.js.map
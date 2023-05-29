"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeductionLine = void 0;
class DeductionLine {
    static getAttributeTypeMap() {
        return DeductionLine.attributeTypeMap;
    }
}
exports.DeductionLine = DeductionLine;
DeductionLine.discriminator = undefined;
DeductionLine.attributeTypeMap = [
    {
        "name": "deductionTypeID",
        "baseName": "DeductionTypeID",
        "type": "string"
    },
    {
        "name": "calculationType",
        "baseName": "CalculationType",
        "type": "DeductionTypeCalculationType"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "percentage",
        "baseName": "Percentage",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    }
];
//# sourceMappingURL=deductionLine.js.map
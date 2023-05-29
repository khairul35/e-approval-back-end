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
        "baseName": "deductionTypeID",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "subjectToTax",
        "baseName": "subjectToTax",
        "type": "boolean"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "number"
    }
];
//# sourceMappingURL=deductionLine.js.map
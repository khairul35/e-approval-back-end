"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeductionObject = void 0;
class DeductionObject {
    static getAttributeTypeMap() {
        return DeductionObject.attributeTypeMap;
    }
}
exports.DeductionObject = DeductionObject;
DeductionObject.discriminator = undefined;
DeductionObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "deduction",
        "baseName": "deduction",
        "type": "Deduction"
    }
];
//# sourceMappingURL=deductionObject.js.map
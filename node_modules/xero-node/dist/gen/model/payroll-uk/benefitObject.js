"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitObject = void 0;
class BenefitObject {
    static getAttributeTypeMap() {
        return BenefitObject.attributeTypeMap;
    }
}
exports.BenefitObject = BenefitObject;
BenefitObject.discriminator = undefined;
BenefitObject.attributeTypeMap = [
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
        "name": "benefit",
        "baseName": "benefit",
        "type": "Benefit"
    }
];
//# sourceMappingURL=benefitObject.js.map
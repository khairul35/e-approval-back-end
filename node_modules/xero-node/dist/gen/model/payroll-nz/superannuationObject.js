"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperannuationObject = void 0;
class SuperannuationObject {
    static getAttributeTypeMap() {
        return SuperannuationObject.attributeTypeMap;
    }
}
exports.SuperannuationObject = SuperannuationObject;
SuperannuationObject.discriminator = undefined;
SuperannuationObject.attributeTypeMap = [
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
//# sourceMappingURL=superannuationObject.js.map
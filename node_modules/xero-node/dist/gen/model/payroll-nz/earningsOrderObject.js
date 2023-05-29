"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsOrderObject = void 0;
class EarningsOrderObject {
    static getAttributeTypeMap() {
        return EarningsOrderObject.attributeTypeMap;
    }
}
exports.EarningsOrderObject = EarningsOrderObject;
EarningsOrderObject.discriminator = undefined;
EarningsOrderObject.attributeTypeMap = [
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
        "name": "statutoryDeduction",
        "baseName": "statutoryDeduction",
        "type": "EarningsOrder"
    }
];
//# sourceMappingURL=earningsOrderObject.js.map
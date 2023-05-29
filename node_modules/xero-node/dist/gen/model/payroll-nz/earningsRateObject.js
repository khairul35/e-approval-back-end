"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsRateObject = void 0;
class EarningsRateObject {
    static getAttributeTypeMap() {
        return EarningsRateObject.attributeTypeMap;
    }
}
exports.EarningsRateObject = EarningsRateObject;
EarningsRateObject.discriminator = undefined;
EarningsRateObject.attributeTypeMap = [
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
        "name": "earningsRate",
        "baseName": "earningsRate",
        "type": "EarningsRate"
    }
];
//# sourceMappingURL=earningsRateObject.js.map
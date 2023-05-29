"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsTemplateObject = void 0;
class EarningsTemplateObject {
    static getAttributeTypeMap() {
        return EarningsTemplateObject.attributeTypeMap;
    }
}
exports.EarningsTemplateObject = EarningsTemplateObject;
EarningsTemplateObject.discriminator = undefined;
EarningsTemplateObject.attributeTypeMap = [
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
        "name": "earningTemplate",
        "baseName": "earningTemplate",
        "type": "EarningsTemplate"
    }
];
//# sourceMappingURL=earningsTemplateObject.js.map
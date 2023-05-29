"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benefits = void 0;
class Benefits {
    static getAttributeTypeMap() {
        return Benefits.attributeTypeMap;
    }
}
exports.Benefits = Benefits;
Benefits.discriminator = undefined;
Benefits.attributeTypeMap = [
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
        "name": "benefits",
        "baseName": "benefits",
        "type": "Array<Benefit>"
    }
];
//# sourceMappingURL=benefits.js.map
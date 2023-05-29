"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatutoryDeductions = void 0;
class StatutoryDeductions {
    static getAttributeTypeMap() {
        return StatutoryDeductions.attributeTypeMap;
    }
}
exports.StatutoryDeductions = StatutoryDeductions;
StatutoryDeductions.discriminator = undefined;
StatutoryDeductions.attributeTypeMap = [
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
        "name": "statutoryDeductions",
        "baseName": "statutoryDeductions",
        "type": "Array<StatutoryDeduction>"
    }
];
//# sourceMappingURL=statutoryDeductions.js.map
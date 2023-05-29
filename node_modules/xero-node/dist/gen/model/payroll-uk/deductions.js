"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deductions = void 0;
class Deductions {
    static getAttributeTypeMap() {
        return Deductions.attributeTypeMap;
    }
}
exports.Deductions = Deductions;
Deductions.discriminator = undefined;
Deductions.attributeTypeMap = [
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
        "name": "deductions",
        "baseName": "deductions",
        "type": "Array<Deduction>"
    }
];
//# sourceMappingURL=deductions.js.map
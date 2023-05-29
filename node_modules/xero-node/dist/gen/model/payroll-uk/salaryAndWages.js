"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryAndWages = void 0;
class SalaryAndWages {
    static getAttributeTypeMap() {
        return SalaryAndWages.attributeTypeMap;
    }
}
exports.SalaryAndWages = SalaryAndWages;
SalaryAndWages.discriminator = undefined;
SalaryAndWages.attributeTypeMap = [
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
        "name": "salaryAndWages",
        "baseName": "salaryAndWages",
        "type": "Array<SalaryAndWage>"
    }
];
//# sourceMappingURL=salaryAndWages.js.map
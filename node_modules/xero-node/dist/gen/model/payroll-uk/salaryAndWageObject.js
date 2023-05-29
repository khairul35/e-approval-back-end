"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryAndWageObject = void 0;
class SalaryAndWageObject {
    static getAttributeTypeMap() {
        return SalaryAndWageObject.attributeTypeMap;
    }
}
exports.SalaryAndWageObject = SalaryAndWageObject;
SalaryAndWageObject.discriminator = undefined;
SalaryAndWageObject.attributeTypeMap = [
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
        "type": "SalaryAndWage"
    }
];
//# sourceMappingURL=salaryAndWageObject.js.map
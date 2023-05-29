"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeEarningsTemplates = void 0;
class EmployeeEarningsTemplates {
    static getAttributeTypeMap() {
        return EmployeeEarningsTemplates.attributeTypeMap;
    }
}
exports.EmployeeEarningsTemplates = EmployeeEarningsTemplates;
EmployeeEarningsTemplates.discriminator = undefined;
EmployeeEarningsTemplates.attributeTypeMap = [
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
        "name": "earningTemplates",
        "baseName": "earningTemplates",
        "type": "Array<EarningsTemplate>"
    }
];
//# sourceMappingURL=employeeEarningsTemplates.js.map
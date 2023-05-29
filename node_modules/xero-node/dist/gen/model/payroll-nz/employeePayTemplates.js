"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePayTemplates = void 0;
class EmployeePayTemplates {
    static getAttributeTypeMap() {
        return EmployeePayTemplates.attributeTypeMap;
    }
}
exports.EmployeePayTemplates = EmployeePayTemplates;
EmployeePayTemplates.discriminator = undefined;
EmployeePayTemplates.attributeTypeMap = [
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
        "name": "payTemplate",
        "baseName": "payTemplate",
        "type": "EmployeePayTemplate"
    }
];
//# sourceMappingURL=employeePayTemplates.js.map
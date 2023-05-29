"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePayTemplateObject = void 0;
class EmployeePayTemplateObject {
    static getAttributeTypeMap() {
        return EmployeePayTemplateObject.attributeTypeMap;
    }
}
exports.EmployeePayTemplateObject = EmployeePayTemplateObject;
EmployeePayTemplateObject.discriminator = undefined;
EmployeePayTemplateObject.attributeTypeMap = [
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
//# sourceMappingURL=employeePayTemplateObject.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeObject = void 0;
class EmployeeObject {
    static getAttributeTypeMap() {
        return EmployeeObject.attributeTypeMap;
    }
}
exports.EmployeeObject = EmployeeObject;
EmployeeObject.discriminator = undefined;
EmployeeObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "employee",
        "baseName": "employee",
        "type": "Employee"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    }
];
//# sourceMappingURL=employeeObject.js.map
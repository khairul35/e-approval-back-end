"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
class Employees {
    static getAttributeTypeMap() {
        return Employees.attributeTypeMap;
    }
}
exports.Employees = Employees;
Employees.discriminator = undefined;
Employees.attributeTypeMap = [
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
        "name": "employees",
        "baseName": "employees",
        "type": "Array<Employee>"
    }
];
//# sourceMappingURL=employees.js.map
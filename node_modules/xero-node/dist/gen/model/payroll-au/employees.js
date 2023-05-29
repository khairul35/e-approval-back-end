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
        "name": "employees",
        "baseName": "Employees",
        "type": "Array<Employee>"
    }
];
//# sourceMappingURL=employees.js.map